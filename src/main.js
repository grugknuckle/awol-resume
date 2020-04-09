import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import helpers from '@/plugins/helper'
// import '@/components'

Vue.use(helpers)
Vue.config.errorHandler = function (err, vm, info) {
  console.error(err)
  console.log(info)
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
