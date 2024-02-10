import { defineStore } from "pinia";

export const useFilmStore = defineStore("film", {
  state: () => ({
    selectedFilm: null,
  }),
  getters: {
    findFilmByName(filmName) {
      console.log(filmName, "testing the finding of names");
    },
  },
  actions: {
    setSelectedFilm(film) {
      this.selectedFilm = film;
    },
  },
});
