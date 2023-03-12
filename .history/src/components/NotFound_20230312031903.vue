<template>
  <div>
    <h1>{{ error }}</h1>
    <p>{{ msg }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      error: "404 Not Found",
      msg: "The page you are looking for does not exist"
    };
  }
};
</script>