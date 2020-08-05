import Vue from 'vue'
import VueRouter from 'vue-router'
import company from '@/views/company/index.vue'
import question from '@/views/question/index.vue'
import find from '@/views/find/index.vue'
import my from '@/views/my/index.vue'
import login from '@/views/login/index.vue'
import userInfo from '@/views/userInfo/userInfo.vue'
import editInfo from '@/views/userInfo/editInfo.vue'
import shareList from '@/views/shareList/index.vue'
import shareSearch from '@/views/shareSearch/index.vue'
import shareDetail from '@/views/shareDetail/index.vue'
import store from '@/store/index.js'
import { Toast } from 'vant'
import { getToken, removeToken } from '@/utils/Local'
import { apiGetInfo } from '@/api/user.js'
Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      redirect: '/company',
      meta: {
        showTabber: true
      }
    },
    {
      path: '/company',
      component: company,
      meta: {
        showTabber: true
      }
    },
    {
      path: '/question',
      component: question,
      meta: {
        showTabber: true
      }
    },
    {
      path: '/find',
      component: find,
      meta: {
        showTabber: true
      }
    },
    {
      path: '/my',
      component: my,
      meta: {
        showTabber: true,
        needLogin: true
      }
    },
    {
      path: '/userInfo',
      component: userInfo,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/editInfo',
      component: editInfo,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/shareList',
      component: shareList
    },
    {
      path: '/shareSearch',
      component: shareSearch
    },
    {
      // 动态路由
      path: '/shareDetail/:id',
      component: shareDetail
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 要登录才进入
  if (to.meta.needLogin) {
    // 已经登录
    if (store.state.isLogin) {
      next()
    } else {
      // 还未登录
      //  没登录有token
      if (getToken()) {
        apiGetInfo()
          .then(res => {
            window.console.log(res)
            res.data.avatar = process.env.VUE_APP_URL + res.data.avatar
            store.commit('SETUSERINFO', res.data)
            store.commit('SETISLOGIN', true)
            next()
          })
          .catch(err => {
            console.log(err)
            removeToken()
            Toast.fail('请先登录')
            next(`/login?redirect=${to.fullPath}`)
          })
      } else {
        // 没登录
        Toast.fail('请先登录')
        next(`/login?redirect=${to.fullPath}`)
      }
    }
  } else {
    // 不登录也能进入
    next()
  }
})

export default router
