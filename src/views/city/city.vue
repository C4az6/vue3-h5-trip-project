<template>
  <div class="top-page">
    <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick">
    </van-search>

    <van-tabs v-model:active="active" color="#ff9854">
      <template v-for="(value,key) in allCities" :key="key">
        <van-tab :title="value.title">
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';

const router = useRouter();
const searchValue = ref("");

// tab切换
const active = ref();

// 返回上一页
const cancelClick = () => {
  router.back();
};

// 从store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

</script>

<style lang="less" scoped>
</style>