<template>
  <div class="error-wrapper">
    <div class="error-img__container">
      <!-- <img :src="errorImage" alt="Error Image" /> -->
      <img src="../assets/img/404-error.png" alt="Error Image" class="error-img" />
    </div>
      <p class="error-msg">{{ msg }}</p>
</div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      msg: "The page you are looking for does not exist",
      // errorImage: "@/assets/img/404-error.png",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
}
</style>