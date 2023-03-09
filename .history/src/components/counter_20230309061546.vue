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

  export default {
    name: 'Counter',
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      reset() {
        this.count = 0;
      },
      setValue() {
        this.count = this.$refs.input.value;
      },
    },
  };
  
</template>

<script>

export default {
  setup() {
  },
};
</script>
