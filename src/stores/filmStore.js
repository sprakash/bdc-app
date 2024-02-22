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
    getSubjects() {
      return this.subjects;
    },
  },
  actions: {
    setSelectedFilm(film) {
      this.selectedFilm = film;
    },
    async fetchFilm(film_param) {
      try {
        const url = `https://egq0zydibl.execute-api.us-east-2.amazonaws.com/main/film-records`;
        const response = await fetch(url);
        const data = await response.json();
        return data.records.filter(
          (record) =>
            record.fields.Name.trim()
              .toLowerCase()
              .replace(/[^a-z0-9-]+/g, "-") === film_param
        );
      } catch (error) {
        console.error("Error fetching the film with the param:", error);
        error.value = error.message;
      }
    },
    setSubjects(subjects) {
      this.subjects = [...subjects];
    },
  },
});
