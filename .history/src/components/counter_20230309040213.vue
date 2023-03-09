<template>
  <div>
    <h1>Counter</h1>
    <p>Current count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model.number="newValue" />
    <button @click="setValue">Set Value</button>
  </div>
</template>

<script>
// import { useCounter } from '@/composables/useCounter'

export default {
  setup() {
    const { count, increment, decrement, reset, setValue, newValue } = useCounter()

    return { count, increment, decrement, reset, setValue, newValue }
  }
}
</script>
