<template>
  <div id="topNav">
    <v-toolbar>
      <v-img
        src="@/assets/hires-logo-bdc.png"
        alt="BDC Logo"
        width="150"
        id="bdc-logo"
      />
      <v-spacer />
      <v-btn
        text
        to="/"
        :class="{
          'v-btn--active': route.path == '/',
        }"
        >Home</v-btn
      >
      <v-btn
        text
        to="/filmmakers"
        :class="{
          'v-btn--active':
            route.name === 'filmmakerDetail' || route.name === 'filmmakers',
        }"
        >Filmmakers</v-btn
      >
      <v-btn
        text
        to="/films"
        :class="{
          'v-btn--active':
            route.name === 'films' || route.name === 'filmdetail',
        }"
        >Films</v-btn
      >
      <v-btn href="/#resources">Resources</v-btn>
      <v-btn href="/#donate">Donate</v-btn>
      <v-spacer />

      <!--make this list of social media icons dynamic-->
      <ul class="flex justify-stretch w-1/5">
        <li class="px-2 py-1">
          <a
            href="https://www.facebook.com/bdcnewyork"
            target="_blank"
            class="block"
          >
            <font-awesome-icon
              :icon="{
                prefix: 'fab',
                iconName: 'facebook',
              }"
              class="fa-2x"
              style="color: #0350a0"
          /></a>
        </li>
        <li class="px-2 py-1">
          <a
            href="https://instagram.com/bdcnewyork"
            target="_blank"
            class="block"
          >
            <font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'instagram' }"
              class="fa-2x"
              style="color: #ae176a"
            />
          </a>
        </li>
        <li class="px-2 py-1">
          <a
            href="http://www.twitter.com/bdcnewyork"
            target="_blank"
            class="block"
          >
            <font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'twitter' }"
              class="fa-2x"
              style="color: lightblue"
            />
          </a>
        </li>

        <li class="px-2 py-1">
          <a
            href="https://www.youtube.com/user/TheBDCNY/videos"
            target="_blank"
            class="block"
          >
            <font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'youtube' }"
              class="fa-2x"
              style="color: #ed5d29"
            />
          </a>
        </li>
        <li class="px-2 py-1">
          <a
            href="https://www.linkedin.com/company/black-documentary-collective-inc"
            target="_blank"
            class="block"
          >
            <font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'linkedin' }"
              class="fa-2x"
              style="color: #3870bb"
            />
          </a>
        </li>
      </ul>
    </v-toolbar>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>
<style>
#topNav {
  position: fixed;
  width: 100%;
  z-index: 999;
}

#topNav .v-btn {
  font-size: 1.25em;
  border-radius: 0;
  padding: 0 2em;
}

#topNav .v-btn:hover {
  background-color: #fbe8ff;
  border-bottom: 2px solid gray;
}
</style>
