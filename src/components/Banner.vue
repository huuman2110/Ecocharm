<template>
  <div class="banner"><div class="bg-linear"></div></div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/img/bannerPC.png");
  position: relative;
  width: 100%;
  background-position: top center;
  background-color: $white;
  background-size: cover, 60%;
  object-fit: cover;
  height: 0;
  padding-bottom: 40%;
  .bg-linear {
    background: linear-gradient(180deg, rgba(255, 231, 18, 0) 0%, #00703e 100%);
    height: 50%;
    width: 100%;
    bottom: 0;
    position: absolute;
  }
  @media (max-width: 450px) {
    background-image: url("@/assets/img/bannerSP.png");
    height: 600px;
  }
}
</style>