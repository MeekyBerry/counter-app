import { createStore } from "vuex";

const store = createStore({
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
      state.count = parseFloat(value);
    }
  },
});

export default store;