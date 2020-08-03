<template>
  <div class="edit">
    <navbar
      @onClickRight="saveEdit"
      class="header_nav"
      :right_text="isEdit ? '保存' : ''"
      :title="title"
    >
    </navbar>
    <div class="main-box w">
      <van-field
        v-if="$route.query.prop !== 'avatar'"
        v-model="inputValue"
        class="nickname"
      />
      <van-uploader
        name="files"
        v-else
        v-model="fileList"
        :after-read="afterRead"
        :max-count="1"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { apiEditInfo, apiUpload } from '@/api/user.js'
export default {
  name: 'editInfo',
  data () {
    return {
      inputValue: '',
      title: '',
      fileList: [
        {
          url: ''
        }
      ],
      avatarUrl: ''
    }
  },
  computed: {
    ...mapState(['userInfo']),
    isEdit () {
      return this.inputValue !== this.userInfo[this.$route.query.prop]
    }
  },
  created () {
    // this.isEdit === false
    const prop = this.$route.query.prop
    const obj = {
      avatar: '头像',
      nickname: '昵称',
      intro: '个人简介',
      position: '我的岗位'
    }
    this.title = `修改${obj[prop]}`
    const propValue = this.userInfo[prop]
    // console.log(this.userInfo.nickname)
    if (prop !== 'avatar') {
      this.inputValue = propValue
    } else {
      this.fileList[0].url = propValue
    }
  },
  methods: {
    ...mapMutations(['SETPROPVALUE']),

    // 保存按钮修改文本
    saveEdit () {
      if (this.isEdit === false) return
      // console.log(1)
      const propValue = this.inputValue
      const prop = this.$route.query.prop
      const data = {}
      data[prop] = propValue
      this.$toast.loading({ duration: 0 })
      if (this.$route.query.prop !== 'avatar') {
        apiEditInfo(data).then(res => {
          this.$toast.success('修改成功')
          // console.log(res)
          this.SETPROPVALUE({
            propName: prop,
            propValue
          })
        })
      } else {
        this.$toast.success('修改成功')
        this.SETPROPVALUE({
          propName: this.$route.query.prop,
          propValue: this.avatarUrl
        })
      }
      this.$router.go(-1)
    },
    afterRead (fileInfo) {
      // console.log(1)
      const data = new FormData()
      data.append('files', fileInfo.file)
      apiUpload(data).then(res => {
        this.avatarUrl = process.env.VUE_APP_URL + res.data[0].url
        this.inputValue = res.data[0].id
      })
    }
  }
}
</script>

<style lang="less">
.edit {
  background-color: #ffffff;
  height: 100vh;
  .header_nav {
    color: #000;
    margin-bottom: 20px;
    .title {
      font-size: 18px;
      color: #222222;
    }
  }
  .main-box {
    text-align: center;
    .nickname {
      line-height: 17px;
      height: 34px;
      border-radius: 8px;
      background-color: #f7f4f5;
      color: #181a39;
    }
  }
}
</style>
