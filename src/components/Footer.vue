<template>
  <div class="footer">
    <b-container fluid>
      <b-row
        ><b-col cols="12" lg="6"
          ><div class="footer-left">
            <div
              class="
                footer-left-top
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <img :src="logo2" alt="" />
              <div class="text-company">
                CÔNG TY TRÁCH NHIỆM HỮU HẠN <br />
                ĐẦU TƯ VÀ THƯƠNG MẠI NGUYÊN THỊNH
              </div>
            </div>
            <div
              class="
                footer-left-bottom
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <b-icon icon="telephone-fill" class="m-3"></b-icon>
              078 778 4567 - 090 658 1379
            </div>
            <hr /></div></b-col
        ><b-col cols="12" lg="6">
          <div class="footer-right d-flex align-items-center justify-content-between">
            <div class="footer-right-info d-flex flex-column">
              <div class="d-flex info-element align-items-center">
                <img :src="location" alt="" />
                130 Đống Đa, Thuận Phước, Hải Châu, Đà Nẵng
              </div>
              <div class="d-flex info-element align-items-center my-2">
                <img :src="fb" alt="" />
                bdsnguyenthinh
              </div>
              <div class="d-flex info-element align-items-center">
                <img :src="mail" alt=""/>
                nguyenthinh7784567@gmail.com
              </div>
            </div>
            <div class="footer-right-menu d-flex flex-column justify-between">
              <div>GIỚI THIỆU</div>
              <div>DỰ ÁN</div>
              <div>TIN TỨC</div>
              <div>LIÊN HỆ</div>
              <div>TUYỂN DỤNG</div>
            </div>
          </div>
        </b-col></b-row
      ></b-container
    >
  </div>
</template>

<script>
import logo2 from "@/assets/img/logo2.png";
import fb from "@/assets/img/icon-fb.svg";
import location from "@/assets/img/icon-location.svg";
import mail from "@/assets/img/icon-mail.svg";

export default {
  name: "Footer",
  data() {
    return {
      logo2,
      fb,
      location,
      mail,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 100%;
  background: #00703e;
  padding: 50px 80px;
  width: 100%;
  display: flex;
  align-items: center;
  hr {
    display: none;
  }
  .footer-right {
    height: 100%;
      &-info {
        .info-element {
          img {
            height: 43px;
            width: 43px;
            margin-right: 15px;
          }
        }
      }
    }
  @media (max-width: 450px) {
    padding: 20px 10px;
    .footer-left {
      &-top {
        flex-direction: column;
        justify-content: center;
        img {
          height: 80px;
        }
        .text-company {
          font-size: 16px;
          text-align: center;
        }
      }
      &-bottom {
        margin-left: unset;
        font-size: 16px;
      }

      hr {
        display: block;
        width: 30%;
        border-top: 1px solid white;
      }
    }
    .footer-right {
      flex-direction: column;
      &-info {
        align-items: flex-start !important;
        .info-element {
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          width: 100%;
          justify-content: center;
          img {
            height: 25px;
            width: 25px;
            margin-right: 5px;

          }
        }
      }
      &-menu {
        margin-left: unset;
        font-size: 14px;
      }
    }
  }
  &-left {
    &-top {
      img {
        height: 120px;
      }
      .text-company {
        font-size: 24px;
        font-weight: bold;
        color: white;
      }
    }
    &-bottom {
      color: #dda91f;
      font-size: 24px;
      font-weight: bold;
    }
  }
  &-right {
    color: white;
    &-menu {
      margin-left: 50px;
      font-size: 18px;
      font-weight: 500;
      @media (max-width: 450px) {
        display: none !important;
      }
    }
  }
}
</style>