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

      <section class="centered-content mt-12 px-16 mb-5">
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
        <v-btn class="mb-5 bg-purple-900 text-yellow-300"
          ><a
            href="mailto:bdc@blackdocumentarycollective.org?subject=Membership Inquiry for Black Documentary Collective"
            >SEND US A MESSAGE</a
          ></v-btn
        >
        <v-img src="@/assets/meetbdc.jpg" alt="meetbdc" />
      </section>

      <hr />
      <section class="mb-12 pt-24" id="resources">
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
        <p class="text-center px-5 mb-5">
          Browse through our
          <a
            href="/filmmakers"
            target="_blank"
            class="text-blue-600 font-semibold cursor-pointer"
            >directory</a
          >
          of talented filmmakers of our community
        </p>
        <div class="masonry" @click="goToFilmmakers">
          <div
            v-for="mView in masonryObjects"
            :key="mView"
            class="masonry-item"
          >
            <img :src="mView.img" :alt="mView.title" />
            <p>{{ mView.title }}</p>
          </div>
        </div>
      </section>

      <hr />

      <section class="centered-content mb-12 mt-12 mb-5">
        <h1 class="header text-black font-bold mb-5">FILM CATALOG</h1>
        <p class="text-center px-5 mb-5">
          Browse through the
          <a
            href="/filmmakers"
            target="_blank"
            class="text-blue-600 font-semibold cursor-pointer"
            >work</a
          >
          of our filmmakers
        </p>
        <div class="masonry" @click="goToFilmList">
          <div v-for="mView in masonryFilms" :key="mView" class="masonry-item">
            <img :src="mView.img" :alt="mView.title" />
            <p>{{ mView.title }}</p>
          </div>
        </div>
      </section>

      <hr />
      <section class="centered-content pt-24 mb-5" id="donate">
        <h1 class="header text-black font-bold mb-5">DONATE</h1>
        <div class="content-text-2 text-center px-5 mb-5">
          <div id="paypal-code" class="flex w-full justify-center">
            <v-img src="@/assets/gimmefive.png" max-width="200" />

            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="TKJWWVGP4YC9C"
              />
              <input
                type="image"
                src="https://vespertine.fatcow.com/paypal-donate-button-high-quality-png%20300.png"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
                class="w-3/4"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>

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
        <h1 class="header text-black font-bold mb-5">Contact Us</h1>
        <p class="content-text-2 text-center px-5 mb-12">
          Please fill out this form if you'd like to contact us
        </p>
        <v-form
          id="bdc-contact"
          @submit.prevent="handleContact"
          ref="form"
          class="w-1/2 flex flex-col justify-center"
        >
          <v-text-field
            v-model="contactName"
            label="Name"
            required
            :rules="[
              (v) => !!v || 'Name is required',
              (v) => v.length <= 50 || 'Name must be less than 50 characters',
            ]"
          >
            <v-error-messages>{{ $error }}</v-error-messages>
          </v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
            :rules="[
              (v) => !!v || 'Email is required',
              (v) => /^\S+@\S+\.\S+$/.test(v) || 'Invalid email format',
            ]"
          >
            <v-error-messages>{{ $error }}</v-error-messages>
          </v-text-field>
          <v-text-field
            v-model="message"
            label="Enter your message"
            type="text"
            required
            :rules="[
              (v) => !!v || 'Message is required',
              (v) => v.length > 0 || 'Message should have text',
            ]"
          >
            <v-error-messages>{{ $error }}</v-error-messages>
          </v-text-field>
          <v-btn
            type="submit"
            color="primary"
            :disabled="!isValid"
            class="w-1/2 text-yellow-200 bg-purple-900"
            >Contact Us</v-btn
          >
        </v-form>
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
import { useFilmStore } from "@/stores/filmStore";
import { useFilmmakerStore } from "@/stores/filmmakerStore";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

export default {
  components: { HeaderNavigation },
  setup() {
    const filmStore = useFilmStore(); // Access filmStore here
    const filmmakerStore = useFilmmakerStore();
    const router = useRouter();
    const message = ref("Enter your message");
    const contactName = ref(""); // Initialize with empty string
    const email = ref(""); // Initialize with empty string
    const rules = ref([
      (value) => !!value || "Field must not be empty.",
      (value) => /^\S+@\S+\.\S+$/.test(value) || "Invalid email format.", // Email validation
    ]);

    const showForm = true;
    const isValid = computed(
      () => contactName.value && email.value && message.value
    );

    const handleContact = () => {
      // Check for validation
      const mailtoUrl = `mailto:prakashnitza@gmail.com?subject=Contact Question for Black Documentary Collective&body=${encodeURIComponent(
        `Name: ${contactName.value}\nEmail: ${email.value}`
      )}`;
      window.open(mailtoUrl, "_blank");
    };

    const masonryObjects = ref();
    const masonryFilms = ref();

    filmmakerStore.getMasonryObjects.then((data) => {
      masonryObjects.value = data;
    });

    filmStore.getMasonryFilms.then((data) => {
      masonryFilms.value = data;
    });

    const goToFilmList = () => {
      router.push("/films");
    };
    const goToFilmmakers = () => {
      router.push("/filmmakers");
    };
    return {
      router,
      filmStore,
      handleContact,
      filmmakerStore,
      contactName,
      masonryObjects,
      masonryFilms,
      goToFilmmakers,
      goToFilmList,
      isValid,
      email,
      message,
      rules,
      showForm,
    };
  },
};
</script>
<style>
.masonry {
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  height: 600px;
  width: 45%;
  justify-content: center;
  margin: 0 auto;
  padding: 1em 1.5em;
  background-color: #ffd91c0f;
  position: relative;
  top: -70px;
}

.masonry-item {
  width: 23%;
  position: relative;
  margin: 0.5em 0.25em;
}

.masonry-item:hover {
  box-shadow: 5px 10px #fed81b5c;
  cursor: pointer;
}

.masonry-item img {
  border-radius: 5%;
}

.masonry-item p {
  position: absolute;
  top: 88%;
  color: white;
  width: 100%;
  border: 1px solid grey;
  background-color: #892482f0;
  text-align: center;
}

.masonry::before,
.masonry::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}

.masonry-item:nth-child(3n + 1) {
  order: 1;
}
.masonry-item:nth-child(3n + 2) {
  order: 2;
}
.masonry-item:nth-child(3n) {
  order: 3;
}

button[type="submit"] {
  margin: 0 auto;
}

#bdc-contact .v-btn__overlay {
  background-color: #064fa1;
}
#bdc-contact .v-btn__content {
  color: white;
}
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
