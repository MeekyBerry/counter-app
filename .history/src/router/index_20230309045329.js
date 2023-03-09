import { createRouter, createWebHistory } from "vue-router";
import Counter from "../components/Counter.vue";

const routes = [
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
