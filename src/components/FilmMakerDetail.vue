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
            <span
              class="bg-violet-100 px-5 py-1 inline-block rounded-full font-thin tracking-widest text-sm cursor-pointer hover:bg-orange-100"
              >{{
                filmmaker &&
                filmmaker?.fields["Name (from Roles)"].map((role) =>
                  role.toUpperCase()
                )
              }}</span
            >
          </v-window-item>

          <v-window-item value="roles" :transition="false"> </v-window-item>

          <v-window-item value="tags" :transition="false">
            {{ filmmaker?.fields["Other Languages/Skills"][0] }}
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
import { useFilmmakerStore } from "@/stores/filmmakerStore";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const filmmakerStore = useFilmmakerStore();
    const tab = ref("about");

    const route = useRoute();
    const filmmakerName = route.params.name; // Extract ID from URL

    // State to handle data fetching status and potential errors
    const filmmaker = ref(null);
    const isFetching = ref(false); // Boolean flag for loading state
    const fetchError = ref(null); // String to hold error message

    // Fetch and handle data with watchEffect for reactivity
    watchEffect(() => {
      if (filmmakerName && !filmmaker.value) {
        isFetching.value = true; // Set loading state
        filmmakerStore
          .fetchFilmmaker(filmmakerName)
          .then((data) => {
            if (data && data.length > 0) {
              filmmaker.value = data[0]; // Assuming the first match is correct
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

    return {
      filmmaker,
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
