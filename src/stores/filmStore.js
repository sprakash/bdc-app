import { defineStore } from "pinia";

export const useFilmStore = defineStore("film", {
  state: () => ({
    selectedFilm: null,
  }),
  actions: {
    setSelectedFilm(film) {
      this.selectedFilm = film;
    },
  },
});
