<template>
  <v-card
    v-transition="{ name: 'v-fade-transition' }"
    id="filmmakerDetail"
    class="my-10 mx-20 flex justify-between"
  >
    <v-card class="w-1/2 flex items-center">
      <v-img
        :src="
          filmmakerStore.selectedFilmmaker.fields.Headshot[0]?.thumbnails.large
            .url
        "
      />
    </v-card>
    <v-card class="w-full">
      <h1>{{ filmmakerStore.selectedFilmmaker.fields.Name }}</h1>
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
            {{ filmmakerStore.selectedFilmmaker.fields.Bio }}
            <hr class="py-1" />
            <span class="mr-5"><strong>ROLES</strong></span>
            <span
              class="bg-violet-100 px-5 py-1 inline-block rounded-full font-thin tracking-widest text-sm cursor-pointer hover:bg-orange-100"
              >{{
                filmmakerStore.selectedFilmmaker.fields[
                  "Name (from Roles)"
                ][0].toUpperCase()
              }}</span
            >
          </v-window-item>

          <v-window-item value="roles" :transition="false"> </v-window-item>

          <v-window-item value="tags" :transition="false">
            {{
              filmmakerStore.selectedFilmmaker.fields[
                "Other Languages/Skills"
              ][0]
            }}
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
import { useFilmmakerStore } from "@/stores/filmmakerStore";
import { ref } from "vue";
export default {
  setup() {
    const filmmakerStore = useFilmmakerStore();
    const tab = ref("about");
    return {
      filmmakerStore,
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
