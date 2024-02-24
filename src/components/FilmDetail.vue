<template>
  <v-container class="grey lighten-5 pt-20" v-if="film">
    <v-row style="width: 90%" class="pt-5">
      <v-col class="text-right">
        <v-img
          :src="film.fields?.Poster[0]?.thumbnails?.large?.url"
          class="poster align-center inline-table"
          contain
      /></v-col>
      <v-col>
        <h1 class="text-xl font-bold" style="line-height: 1.125em">
          {{ film.fields?.Name }}
        </h1>
        <div class="pb-3 pt-2">
          <span class="italic mr-2"> Directed by</span>
          <span v-for="director in directorName" :key="director">
            {{ director }}
          </span>
        </div>
        <blockquote class="py-2">
          {{ film.fields?.Summary }}
        </blockquote>
        <span class="italic">Year :</span>
        {{ filmYear }}
        <div>
          <span class="italic">Festival Premiere :</span>
          {{ film.fields["Festival Premiere"] }}
        </div>
        <a :href="filmTrailerLink" target="_blank" class="block">
          <v-btn density="compact" class="bg-purple-200 mt-5"
            >watch trailer</v-btn
          >
        </a>
      </v-col>
    </v-row>
  </v-container>
  <v-card v-if="film">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="subjects">Subjects</v-tab>
      <v-tab value="producer">Producer</v-tab>
      <v-tab value="director">Director</v-tab>
      <v-tab value="editor">Editor</v-tab>
      <v-tab value="camera">Camera / Cinematographer</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="subjects" :transition="false">
          <ul>
            <li v-for="tag in film.fields.Tags" :key="tag">
              <span>{{ tag }}</span>
            </li>
          </ul>
        </v-window-item>

        <v-window-item value="producer" :transition="false">
          <ul>
            <li
              v-for="producer in film.fields['Name (from Producer)']"
              :key="producer"
            >
              <span>{{ producer }}</span>
            </li>
          </ul>
        </v-window-item>

        <v-window-item value="director" :transition="false">
          <ul>
            <li
              v-for="director in film.fields['Name (from Director)']"
              :key="director"
            >
              <span>{{ director }}</span>
            </li>
          </ul>
        </v-window-item>

        <v-window-item value="editor" :transition="false">
          <ul>
            <li
              v-for="editor in film.fields['Name (from Editor)']"
              :key="editor"
            >
              <span>{{ editor }}</span>
            </li>
          </ul>
        </v-window-item>

        <v-window-item value="camera" :transition="false">
          <ul>
            <li
              v-for="editor in film.fields['Name (from Camera Person)']"
              :key="editor"
            >
              <span>{{ editor }}</span>
            </li>
          </ul>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
import { useFilmStore } from "@/stores/filmStore";
import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const route = useRoute();
    const filmStore = useFilmStore();
    const filmName = route.params.name;
    // State to handle data fetching status and potential errors
    const film = ref(null);
    const isFetching = ref(false); // Boolean flag for loading state
    const fetchError = ref(null); // String to hold error message
    const tab = ref("subjects");

    // const cachedFilm = ref(null); // Store cached film data

    // const film = computed(() => {
    //   // Check if film is already
    //   if (cachedFilm.value && cachedFilm.value.name === filmName.value) {
    //     return cachedFilm.value;
    //   }

    // Fetch and handle data with watchEffect for reactivity
    watchEffect(() => {
      if (filmName && !film.value) {
        isFetching.value = true; // Set loading state
        filmStore
          .fetchFilm(filmName)
          .then((data) => {
            if (data && data.length > 0) {
              film.value = data[0]; // Assuming the first match is correct
            } else {
              fetchError.value = `Film not found: ${filmName}`;
            }
          })
          .catch((error) => {
            fetchError.value = `Error fetching film: ${error}`;
          })
          .finally(() => {
            isFetching.value = false; // Clear loading state
          });
      }
    }, [filmName]);

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
