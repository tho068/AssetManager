import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Service from '@/views/Service.vue'
import Collection from '@/views/Products/Collection.vue'
import Products from '@/views/Products/Products.vue'
import SingleCollection from '@/views/Products/SingleCollection.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/assets/configuration',
      name: 'AssetsConfiguration',
      component: Collection
    },
    {
      path: '/assets/configuration/:id',
      name: 'SingleCollection',
      component: SingleCollection
    },
    {
      path: '/assets/assets',
      name: 'Assets',
      component: Products
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    }
  ]
})
