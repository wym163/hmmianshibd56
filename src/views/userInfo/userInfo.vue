<template>
  <div class="userInfo">
    <navbar class="header">
      <template #title>
        <div>我的资料</div>
      </template>
    </navbar>
    <div class="w">
      <div class="avatar">
        <MMcell @clickCell="toEditInfo('avatar')" style="height:60px" title="头像">
          <template>
            <img class="avatarimg" :src="userInfo.avatar" alt="" />
          </template>
        </MMcell>
      </div>
      <van-cell-group class="van-cell-group">
        <MMcell @clickCell="toEditInfo('nickname')" title="昵称" :value="userInfo.nickname"></MMcell>
        <MMcell
          title="性别"
          :value="userGender"
          @clickCell="showPicker = true"
        ></MMcell>
        <MMcell
          title="地区"
          :value="userArea"
          @clickCell="showArea = true"
        ></MMcell>
        <MMcell @clickCell="toEditInfo('intro')" title="个人简历" :value="userInfo.intro"></MMcell>
      </van-cell-group>
      <van-button @click="btnExit" type="default" class="userInfoBottom">
        确定退出
      </van-button>
      <!-- 弹出层:性别 -->
      <van-popup v-model="showPicker" position="bottom" @closed="onCancel">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="onCancel"
          @confirm="onConfirm"
          :default-index="userInfo.gender"
          ref="genderPicker"
        />
      </van-popup>
      <!-- 弹出层：地区 -->
      <van-popup v-model="showArea" round position="bottom" @closed="cancelArea">
        <van-area
          title="标题"
          :value="userInfo.area"
          :area-list="areaData"
          @confirm="conFirmArea"
          @cancel="cancelArea"
          :columns-num="2"
          ref="area"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { removeToken } from '@/utils/Local.js'
import { Dialog } from 'vant'
import { apiEditInfo } from '@/api/user.js'
import areaData from '@/utils/area.js'
export default {
  name: 'userInfo',
  data () {
    return {
      showPicker: false,
      showArea: false,
      // 性别数据
      columns: ['未知', '男孩子', '女孩子'],
      // 省市区数据
      areaData
    }
  },
  created () {},
  computed: {
    ...mapGetters(['userGender', 'userArea']),
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['SETUSERINFO', 'SETISLOGIN', 'SETPROPVALUE']),
    // 地区确定点击事件
    conFirmArea (cityData) {
      console.log(cityData)
      this.$toast.loading({ duration: 0 })
      apiEditInfo({ area: cityData[1].code }).then(res => {
        this.$toast.success('修改成功')
        this.showArea = false
        this.SETPROPVALUE({
          propName: 'area',
          propValue: cityData[1].code
        })
      })
    },
    // 地区取消点击事件
    cancelArea () {
      this.showArea = false
      this.$refs.area.reset(this.userInfo.area)
    },
    // 性别确定点击事件
    onConfirm (value, index) {
      // console.log(value)
      // console.log(index)
      // this.SETPROPVALUE(value, index)
      this.$toast.loading({ duration: 0 })
      apiEditInfo({ gender: index }).then(res => {
        this.$toast.success('修改成功')
        this.showPicker = false
        // window.console.log(res)
        this.SETPROPVALUE({
          propName: 'gender',
          propValue: index
        })
      })
    },
    // 性别取消点击事件
    onCancel () {
      this.$refs.genderPicker.setColumnIndex(0, this.userInfo.gender)
      this.showPicker = false
    },
    btnExit () {
      Dialog.confirm({
        title: '提示',
        message: '确认退出'
      })
        .then(() => {
          removeToken()
          // window.console.log(123)
          this.SETUSERINFO('')
          this.SETISLOGIN(false)
          this.$router.push('/login')
        })
        .catch(() => {
          // on cancel
          window.console.log(456)
        })
    },
    toEditInfo (prop) {
      this.$router.push(`/editInfo?prop=${prop}`)
    }
  }
}
</script>

<style lang="less">
.userInfo {
  .header {
    margin-bottom: 18px;
  }
  .avatar {
    margin-bottom: 10px;
  }
  .van-cell-group {
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  .userInfoBottom {
    text-align: center;
    line-height: 50px;
    background: #ffffff;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    border: 0px;
    font-size: 16px;
    font-weight: 400;
    color: #e40137;
  }
}
.avatarimg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
