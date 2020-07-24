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
import './styles/iconfont.less'
// 初始样式
import './styles/base.less'
// 导入vant
// import { Vant, Tabbar, TabbarItem } from 'vant'
// Vue.use(Tabbar)
// Vue.use(TabbarItem)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
