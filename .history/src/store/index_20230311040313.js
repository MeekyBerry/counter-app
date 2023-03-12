import { createStore } from "vuex";
// import { Ref } from "vue";

const store = createStore({
  state: {
    count: 0,
    value: 2
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
      state.value = parseFloat(value)
    }
  },
});

export default store;