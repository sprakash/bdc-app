<template>
  <v-card v-transition="{ name: 'v-fade-transition' }">
    <h1>{{ $route.params.name }}</h1>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="about">Bio</v-tab>
      <v-tab value="roles">Roles</v-tab>
      <v-tab value="tags">Subjects</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="about" :transition="false">
          {{ filmmakerStore.selectedFilmmaker.fields.Bio }}
        </v-window-item>

        <v-window-item value="roles" :transition="false">
          {{ filmmakerStore.selectedFilmmaker.fields["Name (from Roles)"][0] }}
        </v-window-item>

        <v-window-item value="tags" :transition="false">
          {{
            filmmakerStore.selectedFilmmaker.fields["Other Languages/Skills"][0]
          }}
        </v-window-item>
      </v-window>
    </v-card-text>
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
</style>
