<template>
  <div class="userInfo">
    <navbar class="header">
      <template #title>
        <div>我的资料</div>
      </template>
    </navbar>
    <div class="w">
      <div class="avatar">
        <MMcell style="height:60px" title="头像">
          <template>
            <img class="avatarimg" :src="userInfo.avatar" alt="" />
          </template>
        </MMcell>
      </div>
      <van-cell-group class="van-cell-group">
        <MMcell :title="userInfo.nickname"></MMcell>
        <MMcell :title="userGender"></MMcell>
        <MMcell :title="userInfo.area"></MMcell>
        <MMcell title="个人简历" :value="userInfo.intro"></MMcell>
      </van-cell-group>
      <van-button type="default" class="userInfoBottom">
        确定退出
      </van-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'userInfo',
  created () {},
  computed: {
    ...mapGetters(['userGender']),
    ...mapState(['userInfo'])
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
