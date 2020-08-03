<template>
  <van-nav-bar
    class="navbar"
    :title="title"
    :left-text="left_text"
    :right-text="right_text"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #left>
      <i v-if="showBack" class="iconfont iconbtn_nav_back nav_back"></i>
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
  // props: ['title', 'left_text', 'right_text', 'left_arrow'],
  props: {
    title: {
      type: String
    },
    left_text: {
      type: String
    },
    right_text: {
      type: String
    },
    showBack: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClickLeft () {
      this.$emit('onClickLeft')
      if (this.$route.query.redirect) {
        this.$router.push('/find')
      } else {
        this.$router.go(-1)
      }
    },
    onClickRight () {
      this.$emit('onClickRight')
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
