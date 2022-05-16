<template>
  <div
    class="
      form-register
      d-flex
      flex-column
      align-items-center
      justify-content-between
    "
  >
    <div class="form-register-header d-flex flex-column align-items-center">
      <div class="form-register-header-top">
        ĐĂNG KÝ NHẬN THÔNG TIN &amp; BẢNG BÁO GIÁ TẠI ĐÂY!
      </div>
      <div class="form-register-header-bottom d-flex">
        NHẬN TÀI LIỆU DỰ ÁN NGAY
        <p>&nbsp; - &nbsp;</p>
        <span>HOTLINE 078 778 4567</span>
      </div>
    </div>
    <div
      class="
        form-register-bottom
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <div class="form-register-bottom-input d-flex">
        <b-form-input
          id="fullname"
          name="fullname"
          v-model="fullname"
          class="input-custom"
          placeholder="Nhập họ và tên (*)"
        ></b-form-input>
        <b-form-input
          id="phone"
          name="phone"
          v-model="phone"
          class="input-custom"
          placeholder="Nhập số điện thoại (*)"
        ></b-form-input>
        <b-form-input
          class="input-custom"
          id="email"
          name="email"
          v-model="email"
          placeholder="Email của bạn"
        ></b-form-input>
      </div>
      <div class="form-register-bottom-btn">
        <b-button :disabled="isDisabled" id="btn-send" v-on:click="register()"
          >GỬI NGAY</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormRegister",
  data() {
    return {
      fullname: "",
      phone: "",
      email: "",
      isDisabled: false,
      isSuccess: false,
    };
  },
};

</script>

<style lang="scss" scoped>
.form-register {
  padding: 20px 15px;
  width: 100%;
  height: 180px;
  background: #00703e;
  @media (max-width: 992px) {
    top: 100%;
    width: 100%;
    height: 100%;
  }
  &-header {
    font-size: 20px;
    color: white;
    @media (max-width: 480px) {
      font-size: 12px;
    }
    @media (max-width: 320px) {
      font-size: 11px;
    }
    &-top {
      font-weight: 400;
      text-align: center;
    }
    &-bottom {
      font-weight: 700;
      text-align: center;
    }
  }
  &-bottom {
    @media (max-width: 992px) {
      flex-direction: column;
    }
    padding: 0px 15px;
    width: 100%;
    &-input {
      width: 85%;
      .input-custom {
        border-radius: 30px;
        padding: 30px 20px;
        margin: 0 10px;
        @media (max-width: 992px) {
          margin: 10px 0px;
          padding: 25px 20px;
        }
      }
      @media (max-width: 992px) {
        flex-direction: column;
        width: 100%;
      }
    }
    &-btn {
      width: 18%;
      @media (max-width: 992px) {
        width: 65%;
      }
      button {
        padding: 18px;
        width: 100%;
        background: #dda91f;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: white;
        font-weight: 700;
        border-radius: 30px;
        @media (max-width: 992px) {
          margin-top: 10px;
          padding: 15px;
        }
      }
    }
  }
}
</style>