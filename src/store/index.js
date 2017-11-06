/**
 * Created by 王伟东 on 2017/10/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    scroll: false, // 是否滚动到130
    data: 0, // 购物车里面的数字
    storeList: '', // 商品详情页
    skuCartData: [], // 购物车列表
    witchList: '', // 传递到商品详情页当中的数据
    zongCount: 0, // 总的数量
    zongPrice: 0, // 总的价格,
    addNewAddress: false, // 让添加收货地址出现
    deletePage: false, // 让删除收货地址显示
    editAddress: false, // 让编辑收货地址显示
    infomationAddress: [], // 新增收货地址的列表
    changeAddress: [], // 修改收货地址的列表
    changeBeforeKey: ''
  },
  getters: {
  },
  mutations: {
    pagScroll (state) {
      if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        state.scroll = true
      } else {
        state.scroll = false
      }
    },
    StoreList (state, payLoad) {
      state.storeList = payLoad
    },
    shopCartData (state, payLoad) {
      var flag = true
      state.skuCartData.forEach((res, index, array) => {
        if (payLoad.sku_id === res.sku_id) {
          if (!payLoad.count) {
            res.count++
          } else {
            res.count = payLoad.count
          }
          flag = false
        }
      })
      if (flag) {
        if (!payLoad.count) {
          Vue.set(payLoad, 'count', 1)
        }
        Vue.set(payLoad, 'choose', true)
        state.skuCartData.push(payLoad)
      }
    },
    allCount () {
      var count = 0
      this.state.skuCartData.forEach((res) => {
        if (res.choose) {
          count += Number(res.count)
          // this.state.zongCount = count
        } else {
          count += 0
        }
        this.state.zongCount = count
      })
    },
    allPrice () {
      var price = 0
      this.state.skuCartData.forEach((res) => {
        if (res.choose) {
          price += Number(res.count) * Number(res.price)
        } else {
          price += 0
        }
        this.state.zongPrice = price
      })
    },
    deleteCartData (state, payLoad) {
      state.skuCartData.splice(payLoad, 1)
    },
    change () {
      if (this.state.addNewAddress) {
        this.state.addNewAddress = false
      } else {
        this.state.addNewAddress = true
      }
    },
    addAddress (state, payLoad) {
      if (payLoad.ok) {
        this.state.infomationAddress.forEach((res) => {
          res.ok = false
        })
      }
      this.state.infomationAddress.push(payLoad)
    },
    editAdd (state, payLoad) {
      this.state.changeBeforeKey = payLoad
      console.log(state.infomationAddress)
      this.state.changeAddress = state.infomationAddress[payLoad]
    },
    changeAfter (state, payLoad) {
      state.infomationAddress.splice(state.changeBeforeKey, 1, payLoad)
    }
  },
  actions: {
    getList (context) {
      axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/goodsData').then((response) => {
        context.commit('StoreList', response.data)
      })
    },
    detailData (context, witch) {
      axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/detailData').then((response) => {
        response.data.forEach((res) => {
          if (res.sku_id === Number(witch)) {
            this.state.witchList = res
            return false
          }
        })
      })
    }
  }
})

export default store
