<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment()">Increment</button>
    <button @click="decrement()">Decrement</button>
    <button @click="reset()">Reset</button>
    <input v-model="value" type="number" />
    <button @click="setValue(value)">Set Value</button>

    <!-- <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.decrement()">Decrement</button>
    <button @click="counter.reset()">Reset</button>
    <input v-model="value" type="number" />
    <button @click="counter.setValue(Number(value))">Set Value</button> -->
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const increment = () => store.commit("increment");
    const decrement = () => store.commit("decrement");
    const reset = () => store.commit("reset");
    const value = computed(() => store.state.value);
    const setValue = () => store.commit("setValue", Number(value.value));

    return {
      count,
      increment,
      decrement,
      reset,
      value,
      setValue,
    };
  },
};


// import useCounter from "../composables/useCounter";
// import { computed } from "vue";
// import { useStore } from "vuex";

// export default {
//   setup() {
//     const counter = useCounter()

// return {
//   counter,
//   value: '',
// }
//   },
// };
</script>
