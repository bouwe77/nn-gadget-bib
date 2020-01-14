<template>
  <div>
    <ul>
      <li v-for="gadgetItem in gadgetItems" :key="gadgetItem.id">
        <GadgetItem/>
      </li>
    </ul>
  </div>
</template>

<script>
import GadgetItem from "./GadgetItem";

export default {
  name: "GadgetList",
  components: {
    GadgetItem
  },
  data() {
    return {
      gadgetItems: [
        {
          id: 1,
          name: "FlashForge Dreamer",
          nickName: "3D Printer",
          imageUrl:
            "https://gadgetlibrarystorage.blob.core.windows.net/gadgetlibrary-images/3D Printer - FlashForge Dreamer.png"
        },
        {
          id: 2,
          name: "Hello World",
          nickName: "Hello",
          imageUrl:
            "https://gadgetlibrarystorage.blob.core.windows.net/gadgetlibrary-images/3D Printer - FlashForge Dreamer.png"
        }
      ]
    };
  }
};
</script>