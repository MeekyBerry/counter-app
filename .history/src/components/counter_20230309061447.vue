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
  },
};
</script>
