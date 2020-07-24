<template>
  <div>
    <router-view></router-view>
    <van-tabbar route placeholder v-model="active" active-color="#e40137" inactive-color="#B4B4BD" v-show="$route.meta.showTabber">
      <van-tabbar-item to="/Company" icon="shop-o">公司</van-tabbar-item>
      <van-tabbar-item to="/Question" icon="search">刷题</van-tabbar-item>
      <van-tabbar-item to="/Find" icon="friends-o">发现</van-tabbar-item>
      <van-tabbar-item to="/My" icon="setting-o">我的</van-tabbar-item>
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
// h1 {
//   background: @subdominant-font-color;
// }
</style>
