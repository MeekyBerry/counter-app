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
    // add count value to local storage
    addToLocalStorage(state) {
      localStorage.setItem("count", state.count);
    },
    // get count value from local storage
    getFromLocalStorage(state) {
      state.count = localStorage.getItem("count");
    },
    // reset count value to zero
    reset(state, value, error) {
      state.count = 0;
      // ACCESS THE VALUE INPUT BY THE USER AND ALSO SET IT TO ZERO
      value = document.querySelector("input");
      value.value = "";
      // CLEAR THE ERROR MESSAGE
      error = document.querySelector(".error");
      if (error !== null) {
        error.innerHTML = "";
      }
      // CLEAR THE LOCAL STORAGE
      localStorage.clear();
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
