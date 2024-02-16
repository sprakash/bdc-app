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
  <v-card v-transition="{ name: 'v-fade-transition' }">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="subjects">Subjects</v-tab>
      <v-tab value="producer">Producer</v-tab>
      <v-tab value="director">Director</v-tab>
      <v-tab value="editor">Editor</v-tab>
      <v-tab value="camera">Camera / Cinematopher</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="subjects" :transition="false">
          <ul>
            <li v-for="tag in filmStore?.selectedFilm?.fields?.Tags" :key="tag">
              <span>{{ tag }}</span>
            </li>
          </ul>
          <!-- {{ filmStore?.selectedFilm?.fields?.Tags }} -->
        </v-window-item>

        <v-window-item value="producer" :transition="false">
          {{ filmStore?.selectedFilm?.fields?.Summary }}
        </v-window-item>

        <v-window-item value="director" :transition="false">
          {{ filmStore?.selectedFilm?.fields?.Tags }}
        </v-window-item>

        <v-window-item value="editor" :transition="false">
          test test test
        </v-window-item>

        <v-window-item value="camera" :transition="false">
          camera
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
import { useFilmStore } from "@/stores/filmStore";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
export default {
  setup() {
    const router = useRouter();
    const filmStore = useFilmStore();
    const filmName = router.params.name;
    const cachedFilm = ref(null); // Store cached film data

    const film = computed(() => {
      // Check if film is already
      if (cachedFilm.value && cachedFilm.value.name === filmName.value) {
        return cachedFilm.value;
      }

      // Fetch film data if not cached or name changed
      const film = filmStore.findFilmByName(filmName.value);
      // if (film) {
      //   cachedFilm.value = film; // Update cache
      // }
      return film;
    });

    const tab = ref("subjects");

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
      film,
      filmStore,
      tab,
      directorName,
      filmTrailerLink,
      filmYear,
    };
  },
};
</script>
<style scoped>
.v-enter-active {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>
