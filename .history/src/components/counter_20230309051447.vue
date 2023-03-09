<template>
  <div>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model.number="value" />
    <button @click="setValue">Set Value</button>
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
    const setValue = () => store.commit("setValue");

    let value = "11";

    return { count, increment, decrement, reset, value, setValue };
  },
};
</script>
