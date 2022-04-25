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

export default router;
