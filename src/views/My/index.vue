<template>
  <div class="my">
    <div class="header">
      <!-- <div class="wifi"></div> -->
      <div class="w">
        <div class="top">
          <div class="user">
            <div>{{ userInfo.nickname }}</div>
            <p>{{ userInfo.intro }}</p>
          </div>
          <img
            @click="toUserInfo"
            class="userimg"
            :src="userInfo.avatar"
            alt=""
          />
        </div>
        <div class="center">
          <div class="center_c">
            <p>{{ userInfo.submitNum }}</p>
            <span>累计答题</span>
          </div>
          <div class="center_c">
            <p>{{ userInfo.collectArticles.length }}</p>
            <span>收藏题目</span>
          </div>
          <div class="center_c">
            <p>{{ userInfo.errorNum }}</p>
            <span>我的错题</span>
          </div>
          <div class="center_c">
            <p>
              {{
                (
                  ((userInfo.submitNum - userInfo.errorNum) /
                    userInfo.submitNum) *
                  100
                ).toFixed(1)
              }}%
            </p>
            <span>正确率</span>
          </div>
        </div>
        <MMcell
          @clickCell="toEditInfo"
          class="job"
          title="我的岗位"
          :value="userInfo.position"
          classicon="iconicon_mine_gangwei"
        ></MMcell>
      </div>
    </div>
    <div class="content">
      <div class="w">
        <div class="contentdata">
          <div class="data">面经数据</div>
          <div class="items">
            <div class="item">
              <div class="title">
                昨日阅读<span>{{ userInfo.shareData.read.yesterday }}</span>
              </div>
              <p>{{ userInfo.shareData.read.total }}</p>
              <span>阅读总数</span>
            </div>
            <div class="item">
              <div class="title">
                昨日获赞<span>{{ userInfo.shareData.star.yesterday }}</span>
              </div>
              <p>{{ userInfo.shareData.star.total }}</p>
              <span>获赞总数</span>
            </div>
            <div class="item">
              <div class="title">
                昨日新增<span>{{ userInfo.shareData.comment.yesterday }}</span>
              </div>
              <p>{{ userInfo.shareData.comment.total }}</p>
              <span>评论总数</span>
            </div>
          </div>
        </div>
        <div class="dataList">
          <van-cell-group class="van-cell-group">
            <MMcell
              title="我的面经分享"
              value="21"
              classicon="iconicon_mine_mianjing"
            ></MMcell>
            <MMcell
              title="我的消息"
              :value="userInfo.systemMessages"
              classicon="iconicon_mine_xiaoxi"
            ></MMcell>
            <MMcell
              title="收藏的题库"
              :value="userInfo.collectQuestions.length"
              classicon="iconicon_mine_tikushoucang"
            ></MMcell>
            <MMcell
              title="收藏的企业"
              value="32"
              classicon="iconicon_mine_qiyeshoucang"
            ></MMcell>
            <MMcell
              title="我的错题"
              :value="userInfo.errorQuestions.length"
              classicon="iconicon_mine_cuoti"
            ></MMcell>
            <MMcell
              title="收藏的面试经验"
              :value="userInfo.collectArticles.length"
              classicon="iconxingxing2"
            ></MMcell>
          </van-cell-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'my',
  data () {
    return {}
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    toUserInfo () {
      this.$router.push('/userInfo')
    },
    toEditInfo () {
      this.$router.push('/editInfo?prop=position')
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.w {
  width: 345px;
  margin: 0 auto;
}
.my {
  .header {
    height: 260px;
    background: linear-gradient(to right, #ce0031, #b8002c);
    position: relative;
    .wifi {
      width: 375px;
      height: 44px;
      background-color: pink;
    }
    .top {
      position: relative;
      padding-top: 31px;
      display: flex;
      // justify-content: space-around;
      .user {
        div {
          height: 30px;
          font-size: 22px;
          color: @white-color;
        }
        p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
      .userimg {
        border: 3px solid rgba(255, 255, 255, 0.38);
        position: absolute;
        left: 77%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .center {
      display: flex;
      justify-content: space-around;
      align-content: center;
      margin-top: 31px;
      .center_c {
        text-align: center;
      }
      p {
        color: #fff;
        font-size: 22px;
      }
      span {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
    .job {
      position: absolute;
      bottom: -18px;
      width: 345px;
      height: 55px;
      background: #ffffff;
      border-radius: 8px;
    }
  }
  .content {
    .contentdata {
      width: 345px;
      height: 142px;
      background-color: #ffffff;
      border-radius: 8px;
      margin-top: 28px;
      margin-bottom: 10px;
      .data {
        font-size: 14px;
        font-weight: 600;
        padding-top: 19px;
        padding-left: 15px;
        padding-bottom: 17px;
      }
      .items {
        display: flex;
        justify-content: space-between;
        .item {
          display: flex;
          flex-direction: column;
          padding: 0px 25px;
          text-align: center;
          .title {
            font-size: 10px;
            color: rgba(180, 180, 180, 0.7);
            padding-bottom: 10px;
            span {
              color: #00b8d4;
            }
          }
          p {
            font-size: 22px;
            padding-bottom: 6px;
          }
          span {
            font-size: 12px;
            color: rgba(84, 86, 113, 1);
          }
        }
      }
    }
    .dataList {
      margin-bottom: 20px;
      .van-cell-group {
        border-radius: 8px;
        overflow: hidden;
      }
      .icon_right {
        padding-right: 12px;
        font-size: 20px;
      }
      // .job1 {
      //   border-radius: 8px 8px 0px 0px;
      // }
      // .job2 {
      //   border-radius: 0px 0px 8px 8px;
      // }
    }
  }
}
</style>
