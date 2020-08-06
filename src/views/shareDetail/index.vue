<template>
  <div class="experience-detail-container">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 顶部 -->
    <van-skeleton v-if="shareDetail === ''" title avatar :row="20" />
    <div v-else>
      <div class="top-box" v-show="shareDetail.author.avatar">
        <div class="title">
          {{ shareDetail.title }}
        </div>
        <div class="info-box">
          <img :src="shareDetail.author.avatar" alt="" />
          <div class="name-box">
            <span class="name">{{ shareDetail.author.nickname }}</span>
            <span class="time">{{ shareDetail.created_at | formatTime }}</span>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="experience-content" v-html="shareDetail.content"></div>
    </div>
    <!-- 评论 -->
    <div class="comment-box">
      <!-- 顶部评论 -->
      <div class="title">评论<span class="num">68</span></div>
      <!-- 每一项 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="comment" v-for="item in commentList" :key="item.id">
          <!-- 姓名 点赞区域 -->
          <div class="info-box">
            <img :src="item.author.avatar" alt="" />
            <div class="name-box" @click="showPop(item)">
              <span class="name">{{ item.author.nickname }}</span>
              <span class="time">{{ item.created_at | formatTime }}</span>
            </div>
            <div class="zan-box">
              <span>{{ item.star }}</span>
              <i class="iconfont iconbtn_dianzan_small_nor"></i>
            </div>
          </div>
          <!-- 评论内容 -->
          <div class="content-box">
            <div class="content">{{ item.content }}</div>
            <div class="reply-box" v-if="item.children_comments.length > 0">
              <div
                class="reply"
                v-for="it in item.children_comments"
                :key="it.id"
              >
                <span class="name">{{ it.author }}:</span>
                {{ it.content }}
              </div>
            </div>
          </div>
          <!-- 回复评论 -->
        </div>
      </van-list>

      <!-- <div class="comment"> -->
      <!-- 姓名 点赞区域 -->
      <!-- <div class="info-box">
          <img src="../../assets/logo.png" alt="" />
          <div class="name-box">
            <span class="name">浩子</span>
            <span class="time">3小时前</span>
          </div>
          <div class="zan-box">
            <span>68</span>
            <i class="iconfont iconbtn_dianzan_small_nor"></i>
          </div>
        </div> -->
      <!-- 评论内容 -->
      <!-- <div class="content-box">
          <div class="content">点赞，很有收获呢</div>
          <div class="reply-box">
            <div class="reply">
              <span class="name">小李:</span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              velit ex accusantium enim cupiditate nostrum quibusdam nemo, iure
              modi quod fugit quasi rerum inventore eaque hic minima sunt
              voluptatibus mollitia!
            </div>
            <div class="reply">
              <span class="name">小黑:</span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <!-- 底部盒子 -->
    <div class="bottom-box">
      <div class="input" @click="showPop()">我来补充两句</div>
      <div class="shoucang">
        <i class="iconfont iconbtn_shoucang_nor"></i>
        234
      </div>
      <div class="star" @click="likeArticles" :class="{ active: isStar }">
        <i class="iconfont iconbtn_dianzan_small_nor"></i>
        {{ num }}
      </div>
      <div class="share" @click="showSharePop">
        <i class="iconfont iconbtn_share"></i>
        998
      </div>
    </div>
    <!-- 底部回复弹出层 -->
    <van-popup
      class="input-pop"
      v-model="show"
      position="bottom"
      :style="{ height: '24%' }"
    >
      <van-field
        autosize
        type="textarea"
        autofocus
        v-model="value"
        :placeholder="placeholder"
        rows="4"
      />
      <span @click="sendBtn">发送</span>
    </van-popup>
    <!-- 分享弹出层 -->
    <van-popup v-model="showShare">
      <div class="share-box" ref="sharebox">
        <div class="text">
          长按图片下载并分享
        </div>
        <div class="share-content-box">
          <div class="title">
            {{ shareDetail.title }}
          </div>
          <div class="user-box">
            <img :src="shareDetail && shareDetail.author.avatar" alt="" />
            <span>{{ shareDetail && shareDetail.author.nickname }}</span>
          </div>
          <div class="content">
            {{ shareDetail.contentText }}
          </div>
          <img class="logo" src="../../assets/mians.png" alt="" />
          <img class="code" :src="qrCodeUrl" alt="" />
          <div class="direction">长按识别二维码查看原文</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
// 导入cqcode
import QRCode from 'qrcode'
import html2canvas from 'html2canvas'
import { mapMutations, mapState } from 'vuex'
import {
  apiShareDetail,
  apiShareComment,
  apiArticlesComment,
  apiLikeArticles
} from '@/api/find.js'
export default {
  data () {
    return {
      // 是否显示弹出层
      show: false,
      showShare: false,
      value: '',
      // 面经详情
      shareDetail: '',
      //   是否加载
      loading: false,
      //   加载完毕
      finished: false,
      // 索引
      start: 0,
      // 个数
      limit: 5,
      // 评论
      commentList: [],
      // 评论回复
      children_comments: [],
      // 评论提示
      placeholder: '我来补充两句',
      // 回复
      parantComment: '',
      num: 0,
      // 二维码
      qrCodeUrl: ''
    }
  },
  async mounted () {
    const codeUrl = await QRCode.toDataURL(window.location.href)
    this.qrCodeUrl = codeUrl
  },
  computed: {
    ...mapState(['userInfo']),
    isStar () {
      if (this.userInfo) {
        const id = +this.$route.params.id
        const isStar = this.userInfo.starArticles.includes(id)
        return isStar
      } else {
        return false
      }
    }
  },
  created () {
    apiShareDetail(this.$route.params.id).then(res => {
      // console.log(res)
      if (res.data.author.avatar) {
        res.data.author.avatar =
          process.env.VUE_APP_URL + res.data.author.avatar
      }
      this.shareDetail = res.data
    })
  },
  methods: {
    ...mapMutations(['SETPROPVALUE']),
    // 分享点击事件
    async showSharePop () {
      await this.$checkLogin()
      this.showShare = true
      this.$nextTick(async () => {
        const canvas = await html2canvas(this.$refs.sharebox, {
          // 解决头像不显示问题
          allowTaint: true,
          useCORS: true
        })
        const imgUrl = canvas.toDataURL()
        console.log(imgUrl)
      })
    },
    // 点赞点击事件
    async likeArticles () {
      await this.$checkLogin()
      const res = await apiLikeArticles({ article: this.$route.params.id })
      console.log(res)
      this.SETPROPVALUE({
        propName: 'starArticles',
        propValue: res.data.list
      })
      this.num = res.data.num
    },
    // 发送点击事件
    async sendBtn () {
      try {
        await this.$checkLogin()
        const data = {
          content: this.value
        }
        if (this.parantComment) {
          data.parent = this.parantComment.id
        } else {
          data.article = this.$route.params.id
        }
        const res = await apiArticlesComment(data)
        console.log(res)
        if (res.data.parent) {
          this.parantComment.children_comments.push(res.data)
          this.parantComment = ''
        } else {
          if (res.data.author.avatar) {
            res.data.author.avatar =
              process.env.VUE_APP_URL + res.data.author.avatar
          }
          this.commentList.unshift(res.data)
        }
        this.$toast.success('发布成功')
        this.show = false
        this.value = ''
      } catch (error) {
        console.log('出错了哦', error)
      }
    },
    showPop (item) {
      this.parantComment = item
      // console.log(item)
      // 如果有值
      if (item) {
        this.placeholder = `回复:${item.author.nickname}`
      } else {
        this.placeholder = '我来补充两句'
      }
      this.show = true
    },
    // 触底加载
    onLoad () {
      apiShareComment({
        id: this.$route.params.id,
        limit: this.limit,
        start: this.start
      }).then(res => {
        console.log(res)
        res.data.list.forEach(v => {
          if (v.author.avatar) {
            v.author.avatar = process.env.VUE_APP_URL + v.author.avatar
          }
        })
        this.commentList.push(...res.data.list)
        this.loading = false
        this.start += this.limit
        if (this.commentList.length > res.data.total) {
          this.finished = true
        }
        this.children_comments = this.commentList.children_comments
      })
    }
  }
}
</script>

<style lang="less">
.experience-detail-container {
  .active {
    color: @main-color !important;
  }
  width: 375px;
  background-color: @white-color;
  overflow: hidden;
  .van-nav-bar__left {
    padding-left: 0;
  }
  .iconbtn_nav_back {
    font-size: 44px;
  }
  .top-box {
    background-color: @white-color;
    padding: 15px;
    .title {
      font-size: 18px;
      font-weight: 500;
    }
  }
  .info-box {
    margin-top: 15px;
    display: flex;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 9px;
    }
    .name-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      .name {
        font-size: 12px;
        font-weight: 600;
        color: @subdominant-font-color;
      }
      .time {
        font-size: 12px;
        color: @minor-font-color;
      }
    }
    .zan-box {
      span {
        color: @minor-font-color;
        font-size: 12px;
      }
      .iconfont {
        color: @minor-font-color;
        font-size: 24px;
      }
    }
  }
  .experience-content {
    padding: 15px;
    font-size: 16px;
    color: @main-font-color;
    background-color: @white-color;
    img {
      width: 100%;
      display: block;
    }
  }
  .comment-box {
    margin-top: 10px;
    background-color: @white-color;
    padding: 26px 15px;
    .title {
      font-size: 18px;
      font-weight: 500;
      position: relative;
      span {
        color: @minor-font-color;
        font-size: 12px;
        position: absolute;
        left: 40px;
        top: -5px;
      }
    }
    .content-box {
      padding-left: 44px;
      .content {
        margin-top: 11px;
        font-size: 16px;
        color: @main-font-color;
        line-height: 27px;
      }
      .reply-box {
        margin-top: 5px;
        padding-top: 5px;
        padding-left: 15px;
        padding-bottom: 12px;
        background: @border-color;
        .reply {
          font-size: 14px;
          color: @subdominant-font-color;
          word-break: break-all;
          &:not(:first-child) {
            margin-top: 15px;
          }
          .name {
            font-weight: 500;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .bottom-box {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 85px;
    display: flex;
    box-sizing: border-box;
    padding: 10px 15px 0;
    background-color: @white-color;
    width: 375px;
    justify-content: space-between;
    .input {
      height: 34px;
      background: @border-color;
      border-radius: 4px;
      flex: 1;
      font-size: 14px;
      margin-top: 10px;
      color: @subdominant-font-color;
      margin-right: 24px;
      line-height: 34px;
      padding-left: 6px;
    }
    div:not(.input) {
      font-size: 12px;
      color: @subdominant-font-color;
      i {
        display: block;
        font-size: 28px;
      }
    }
    .shoucang {
      margin-right: 24px;
    }
    .star {
      text-align: center;
      margin-right: 24px;
    }
  }
  .input-pop {
    width: 375px;
    padding: 25px 15px 0;
    overflow: hidden;
    // 弹出层
    .van-cell::after {
      border-bottom: none;
    }
    .van-field {
      height: 99px;
      width: 100%;
      background: @border-color;
      border-radius: 4px;
    }
    span {
      font-size: 16px;
      color: @subdominant-font-color;
      float: right;
      margin-top: 11px;
    }
  }
  // 底部弹出层
  .share-box {
    width: 311px;
    height: 553px;
    background-size: 100% 100%;
    background-position-x: 0;
    background-position-y: 0;
    padding: 0 15px 15px;
    background-image: url('../../assets/bg.png');
    display: flex;
    flex-direction: column;
    .text {
      text-align: center;
      font-size: 12px;
      color: @white-color;
      padding: 15px;
    }
    .share-content-box {
      flex: 1;
      background-color: @white-color;
      border-radius: 10px;
      padding: 0 15px;
      .title {
        font-size: 16px;
        margin-top: 20px;
      }
      .user-box {
        margin-top: 15px;
        display: flex;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          margin-right: 5px;
        }
        span {
          font-size: 12px;
        }
      }
      .content {
        font-size: 16px;
        margin-top: 20px;
        height: 165px;
        overflow: hidden;
        position: relative;
        &::after {
          content: '';
          width: 100%;
          bottom: 0;
          left: 0;
          height: 25px;
          background-color: @white-color;
          opacity: 0.9;
          position: absolute;
        }
      }
      .logo {
        width: 150px;
        display: block;
        margin: 20px auto;
      }
      .code {
        margin: 0 auto;
        display: block;
        width: 80px;
      }
      .direction {
        font-size: 12px;
        text-align: center;
        margin-top: 20px;
        color: @minor-font-color;
      }
    }
  }
}
</style>
