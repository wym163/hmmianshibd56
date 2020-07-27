import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 用户信息
    userInfo: ''
  },
  mutations: {
    // 修改用户信息
    SETUSERINFO (state, newUserInfo) {
      state.userInfo = newUserInfo
    }
  },
  actions: {},
  modules: {}
})
export default store
