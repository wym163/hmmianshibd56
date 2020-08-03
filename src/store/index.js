import Vue from 'vue'
import Vuex from 'vuex'
import areaData from '@/utils/area.js'
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
    },
    SETPROPVALUE (state, { propName, propValue }) {
      state.userInfo[propName] = propValue
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
    },
    userArea (state) {
      return areaData.city_list[state.userInfo.area]
    }
  },
  actions: {},
  modules: {}
})
export default store
