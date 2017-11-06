import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import allStore from '@/components/indexChild/allStore'
import pageStrict from '@/components/indexChild/pageStrict'
import order from '@/components/order'
import shopCar from '@/components/indexChild/shopCar'
import map from '@/components/map'
import successSub from '@/components/successSub'
import myOrder from '@/components/myOrder'
import mydingdan from '@/components/myOrder/mydingdan'
import myAddress from '@/components/myOrder/myAddress'

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
          path: '/pageStrict/:data/sku_id/:key',
          name: 'pageStrict',
          component: pageStrict
        },
        {
          path: '/myOrder',
          name: 'myOrder',
          component: myOrder,
          children: [
            {
              path: '/',
              name: 'mydingdan',
              component: mydingdan
            },
            {
              path: '/mydingdan',
              name: 'mydingdan',
              component: mydingdan
            },
            {
              path: '/myAddress',
              name: 'myAddress',
              component: myAddress
            }
          ]
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
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/successSub',
      name: 'successSub',
      component: successSub
    }
  ]
})
