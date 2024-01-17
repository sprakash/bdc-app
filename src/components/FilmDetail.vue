<template>
  <v-card>
    <h1>{{ $route.params.id }}</h1>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="about">About</v-tab>
      <v-tab value="filmmakerBio">Filmmaker Bio</v-tab>
      <v-tab value="resources">Resources & Link</v-tab>
      <v-tab value="photoGallery">Photo Gallery</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="about">
          {{ filmStore.selectedFilm.fields.Name }}
        </v-window-item>

        <v-window-item value="filmmakerBio">
          {{ filmStore.selectedFilm.fields.Summary }}
        </v-window-item>

        <v-window-item value="resources">
          {{ filmStore.selectedFilm.fields.Tags }}
        </v-window-item>

        <v-window-item value="photoGallery"> test test test </v-window-item>
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
    return {
      filmStore,
      tab,
    };
  },
};
</script>
<style scoped></style>
