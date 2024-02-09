import { defineStore } from "pinia";

export const useFilmStore = defineStore("film", {
  state: () => ({
    selectedFilm: null,
  }),
  getters: {
    findFilmByName(filmName) {},
  },
  actions: {
    setSelectedFilm(film) {
      this.selectedFilm = film;
    },
  },
});
