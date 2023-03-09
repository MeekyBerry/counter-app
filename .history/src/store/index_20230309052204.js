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
    setValue(
      state,
      payload // payload is an object with a key of value
    ) {
      state.count = payload.value;
    },
  },
});

export default store;
