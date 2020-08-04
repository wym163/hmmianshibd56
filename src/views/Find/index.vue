<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="find">
      <!-- 导航栏 -->
      <navbar :showBack="false" title="发现"></navbar>
      <!-- 面试技巧区域 -->
      <div class="skill">
        <!-- 列表项 -->
        <MMcell title="面试技巧" value="查看更多"></MMcell>
        <div class="list">
          <!-- 有图片 -->
          <div class="item" v-for="item in technicList" :key="item.id">
            <div class="left">
              <h3>
                {{ item.title }}
              </h3>
              <div class="detail-box">
                <div class="time">{{ item.created_at | formatTime }}</div>
                <div class="read">
                  <i class="iconfont iconicon_liulanliang">
                    {{ item.read }}
                  </i>
                </div>
                <div class="star">
                  <i class="iconfont iconicon_dianzanliang">
                    {{ item.star }}
                  </i>
                </div>
              </div>
            </div>
            <div class="cover" v-if="item.cover">
              <img :src="item.cover" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- 市场数据区域 -->
      <div class="market-data">
        <MMcell title="市场数据" value="查看更多"></MMcell>
        <div class="content">
          <div class="tags">
            <span class="tag">
              {{ hotData.city }}
            </span>
            <span class="tag">
              {{ hotData.position }}
            </span>
          </div>
          <!-- 列表 -->
          <div class="data-list">
            <!-- 上箭头 -->
            <div class="item" v-for="(item, index) in hotList" :key="index">
              <div class="time">{{ item.year }}</div>
              <div class="process">
                <div
                  class="step"
                  :style="{
                    width:
                      ((item.salary / hotData.topSalary) * 100).toFixed(1) + '%'
                  }"
                >
                  ￥{{ item.salary }}
                </div>
              </div>
              <div class="arrow-box">
                <i
                  class="iconfont"
                  :class="{
                    iconicon_shangsheng: item.percent > 0,
                    iconicon_xiajiang: item.percent < 0
                  }"
                ></i>
                <span v-if="item.percent">{{ item.percent }}%</span>
              </div>
            </div>
          </div>
          <!-- 更多 -->
          <div class="more" @click="moreClick">
            展开更多
            <i class="iconfont iconicon_zhankai" :class="{ rotate: isAll }"></i>
          </div>
        </div>
      </div>
      <!-- 面经分享 -->
      <div class="share-container">
        <MMcell title="面经分享" value="查看更多"></MMcell>
        <div class="share-content">
          <div class="list" v-for="item in shareList" :key="item.id">
            <div class="hr"></div>
            <div class="item">
              <h3>
                {{ item.title }}
              </h3>
              <div class="desc">
                {{ item.content }}
              </div>
              <div class="detail-box">
                <div class="user">
                  <img :src="item.author.avatar" alt="" />
                  {{ item.author.nickname }}
                </div>
                <div class="time">
                  {{ item.created_at | formatTime }}
                </div>
                <div class="comment">
                  <i class="iconfont iconicon_pinglunliang"></i>
                  {{ item.article_comments }}
                </div>
                <div class="star">
                  <i class="iconfont iconicon_dianzanliang"></i>
                  {{ item.star }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
import { apiTechnicArticles, apiHotData, apiShareArticles } from '@/api/find.js'
import moment from 'moment'
export default {
  name: 'find',
  data () {
    return {
      // 面试技巧列表
      technicList: [],
      // 热门数据
      hotData: {},
      // 存放热门列表
      hotList: [],
      // 是否展开
      isAll: false,
      isLoading: false,
      shareList: []
    }
  },
  methods: {
    getData () {
      // 面试技巧
      apiTechnicArticles().then(res => {
        console.log(res)
        res.data.list.forEach(v => {
          if (v.cover) {
            v.cover = process.env.VUE_APP_URL + v.cover
          }
        })
        this.technicList = res.data.list
      })
      // 热门数据
      apiHotData().then(res => {
        console.log(res)
        // 存数据
        this.hotData = res.data
        // 反转数据顺序
        this.hotData.yearSalary.reverse()
        this.hotList = this.hotData.yearSalary.slice(0, 4)
        console.log(this.hotList)
        console.log(this.hotData)
      })
      // 面经分享
      apiShareArticles().then(res => {
        console.log(res)
        this.shareList = res.data.list
        this.shareList.forEach(v => {
          if (v.author.avatar) {
            v.author.avatar = process.env.VUE_APP_URL + v.author.avatar
          }
        })
      })
    },
    // 下拉刷新
    onRefresh () {
      this.getData()
      this.isLoading = false
    },
    // 点击更多按钮
    moreClick () {
      this.isAll = !this.isAll
      if (this.isAll === true) {
        this.hotList = this.hotData.yearSalary
      } else {
        this.hotList = this.hotData.yearSalary.slice(0, 4)
      }
    }
  },
  created () {
    this.getData()
  },
  filters: {
    // 处理时间
    formatTime (value) {
      value = value.slice(0, value.length - 2)
      moment.locale('zh-cn')
      const time = moment().diff(moment(value), 'days')
      if (time > 1) {
        return moment(value).format('YYYY-MM-DD')
      } else {
        return moment(value).fromNow()
      }
    }
  }
}
</script>

<style lang="less">
.find {
  // 全部设置左侧标题
  .van-cell__title span {
    font-size: 16px;
    font-weight: 600;
  }

  // 面试技巧
  .skill {
    margin-bottom: 10px;
    .list {
      padding: 0 15px;
      background: @white-color;
      .item {
        display: flex;
        align-items: center;
        .left {
          flex: 1;
          h3 {
            font-size: 14px;
            font-weight: 600;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-bottom: 15px;
          }
          .detail-box {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: @minor-font-color;
            .time {
              flex: 1;
            }
            .read {
              margin-right: 20px;
              display: flex;
              align-items: center;
              i {
                margin-right: 10px;
                font-size: 14px;
              }
            }
            .star {
              display: flex;
              align-items: center;
              i {
                margin-right: 10px;
                font-size: 14px;
              }
            }
          }
        }
        .cover {
          margin-left: 20px;
          img {
            display: block;
            width: 113px;
            height: 73px;
            border-radius: 8px;
          }
        }
      }
    }
  }
  // 市场数据
  .market-data {
    .content {
      padding: 0 15px;
    }
    .tags {
      margin-bottom: 20px;
      .tag {
        background: @minor-font-color;
        color: @subdominant-font-color;
        font-size: 12px;
        padding: 5px;
        margin-right: 10px;
        border-radius: 8px;
      }
    }
    // 列表
    .data-list {
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .time {
          font-size: 12px;
          color: @subdominant-font-color;
          margin-right: 15px;
        }
        .process {
          height: 12px;
          background: @minor-font-color;
          border-radius: 8px;
          overflow: hidden;
          margin-right: 15px;
          flex: 1;
          .step {
            height: 100%;
            width: 50%;
            background: @error-color;
            color: @white-color;
            text-align: right;
            font-size: 12px;
            border-radius: 8px;
            padding-right: 5px;
          }
        }
        .arrow-box {
          display: flex;
          align-items: center;
          font-size: 12px;
          width: 50px;
          i {
            font-size: 16px;
            // 下箭头
            &.iconicon_xiajiang {
              color: @error-color;
            }
            // 上箭头
            &.iconicon_shangsheng {
              color: @success-color;
            }
          }
        }
      }
    }
    // 更多
    .more {
      display: flex;
      justify-content: center;
      font-size: 12px;
      color: @subdominant-font-color;
      align-items: center;
      i {
        color: @minor-font-color;
        font-size: 14px;
        &.rotate {
          transform: rotate(180deg);
        }
      }
    }
  }
  // 面经分享
  .share-container {
    background: @white-color;
    margin-bottom: 30px;
    .share-content {
      padding: 0 15px;
    }
    .list {
      .item {
        h3 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .desc {
          font-size: 12px;
          color: @subdominant-font-color;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .detail-box {
          display: flex;
          align-items: center;
          .user {
            display: flex;
            align-items: center;
            color: @subdominant-font-color;
            font-size: 12px;
            flex: 1;
            img {
              width: 22px;
              height: 22px;
              border-radius: 50%;
              margin-right: 10px;
            }
          }
          .time,
          .comment,
          .star {
            font-size: 12px;
            color: @minor-font-color;
          }
          .time {
            margin-right: 20px;
          }
          .comment {
            margin-right: 20px;
            display: flex;
            align-items: center;
            i {
              font-size: 16px;
            }
          }
          .star {
            display: flex;
            align-items: center;
            i {
              font-size: 16px;
            }
          }
        }
      }
      .hr {
        margin: 8px 0px;
        background-color: #ccc;
        height: 0.1px;
      }
    }
  }
}
</style>
