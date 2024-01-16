import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "reset-css";
import "./assets/main.sass";

createApp(App).use(router).mount("#app");
