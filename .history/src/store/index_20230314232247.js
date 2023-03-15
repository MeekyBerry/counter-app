//  Vuex store instance that manages the state of the application
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    error: ""
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
    setValue(state, value, error) {
      if (
        value === "" ||
        value === null ||
        value === undefined ||
        value === NaN ||
        value === " "
      ) {
        state.error = "Please enter a valid number";
        return;
      }
      state.count = value;
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
    setValue({ commit }, value, error) {
      commit("setValue", value, error);
    },
  },
  getters: {
    count: (state) => state.count,
  },
});
