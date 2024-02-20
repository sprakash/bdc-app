import { defineStore } from "pinia";

export const useFilmmakerStore = defineStore("filmmaker", {
  state: () => ({
    selectedFilmmaker: null,
  }),
  actions: {
    setSelectedFilmmaker(filmmaker) {
      this.selectedFilmmaker = filmmaker;
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
