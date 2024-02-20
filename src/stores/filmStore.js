import { defineStore } from "pinia";

export const useFilmStore = defineStore("film", {
  state: () => ({
    selectedFilm: null,
    subjects: [],
    producer: [],
    director: [],
    camera: [],
    editor: [],
    sound: [],
  }),
  getters: {
    findFilmByName(filmName) {
      console.log(filmName, "testing the finding of names");
    },
    getSubjects() {
      return this.subjects;
    },
  },
  actions: {
    setSelectedFilm(film) {
      this.selectedFilm = film;
    },
    setSubjects(subjects) {
      this.subjects = [...subjects];
    },
  },
});
