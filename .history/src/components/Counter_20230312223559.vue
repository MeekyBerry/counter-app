<template>
  <div>
    <h1>Easy to use counter</h1>
    <p>{{ count }}</p>
   <div cl
    <button @click="decrement()">
      <img src="../assets/img/minus_orange.png" alt="Minus Image" />
    </button>
    <button @click="reset()">
      <img src="../assets/img/reset.png" alt="Reset Image" />
    </button>
    <input v-model="value" type="number" />
    <button @click="setValue(Number(value))">Set Value</button>

    <!-- TEMPLATE FOR THE COMPOSABLE COMPONENT -->
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
  name: "Counter",
  computed: {
    ...mapGetters(["count"]),
  },
  methods: {
    ...mapActions(["increment", "decrement", "reset", "setValue"]),
  },
  data() {
    return {
      value: ""
    }
  }
};

//  COMPOSABLE COMPONENT
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
