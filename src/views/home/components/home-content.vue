<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item) in houseList" :key="item.data.houseId">
        <HouseItemV9 v-if="item.discoveryContentType === 9" :item-data="item.data" />
        <HouseItemV3 v-if="item.discoveryContentType === 3" :item-data="item.data" />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue'


const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);

</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>