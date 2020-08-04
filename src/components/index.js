import navbar from '@/components/navbar.vue'
import MMcell from '@/components/MMcell.vue'
import MMShareList from '@/components/MMShareList.vue'

const myPlugin = {
  install (Vue) {
    // 注册全局navbar
    Vue.component(navbar.name, navbar)
    // 注册全局的MMcell
    Vue.component(MMcell.name, MMcell)
    Vue.component(MMShareList.name, MMShareList)
  }
}
export default myPlugin
