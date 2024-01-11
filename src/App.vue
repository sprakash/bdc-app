<template>
  <v-app>
    <HeaderNavigation />
    <div class="font-bold text-sm text-blue-200">
      Common header content that exists on all pages with the header and nav up
      top
    </div>

    <hr />
    <div v-if="$route.path === '/'">
      <h1>Welcome to BDC!</h1>
      <strong>MISSION</strong>
      <p>Our work matters!</p>
      <hr />
    </div>

    <div>
      <router-view />
    </div>
    <hr />
    <div class="font-bold text-sm text-red-200">
      Common footer content that exists on all pages with the footer and faq may
      be below faq and such
    </div>
  </v-app>
</template>

<script>
import HeaderNavigation from "@/components/HeaderNavigation.vue";
export default {
  setup() {},
  components: { HeaderNavigation },
};
</script>
