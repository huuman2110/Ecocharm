<template>
  <div>
    <div class="cpn1-tab1-content">
      <div class="content-header d-flex justify-content-center">
        THÔNG TIN CHI TIẾT
      </div>
      <hr />
      <div class="content-main d-flex justify-content-center">
        Các sản phẩm phát triển trong Đà Nẵng giai đoạn 1 2 3 4. <br /><br />

        – Nhà phố liền kề Gami Eco Charm: Diện tích đất từ 120m2 – 160m2, trong
        đó diện tích xây dựng từ 273m2 – 336m2. Tiêu chuẩn xây dựng 3 tầng, 2
        mặt tiền, mặt trước đường ô tô vào, mặt sau công viên cây xanh.
        <br /><br />

        – Biệt thự Eco Charm Đà Nẵng: Diện tích đất từ 190m2 – 260m2, trong đó
        diện tích xây dựng từ 315m2 – 340m2. Tiêu chuẩn xây biệt thự 2.5 tầng, 2
        mặt tiền, mặt trước đường ô tô vào, mặt sau công viên cây xanh.
        <br /><br />
        – Shophouse (Nhà phố thương mại) Gami Eco Charm: Diện tích đất từ 140m2
        – 180m2, trong đó diện tích xây dựng là 414m2. Tiêu chuẩn xây dựng 3
        tầng, 2 mặt tiền, mặt trước đường ô tô vào, mặt sau công viên cây xanh.
      </div>
    </div>
    <div class="cpn-tab1 w-100">
      <b-card no-body class="card-custom">
        <b-tabs pills card>
          <b-tab title="BT ĐƠN LẬP" active
            ><b-card-text v-b-modal.modal-img11
              ><b-card-img bottom :src="img11"></b-card-img></b-card-text
          ></b-tab>
          <b-modal
            id="modal-img11"
            size="xl"
            title="BootstrapVue"
            hide-header
            hide-footer
          >
            <div class="relative w-100">
              <img :src="img11" alt="" class="w-100" />
              <div
                class="btn-close"
                style="
                  position: absolute;
                  top: 0;
                  right: 0;
                  color: black;
                  cursor: pointer;
                "
                @click="$bvModal.hide('modal-img11')"
              >
                <b-icon icon="x" font-scale="2"></b-icon>
              </div>
            </div>
          </b-modal>
          <b-tab title="BT SONG LẬP"
            ><b-card-text v-b-modal.modal-img12
              ><b-card-img bottom :src="img12"></b-card-img></b-card-text
          ></b-tab>
          <b-modal
            id="modal-img12"
            size="xl"
            title="BootstrapVue"
            hide-header
            hide-footer
          >
            <div class="relative w-100">
              <img :src="img12" alt="" class="w-100" />
              <div
                class="btn-close"
                style="
                  position: absolute;
                  top: 0;
                  right: 0;
                  color: black;
                  cursor: pointer;
                "
                @click="$bvModal.hide('modal-img12')"
              >
                <b-icon icon="x" font-scale="2"></b-icon>
              </div>
            </div>
          </b-modal>
          <b-tab title="MB NHÀ PHỐ"
            ><b-card-text v-b-modal.modal-img13
              ><b-card-img bottom :src="img13"></b-card-img></b-card-text
          ></b-tab>
          <b-modal
            id="modal-img13"
            size="xl"
            title="BootstrapVue"
            hide-header
            hide-footer
          >
            <div class="relative w-100">
              <img :src="img13" alt="" class="w-100" />
              <div
                class="btn-close"
                style="
                  position: absolute;
                  top: 0;
                  right: 0;
                  color: black;
                  cursor: pointer;
                "
                @click="$bvModal.hide('modal-img13')"
              >
                <b-icon icon="x" font-scale="2"></b-icon>
              </div>
            </div>
          </b-modal>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import img11 from "@/assets/img/img11.png";
import img12 from "@/assets/img/img12.png";
import img13 from "@/assets/img/img13.png";
export default {
  name: "Tab1",
  data() {
    return {
      img11,
      img12,
      img13,
    };
  },
};
</script>

<style lang="scss">
.cpn-tab1 {
  padding: 50px 200px;
  width: 100%;
  background: #e5e5e5;
  height: 100%;
  @media (max-width: 992px) {
    padding: 20px 50px;
  }
  @media (max-width: 450px) {
    padding: 20px;
  }
  .card-custom {
    background: #e5e5e5 !important;
    border: unset !important;
    border-radius: unset !important;
    .card-header {
      background: #e5e5e5 !important;
      display: flex;
      justify-content: center;
      border-bottom: unset !important;
      margin-bottom: 30px !important;
      @media (max-width: 450px) {
        margin-bottom: 20px !important;
      }
      .nav-item {
        .nav-link {
          padding: 12px 42px !important;
          font-weight: 700 !important;
          font-size: 24px !important;
          color: #4a4a4a !important;
          border-radius: 40px !important;
          background: #fff !important;
          box-shadow: 0px 4px 4px rgb(0 0 0 / 25%) !important;
          margin: 0 5px;
          @media (max-width: 992px) {
            padding: 12px 26px !important;
            font-size: 20px !important;
            margin: 0 4px;
          }
          @media (max-width: 450px) {
            padding: 5px 8px !important;
            margin: 0 3px !important;
            font-size: 12px !important;
          }
          @media (max-width: 320px) {
            padding: 5px 5px !important;
            margin: 0px 1px !important;
            font-size: 10px !important;
          }
        }
        .active {
          border-radius: 40px !important;
          background: #dda91f !important;
          color: #fff !important;
        }
        @media (max-width: 450px) {
          margin-top: 10px !important;
        }
      }
    }
    .tab-content {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .tab-pane {
        padding: unset !important;
      }
    }
  }
}
#modal-img11 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-img11___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
#modal-img12 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-img12___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
#modal-img13 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-img13___BV_modal_body_ {
      padding: unset !important;
    }
  }
}

.cpn1-tab1-content {
  padding: 50px 200px;
  width: 100%;
  background: #fff;
  height: 100%;
  @media (max-width: 992px) {
    padding: 20px 50px;
  }
  @media (max-width: 450px) {
    padding: 20px;
  }
  .content-header {
    font-size: 48px;
    font-weight: 700;
    color: #00703e;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  hr {
    width: 30%;
    height: 3px;
    background: #00703e;
  }
  .content-main {
    margin-top: 50px;
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 450px) {
      margin-top: 30px;
      font-size: 12px;
    }
  }
}
</style>