<template>
  <div class="tabbar">
    <div class="tabbar-item" @click="handleRouter('/home')">
      <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>

    <div class="tabbar-item" @click="handleRouter('/favor')">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>

    <div class="tabbar-item" @click="handleRouter('/order')">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>

    <div class="tabbar-item" @click="handleRouter('/message')">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const handleRouter = (link) => {
  router.push(link)
}

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
    img {
      width: 26px;
      margin-right: 2px;
    }
    .text {
      padding-top: 2px;
      font-size: 12px;
    }
  }
}
</style>