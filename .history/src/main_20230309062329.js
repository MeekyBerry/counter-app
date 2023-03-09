import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

import "./assets/main.css";

// createApp(App).mount('#app')
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
