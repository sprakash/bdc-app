<template>
  <v-app>
    <HeaderNavigation />

    <!-- <div class="font-bold text-sm text-blue-200">Common header content</div> -->

    <div v-if="$route.path === '/'">
      <section>
        <h1 class="title">BLACK DOCUMENTARY COLLECTIVE</h1>
        <p>
          "I want to do with the documentary what jazz musicians did with
          music." - St, Clair Bourne, Founder
        </p>

        <v-carousel cycle show-arrows="hover" hide-delimiters>
          <v-carousel-item src="./assets/gallery1.jpeg" cover></v-carousel-item>

          <v-carousel-item src="./assets/gallery2.jpeg" cover></v-carousel-item>

          <v-carousel-item src="./assets/gallery3.jpeg" cover></v-carousel-item>

          <v-carousel-item src="./assets/gallery4.jpeg" cover></v-carousel-item>
        </v-carousel>
      </section>

      <section>
        <h1>Mission</h1>
        <p>
          Dedicated to making a difference in the ever-increasing communities
          that are reflected in and resonate with the varied work of our
          filmmakers, through community partnerships, impact and engagement.
        </p>
        <p>
          We have helped countless members raise funds, promote and screen their
          films, connect with organizational and local partners, and secure
          distribution, work-for-hire, consulting, teaching, and more.
        </p>
      </section>

      <hr />

      <section>
        <h1>Latest News</h1>
      </section>

      <hr />

      <section>
        <h1>Become A Member</h1>
        <p>
          Producers, directors, cinematographers, editors, curators,
          distributors and more. They are Emmy winners, Academy members, all
          highly-respected and sought after for keynotes, master classes,
          consults, panels, juries and boards. Become part of this community.
        </p>
        <h2>Connect with members</h2>
        <p>
          Keep track of everything at a glance with high-level, multi-project
          visibility.
        </p>
        <h2>Learn about the work</h2>
        <p>
          Empower your teams to work autonomously, without losing sight of
          what’s happening.
        </p>
        <a href="#">Learn more</a>
      </section>

      <hr />

      <section>
        <h1>FILMMAKER DIRECTORY</h1>
        <p>
          Browse through our directory of talented filmmakers of our community
        </p>
      </section>

      <hr />

      <section>
        <h1>FILM CATALOG</h1>
        <p>Browse through the work of our filmmakers</p>
      </section>

      <hr />

      <section></section>
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
