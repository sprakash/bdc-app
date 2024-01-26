<template>
  <v-app>
    <HeaderNavigation />

    <!-- <div class="font-bold text-sm text-blue-200">Common header content</div> -->

    <div v-if="$route.path === '/'">
      <h1 class="title">BLACK DOCUMENTARY COLLECTIVE</h1>
      <p>
        "I want to do with the documentary what jazz musicians did with music."
        - St, Clair Bourne, Founder
      </p>

      <v-carousel cycle show-arrows="hover" hide-delimiters>
        <v-carousel-item src="./assets/gallery1.jpeg" cover></v-carousel-item>

        <v-carousel-item src="./assets/gallery2.jpeg" cover></v-carousel-item>

        <v-carousel-item src="./assets/gallery3.jpeg" cover></v-carousel-item>

        <v-carousel-item src="./assets/gallery4.jpeg" cover></v-carousel-item>
      </v-carousel>
    </div>

    <div>
      <router-view />
    </div>

    <hr />

    <!-- <div class="font-bold text-sm text-red-200">Common footer content</div> -->
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
<style>
.v-slide-group__content {
  background-color: #892482;
}
.title {
  font-weight: 600;
}
</style>
