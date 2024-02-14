<template>
  <div id="topNav">
    <v-toolbar>
      <v-img src="@/assets/hires-logo-bdc.png" alt="My Logo" width="150" />
      <v-spacer />
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/filmmakers">Filmmakers</v-btn>
      <v-btn
        text
        to="/films"
        :class="{
          'v-btn--active':
            route.name === 'films' || route.name === 'filmdetail',
        }"
        >Films</v-btn
      >
      <v-btn text to="/donate">Donate</v-btn>
      <v-btn text to="/resources">Resources</v-btn>
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
              style="color: #d31e2d"
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
              style="color: lightseagreen"
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
#topNav .v-btn {
  font-size: 1.25em;
}
</style>
