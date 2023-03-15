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
<style lang="scss">
@import "@/assets/sass-style/variables.scss";

.error-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: $color-bg;

  .error-img__container {
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 300px;
    background-color: $color-white-soft;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .error-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .error-msg {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
  }
}
</style>