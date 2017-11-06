import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import allStore from '@/components/indexChild/allStore'
import pageStrict from '@/components/indexChild/pageStrict'
import order from '@/components/order'
import shopCar from '@/components/indexChild/shopCar'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'allStore',
          component: allStore
        },
        {
          path: '/allStore',
          name: 'allStore',
          component: allStore
        },
        {
          path: '/pageStrict',
          name: 'pageStrict',
          component: pageStrict
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    }
  ]
})
