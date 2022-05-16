<template>
  <div class="banner"></div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/img/bg2.png");
  position: relative;
  width: 100%;
  background-position: center;
  background-color: $white;
  background-size: cover, 100%;
  object-fit: cover;
  height: 0;
  background-repeat: no-repeat;
  padding-bottom: 45%;
  @media (max-width: 450px) {
    background-image: url("@/assets/img/bg2sp.png");
    height: 800px;
  }
}
</style>