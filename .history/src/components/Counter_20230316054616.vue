<template>
  <main class="main">
    <div class="container">
      <div class="container-title">
        <h1 class="title">Simple counter app</h1>
        <p class="subtitle">
          This is a simple tool for counting numbers.
          <!-- <strong>NOTE:</strong> The composable component is commented out in the code below. -->
        </p>
      </div>
      <div class="img__container__grid">
        <div class="counter-wrapper grid-1">
          <h2 class="counter">{{ count }}</h2>
          <p class="error" v-if="error">{{ error }}</p>
        </div>
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
          <input v-model="value" type="number" class="input" placeholder="Set value" />
          <button @click="setValueAction(Number(value))" class="input-btn">Set</button>
        </div>
      </div>
      <p class="attribution">
        Coded by <a href="https://github.com/MeekyBerry" target="_blank" class="attribution-link"><span>Meeky</span>
          &copy;2023</a>
      </p>
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
  name: "Counter",
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapGetters(["count", "error"]),
  },
  methods: {
    ...mapActions(["increment", "decrement", "reset", "setValue", "setError", "clearError"]),
    setValueAction() {
      const value = Number(this.value);
      if (!isNaN(value) && value >= 0 && value <= 1000) {
        this.clearError();
        this.setValue(value);
        this.value = "";
      } else {
        this.setError("Please enter a number between 0 and 1000");
      }
    }
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

main {
  height: 100vh;
  width: 100vw;
  color: $color-white;
  font-family: $font-family;
  font-weight: $font-weight-normal;

  .container {
    background-color: $color-bg-dark;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 0;

    .container-title {
      text-align: center;
      margin-bottom: 5px;
      line-height: 1.4;

      .title {
        color: $color-white;
        font-size: $font-size-lg;
        font-weight: $font-weight-medium;
        font-family: $font-family-alt-2;
        text-transform: uppercase;
      }

      .subtitle {
        color: $color-white-soft;
        font-size: $font-size-xs;
        font-family: $font-family-alt;
      }
    }

    .img__container__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 70px repeat(2, 1fr);
      gap: 20px 0;
      align-items: center;
      justify-items: center;
      background-color: $color-bg;
      border-radius: 10px;
      padding: 15px 0;
      width: 100%;
      max-width: 350px;
      height: 100%;

      .grid-1 {
        grid-column: 1 / 4;
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

      .counter-wrapper {
        width: 100%;
        padding: 10px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;

        .counter {
          color: $color-grey-light;
          font-size: $font-size-xl;
          font-weight: $font-weight-medium;
          font-family: $font-family-alt;
          text-align: center;
          background-color: $color-white-soft;
          border-radius: 10px;
          width: 80%;
        }

        .error {
          color: $color-red;
          font-size: $font-size-xs;
          font-family: $font-family-alt;
          text-align: center;
        }
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

        .input {
          width: 80%;
          height: 40px;
          border: none;
          outline: none;
          border-radius: 5px;
          font-size: $font-size-md;
          font-weight: $font-weight-medium;
          font-family: $font-family-alt-2;
          color: $color-bg-dark;
          background-color: $color-white;
          text-align: center;

          &:focus {
            border: 1px solid $color-white;
          }

          &::placeholder {
            color: $color-grey-light;
            font-family: $font-family;
            font-weight: $font-weight-normal;
            font-size: $font-size-xs;
          }

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          &[type=number] {
            -moz-appearance: textfield;
          }
        }

        .input-btn {
          border: none;
          border-radius: 5px;
          background-color: $color-white;
          color: $color-bg-dark;
          padding: 5px 10px;
          cursor: pointer;
          text-transform: uppercase;
          font-weight: $font-weight-medium;
          font-size: $font-size-sm;
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
    }

    .attribution {
      font-size: $font-size-sm;
      font-family: $font-family-alt;
      font-weight: $font-weight-medium;
      font-style: italic;
      color: $color-white-soft;

      .attribution-link {
        color: $color-white-soft;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          background-color: unset;
        }

        span {
          color: $color-red;
          transition: all 0.3s ease-in-out;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>