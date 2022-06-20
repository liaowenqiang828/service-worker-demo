import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueCompositionApi from "@vue/composition-api";
import router from "./router/index";
import store from "./store/index";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
