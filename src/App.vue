<template>
  <div>
    <router-view></router-view>
    <van-tabbar
      route
      placeholder
      v-model="active"
      active-color="#e40137"
      inactive-color="#B4B4BD"
      v-show="$route.meta.showTabber"
    >
      <van-tabbar-item to="/Company" icon="shop-o">
        <template #icon>
          <i class="iconfont iconicon_footbar_gs_sel"></i>
        </template>
        公司</van-tabbar-item
      >
      <van-tabbar-item to="/Question" icon="search">
        <template #icon>
          <i class="iconfont iconicon_footbar_st_sel"></i>
        </template>
        刷题</van-tabbar-item
      >
      <van-tabbar-item to="/Find" icon="friends-o">
        <template #icon>
          <i class="iconfont iconicon_footbar_fx_nor"></i>
        </template>
        发现</van-tabbar-item
      >
      <van-tabbar-item to="/My" icon="setting-o">
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
.iconfont{
  font-size: 28px;
}
</style>
