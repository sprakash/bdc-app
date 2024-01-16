<template>
  <v-app>
    <HeaderNavigation />

    <div class="font-bold text-sm text-blue-200">Common header content</div>

    <hr />

    <div v-if="$route.path === '/'">
      <h1>Welcome to BDC!</h1>
    </div>

    <div>
      <router-view />
    </div>

    <hr />

    <div class="font-bold text-sm text-red-200">Common footer content</div>
  </v-app>
</template>

<script>
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import { useFilmStore } from "@/stores/filmStore";
import { useRouter } from "vue-router";

export default {
  components: { HeaderNavigation },
  setup() {
    const filmStore = useFilmStore(); // Access filmStore here
    const router = useRouter();
    return { router, filmStore };
  },
};
</script>
