<template>
  <div class="edit">
    <navbar class="header_nav">
      <template #title>
        <div class="title">
          修改昵称
        </div>
      </template>
      <template #right>
        <div>
          保存
        </div>
      </template>
    </navbar>
    <div class="w">
      <van-cell class="nickname" value="续命咖啡" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.edit {
  background-color: #FFFFFF;
  .header_nav {
    margin-bottom: 20px;
    .title{
      font-size: 18px;
      font-weight: 600;
      color: #222222;
    }
  }
  .nickname {
    border-radius: 8px;
    background-color: #f7f4f5;
    color: #181a39;
  }
}
</style>
