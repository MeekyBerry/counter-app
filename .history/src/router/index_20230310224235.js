import { createRouter, createWebHistory } from "vue-router";
import Counter from "@/components/Counter.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Counter",
      name: "Counter",
      component: Counter,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
