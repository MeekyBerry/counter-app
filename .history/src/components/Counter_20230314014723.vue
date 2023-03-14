<template>
  <main class="main">
    <div class="container">
      <h1 class="title">Simple counter</h1>
      <div class="img__container__grid">
        <p class="counter grid-1">{{ count }}</p>
        <div class="img-container grid-2">
          <button @click="increment()" class="img-btn">
            <img src="../assets/img/plus.png" alt="Plus Image" class="img" />
          </button>
        </div>
        <div class="img-container grid-3">
          <button @click="decrement()" class="img-btn">
            <img src="../assets/img/minus_orange.png" alt="Minus Image" class="img" />
          </button>
        </div>
        <div class="img-container grid-4">
          <button @click="reset()" class="img-btn">
            <img src="../assets/img/reset.png" alt="Reset Image" class="img" />
          </button>
        </div>
        <div class="input-container grid-5">
          <input v-model="value" type="number" class="input" />
          <button @click="setValue(Number(value))" class="input-btn ">Set Value</button>
        </div>
      </div>
    </div>

    <!-- TEMPLATE FOR THE COMPOSABLE COMPONENT -->
    <!-- <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.decrement()">Decrement</button>
    <button @click="counter.reset()">Reset</button>
    <input v-model="value" type="number" />
    <button @click="counter.setValue(Number(value))">Set Value</button> -->
  </main>
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

.main {
  height: 100vh;
  width: 100vw;
  background-color: #1c2e4a;

  .container {
    max-width: 400px;
    width: 100%;
    height: 100%;
    margin: 2rem auto;

    .title {
      color: $color-text;
      font-size: 2rem;
      margin-bottom: 20px;
      text-transform: uppercase;
      text-align: center;
    }
  }

  .img__container__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 30px 0;
    background-color: $color-bg;
    border-radius: 5px;

    .counter {
      color: $color-text;
      font-size: 3rem;
      text-align: center;
    }

    .img-container {
      display: flex;
      justify-content: center;
      align-items: center;

      .img-btn {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        .img {
          width: 50px;
          height: 50px;
        }
      }
    }

    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .input {
        width: 50%;
        height: 30px;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 5px;
        // text-align: center;

        &:focus {
          border: 1px solid $color-text;
        }
      }
    }

    .grid-1 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    .grid-2 {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }

    .grid-3 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .grid-4 {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
    }

    .grid-5 {
      grid-column: 1 / 4;
      grid-row: 4 / 5;
    }
  }
}
</style>