import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    count: (state) => state.count,
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
    reset(context) {
      context.commit("reset");
    },
    setValue(context, value) {
      context.commit("setValue", value);
    },
  },
  // mutations: {
  //   increment(state) {
  //     state.count++;
  //   },
  //   decrement(state) {
  //     state.count--;
  //   },
  //   reset(state) {
  //     state.count = 0;
  //   },
  //   setValue(state, value) {
  //     state.count = parseInt(value);
  //   },
  // },
});

export default store;