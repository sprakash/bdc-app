<template>
  <v-card id="filmmakerDetail" class="my-10 mx-20 flex justify-between py-20">
    <v-card class="w-1/2 flex items-center">
      <v-img
        :src="filmmaker.fields.Headshot[0]?.thumbnails?.large.url"
        v-if="filmmaker && filmmaker.fields.Headshot[0]?.thumbnails.large.url"
      />
      <v-progress-circular
        indeterminate
        size="64"
        class="w-100"
        v-else
      ></v-progress-circular>
    </v-card>
    <v-card class="w-full">
      <h1>{{ filmmaker?.fields.Name }}</h1>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="about">Bio</v-tab>
        <v-tab value="films">Films</v-tab>
        <v-tab value="tags">Subjects</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab" :transition="false">
          <v-window-item
            value="about"
            :transition="false"
            class="text-justify leading-8"
          >
            {{ filmmaker?.fields.Bio }}
            <hr class="py-1" />
            <span class="mr-5"><strong>ROLES</strong></span>

            <ul class="flex">
              <li
                v-for="role in filmmaker?.fields['Name (from Roles)']"
                :key="role"
                class="flex mr-2"
              >
                <span
                  class="bg-violet-100 px-5 py-1 inline-block rounded-full font-thin tracking-widest text-sm cursor-pointer hover:bg-orange-100"
                  >{{ role }}</span
                >
              </li>
            </ul>
          </v-window-item>

          <v-window-item value="films" :transition="false">
            <ul>
              <li
                v-for="films in filmmakerFilms"
                :key="films"
                class="flex mr-2"
              >
                <a
                  class="font-semibold mb-2 text-blue-800 font-semibold underline"
                  :href="formattedDetailUrl(films)"
                  >{{ films }}</a
                >
              </li>
            </ul>
          </v-window-item>

          <v-window-item value="tags" :transition="false">
            <ul>
              <li
                v-for="subject in filmmaker?.fields['Subject of Films']"
                :key="subject"
                class="flex mr-2"
              >
                <span class="font-semibold mb-2">{{ subject }}</span>
              </li>
            </ul>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
import { useFilmmakerStore } from "@/stores/filmmakerStore";
import { useFilmStore } from "@/stores/filmStore";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const filmmakerStore = useFilmmakerStore();
    const films = useFilmStore();

    const tab = ref("about");

    const route = useRoute();
    const filmmakerName = route.params.name; // Extract ID from URL

    // State to handle data fetching status and potential errors
    const filmmaker = ref(null);
    const filmmakerFilms = ref(null);
    const isFetching = ref(false); // Boolean flag for loading state
    const fetchError = ref(null); // String to hold error message

    const filmmakerFilmIds = [];

    // Fetch and handle data with watchEffect for reactivity
    watchEffect(() => {
      if (filmmakerName && !filmmaker.value) {
        isFetching.value = true; // Set loading state
        filmmakerStore
          .fetchFilmmaker(filmmakerName)
          .then((data) => {
            if (data && data.length > 0) {
              filmmaker.value = data[0]; // Assuming the first match is correct

              for (const key in filmmaker.value.fields) {
                if (key.startsWith("Films")) {
                  console.log(
                    " starting with Films",
                    filmmaker.value.fields[key]
                  );
                  filmmakerFilmIds.push(filmmaker.value.fields[key]);
                  // Do something with the films array
                  break; // Exit the loop once you find the first matching key
                }
              }
              films
                .getFilmmakerFilms(filmmakerFilmIds)
                .then((filmData) => {
                  filmmakerFilms.value = filmData;

                  filmmakerStore.setFilmmakersFilms(filmmakerFilms);
                })
                .catch((error) => {
                  console.error(error, "Error fetching filmmaker's films");
                  fetchError.value = `Error fetching films: ${error}`;
                });
            } else {
              fetchError.value = `Filmmaker not found: ${filmmakerName}`;
            }
          })
          .catch((error) => {
            fetchError.value = `Error fetching filmmaker: ${error}`;
          })
          .finally(() => {
            isFetching.value = false; // Clear loading state
          });
      }
    }, [filmmakerName]);

    const formattedDetailUrl = (name) => {
      // Transform film name to lowercase and separate by dashes
      return (
        "/filmdetail/" +
        name
          .trim() // Remove leading/trailing whitespace
          .toLowerCase() // Convert to lowercase
          .replace(/[^a-z0-9-]+/g, "-")
      ); // Replace other characters with hyphens
    };

    return {
      filmmaker,
      filmmakerFilms,
      formattedDetailUrl,
      isFetching,
      fetchError,
      tab,
    };
  },
};
</script>
<style scoped>
.v-enter-active {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
#filmmakerDetail h1 {
  font-size: 2em;
  margin-top: 0.5em;
  margin-left: 1em;
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid gray;
}
</style>
