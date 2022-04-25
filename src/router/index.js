import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import ButtonList from "../views/ButtonList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/button-list",
    name: "buttonList",
    component: ButtonList,
  },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  window.document.dispatchEvent(new CustomEvent("load"));
  window.document.dispatchEvent(new CustomEvent("new_version_check"));

  console.log("load emit");
  console.log("new_version_check emit");
  next();
});

export default router;
