<template>
  <main class="main">
    <div class="container">
      <h1 class="title">Simple counter</h1>
      <p class="subtitle">
        This is a simple tool for counting numbers.
        <!-- <strong>NOTE:</strong> The composable component is commented out in the code below. -->
      </p>
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
          <button @click="setValue(Number(value))" class="input-btn">Set Value</button>
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
  background-color: $color-bg-dark;
  color: $color-white;
  font-family: $font-family;
  font-weight: $font-weight-normal;

  .container {
    max-width: 400px;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 20px 0;

    .title {
      color: $color-white;
      font-size: $font-size-xl;
      font-weight: $font-weight-medium;
      font-family: $font-family-alt-2;
      text-transform: uppercase;
      text-align: center;
    }

    .subtitle {
      color: $color-white-soft;
      font-size: $font-size-xs;
      font-family: $font-family-alt;
      margin-bottom: 20px;
      text-align: center;
    }
  }

  .img__container__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 30px;
    background-color: $color-bg;
    border-radius: 5px;
    padding: 10px 0;

    .counter {
      color: $color-white;
      font-size: $font-size-xxl;
      font-weight: $font-weight-medium;
      font-family: $font-family-alt;
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
          width: 60px;
          height: 60px;
        }
      }
    }

    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      input {
        width: 60%;
        height: 30px;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 5px;
        font-size: $font-size-md;
        font-weight: $font-weight-medium;
        font-family: $font-family-alt-2;
        color: $color-bg-dark;
        background-color: $color-white;
        text-align: center;

        &:focus {
          border: 1px solid $color-white;
        }
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type=number] {
        -moz-appearance: textfield;
      }

      .input-btn {
        border: none;
        border-radius: 5px;
        background-color: $color-white;
        color: $color-grey-light;
        padding: 5px 10px;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: $font-weight-medium;
        font-size: $font-size-md;
      font-family: $font-family-alt-2;
        transition: all 0.3s ease-in-out;
        border: 1px solid $color-white;

        &:hover,
        &:active {
          background-color: $color-bg;
          color: $color-white;
        }

        &:focus {
          outline: none;
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