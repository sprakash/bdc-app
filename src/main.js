// main.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { loadFonts } from "./plugins/webfontloader";
import "@/index.css";
import router from "./router";
import MasonryWall from "@yeger/vue-masonry-wall";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";

library.add(faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin);

//github.com/sgoodz/vue3-instagram-feed
import InstagramFeed from "vue3-instagram-feed";

Amplify.configure(config);

loadFonts();

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.use(router); // Use the router instance directly
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(MasonryWall);
app.use(InstagramFeed);
app.mount("#app");
