<template>
  <div id="app">
    <component v-bind:is="layoutComponent">
      <router-view/>
    </component>
  </div>
</template>

<script>
import './assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  data() {
    return {
      layoutComponent: null,
    }
  },
  created() {
    const component = this.$route.matched[0].components.default
    const layout = component.layout
    if(layout) {
      this.layoutComponent = require(`./layout/${layout}`).default
    } else {
      this.layoutComponent = require(`./layout/main`).default
    }
  }
}
</script>

<style lang="scss">
</style>
