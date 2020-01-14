<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ gadget.Name }}</div>
        <div class="md-subhead">{{ gadget.NickName }}</div>
      </md-card-header-text>
      <md-card-media>
        <img :src="gadget.ImageUrl" :alt="gadget.Name">
      </md-card-media>
    </md-card-header>
    <md-card-actions>
      <md-button v-on:click="onClickEdit">Edit</md-button>
      <md-button v-on:click="onClickDelete">Delete</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "GadgetItem",
  props: {
    gadget: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onClickEdit(event) {
      this.$emit("toEditMode", this.gadget.Id);
    },
    onClickDelete(event) {
      this.$emit("deleteGadget", this.gadget.Id);
    }
  }
};
</script>