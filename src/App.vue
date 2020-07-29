<template>
  <div>
    <router-view></router-view>
    <van-tabbar
      class="tabbar"
      route
      fixed
      placeholder
      v-model="active"
      active-color="#e40137"
      inactive-color="#B4B4BD"
      v-show="$route.meta.showTabber"
    >
      <van-tabbar-item to="/company" icon="shop-o">
        <template #icon>
          <i class="iconfont iconicon_footbar_gs_sel"></i>
        </template>
        公司</van-tabbar-item
      >
      <van-tabbar-item to="/question" icon="search">
        <template #icon>
          <i class="iconfont iconicon_footbar_st_sel"></i>
        </template>
        刷题</van-tabbar-item
      >
      <van-tabbar-item to="/find" icon="friends-o">
        <template #icon>
          <i class="iconfont iconicon_footbar_fx_nor"></i>
        </template>
        发现</van-tabbar-item
      >
      <van-tabbar-item to="/my" icon="setting-o">
        <template #icon>
          <i class="iconfont iconicon_footbar_wode_sel"></i>
        </template>
        我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: ''
    }
  }
}
</script>

<style lang="less">
.tabbar {
  .iconfont {
    font-size: 28px;
  }
}
</style>
