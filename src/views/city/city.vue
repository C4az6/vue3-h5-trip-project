<template>
  <div class="top-page">
    <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick">
    </van-search>

    <van-tabs v-model:active="active" color="#ff9854">
      <van-tab title="国内·港澳台">
      </van-tab>
      <van-tab title="海外">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const searchValue = ref("");

// tab切换
const active = ref();



// 返回上一页
const cancelClick = () => {
  router.back();
};

</script>

<style lang="less" scoped>
</style>