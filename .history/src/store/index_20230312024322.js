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
    },
    setValue(state, value) {
      state.count = 10;
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
    }
  },
  getters: {
    count: (state) => state.count,
  },
});
