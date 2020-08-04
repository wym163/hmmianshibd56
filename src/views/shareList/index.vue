<template>
  <div class="experience-list-container">
    <van-sticky>
      <div class="top-box">
        <navbar title="面试技巧"></navbar>
        <div class="search-box" @click="$router.push('/shareSearch')">
          <div class="content">
            <i class="iconfont iconicon_search"></i> 请输入关键字
          </div>
        </div>
      </div>
    </van-sticky>
    <!-- 列表 -->
    <div class="experience-box">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="experience-list">
          <MMShareList
            v-for="item in shareList"
            :key="item.id"
            :item="item"
          ></MMShareList>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { apiShareArticles } from '@/api/find.js'
export default {
  data () {
    return {
      // 列表数据
      shareList: [],
      // 是否加载
      loading: false,
      // 是否加载完毕
      finished: false,
      // 起始索引
      start: 0,
      // 个数
      limit: 5
    }
  },
  created () {
    // apiShareArticles().then(res => {
    //   console.log(res)
    //   res.data.list.forEach(v => {
    //     if (v.author.avatar) {
    //       v.author.avatar = process.env.VUE_APP_URL + v.author.avatar
    //     }
    //   })
    //   this.shareList = res.data.list
    // })
  },
  methods: {
    onLoad () {
      // 发送接口拿数据
      apiShareArticles({ start: this.start, limit: this.limit }).then(res => {
        res.data.list.forEach(v => {
          if (v.author.avatar) {
            v.author.avatar = process.env.VUE_APP_URL + v.author.avatar
          }
        })
        this.shareList.push(...res.data.list)
        this.start += this.limit
        if (this.shareList.length >= res.data.total) {
          this.finished = true
        }
        // 关闭加载
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less">
.experience-list-container {
  min-height: 100vh;
  background: @white-color;
  .top-box{
    background: @white-color;
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .search-box {
    position: relative;
    font-size: 14px;
    color: #b3b3b3;
    padding-bottom: 10px;
    .content {
      height: 34px;
      width: 345px;
      margin: 0 auto;
      background: @bg-color;
      border-radius: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid #ebedf0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      border-bottom-width: 0.02667rem;
    }
    .iconfont {
      font-size: 19px;
    }
  }
  .experience-box {
    padding: 0 15px;
    background: @white-color;
  }
}
</style>
