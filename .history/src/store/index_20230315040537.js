//  Vuex store instance that manages the state of the application
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    error: "",
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state, value) {
      state.count = 0;
      // ACCESS THE VALUE INPUT BY THE USER AND ALSO SET IT TO ZERO
      value = document.querySelector("input");
      value.value = "";
    },
    setValue(state, value) {
      state.count = value;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = "";
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    reset({ commit }) {
      commit("reset");
    },
    setValue({ commit }, value) {
      commit("setValue", value);
    },
    setError({ commit }, error) {
      commit("setError", error);
    },
    clearError({ commit }) {
      commit("clearError");
    },
  },
  getters: {
    count: (state) => state.count,
    error: (state) => state.error,
  },
});
