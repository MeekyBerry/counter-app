<template>
  <div class="home">
    <h1>Home</h1>
    <Counter />
  </div>
</template>

<script>
import Counter from './Counter.vue';

export default {
  name: 'Home',
  components: {
    Counter,
  },
};

</script>