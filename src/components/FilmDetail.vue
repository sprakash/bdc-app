<template>
  <div v-if="selectedFilm">
    <h1>FILM DETAIL</h1>
  </div>
  <div v-else>Loading film details...</div>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const selectedFilm = ref(store.state.selectedFilm);

    return { selectedFilm }; // Only return selectedFilm
  },
};
</script>
<style scoped></style>
