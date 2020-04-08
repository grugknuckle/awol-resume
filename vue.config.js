const path = require('path')

module.exports = {
  // publicPath      : process.env.NODE_ENV === 'production' ? '/' : '/',
  lintOnSave: false,
  outputDir: path.resolve(__dirname, '../dist'),
  css: { loaderOptions: { css: { url: false } } },
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_API_HOST || 'http://localhost:3000/api',
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}