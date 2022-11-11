<template>
  <div class="tabbar">
    <div class="tabbar-item">
      <img src="" alt="">
      <span class="text">首页</span>
    </div>

    <div class="tabbar-item">
      收藏
    </div>

    <div class="tabbar-item">
      订单
    </div>

    <div class="tabbar-item">
      消息
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tabbar-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>