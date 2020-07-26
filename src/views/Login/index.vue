<template>
  <div class="Login">
    <!-- <div class="wifi"></div> -->
    <van-nav-bar class="left_arrow" left-arrow @click-left="onClickLeft" />
    <div class="w">
      <div class="title">你好，请登录</div>
      <div class="form">
        <van-form @submit="onSubmit">
          <van-field
            v-model="phone"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
          >
            <template #left-icon>
              <i class="iconfont iconbianzu1 icon_right"></i>
            </template>
          </van-field>
          <van-field
            v-model="code"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          >
            <template #left-icon>
              <i class="iconfont iconyanzhengma icon_right"></i>
            </template>
            <template #button>
              <van-button class="codebtn" size="small" type="default">发送验证码</van-button>
            </template>
          </van-field>
          <div class="check">
            <van-checkbox v-model="isCheck" icon-size="0px"
              >登录即同意<span class="blue">《用户使用协议》</span>和<span
                class="blue"
                >《隐私协议》</span
              ></van-checkbox
            >
          </div>
          <div style="margin: 16px;">
            <van-button round block type="danger" native-type="submit">
              确定
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      code: '',
      isCheck: ''
    }
  },
  methods: {
    onClickLeft () {},
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less">
.Login {
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
      border-left: 1px solid #ccc;
    }
    .check {
      margin-top: 15px;
      font-size: 12px;
      margin-bottom: 44px;
      .blue {
        color: #26c2da;
      }
    }
  }
}
</style>
