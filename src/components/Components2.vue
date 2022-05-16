<template>
  <div class="components2">
    <b-container>
      <div class="header">
        ĐẤT NỀN VÀ BIỆT THỰ ECO CHARM GIÁ ĐẦU TƯ CHÍNH CHỦ
      </div>
      <hr />
      <b-row>
        <b-col
          cols="12"
          sm="6"
          lg="4"
          v-for="(item, index) in dataComponents2"
          :key="index"
        >
          <div class="content d-flex flex-column">
            <div
              v-on:click="showModal(item.img)"
              class="content-header"
              :style="'background-image: url(' + item.img + ')'"
            ></div>
            <div class="content-main">
              <div class="name">
                {{ item.name }}
              </div>
              <div class="description">
                <p class="description-price">{{ item.price }}</p>
                <p class="description-location">{{ item.location }}</p>
                <p class="description-date">{{ item.date }}</p>
              </div>
            </div>
          </div>
          <b-modal
            v-model="modalShow"
            size="xl"
            title="BootstrapVue"
            hide-header
            hide-footer
            id="modal-cpn2"
          >
            <div class="relative w-100">
              <img :src="imgShow" alt="" class="w-100 new-section"/>
              <div
                class="btn-close"
                style="
                  position: absolute;
                  top: 0;
                  right: 0;
                  color: black;
                  cursor: pointer;
                "
                @click="hideModal()"
              >
                <b-icon icon="x" font-scale="2"></b-icon>
              </div>
            </div>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import img1 from "../assets/img/B3-M14-01.jpg";
import img2 from "../assets/img/DJI_0068.jpg";
import img3 from "../assets/img/B3-30-10.jpg";
import img4 from "../assets/img/B3-20-07.jpg";
import img5 from "../assets/img/B3-17-22.jpg";
import img6 from "../assets/img/1111.jpg";
export default {
  name: "Components2",
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      dataComponents2: [
        {
          img: img1,
          name: "Bán B3 M14-01. GĐ1 Biệt thự 2 mặt tiền ,đường 10m,đường 10m",
          price: "Giá thoả thuận",
          location: "Liên Chiểu, Đà Nẵng",
          date: "4 ngày trước",
          
        },
        {
          img: img2,
          name: "B3 M14-03. GĐ1 biệt thự view hồ",
          price: "Giá thoả thuận",
          location: "Liên Chiểu, Đà Nẵng",
          date: "4 ngày trước",
          
        },
        {
          img: img3,
          name: "B3 30-10. GĐ3 biệt thự",
          price: "Giá thoả thuận",
          location: "Liên Chiểu, Đà Nẵng",
          date: "4 ngày trước",
          
        },
        {
          img: img4,
          name: "B3 20-07.GĐ3 biệt thự view sông",
          price: "Giá thoả thuận",
          location: "Liên Chiểu, Đà Nẵng",
          date: "4 ngày trước",
          
        },
        {
          img: img5,
          name: "B3 17-22.GĐ3 biệt thự",
          price: "Giá thoả thuận",
          location: "Liên Chiểu, Đà Nẵng",
          date: "4 ngày trước",
          
        },
        {
          img: img6,
          name: "B3 TM 04-05 GĐ1 shophouse",
          price: "Giá thoả thuận",
          location: "Liên Chiểu, Đà Nẵng",
          date: "4 ngày trước",
          
        },
      ],
      modalShow: false,
      imgShow: null,
    };
  },
  methods: {
    showModal(img) {
      this.imgShow = img;
      this.modalShow = true;
    },

    hideModal() {
      this.modalShow = false;
    },
  },
};
</script>

<style lang="scss">
.components2 {
  .container {
    .header {
      text-align: center;
      margin: 50px auto 30px;
      font-size: 48px;
      font-weight: 700;
      width: 80%;
      color: #036f3e;
      @media (max-width: 450px) {
        font-size: 22px;
        width: 100%;
        margin: 20px 0 10px;
      }
    }
    hr {
      border-top: 3px solid #00703e;
      width: 30%;
      margin-bottom: 40px;
      @media (max-width: 450px) {
        width: 15%;
        border-top: 1px solid #00703e;
        margin-bottom: 20px;
      }
    }

    .content {
      margin-bottom: 60px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      @media (max-width: 450px) {
        margin: 0 35px;
        margin-bottom: 25px;
      }
      &-header {
        width: 100%;
        background-position: center center;
        background-color: white;
        background-size: cover, 60%;
        object-fit: cover;
        padding-bottom: 67%;
      }
      &-main {
        margin: 30px 0 35px 30px;
        @media (max-width: 450px) {
          margin: 20px 0 20px 15px;
        }
        .name {
          color: #004a29;
          font-size: 22px;

          height: 58px;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 95%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          @media (max-width: 450px) {
            font-size: 18px;
            height: 50px;
          }
        }
        .description {
          margin-top: 10px;
          &-price {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 0;
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
          &-location {
            font-size: 20px;
            font-weight: 400;
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
          &-date {
            margin-bottom: 0;
            color: #595959;
            font-size: 16px;
            font-weight: 400;
            @media (max-width: 450px) {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
#modal-cpn2 {
  .modal-content {
    border: unset;
    border-radius: unset;
  }
}
  .modal-body {
    padding: unset !important;
  }
  .modal-backdrop {
    background: #00000042 !important;
  }
  .new-section {
    height:500px;
    @media (max-width: 992px) {
    height: 100%;
  }
  }
</style>