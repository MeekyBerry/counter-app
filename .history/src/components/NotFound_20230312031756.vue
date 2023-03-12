<template>
  <div>
    <!-- <h1>404 Not Found</h1> -->
    <h1>{{ error }}</h1>
    <p>The page you are looking for does not exist</p>
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