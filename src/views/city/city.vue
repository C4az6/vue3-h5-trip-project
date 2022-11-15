<template>
  <div class="top-page">
    <div class="top">
      <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick">
      </van-search>

      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value,key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key">
          </van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <template v-for="(v,k) in allCities" :key="k">
        <cityGroup v-show="tabActive === k" :groupData="v"></cityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
import cityGroup from './components/city-group.vue'

const router = useRouter();
const searchValue = ref("");

// 当前激活tab的名称
const tabActive = ref();

// 返回上一页
const cancelClick = () => {
  router.back();
};

// 从store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

// 获取标签切换后的数据
// allCities.value[tabActive.value] 这样写会失去响应式
// const currentGroup = allCities.value[tabActive.value]
// 由于直接获取的数据并不是响应式的，因此需要通过计算属性实现数据响应式
// const currentGroup = computed(() => allCities.value[tabActive.value]);

</script>

<style lang="less" scoped>
// 快速实现局部滚动效果
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>