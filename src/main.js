// main.js
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@/index.css";
import router from "./router";
import MasonryWall from "@yeger/vue-masonry-wall";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

loadFonts();

const pinia = createPinia();
const app = createApp(App);

app.use(vuetify);
app.use(router); // Use the router instance directly
app.use(pinia);
app.use(MasonryWall);
app.mount("#app");
