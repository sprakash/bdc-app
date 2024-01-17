import { defineStore } from "pinia";

export const useFilmmakerStore = defineStore("filmmaker", {
  state: () => ({
    selectedFilmmaker: null,
  }),
  actions: {
    setSelectedFilmmaker(filmmaker) {
      this.selectedFilmmaker = filmmaker;
    },
  },
});
