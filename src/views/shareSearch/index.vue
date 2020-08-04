<template>
  <div class="interview-search-container">
    <!-- 顶部 -->
    <div class="top-box">
      <navbar title="面试技巧搜索"></navbar>
      <van-search
        shape="round"
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      >
        <template #left-icon>
          <i class="iconfont iconicon_search"></i>
        </template>
      </van-search>
    </div>
    <!-- 搜索选项 -->
    <div v-if="shareList.length === 0" class="option-box">
      <!-- 热搜区域 -->
      <div class="section">
        <div class="title">大家都在搜索</div>
        <ul class="tags">
          <li
            class="tag"
            v-for="(item, index) in topSearchList"
            :key="index"
            @click="clickAndSearch(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <!-- 历史记录区域 -->
      <div class="section">
        <div class="title">
          历史记录 <span @click="clearHistory">清空</span>
        </div>
        <div class="tags">
          <span
            class="tag"
            v-for="(item, index) in history"
            :key="index"
            @click="clickAndSearch(item)"
            @dblclick="removeItem(index)"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
    <div v-else>
      <MMShareList
        v-for="item in shareList"
        :key="item.id"
        :item="item"
      ></MMShareList>
    </div>
  </div>
</template>

<script>
import { apiShareTopSearch, apiShareArticles } from '@/api/find.js'
import { savaHistory, getHistory, removeHistory } from '@/utils/shareHistory'
export default {
  data () {
    return {
      value: '',
      // 热搜关键词
      topSearchList: [],
      // 自己的搜索记录
      history: getHistory(),
      //   面经列表
      shareList: []
    }
  },
  created () {
    apiShareTopSearch().then(res => {
      //   console.log(res)
      this.topSearchList = res.data
    })
  },
  methods: {
    //   点击标签搜索结果
    clickAndSearch (item) {
      this.value = item
      this.onSearch()
    },
    //   清空搜索记录
    clearHistory () {
      removeHistory()
      this.history = []
    },
    // 搜索事件
    onSearch () {
      console.log('onSearch')
      // 添加到数组去
      this.history.push(this.value)
      // 数组去重
      this.history = [...new Set(this.history)]
      // 判断最多五个搜索记录
      if (this.history.length > 5) {
        this.history.shift()
      }
      // 保存到本地
      savaHistory(this.history)
      apiShareArticles({ q: this.value }).then(res => {
        //   改头像
        res.data.list.forEach(v => {
          if (v.author.avatar) {
            v.author.avatar = process.env.VUE_APP_URL + v.author.avatar
          }
          //   替换标签的文本
          v.title = v.title.replace(this.value, `<span>${this.value}</span>`)
        })
        console.log(res)
        this.shareList = res.data.list
      })
    },
    // 取消事件
    onCancel () {
      console.log('onCancel')
    },
    // 双击删除事件
    removeItem (index) {
      this.history.splice(index, 1)
    }
  }
}
</script>

<style lang="less">
.interview-search-container {
  .top-box {
    padding-bottom: 11px;
    background: @white-color;
    position: relative;
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
    .van-hairline--bottom::after {
      border-bottom-width: 0;
    }
    .van-search__content {
      background: #f7f4f5;
      font-size: 14px;
      color: #b3b3b3;
      .iconfont {
        font-size: 19px;
        color: #b3b3b3;
      }
    }
  }
  // 搜索选项
  .option-box {
    padding: 15px;

    .section {
      margin-bottom: 27px;
      .title {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 12px;
          color: #545671;
        }
      }
      .tags {
        margin-top: 18px;
        display: flex;
        .tag {
          margin-right: 10px;
          margin-bottom: 11px;
          padding: 6px;
          border-radius: 4px;
          font-size: 12px;
          color: @subdominant-font-color;
          background-color: #eceaea;
        }
      }
    }
  }
  .result-box {
    padding: 15px;
  }
}
</style>
