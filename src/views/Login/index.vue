<template>
  <div class="login">
    <navbar></navbar>
    <!-- <van-loading color="#1989fa" vertical /> -->
    <div class="w">
      <div class="title">你好，请登录</div>
      <div class="form">
        <van-form :model="form" @submit="onSubmit">
          <van-field
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
          <van-field
            v-model="form.code"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          >
            <template #left-icon>
              <i class="iconfont iconyanzhengma icon_right"></i>
            </template>
            <template #button>
              <van-button
                @click="getCode"
                class="codebtn"
                size="small"
                type="default"
                >获取验证码</van-button
              >
            </template>
          </van-field>
          <div class="check">
            <p>
              登录即同意<span class="blue">《用户使用协议》</span>和<span
                class="blue"
                >《隐私协议》</span
              >
            </p>
          </div>
          <van-button
            @click="toLogin"
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
export default {
  data () {
    return {
      form: {
        mobile: '18888881111',
        code: ''
      }
    }
  },
  components: {
    navbar
  },
  methods: {
    onClickLeft () {},
    onSubmit (values) {
      // console.log('submit', values)
    },
    getCode () {
      apiGetCode(this.form).then(res => {
        window.console.log(res)
        this.$toast.success(res.data)
      })
    },
    toLogin () {
      apiGetLogin(this.form).then(res => {
        if (res.code === 200) {
          window.console.log(res)
          setToken(res.data.jwt)
          this.$toast.success(res.message)
          this.$router.push('/my')
          this.$store.state.userInfo = res.data.user
        }
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
  }
  .form {
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
