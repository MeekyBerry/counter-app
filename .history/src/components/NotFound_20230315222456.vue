<template>
  <div>
    <!-- <div class="error-img"> -->
      <img :src="errorImage" alt="Error Image" />
    <!-- </div> -->
    <!-- <div class="error-msg"> -->
      <p>{{ msg }}</p>
  <!-- </div> -->
</div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      msg: "The page you are looking for does not exist",
      errorImage: "./assets/img/404-error.png",
    };
  }
};
</script>