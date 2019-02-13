import Vue from 'vue'
import Vuex from 'vuex'

import products from '@/store/modules/products'
import collection from '@/store/modules/collection'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    collection
  }
})
