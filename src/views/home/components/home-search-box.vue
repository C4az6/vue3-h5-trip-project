<template>
  <div class="search-box">
    <div class="location">
      <span @click="cityClick" class="city-text">{{currentCity.cityName}}</span>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter();
// 位置/城市点击事件
const positionClick = () => {
  // 获取用户当前的经纬度
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取成功: ", res);
  }, err => {
    console.log("获取失败: ", err);
  })
};

const cityClick = () => {
  router.push('/city');
}

// 获取当前城市
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore)

</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  line-height: initial;
  .city-text {
    font-size: 14px;
  }
  .position {
    margin-left: auto;
    display: flex;
    align-items: center;
    font-size: 12px;
    img {
      width: 18px;
      height: 18px;
      margin-left: 6px;
    }
  }
}
</style>