<template>
  <div class="introduce">
    <div class="header">9 lý do nên chọn đầu tư</div>
    <hr />
    <div class="title">Gami ECO CHARM ĐÀ NẴNG</div>
    <b-container class="introduce-list">
      <b-row>
        <b-col
          class="introduce-item d-flex align-items-center"
          cols="6"
          lg="6"
          v-for="(item, index) in dataTest"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <div class="content">{{ item.content }}</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import introduce1 from "@/assets/img/introduce1.png";
import introduce2 from "@/assets/img/introduce2.png";
import introduce3 from "@/assets/img/introduce3.png";
import introduce4 from "@/assets/img/introduce4.png";
import introduce5 from "@/assets/img/introduce5.png";
import introduce6 from "@/assets/img/introduce6.png";
import introduce7 from "@/assets/img/introduce7.png";
import introduce8 from "@/assets/img/introduce8.png";

export default {
  name: "",
  data() {
    return {
      introduce1,
      introduce2,
      introduce3,
      introduce4,
      introduce5,
      introduce6,
      introduce7,
      introduce8,
      dataTest: [
        {
          img: introduce1,
          content:
            "Mục đích ra đời dự án đó chính là biến nơi đây thành một thiên đường nghỉ dưỡng lý tưởng ở ngay dải đất miền Trung thơ mộng. Vì thế mà với vị trí tọa lạc đắc địa này đã hứa hẹn là điểm đến hấp dẫn dành cho mọi khách hàng.",
        },
        {
          img: introduce2,
          content:
            "Eco Charm là một khu đô thị sinh thái được chủ đầu tư Gami Group triển khai với quy mô trên 59ha, tổng số vốn đầu tư hơn 10.000 tỷ đồng gồm nhiều loại hình đầu tư và phát triển: shophouse, nhà liền kề, biệt thự...",
        },
        {
          img: introduce3,
          content:
            "Gami Eco Charm là một khu đô thị kiểu mẫu được triển khai tại Đà Nẵng với mọi căn biệt thự đều được hình thành bởi bàn tay tài ba của các chuyên gia hàng đầu trong lĩnh vực kiến tạo nên. Nếu bạn và gia đình đang tìm kiếm, lựa chọn một nơi an cư lý tưởng.",
        },
        {
          img: introduce4,
          content:
            "Ngay phạm vi vài km, cư dân của Gami Eco Charm Đà Nẵng sẽ được hưởng lợi từ chuỗi các tiện ích dịch vụ hiện hữu nhằm đáp ứng mọi nhu cầu của cư dân, dễ dàng thu hút được sự quan tâm của mọi khách hàng đặc biệt là những nhà đầu tư chuyên nghiệp.",
        },
        {
          img: introduce5,
          content:
            "Hệ thống hạ tầng giao thông phát triển của dự án được đánh giá cao khi tọa lạc tại vị trí đắc đại ngay nơi hội tụ hàng loạt tuyến đường giao thông huyết mạnh có thể kể tới như: hành lang kinh tế Đông – Tây; quốc lộ 1A; đường cao tốc Liên Chiểu – Dung Quất",
        },
        {
          img: introduce6,
          content:
            "Mật độ xây dựng của dự án thấp, phần lớn diện tích còn lại dành cho tiện ích dịch vụ, cảnh quan và mảng sống xanh trong lành và đặc biệt là sản phẩm đết nền Biệt Thự View Sông Cu Đê với diện tích đa đạng và mức giá bán hấp dẫn.",
        },
        {
          img: introduce7,
          content:
            "Đất nền dự án Gami Eco Charm Đà Nẵng là loại hình được ra đời đáp ứng mọi nhu cầu của khách hàng, nhà đầu tư. Đây là sản phẩm đầu tiên nhận được sự chú ý của thị trường khi được triển khai xây dựng đạt tiêu chuẩn đẳng cấp 5 sao.",
        },
        {
          img: introduce8,
          content:
            "CĐT đưa ra mức giá bán hấp dẫn cho từng loại hình sản phẩm với phương thức thanh toán linh hoạt trong vòng 6 – 9 tháng không lãi suất. Đặc biệt là được ngân hàng Quốc Dân NCB hỗ trợ vay 70% lãi suất ưu đãi..",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.introduce {
  background-color: #00703e;
  .header {
    text-align: center;
    text-transform: uppercase;
    color: #dda91f;
    font-weight: 700;
    font-size: 48px;
    margin-top: 40px;
    @media (max-width: 450px) {
      font-size: 22px;
      margin: 20px 0 10px;
    }
  }
  hr {
    border-top: 3px solid #dda91f;
    width: 30%;
    @media (max-width: 450px) {
      border-top: 1px solid #dda91f;
      margin: auto;
    }
  }
  .title {
    text-align: center;
    text-transform: uppercase;
    color: #dda91f;
    font-weight: 700;
    font-size: 64px;
    @media (max-width: 450px) {
      font-size: 24px;
      margin-top: 10px;
    }
  }
  &-list {
    margin-top: 30px;
    .introduce-item {
      margin-bottom: 50px;
      @media (max-width: 450px) {
        flex-direction: column;
      }
      img {
        height: 110px;
        width: 110px;
        margin-right: 20px;
        @media (max-width: 450px) {
          height: 80px;
          width: 80px;
          margin-right: 0;
          margin-bottom: 20px;
        }
      }
      .content {
        color: #ffffff;
        text-align: justify;
        font-weight: 400;
        font-size: 18px;
        height: 100%;
        @media (max-width: 450px) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>