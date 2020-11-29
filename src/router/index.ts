import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/about-me",
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: () =>
      import("../views/AboutMe.vue"),
  },
  {
    path: "/experience",
    name: "Experience",
    component: () =>
      import("../views/Experience.vue"),
  }
];

const router = new Router({
  routes
});

export default router;
