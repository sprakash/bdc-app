<template>
  <div>
    <p>you are in the detail but are you a particular film?</p>
    <div>
      <h1>FILM DETAIL</h1>
      <h1>{{ $route.params.id }}</h1>
      <h2>{{ filmStore.selectedFilm.fields.Name }}</h2>
    </div>
  </div>
</template>
<script>
import { useFilmStore } from "@/stores/filmStore";
export default {
  setup() {
    const filmStore = useFilmStore();
    return {
      filmStore,
    };
  },
};
</script>
<style scoped></style>
