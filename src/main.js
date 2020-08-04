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
// 导入moment
import moment from 'moment'
// 导入封装好的公共组件
import globalCom from '@/components'

Vue.use(Vant)
Vue.use(globalCom)
// 全局过滤器
Vue.filter('formatTime', value => {
  moment.locale('zh-cn')
  // value = value.slice(0, value.length - 2)
  // const time = moment().diff(moment(value), 'days')
  // if (time > 1) {
  //   return moment(value).format('YYYY-MM-DD')
  // } else {
  return moment(value).fromNow()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
