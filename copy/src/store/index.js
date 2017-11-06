/**
 * Created by 王伟东 on 2017/10/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    scroll: false,
    data: 0
  },
  mutations: {
    pagScroll (state) {
      if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        state.scroll = true
      } else {
        state.scroll = false
      }
    }
  },
  actions: {
    getList () {
      axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/goodsData').then((response) => {
        console.log(response.data)
      })
    }
  }
})

export default store
