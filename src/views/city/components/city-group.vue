<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门"></van-index-anchor>
      <div class="list">
        <template v-for="(group,index) in groupData.hotCities" :key="index">
          <div class="city">{{group.cityName}}</div>
        </template>
      </div>

      <template v-for="(group,index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group"></van-index-anchor>
        <template v-for="(city,index2) in group.cities" :key="index2">
          <van-cell :title="city.cityName"></van-cell>
        </template>
      </template>
    </van-index-bar>

  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
});

const indexList = computed(() => {
  return props.groupData.cities.map(item => item.group)
});
indexList.value.unshift('#')

</script>

<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    margin: 6px 0;
  }
}
</style>