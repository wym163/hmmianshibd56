<template>
  <van-nav-bar
    class="navbar"
    :title="title"
    :left-text="left_text"
    :right-text="right_text"
    :left-arrow="left_arrow"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #left>
      <i class="iconfont iconbtn_nav_back nav_back"></i>
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #right>
      <slot name="right"></slot>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'navbar',
  props: ['title', 'left_text', 'right_text', 'left_arrow'],
  methods: {
    onClickLeft () {
      this.$emit('onClickLeft')
    },
    onClickRight () {
      window.console.log('右边的文本点击事件')
    }
  }
}
</script>

<style lang="less">
.navbar {
  height: 44px;
  .van-nav-bar__left {
    padding-left: 0px;
  }
  .nav_back {
    font-size: 44px;
  }
}
</style>
