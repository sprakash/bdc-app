<template>
  <v-toolbar>
    <v-img src="@/assets/hires-logo-bdc.png" alt="My Logo" width="150" />
    <v-spacer />
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/filmmakers">Filmmakers</v-btn>
    <v-btn
      text
      to="/films"
      :class="{ active: route.name === 'films' || route.name === 'filmdetail' }"
      >Films</v-btn
    >
    <v-btn text to="/donate">Donate</v-btn>
    <v-btn text to="/faqs">FAQs</v-btn>
    <v-spacer />

    <ul class="connect flex">
      <li>fb icon</li>
      <li>twitter icon</li>
      <li>insta</li>
      <li>youtube</li>
      <li>linkedin</li>
    </ul>
  </v-toolbar>
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
