import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@/index.css"; // Assuming index.css is in your project's root

loadFonts();

createApp(App).use(vuetify).mount("#app");
