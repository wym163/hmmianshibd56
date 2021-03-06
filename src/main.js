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
Vue.use(Vant)
Vue.component(navbar.name, navbar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
