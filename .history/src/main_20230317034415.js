import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import "./assets/main.css";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Counter",
      
// const app = createApp(App);
// app.use(store);
// // app.use(router);
// app.mount("#app");
