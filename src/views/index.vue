<template>
  <div class="home d-flex flex-column">
    <Banner />
    <Components2 />
    <Introduce />
    <Tab1 />
    <Banner2 />
    <Tab2 />
    <ProjectIntro />
    <FormRegister2 />
    <ListImage />
  </div>
</template>

<script>
import Components2 from "../components/Components2.vue";
import Introduce from "../components/Introduce.vue";
import Banner from "../components/Banner.vue";
import Banner2 from "../components/Banner2.vue";
import Tab1 from "../components/Tab1.vue";
import Tab2 from "../components/Tab2.vue";
import ProjectIntro from "../components/ProjectIntro.vue";
import FormRegister2 from "../components/FormRegister2.vue";
import ListImage from "../components/ListImage.vue";
export default {
  name: "Home",
  layout: "main",
  auth: "user",
  head() {
    return {
      title: "Home",
    };
  },
  components: {
    Components2,
    Introduce,
    Banner,
    Tab1,
    Banner2,
    Tab2,
    ProjectIntro,
    FormRegister2,
    ListImage,
  },
};
</script>
