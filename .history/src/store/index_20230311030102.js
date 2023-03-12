import { createStore } from "vuex";
// import { Ref } from "vue";

const store = createStore({
  state: {
    count: 0,
    value: "",
    // This is a reference to the input element
    // that is used to set the value of the counter.
    // It is used to set the focus to the input element
    // when the user clicks on the "Set Value" button.
    // It is set in the Counter.vue component.
    // inputRef: null as Ref<HTMLInputElement> | null,
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
    },
    setValueFromInput(state) {
      state.count = parseInt(state.value);
    }
  },
});

export default store;