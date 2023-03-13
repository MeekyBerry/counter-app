<template>
  <div class="app">
    <div class="app-container">
      <h1 class="app-title">Easy to use counter</h1>
    <p class="app-counter">{{ count }}</p>
   <div class="img-container">
    <button @click="increment()">
      <img src="../assets/img/add_plus.png" alt="Plus Image" class="img"/>
    </button>
   </div>
    <div class="img-container">
      <button @click="decrement()">
      <img src="../assets/img/minus_orange.png" alt="Minus Image" class="img" />
    </button>
    </div>
    <div class="img-container">
      <button @click="reset()">
      <img src="../assets/img/reset.png" alt="Reset Image" class="img" />
    </button>
    </div>
    <div class="input-container">
      <input v-model="value" type="number" class="input"/>
    <button @click="setValue(Number(value))" class="input-btn ">Set Value</button>
    </div>
    </div>

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
