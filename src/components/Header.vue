<template>
  <div class="header">
    <div class="header-pc">
      <div class="header-pc d-flex justify-content-between align-items-center">
        <div class="header-pc-left d-flex">
          <img :src="logo1" alt="" class="logo1" />
        </div>
        <div class="header-pc-right d-flex align-items-center">
          <b-icon icon="telephone-fill" class="mx-2"></b-icon>
          078 778 4567
        </div>
      </div>
    </div>
    <div class="header-sp">
      <div
        class="header-sp-main d-flex justify-content-center align-items-center"
      >
        <img :src="logoSP" alt="" class="logo1" />
      </div>
    </div>
  </div>
</template>

<script>
import logo1 from "@/assets/img/logo1.png";
import logoSP from "@/assets/img/logoSP.png";
export default {
  name: "Header",
  data() {
    return {
      logo1,
      logoSP,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  &-pc {
    padding: 0 80px;
    height: 150px;
    &-left {
      .logo1 {
        width: auto;
        height: 100px;
        object-fit: cover;
      }
    }
    &-right {
      color: #dda91f;
      font-size: 25px;
      font-weight: 700;
      border: 1px solid #dda91f;
      border-radius: 20px;
      padding: 5px 10px;
    }
    @media (max-width: 992px) {
      display: none;
    }
  }
  &-sp {
    display: none;
    padding: 10px 0;
    @media (max-width: 992px) {
      display: block;
    }
    &-main {
      img {
        width: 100px;
      }
    }
  }
}
</style>