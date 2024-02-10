<template>
  <v-app>
    <HeaderNavigation />
    {{ new Date().toLocaleString() }}

    <!-- <div class="font-bold text-sm text-blue-200">Common header content</div> -->

    <div v-if="$route.path === '/'">
      <section class="centered-content-1">
        <h1 class="header text-black font-semibold mb-5">
          BLACK DOCUMENTARY COLLECTIVE
        </h1>
        <p class="content-text-1 mb-1">
          "I want to do with the documentary what jazz musicians did with
          music."
        </p>
        <p class="content-text-1 mb-5">- St, Clair Bourne, Founder</p>

        <v-carousel cycle show-arrows="hover" hide-delimiters>
          <v-carousel-item src="@/assets/gallery1.jpeg" cover></v-carousel-item>

          <v-carousel-item src="@/assets/gallery2.jpeg" cover></v-carousel-item>

          <v-carousel-item src="@/assets/gallery3.jpeg" cover></v-carousel-item>

          <v-carousel-item src="@/assets/gallery4.jpeg" cover></v-carousel-item>
        </v-carousel>
      </section>

      <section class="centered-content mb-12 px-16">
        <h1 class="header text-black font-bold mb-5">Mission</h1>
        <p class="content-text-2 text-center px-5 mb-5">
          Dedicated to making a difference in the ever-increasing communities
          that are reflected in and resonate with the varied work of our
          filmmakers, through community partnerships, impact and engagement.
        </p>
        <p class="content-text-2 text-center px-5 mb-5">
          We have helped countless members raise funds, promote and screen their
          films, connect with organizational and local partners, and secure
          distribution, work-for-hire, consulting, teaching, and more.
        </p>
      </section>

      <hr class="" />

      <section class="centered-content mb-12 mt-12">
        <h1 class="header text-black font-bold mb-5">Latest News</h1>
      </section>

      <hr />

      <section class="mb-12 mt-12 px-16">
        <div>
          <h1 class="header text-black font-bold mb-5">Become A Member</h1>
          <p class="mb-5">
            Producers, directors, cinematographers, editors, curators,
            distributors and more. They are Emmy winners, Academy members, all
            highly-respected and sought after for keynotes, master classes,
            consults, panels, juries and boards. Become part of this community.
          </p>
          <h2 class="content-text-2 text-black font-semibold">
            Connect with members
          </h2>
          <p class="mb-5">
            Keep track of everything at a glance with high-level, multi-project
            visibility.
          </p>
          <h2 class="content-text-2 text-black font-semibold">
            Learn about the work
          </h2>
          <p class="mb-5">
            Empower your teams to work autonomously, without losing sight of
            what’s happening.
          </p>
          <p class="mb-5"><a href="#">Learn more</a></p>
        </div>
        <v-img src="@/assets/meetbdc.jpg" alt="meetbdc" />
      </section>

      <hr />

      <section class="mb-12 mt-12">
        <h1 class="centered-content header text-black font-bold mb-5">
          FILMMAKER DIRECTORY
        </h1>
        <p class="content-text-2 text-center px-5 mb-5">
          Browse through our directory of talented filmmakers of our community
        </p>
        <MasonryGallery class="px-12" />
      </section>

      <hr />

      <section class="centered-content mb-12 mt-12 mb-5">
        <h1 class="header text-black font-bold mb-5">FILM CATALOG</h1>
        <p class="content-text-2 text-center px-5 mb-5">
          Browse through the work of our filmmakers
        </p>
      </section>

      <hr />

      <section>
        <!-- donate -->
      </section>

      <hr />

      <section class="centered-content mb-12 mt-12 px-16">
        <h1 class="header text-black font-bold mb-5">
          Frequently Asked Questions
        </h1>
        <p class="content-text-2 text-center px-5 mb-5">
          Got a question? We've got answers. If you have some other questions,
          contact us using email.
        </p>
        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            title="How do I become a member?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></v-expansion-panel>
          <v-expansion-panel
            title="How do I list my work in film catalog"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></v-expansion-panel>
          <v-expansion-panel
            title="How can I support BDC?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></v-expansion-panel>
          <v-expansion-panel
            title="How can I connect with leadership at BDC?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></v-expansion-panel>
        </v-expansion-panels>
      </section>

      <hr />

      <section class="centered-content mb-12 mt-12 px-16">
        <!-- contact form-->
        <h1 class="header text-black font-bold mb-5">Connect with Us</h1>
        <p class="content-text-2 text-center px-5 mb-12">
          Please fill out this form if you'd like to connect with us
        </p>
        <template v-if="showForm">
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent>
              <v-text-field
                v-model="firstName"
                :rules="rules"
                label="First name"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="rules"
                label="Email"
              ></v-text-field>
              <v-text-field
                v-model="message"
                :rules="rules"
                label="Message"
              ></v-text-field>
              <v-btn type="submit" color="warning" block class="mt-2"
                >Submit</v-btn
              >
            </v-form>
          </v-sheet>
        </template>
      </section>
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
import MasonryGallery from "@/components/MasonryGallery.vue";
import { useFilmStore } from "@/stores/filmStore";
import { useRouter } from "vue-router";

export default {
  components: { HeaderNavigation, MasonryGallery },

  data: () => ({
    firstName: "",
    email: "",
    message: "",
    rules: [
      (value) => {
        if (value) return true;

        return "Field must not be empty.";
      },
    ],
    showForm: true,
  }),

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
.header {
  font-size: 2em;
}
.content-text-1 {
  font-size: 1.2em;
}
.content-text-2 {
  font-size: 1.5em;
}
.content-text-3 {
  font-size: 1.5em;
}
.centered-content-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
