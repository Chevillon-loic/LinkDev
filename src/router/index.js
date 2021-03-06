import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import UserSelect from "../views/UserSelect.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/user",
    name: "User",
    component: User
  },
  {
    path: "/userselect",
    name: "UserSelect",
    component: UserSelect
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
