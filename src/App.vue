<template>
  <v-app>
    <HeaderNavigation />
    <!-- <div class="font-bold text-sm text-blue-200">Common header content</div> -->

    <div v-if="$route.path === '/'" class="pt-15">
      <section class="text-center">
        <h1 class="header text-black font-semibold mt-10">
          BLACK DOCUMENTARY COLLECTIVE
        </h1>
        <p class="content-text-1 mb-1">
          "I want to do with the documentary what jazz musicians did with
          music."
        </p>
        <p class="content-text-1 mb-10">- St, Clair Bourne, Founder</p>
        <div id="bdc-animated">
          <div id="bdc-remix">
            <v-img
              src="@/assets/bdc_remix_update.gif"
              alt="bdc remix"
              max-width="700"
              max-height="517"
            />
          </div>
        </div>

        <!-- <v-carousel cycle show-arrows="hover" hide-delimiters>
          <v-carousel-item src="@/assets/gallery2.jpeg" cover></v-carousel-item>

          <v-carousel-item src="@/assets/gallery3.jpeg" cover></v-carousel-item>

          <v-carousel-item src="@/assets/gallery4.jpeg" cover></v-carousel-item>
        </v-carousel> -->
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

      <hr />

      <section class="centered-content mb-12 mt-12">
        <h1 class="header text-black font-bold mb-5">Latest News</h1>
        <p class="content-text-2 text-center px-5 mb-5">
          connect with us on
          <a
            href="http://instagram.com/bdcnewyork"
            target="_blank"
            class="text-blue"
            >instagram</a
          >
          where we post upcoming events and opportunities
        </p>

        <div ref="instagramFeed" id="instagramFeed">
          <InstagramFeed
            :count="5"
            accessToken="IGQWRNdkYxSWRTT1AycU9qbXBrWDcyaXpiRjg4Qzl0OXNUbVVfWkZAnNWdGeHpIM2w3VlRIMjhQZAm1Gcm51NlVKOXVoRWVuQWJWTUNSczBtRnV3cFJVUVlpYlczbTJ2OHVQWXY4YmQ4M1BHd2laLTd4emc4VHU3WTQZD"
            :pagination="true"
          />
        </div>
      </section>

      <hr />

      <section class="centered-content mb-12 mt-12 px-16">
        <h1 class="header text-black font-bold mb-5">Become A Member</h1>
        <p class="mb-5 text-center">
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
        <v-img src="@/assets/meetbdc.jpg" alt="meetbdc" />
      </section>

      <hr />
      <section class="mb-12 mt-12" id="resources">
        <h1 class="centered-content header text-black font-bold mb-5">
          RESOURCES
        </h1>
        <div class="content-text-2 text-center px-5 mb-5 flex">
          <div>
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/898986294?h=822768aeca"
              width="800"
              height="600"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="text-left relative w-1/4" style="left: -10%">
            Visit the
            <a
              href="https://linktr.ee/bdcnewyork"
              target="_blank"
              class="underline text-blue-600 mr-2"
              >BDC Linktree</a
            >for daily updates and information about grants, fellowships,
            workshops, festivals, industry news and more!
          </div>
        </div>
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
      <section class="centered-content mt-12 mb-5" id="donate">
        <h1 class="header text-black font-bold mb-5">DONATE</h1>
        <div class="content-text-2 text-center px-5 mb-5">
          <a
            href="https://www.paypal.com/donate?token=XLu6eUQWL61AAxHwTOP1KKA3OVelGNhJMC9bl-AFk-1aeqOSPs80jUI24bABc6xVVqmC6u6wpp0_F9Zz"
            target="_blank"
            class="flex justify-center"
          >
            <v-img src="@/assets/gimmefive.png" max-width="200" />

            <v-img src="@/assets/paypal.png" max-width="300" max-height="171"
          /></a>
          <p class="text-center inline-block pt-10 w-50">
            Show your support for our all-volunteer organization by making a
            tax-deductible donation! Whether you give $5 or $500, your donation
            is the fuel that keeps us going!
          </p>
        </div>
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
#bdc-animated {
  width: 100%;
  display: inline-block;
  background: black;
  margin: 0 0 2em;
}
#bdc-remix {
  display: inline-block;
  background-color: black;
  background-image: url("./assets/bg_bdc_remix.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
#bdc-remix .v-responsive__sizer {
  padding-bottom: 0 !important;
}
#bdc-remix .v-img__img,
#bdc-remix .v-img__picture,
#bdc-remix .v-img__gradient,
#bdc-remix .v-img__placeholder,
#bdc-remix .v-img__error {
  width: 700px;
  height: 517px;
  position: static !important;
}
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

#instagramFeed {
}

.instagram-wrapper {
  max-width: 93.5rem;
  margin: 0 auto;
}

.instagram-wrapper > div:nth-child(2) {
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 0;
}

.instagram-wrapper div:nth-child(2) div:first-child > button,
.instagram-wrapper > div:nth-child(2) > div:only-child > button {
  background-color: white;
  background-image: url(https://icons.iconarchive.com/icons/icons8/windows-8/512/Arrows-Left-Arrow-icon.png);
  background-size: contain;
  background-position: center;
  color: black;
  padding: 2em;
  font-size: 0.25em;
  border-radius: 5px;
  border: 0.125em solid grey;
}

.instagram-wrapper div:nth-child(2) div:last-child > button {
  background-color: white;
  background-image: url(https://icons.iconarchive.com/icons/icons8/windows-8/512/Arrows-Right-Arrow-icon.png) !important;
  background-size: contain;
  background-position: center;
  color: black;
  padding: 2em;
  font-size: 0.25em;
  border-radius: 5px;
  border: 0.125em solid grey;
}

.instagram-gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem, -1rem;
}

.instagram-gallery-item {
  position: relative;
  flex: 1 0;
  margin: 0;
  color: #fff;
  cursor: pointer;
  border: 8px solid;
}

video .instagram-gallery-image,
.instagram-gallery-image {
  width: 100%;
  height: 250px;
}

@media screen and (max-width: 900px) {
  video .instagram-gallery-image,
  .instagram-gallery-image {
    height: 150px;
  }
}

@media screen and (max-width: 780px) {
  .instagram-gallery-item {
    border: 5px solid !important;
  }
  video .instagram-gallery-image,
  .instagram-gallery-image {
    height: 125px;
  }
}

@media screen and (max-width: 645px) {
  .instagram-gallery-item {
    border: 2px solid !important;
  }
}

@media screen and (max-width: 600px) {
  .instagram-gallery {
    flex-direction: column;
  }
  video .instagram-gallery-image,
  .instagram-gallery-image {
    height: 250px;
  }
  .instagram-gallery-item {
    border: 5px solid !important;
  }
}

@media screen and (max-width: 359px) and (orientation: portrait) {
  .v-toolbar__content,
  .v-toolbar__extension {
    flex-direction: column !important;
    height: 100% !important;
  }
}

.instagram-gallery-item a {
  display: block;
}
</style>
