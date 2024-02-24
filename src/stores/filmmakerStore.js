import { defineStore } from "pinia";

export const useFilmmakerStore = defineStore("filmmaker", {
  state: () => ({
    selectedFilmmaker: null,
    filmmakersMasonryView: [],
    filmmakersFilms: [],
  }),
  getters: {
    async getMasonryObjects() {
      try {
        const url = `https://egq0zydibl.execute-api.us-east-2.amazonaws.com/main/filmmaker-records`;
        const response = await fetch(url);
        const data = await response.json();
        return data.records.slice(0, 12).map((record) => {
          return {
            title: record.fields.Name,
            img: record.fields.Headshot[0]?.url,
            random: Math.random() * 10,
          };
        });
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
      return this.getMasonryObjects; // Make sure to return here
    },
    getFilmmakersFilms() {
      return this.filmmakersFilms;
    },
  },
  actions: {
    setSelectedFilmmaker(filmmaker) {
      this.selectedFilmmaker = filmmaker;
    },
    setFilmmakersFilms(films) {
      this.filmmakersFilms = films;
    },
    async fetchFilmmaker(filmmaker_param) {
      try {
        const url = `https://egq0zydibl.execute-api.us-east-2.amazonaws.com/main/filmmaker-records`;
        const response = await fetch(url);
        const data = await response.json();
        return data.records.filter(
          (record) =>
            record.fields.Name.trim()
              .toLowerCase()
              .replace(/[^a-z0-9-]+/g, "-") === filmmaker_param
        );
      } catch (error) {
        console.error("Error fetching the filmmaker with the param:", error);
        error.value = error.message;
      }
    },
  },
});
