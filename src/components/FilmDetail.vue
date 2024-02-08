<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col
        ><v-img
          :src="
            filmStore?.selectedFilm?.fields?.Poster[0]?.thumbnails?.large?.url
          "
          class="poster align-center"
          cover
      /></v-col>
      <v-col>
        <h1 class="text-xl">{{ filmStore?.selectedFilm?.fields?.Name }}</h1>
        <h2 class="pb-3">
          Directed by
          {{ directorName }}
        </h2>
        <blockquote class="py-3">
          {{ filmStore?.selectedFilm?.fields?.Summary }}
        </blockquote>
        <h3>Year : {{ filmYear }}</h3>
        <div>
          Festival Premiere :
          {{ filmStore?.selectedFilm?.fields["Festival Premiere"] }}
        </div>
        <a :href="filmTrailerLink" target="_blank" class="py-3">
          <v-btn density="compact" class="bg-purple-200">watch trailer</v-btn>
        </a>
      </v-col>
    </v-row>
  </v-container>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="about">About</v-tab>
      <v-tab value="filmmakerBio">Filmmaker Bio</v-tab>
      <v-tab value="resources">Resources & Link</v-tab>
      <v-tab value="photoGallery">Photo Gallery</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="about" :transition="false">
          {{ filmStore?.selectedFilm?.fields?.Name }}
        </v-window-item>

        <v-window-item value="filmmakerBio" :transition="false">
          {{ filmStore?.selectedFilm?.fields?.Summary }}
        </v-window-item>

        <v-window-item value="resources" :transition="false">
          {{ filmStore?.selectedFilm?.fields?.Tags }}
        </v-window-item>

        <v-window-item value="photoGallery" :transition="false">
          test test test
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
import { useFilmStore } from "@/stores/filmStore";
import { ref } from "vue";
export default {
  setup() {
    const filmStore = useFilmStore();
    const tab = ref("about");
    const directorName = filmStore?.selectedFilm?.fields["Name (from Director)"]
      ?.toString()
      .replace("[", "")
      .replace("]", "")
      .replace('"', "");

    const filmYear = filmStore?.selectedFilm?.fields["Name (from Year)"]
      ?.toString()
      .replace("[", "")
      .replace("]", "")
      .replace('"', "");

    const filmTrailerLink = `${filmStore?.selectedFilm?.fields?.Trailer}`;
    return {
      filmStore,
      tab,
      directorName,
      filmTrailerLink,
      filmYear,
    };
  },
};
</script>
<style scoped></style>
