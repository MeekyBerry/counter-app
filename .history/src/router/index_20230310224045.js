import { createRouter, createWebHistory } from "vue-router";
import Counter from "@/components/Counter.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
