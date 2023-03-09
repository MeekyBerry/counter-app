// This composable will have four functions for incrementing, decrementing, resetting, and setting the count.
// The functions will be exported as an object.
// The functions will be called from the Counter.vue component.

export function useCounter() {
  const store = useStore()
  const increment = () => store.commit('increment')
  const decrement = () => store.commit('decrement')
  const reset = () => store.commit('reset')
  const setValue = (value) => store.commit('setValue', value)
  return { increment, decrement, reset, setValue }
}

