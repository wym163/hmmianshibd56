<template>
  <div class="login">
    <navbar @onClickLeft="onClickLeft"></navbar>
    <!-- <van-loading color="#1989fa" vertical /> -->
    <div class="w">
      <div class="title">你好，请登录</div>
      <div class="form">
        <van-form ref="loginForm" :model="form" @submit="onSubmit">
          <van-field
            name="mobile"
            v-model="form.mobile"
            placeholder="请输入手机号"
            :rules="[
              {
                required: true,
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式不对'
              }
            ]"
          >
            <template #left-icon>
              <i class="iconfont iconbianzu1 icon_right"></i>
            </template>
          </van-field>
          <van-row class="getcode">
            <van-col :span="16">
              <van-field
                v-model="form.code"
                name="code"
                placeholder="请输入验证码"
                :rules="[{ required: true, message: '请填写验证码' }]"
              >
                <template #left-icon>
                  <i class="iconfont iconyanzhengma icon_right"></i>
                </template>
              </van-field>
            </van-col>
            <van-col :span="8">
              <span
                :span="8"
                @click="getCode"
                class="codebtn"
                size="small"
                type="default"
                >{{ btnText }}</span
              >
            </van-col>
          </van-row>
          <div class="check">
            <p>
              登录即同意<span class="blue">《用户使用协议》</span>和<span
                class="blue"
                >《隐私协议》</span
              >
            </p>
          </div>
          <van-button
            class="submit"
            round
            block
            type="danger"
            native-type="submit"
          >
            确定
          </van-button>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import { apiGetCode, apiGetLogin } from '@/api/login'
import { setToken } from '@/utils/Local.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {
        // 手机号
        mobile: '18888881111',
        // 验证码
        code: ''
      },
      // 验证码的文本
      btnText: '获取验证码',
      // 时间
      time: 0
    }
  },
  // 注册组件
  components: {
    navbar
  },
  methods: {
    ...mapMutations(['SETUSERINFO', 'SETISLOGIN']),
    onClickLeft () {
      if (this.$route.query.redirect) {
        this.$router.push('/find')
      } else {
        this.$router.go(-1)
      }
    },
    // form表单提交事件
    onSubmit (value) {
      // window.console.log(value)
      apiGetLogin(value).then(res => {
        if (res.code === 200) {
          window.console.log(res)
          setToken(res.data.jwt)
          this.$toast.success(res.message)
          this.SETUSERINFO(res.data.user)
          // this.$store.commit('SETUSERINFO', res.data.user)
          res.data.user.avatar = process.env.VUE_APP_URL + res.data.user.avatar
          // this.$store.state.isLogin = true
          this.SETISLOGIN(true)
          // this.$router.push('/find')
          if (this.$route.query.redirect) {
            this.$router.push(`${this.$route.query.redirect}`)
          } else {
            this.$router.push('/find')
          }
        }
      })
    },
    // 获取验证码的点击事件
    getCode () {
      this.$refs.loginForm.validate('mobile').then(res => {
        if (this.time !== 0) {
          return
        }
        this.$toast.loading({
          duration: 0
        })
        // 设置时间
        this.time = 60
        // 设置定时器
        const timeOut = setInterval(() => {
          this.time--
          this.btnText = `${this.time}S后重试`
          if (this.time === 0) {
            clearInterval(timeOut)
            this.btnText = '获取验证码'
          }
        }, 1000)
        // 发生验证码接口
        apiGetCode({ mobile: this.form.mobile }).then(res => {
          window.console.log(res)
          this.$toast.success(res.data)
        })
      })
    }
  }
}
</script>

<style lang="less">
.login {
  .wifi {
    width: 375px;
    height: 44px;
    background-color: pink;
  }
  .title {
    margin-top: 50px;
    font-weight: 600;
    margin-bottom: 63px;
    font-size: 18px;
  }
  .form {
    .getcode {
      background-color: #fff;
    }
    .icon_right {
      margin-left: 20px;
      margin-right: 20px;
    }
    .codebtn {
      padding-left: 13px;
      color: #00b8d4;
      border: 0px;
      border-left: 1px solid #f7f4f5;
      font-size: 16px;
      line-height: 44px;
    }
    .check {
      margin-top: 15px;
      font-size: 12px;
      margin-bottom: 44px;
      .blue {
        color: #26c2da;
      }
    }
    .submit {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
