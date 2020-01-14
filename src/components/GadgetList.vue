<template>
  <div>
    <md-button v-if="!addGadgetMode" class="md-raised md-primary" v-on:click="onAddClick">Add</md-button>
    <div v-if="addGadgetMode">
      <GadgetAdd @exitAddMode="exitAddMode"/>
    </div>
    <div v-for="gadgetItem in gadgetItems" :key="gadgetItem.id">
      <div v-if="editGadgetId === gadgetItem.Id">
        <GadgetItemEditor
          :gadgetItem="gadgetItem"
          @exitEditMode="exitEditMode"
          @deleteGadget="deleteGadget"
        />
      </div>
      <div v-else>
        <GadgetItem :gadget="gadgetItem" @toEditMode="toEditMode"/>
      </div>
    </div>
  </div>
</template>

<script>
import GadgetItem from "./GadgetItem";
import GadgetItemEditor from "./GadgetItemEditor";
import GadgetAdd from "./GadgetAdd";
import axios from "axios";

export default {
  name: "GadgetList",
  components: {
    GadgetItem,
    GadgetItemEditor
  },
  data() {
    return {
      gadgetItems: [],
      editGadgetId: 0,
      addGadgetMode: false
    };
  },
  mounted() {
    this.fetchGadgets();
  },
  methods: {
    toEditMode(gadgetId) {
      this.editGadgetId = gadgetId;
    },
    exitEditMode() {
      this.editGadgetId = 0;
      this.fetchGadgets();
    },
    exitAddMode() {
      this.addGadgetMode = false;
      this.fetchGadgets();
    },
    fetchGadgets() {
      axios
        .get(
          "https://gadgetlibraryfunctions.azurewebsites.net/api/gadgets?code=dPuq55Cwzh78DPe818yjdKhodMTqQAEZi/h8VcfDpKjM0ug8vjqzHQ=="
        )
        .then(response => (this.gadgetItems = response.data));
    },
    deleteGadget(gadgetId) {
      axios
        .delete(
          "https://gadgetlibraryfunctions.azurewebsites.net/api/gadgets/" +
            gadgetId +
            "?code=dPuq55Cwzh78DPe818yjdKhodMTqQAEZi/h8VcfDpKjM0ug8vjqzHQ=="
        )
        .then(response => {
          console.log(response);
          this.fetchGadgets();
        });
    },
    onAddClick() {
      this.addGadgetMode = !this.addGadgetMode;
    }
  },
  computed: {
    item() {
      return !!this.gadgetItems.length ? this.gadgetItems[0] : null;
    }
  }
};
</script>