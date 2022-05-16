const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/duanecocharm/'
    : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/_variables.scss";`
      }
    }
  },
})
