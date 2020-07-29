<template>
  <van-cell
    class="cell"
    center
    @click="clickCell"
    :title="title"
    :border="false"
    :value="value"
  >
    <template #icon>
      <i class="iconfont icon_right" :class="classicon"></i>
    </template>
    <template>
      <slot></slot>
    </template>
    <template #right-icon>
      <i class="iconfont iconicon_more righticon"></i>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'MMcell',
  props: {
    title: {
      type: String
    },
    value: {
      type: [String, Number]
    },
    classicon: {
      type: String
    }
  },
  // ['title', 'value', 'classicon'],
  data () {
    return {}
  },
  methods: {
    clickCell () {
      // this.$emit('click')
      window.console.log('ahhhhh')
      window.console.log(this.classicon)
    }
  }
}
</script>

<style lang="less">
.cell {
  border-radius: 8px;
  height: 54px;
  .icon_right {
    padding-right: 12px;
    font-size: 20px;
  }
  .righticon {
    color: #545671;
    font-size: 14px;
    padding-left: 9px;
  }
}
</style>
