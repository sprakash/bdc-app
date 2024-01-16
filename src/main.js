// main.js
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@/index.css";
import router from "./router";

loadFonts();

const pinia = createPinia();
const app = createApp(App);
app.use(vuetify);
app.use(router); // Use the router instance directly
app.use(pinia);
app.mount("#app");
