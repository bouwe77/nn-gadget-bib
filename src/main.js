import Vue from "vue";
import App from "./App.vue";
import { MdButton, MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdButton);
Vue.use(MdCard);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
