
const mixin = {
  methods: {
    /**
     * Respect publicPath in vue.config.js if given
     * @param path Any relative path
     * @returns {string} Public relative path
     */
    publicPath (path) {
      return process.env.BASE_URL + path.replace(/^\/+/g, '')
    },
    bg(dark) {
      if (dark) {
        return this.$vuetify.theme.themes['dark'].surface
      } else {
        return this.$vuetify.theme.themes['light'].background
      }
    }
  }
}

export default {
  install (Vue) {
    Vue.mixin(mixin)
  }
}
