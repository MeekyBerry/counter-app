import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import Counter from "@/components/Counter.vue";
import NotFound from "@/components/NotFound.vue";
import "./assets/main.css";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Counter",
      component: Counter,
    },
    {
      path: "/counter",
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

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
// const app = createApp(App);
// app.use(store);
// // app.use(router);
// app.mount("#app");
