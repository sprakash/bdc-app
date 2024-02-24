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
    async getMasonryFilms() {
      try {
        const url = `https://egq0zydibl.execute-api.us-east-2.amazonaws.com/main/film-records`;
        const response = await fetch(url);
        const data = await response.json();

        // Shuffle the array
        data.records.sort(() => Math.random() - 0.5);
        return data.records.slice(0, 12).map((record) => {
          return {
            title: record.fields.Name,
            img: record.fields.Poster[0]?.thumbnails?.large?.url,
          };
        });
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
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
    async getFilmmakerFilms(filmids) {
      try {
        const url = `https://egq0zydibl.execute-api.us-east-2.amazonaws.com/main/film-records`;
        const response = await fetch(url);
        const data = await response.json();
        // Filter records based on film IDs

        const filteredRecords = data.records.filter((record) =>
          filmids[0].includes(record.id)
        );

        // Extract film names from matching records
        const filmNames = filteredRecords.map((record) => record.fields.Name);
        return filmNames;
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
