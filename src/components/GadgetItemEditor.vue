  <template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-subhead">
          <input v-model="gadgetItem.Name" size="70" placeholder="Name">
        </div>
        <div class="md-subhead">
          <input v-model="gadgetItem.NickName" size="70" placeholder="NickName">
        </div>
        <div class="md-subhead">
          <input v-model="gadgetItem.ImageUrl" size="70" placeholder="ImageUrl">
        </div>
        <div v-if="loading">
          <md-progress-spinner :md-diameter="24" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
        </div>
      </md-card-header-text>
      <md-card-media>
        <img :src="gadgetItem.ImageUrl" alt="People">
      </md-card-media>
    </md-card-header>

    <md-card-actions>
      <md-button>Cancel</md-button>
      <md-button v-on:click="saveGadget">Save</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import axios from "axios";

export default {
  name: "GadgetItem",
  data() {
    return {
      loading: false
    };
  },
  props: {
    gadgetItem: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    saveGadget() {
      this.loading = true;
      var id = this.gadgetItem.Id;
      axios
        .put(
          "https://gadgetlibraryfunctions.azurewebsites.net/api/gadgets/" +
            id +
            "?code=dPuq55Cwzh78DPe818yjdKhodMTqQAEZi/h8VcfDpKjM0ug8vjqzHQ==",
          this.gadgetItem
        )
        .then(response => (this.info = response))
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));

      this.$emit("exitEditMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.md-progress-spinner {
  margin: 24px;
}
</style>