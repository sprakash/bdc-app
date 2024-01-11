import { createStore } from "vuex";

export default createStore({
  state: {
    selectedFilm: null,
  },
  mutations: {
    setSelectedFilm(state, payload) {
      state.selectedFilm = payload;
    },
  },
});
