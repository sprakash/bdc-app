// main.js
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@/index.css";
import router from "./router"; // Import the router instance directly

loadFonts();

const app = createApp(App);
app.use(vuetify);
app.use(router); // Use the router instance directly
app.mount("#app");
