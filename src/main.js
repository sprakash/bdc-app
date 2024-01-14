// main.js
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@/index.css";
import router from "./router";
import Vuex from "vuex";
import store from "./store";

loadFonts();

const app = createApp(App);
app.use(vuetify);
app.use(Vuex); // Register Vuex
app.use(router); // Use the router instance directly
app.mount("#app", {
  store, // Inject store
});
