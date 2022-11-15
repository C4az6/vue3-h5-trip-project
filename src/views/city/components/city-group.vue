<template>
  <div class="city-group">
    <van-index-bar>
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
defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
});

</script>

<style lang="less" scoped>
</style>