<template>
  <div>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model="value" />
    <button @click="setValue">Set Value</button>
    <!-- <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model="value" />
    <button @click="setValue">Set Value</button> -->
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
// import { computed } from "vue";
// import { useStore } from "vuex";

export default {
  setup() {
    const { count, increment, decrement, reset, value, setValue } = useCounter();
    return { count, value: '' };
  },
};

// export default {

//   setup() {
//     const store = useStore();
//     const count = computed(() => store.state.count);

//     const increment = () => store.commit("increment");
//     const decrement = () => store.commit("decrement");
//     const reset = () => store.commit("reset");
//     const setValue = (value) => store.commit("setValue", value);
//     // let value = store.state.value;
//     const value = computed({
//       get: () => store.state.value,
//       // set: (value) => store.commit("setValue", value),
//     });
//     return { count, increment, decrement, reset, value, setValue };
//   },
// };
</script>
