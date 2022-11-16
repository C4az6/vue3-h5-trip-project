<template>
  <div class="home">
    <div class="nav-bar-wrap">
      旅游伴侣
    </div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <HomeSearchBox />
    <HomeCategories />
    <HomeContent />

    <van-button @click="addClick" type="success">加载更多</van-button>
  </div>
</template>

<script setup>
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategories from './components/home-categories.vue';
import HomeContent from './components/home-content.vue'
import useHomeStore from '@/stores/modules/home'
import { ref } from 'vue';
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchcategories();
homeStore.fetchHouseListData();

const addClick = () => {
  homeStore.fetchHouseListData();
};

</script>

<style lang="less" scoped>
.home {
  background: #f6f5f7;
}
.nav-bar-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  background-color: #fff;
  color: var(--primary-color);
  font-size: 16px;
}
</style>