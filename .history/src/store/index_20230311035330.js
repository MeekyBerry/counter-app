import { createStore } from "vuex";
// import { Ref } from "vue";

const store = createStore({
  state: {
    count: 0,
    value: ""
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
      state.count = value;
    }
  },
});

export default store;