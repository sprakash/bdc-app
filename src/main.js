import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router"; // Import your router configuration
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@/index.css"; // Assuming index.css is in your project's root

loadFonts();

createApp(App).use(VueRouter).use(vuetify).use(router).mount("#app");
