<template>
  <div class="my">
    <div class="header">
      <!-- <div class="wifi"></div> -->
      <div class="w">
        <div class="top">
          <div class="user">
            <div>{{ $store.state.userInfo.nickname }}</div>
            <p>{{ $store.state.userInfo.intro }}</p>
          </div>
          <img
            class="userimg"
            :src="imgUrl"
            alt=""
          />
        </div>
        <div class="center">
          <div>
            <p>298</p>
            <span>累计答题</span>
          </div>
          <div>
            <p>98</p>
            <span>收藏题目</span>
          </div>
          <div>
            <p>198</p>
            <span>我的错题</span>
          </div>
          <div>
            <p>76%</p>
            <span>正确率</span>
          </div>
        </div>
        <MMcell
          class="job"
          title="我的岗位"
          value="产品经理"
          classicon="iconicon_mine_gangwei"
        ></MMcell>
        <!-- <van-cell
          center
          class="job"
          title="单元格"
          icon="location-o"
          is-link
          value="内容"
        >
          <template #icon>
            <i class="iconfont iconicon_mine_gangwei icon_right"></i>
          </template>
        </van-cell> -->
      </div>
    </div>
    <div class="content">
      <div class="w">
        <div class="contentdata">
          <div class="data">面经数据</div>
          <div class="items">
            <div class="item">
              <div class="title">昨日阅读<span>+300</span></div>
              <p>17</p>
              <span>阅读总数</span>
            </div>
            <div class="item">
              <div class="title">昨日获赞<span>+300</span></div>
              <p>297</p>
              <span>获赞总数</span>
            </div>
            <div class="item">
              <div class="title">昨日新增<span>+12</span></div>
              <p>187</p>
              <span>评论总数</span>
            </div>
          </div>
        </div>
        <div class="dataList">
          <!-- <van-cell-group>
            <van-cell
              class="job1"
              title="我的面经分享"
              :border="false"
              is-link
              value="21"
            >
              <template #icon>
                <i class="iconfont iconicon_mine_mianjing icon_right"></i>
              </template>
            </van-cell>
            <van-cell title="我的消息" :border="false" is-link value="98">
              <template #icon>
                <i class="iconfont iconicon_mine_xiaoxi icon_right"></i>
              </template>
            </van-cell>
            <van-cell title="收藏的题库" :border="false" is-link value="32">
              <template #icon>
                <i class="iconfont iconicon_mine_tikushoucang icon_right"></i>
              </template>
            </van-cell>
            <van-cell title="收藏的企业" :border="false" is-link value="32">
              <template #icon>
                <i class="iconfont iconicon_mine_qiyeshoucang icon_right"></i>
              </template>
            </van-cell>
            <van-cell title="我的错题" :border="false" is-link value="123">
              <template #icon>
                <i class="iconfont iconicon_mine_cuoti icon_right"></i>
              </template>
            </van-cell>
            <van-cell
              class="job2"
              title="收藏的面试经验"
              :border="false"
              is-link
              value="166"
            >
              <template #icon>
                <i class="iconfont iconxingxing2 icon_right"></i>
              </template>
            </van-cell>
          </van-cell-group> -->
          <van-cell-group class="van-cell-group">
            <MMcell
              title="我的面经分享"
              value="21"
              classicon="iconicon_mine_mianjing"
            ></MMcell>
            <MMcell
              title="我的消息"
              value="98"
              classicon="iconicon_mine_xiaoxi"
            ></MMcell>
            <MMcell
              title="收藏的题库"
              value="32"
              classicon="iconicon_mine_tikushoucang"
            ></MMcell>
            <MMcell
              title="收藏的企业"
              value="32"
              classicon="iconicon_mine_qiyeshoucang"
            ></MMcell>
            <MMcell
              title="我的错题"
              value="123"
              classicon="iconicon_mine_cuoti"
            ></MMcell>
            <MMcell
              title="收藏的面试经验"
              value="166"
              classicon="iconxingxing2"
            ></MMcell>
          </van-cell-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MMcell from './MMcell'
// import store from '@/store/index'
export default {
  name: 'my',
  data () {
    return {
      imgUrl: process.env.VUE_APP_URL + this.$store.state.userInfo.avatar
    }
  },
  // created () {
  //   window.console.log(this.$store.state.userInfo.nickname)
  // },
  methods: {},
  components: {
    MMcell
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
      margin-top: 31px;
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
