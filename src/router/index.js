import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import UserSelect from "../views/UserSelect.vue";
import Subscribe from "../views/Subscribe.vue";
import Connect from "../views/Connect.vue";



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
  {
    path: "/subscribe",
    name: "Subscribe",
    component: Subscribe
  },
  {
    path: "/connect",
    name: "Connect",
    component: Connect
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
