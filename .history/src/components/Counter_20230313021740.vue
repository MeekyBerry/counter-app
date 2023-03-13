<template>
  <div class="app">
    <div class="app-container">
      <h1 class="app-title">Easy to use counter</h1>
      <p class="app-counter">{{ count }}</p>
      <div class="app-buttons">
        <button class="app-button" @click="increment()">
          <svg-icon
          :fa-i
            class="img"
          ></svg-icon>
        </button>
        <button class="app-button" @click="decrement()">
          <svg-icon
            class="img"
          ></svg-icon>
        </button>
        <button class="app-button" @click="reset()">
          <svg-icon
            class="img"
          ></svg-icon>
        </button>
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
import SvgIcon from "vue3-icon";

export default {
  setup() {
    const { increment, decrement, reset, setValue } = mapActions("counter", [
      "increment",
      "decrement",
      "reset",
      "setValue",
    ]);
    const { count } = mapGetters("counter", ["count"]);
    return {
      increment,
      decrement,
      reset,
      setValue,
      count,
      value: "",
      SvgIcon
    };
  },
  }

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

<style scoped>

.img-container {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.img {
  width: 50px;
  height: 50px;
}
</style>