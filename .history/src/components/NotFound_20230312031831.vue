<template>
  <div>
    <h1>{{ error }}</h1>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      error: "404 Not Found",
    };
  }
};
</script>