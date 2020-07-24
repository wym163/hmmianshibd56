<template>
  <van-cell
    @click="clickCell"
    :title="title"
    :border="false"
    is-link
    :value="value"
  >
    <template #icon>
      <i class="iconfont" :class="iconclass"></i>
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    iconclass: {
      type: String,
      default: ''
    },
    value: {
      type: String
    }
  },
  data () {
    return {}
  },
  methods: {
    clickCell () {
      this.$emit('click')
    }
  }
}
</script>

<style></style>
