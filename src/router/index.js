import Vue from 'vue'
import VueRouter from 'vue-router'
import Company from '@/views/Company/index.vue'
import Question from '@/views/Question/index.vue'
import Find from '@/views/Find/index.vue'
import My from '@/views/My/index.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/Company'
    },
    {
      path: '/Company',
      component: Company,
      meta: {
        showTabber: true
      }
    },
    {
      path: '/Question',
      component: Question,
      meta: {
        showTabber: true
      }
    },
    {
      path: '/Find',
      component: Find,
      meta: {
        showTabber: true
      }
    },
    {
      path: '/My',
      component: My,
      meta: {
        showTabber: true
      }
    }
  ]
})

export default router
