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

//github.com/sgoodz/vue3-instagram-feed
import InstagramFeed from "vue3-instagram-feed";

//https://github.com/antonreshetov/vue-unicons?tab=readme-ov-file
import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import { uniLayerGroupMonochrome, uniCarWash } from "vue-unicons/dist/icons";

Amplify.configure(config);
Unicon.add([uniLayerGroupMonochrome, uniCarWash]);

loadFonts();

const pinia = createPinia();
const app = createApp(App);

app.use(vuetify);
app.use(router); // Use the router instance directly
app.use(pinia);
app.use(MasonryWall);
app.use(InstagramFeed);
app.use(Unicon);
app.mount("#app");
