import Vue from 'vue'
import App from './App.vue'
// 导入router
import router from './router'
// 导入store
import store from './store'
// 导入normalize.css
import 'normalize.css'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入flexible
import 'amfe-flexible'
// 导入字体图标
// import './styles/iconfont.less'
import './style/iconfont.css'
// 初始样式
import './style/base.less'
import navbar from '@/components/navbar.vue'
import MMcell from '@/components/MMcell.vue'
Vue.use(Vant)
// 注册全局navbar
Vue.component(navbar.name, navbar)
// 注册全局的MMcell
Vue.component(MMcell.name, MMcell)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
