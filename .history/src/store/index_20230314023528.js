//  Vuex store instance that manages the state of the application
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
      // ACCESS THE VALUE INPUT BY THE USER AND ALSO SET IT TO ZERO
      const value = document.getElementById("Value");
      value.value = "";
    },
    setValue(state, value) {
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
    setValue({ commit }, value) {
      commit("setValue", value);
    },
  },
  getters: {
    count: (state) => state.count,
  },
});

