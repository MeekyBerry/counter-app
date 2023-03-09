<template>
  <div>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model.number="count" />
    <button @click="setValue">Set Value</button>
  </div>
</template>

<script>

export default {
  setup() {
  // import  useStore from 'vuex';
    const store = useStore();
    const count = store.state.count;
    const increment = () => store.commit('increment');
    const decrement = () => store.commit('decrement');
    const reset = () => store.commit('reset');
    const setValue = () => store.commit('setValue', count);
    return {
      count,
      increment,
      decrement,
      reset,
      setValue
    };

  },
};
</script>
