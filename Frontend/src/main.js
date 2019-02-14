import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'

import colors from 'vuetify/es5/util/colors'

Vue.prototype.$eventHub = new Vue()

Vue.use(Vuetify, {
  theme: {
    primary: '#00a0e5',
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
