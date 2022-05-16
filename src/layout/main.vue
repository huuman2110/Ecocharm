<template>
  <div class="layout">
    <Header />
    <div class="layout-content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "layout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.layout-content {
  min-height: calc(100vh - 500px);
}
</style>