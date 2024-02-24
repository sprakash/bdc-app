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
        const filmmakerData = await response.json();

        // Shuffle the array
        filmmakerData?.records?.sort(() => Math.random() - 0.5);
        return filmmakerData?.records?.slice(0, 13).map((filmmakerRecord) => {
          return {
            title: filmmakerRecord?.fields?.Name,
            img: filmmakerRecord?.fields?.Headshot[0]?.url,
          };
        });
      } catch (error) {
        console.error("Error fetching or processing data for filmmakers");
      }
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
