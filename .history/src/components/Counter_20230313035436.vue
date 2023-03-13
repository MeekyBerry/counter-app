<template>
  <div class="app">
    <div class="container">
      <h1 class="title">Easy to use counter</h1>
      <p class="counter">{{ count }}</p>
      <div class="img__container__grid">
        <div class="img-container">
          <button @click="increment()" class="img-btn">
            <img src="../assets/img/plus.png" alt="Plus Image" class="img" />
          </button>
        </div>
        <div class="img-container">
          <button @click="decrement()" class="img-btn">
            <img src="../assets/img/minus_orange.png" alt="Minus Image" class="img" />
          </button>
        </div>
        <div class="img-container">
          <button @click="reset()" class="img-btn">
            <img src="../assets/img/reset.png" alt="Reset Image" class="img" />
          </button>
        </div>
      </div>
      <div class="input-container">
        <input v-model="value" type="number" class="input" />
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

<style lang="scss">
@import "@/assets/sass-style/variables.scss";

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #1c2e4a;

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $color-bg;
  padding: 20px;
  border-radius: 5px;

  .title {
  color: $color-text;
  font-size: 2rem;
  margin-bottom: 20px;
}

.counter {
  color: $color-text;
  font-size: 3rem;
  margin-bottom: 20px;
}
}

.img__container__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  .img-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .img-btn {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
      border-radius: 50px;
    }

    &:active {
      background-color: #e1e1e1;
      border-radius: 50px;
    }

    &:focus {
      outline: none;
    }

  }
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.input {
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
}

.input-btn {
  background-color: #FEFCFF;
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 5px 10px;
  cursor: pointer;
}
}
</style>