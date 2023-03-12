<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment()">Increment</button>
    <button @click="decrement()">Decrement</button>
    <button @click="reset()">Reset</button>
    <input v-model="value" type="number" />
    <button @click="setValue(Number(value))">Set Value</button>
    <!-- <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.decrement()">Decrement</button>
    <button @click="counter.reset()">Reset</button>
    <input v-model="value" type="number" />
    <button @click="counter.setValue(Number(value))">Set Value</button> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  // name: "Counter",
  computed: {
    ...mapGetters(["count"]),
  },
  methods: {
    ...mapActions(["increment", "decrement", "reset", "setValue"]),
  },
  data() {
    return {
      value: "",
    };
  }
};

// import useCounter from "../composables/useCounter";

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
