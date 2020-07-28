import Vue from 'vue'
import VueRouter from 'vue-router'
import company from '@/views/company/index.vue'
import question from '@/views/question/index.vue'
import find from '@/views/find/index.vue'
import my from '@/views/my/index.vue'
import login from '@/views/login/index.vue'
import userInfo from '@/views/userInfo/userInfo.vue'
import edit from '@/views/userInfo/edit.vue'

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
        showTabber: true
      }
    },
    {
      path: '/userInfo',
      component: userInfo
    },
    {
      path: '/edit',
      component: edit
    }
  ]
})

export default router
