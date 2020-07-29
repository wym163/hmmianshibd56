import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 用户信息
    userInfo: '',
    isLogin: false
  },
  mutations: {
    // 修改用户信息
    SETUSERINFO (state, newUserInfo) {
      state.userInfo = newUserInfo
    },
    SETISLOGIN (state, newIsLogin) {
      state.isLogin = newIsLogin
    }
  },
  getters: {
    userGender (state) {
      const genderObj = {
        0: '未知',
        1: '男',
        2: '女'
      }
      return genderObj[state.userInfo.gender]
    }
  },
  actions: {},
  modules: {}
})
export default store
