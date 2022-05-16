<template>
  <div>
    <div class="list-img">
      <div class="list-img-header d-flex justify-content-center">
        HÌNH ẢNH THỰC TẾ
      </div>
      <hr />
      <div class="list-img-content">
        <b-row no-gutters>
          <b-col cols="6" v-b-modal.modal-1>
            <div class="list-img-content-item img3"></div>
          </b-col>
          <b-col cols="6" v-b-modal.modal-2>
            <div class="list-img-content-item img2"></div>
          </b-col>
          <b-col cols="6" v-b-modal.modal-3>
            <div class="list-img-content-item img1"></div>
          </b-col>
          <b-col cols="6" v-b-modal.modal-4>
            <div class="list-img-content-item img4"></div>
          </b-col>
        </b-row>
      </div>
      <b-modal
        id="modal-1"
        size="xl"
        title="BootstrapVue"
        hide-header
        hide-footer
      >
        <div class="relative w-100">
          <img src="@/assets/img/a3.jpg" alt="" class="w-100" />
          <div
            class="btn-close"
            style="
              position: absolute;
              top: 0;
              right: 0;
              color: black;
              cursor: pointer;
            "
            @click="$bvModal.hide('modal-1')"
          >
            <b-icon icon="x" font-scale="2"></b-icon>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-2"
        size="xl"
        title="BootstrapVue"
        hide-header
        hide-footer
      >
        <div class="relative w-100">
          <img src="@/assets/img/a2.jpg" alt="" class="w-100" />
          <div
            class="btn-close"
            style="
              position: absolute;
              top: 0;
              right: 0;
              color: black;
              cursor: pointer;
            "
            @click="$bvModal.hide('modal-2')"
          >
            <b-icon icon="x" font-scale="2"></b-icon>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-3"
        size="xl"
        title="BootstrapVue"
        hide-header
        hide-footer
      >
        <div class="relative w-100">
          <img src="@/assets/img/a1.jpg" alt="" class="w-100" />
          <div
            class="btn-close"
            style="
              position: absolute;
              top: 0;
              right: 0;
              color: black;
              cursor: pointer;
            "
            @click="$bvModal.hide('modal-3')"
          >
            <b-icon icon="x" font-scale="2"></b-icon>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-4"
        size="xl"
        title="BootstrapVue"
        hide-header
        hide-footer
      >
        <div class="relative w-100">
          <img src="@/assets/img/a4.jpg" alt="" class="w-100" />
          <div
            class="btn-close"
            style="
              position: absolute;
              top: 0;
              right: 0;
              color: black;
              cursor: pointer;
            "
            @click="$bvModal.hide('modal-4')"
          >
            <b-icon icon="x" font-scale="2"></b-icon>
          </div>
        </div>
      </b-modal>
      <div class="list-img-content-sp">
        <VueSlickCarousel v-bind="settings">
          <img src="@/assets/img/a1.jpg" v-b-modal.modal-5 alt="" />
          <img src="@/assets/img/a2.jpg" v-b-modal.modal-6 alt="" />
          <img src="@/assets/img/a3.jpg" v-b-modal.modal-7 alt="" />
          <img src="@/assets/img/a4.jpg" v-b-modal.modal-8 alt="" />
        </VueSlickCarousel>
        <b-modal
        id="modal-5"
        size="xl"
        title="BootstrapVue"
        hide-header
        hide-footer
      >
        <div class="relative w-100">
          <img src="@/assets/img/a1.jpg" alt="" class="w-100" />
          <div
            class="btn-close"
            style="
              position: absolute;
              top: 0;
              right: 0;
              color: black;
              cursor: pointer;
            "
            @click="$bvModal.hide('modal-5')"
          >
            <b-icon icon="x" font-scale="2"></b-icon>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-6"
        size="xl"
        title="BootstrapVue"
        hide-header
        hide-footer
      >
        <div class="relative w-100">
          <img src="@/assets/img/a2.jpg" alt="" class="w-100" />
          <div
            class="btn-close"
            style="
              position: absolute;
              top: 0;
              right: 0;
              color: black;
              cursor: pointer;
            "
            @click="$bvModal.hide('modal-6')"
          >
            <b-icon icon="x" font-scale="2"></b-icon>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-7"
        size="xl"
        title="BootstrapVue"
        hide-header
        hide-footer
      >
        <div class="relative w-100">
          <img src="@/assets/img/a3.jpg" alt="" class="w-100" />
          <div
            class="btn-close"
            style="
              position: absolute;
              top: 0;
              right: 0;
              color: black;
              cursor: pointer;
            "
            @click="$bvModal.hide('modal-7')"
          >
            <b-icon icon="x" font-scale="2"></b-icon>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-8"
        size="xl"
        title="BootstrapVue"
        hide-header
        hide-footer
      >
        <div class="relative w-100">
          <img src="@/assets/img/a4.jpg" alt="" class="w-100" />
          <div
            class="btn-close"
            style="
              position: absolute;
              top: 0;
              right: 0;
              color: black;
              cursor: pointer;
            "
            @click="$bvModal.hide('modal-8')"
          >
            <b-icon icon="x" font-scale="2"></b-icon>
          </div>
        </div>
      </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "ListImage",
  data() {
    return {
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5,
        arrows: false,
        autoplay: true,
      },
    };
  },
  components: { VueSlickCarousel },
};
</script>

<style lang="scss">
.list-img {
  padding: 50px 0;
  width: 100%;
  background: #fff;
  height: 100%;
  @media (max-width: 992px) {
    padding: 20px 0;
  }
  @media (max-width: 450px) {
    padding: 20px 0;
  }
  .list-img-header {
    font-size: 48px;
    font-weight: 700;
    color: #00703e;
    text-align: center;
    @media (max-width: 992px) {
      font-size: 30px;
    }
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  hr {
    width: 10%;
    height: 3px;
    background: #00703e;
    @media (max-width: 450px) {
      width: 15%;
      border-top: 1px solid #00703e;
    }
  }
  &-content {
    margin-top: 50px;
    @media (max-width: 992px) {
      margin-top: 20px;
    }
    &-item {
      width: 100%;
      background-position: top center;
      background-color: $white;
      background-size: cover, 60%;
      object-fit: cover;
      height: 0;
      padding-bottom: 60%;
      margin-bottom: 10px;
      @media (max-width: 992px) {
        display: none;
      }
    }

    .img1 {
      background-image: url("@/assets/img/a1.jpg");
      margin-right: 10px;
      width: calc(100% - 10px);
    }
    .img2 {
      background-image: url("@/assets/img/a2.jpg");
    }
    .img3 {
      background-image: url("@/assets/img/a3.jpg");
      margin-right: 10px;
      width: calc(100% - 10px);
    }
    .img4 {
      background-image: url("@/assets/img/a4.jpg");
    }
  }
}
.list-img-content-sp {
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
}
#modal-1 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-1___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
#modal-2 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-2___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
#modal-3 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-3___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
#modal-4 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-4___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
#modal-5 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-5___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
#modal-6 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-6___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
#modal-7 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-7___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
#modal-8 {
  background: #00000042;
  .modal-content {
    border: unset;
    border-radius: unset;
    #modal-8___BV_modal_body_ {
      padding: unset !important;
    }
  }
}
</style>