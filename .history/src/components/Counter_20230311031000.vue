<template>
  <div>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model="value" />
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
    const setValue = () => store.commit("setValue", value);
    const value = () => store.commit(state.value)
    // const value = computed(() => store.state.value);
    // const value = computed({
    //   get: () => store.state.value,
    //   set: (newValue) => store.commit("setValue", newValue),
    // });
    return { count, increment, decrement, reset, value, setValue };
  },
};
</script>
