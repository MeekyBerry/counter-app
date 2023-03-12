import { createStore } from "vuex";
// import { Ref } from "vue";

const store = createStore({
  state: {
    count: 0,
    value: "",
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
      state.value = value;
    },
    setValueFromInput(state) {
      state.count = parseInt(state.value);
    }
  },
});

export default store;