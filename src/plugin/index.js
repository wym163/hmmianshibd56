import store from '@/store/index.js'
import router from '@/router/index.js'
import { getToken, removeToken } from '@/utils/Local.js'
import { apiGetInfo } from '@/api/user.js'
import { Toast } from 'vant'
export default function (Vue) {
  Vue.prototype.$checkLogin = function () {
    console.log('测试登录')
    // 返回promise对象
    return new Promise((resolve, reject) => {
      if (store.state.isLogin) {
        // 登录了
        resolve()
      } else {
        // 没登录
        if (getToken()) {
          // 没登录有token
          apiGetInfo()
            .then(res => {
              //   成功
              //   处理头像地址
              res.data.avatar = process.env.VUE_APP_URL + res.data.avatar
              // 保存用户信息
              store.commit('SETUSERINFO', res.data)
              //   修改登录状态
              store.commit('SETISLOGIN', true)
            })
            .catch(() => {
              // 失败
              // 删除token
              removeToken()
              //   提示用户登录
              Toast.fail('请先登录')
              // 跳转到登录页
              router.push('/login?redirect=' + this.$route.fullPath)
              //   console.log(this.$route.fullPath)
              reject(new Error())
            })
        } else {
          // 没登录没token
          //   提示用户登录
          Toast.fail('请先登录')
          // 跳转到登录页
          router.push('/login?redirect=' + this.$route.fullPath)
          reject(new Error())
        }
      }
    })
  }
}
