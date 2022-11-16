<template>
  <div class="home">
    <div class="nav-bar-wrap">
      旅游伴侣
    </div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <HomeSearchBox></HomeSearchBox>
  </div>
</template>

<script setup>
import HomeSearchBox from './components/home-search-box.vue';
import useHomeStore from '@/stores/modules/home'
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchcategories();

</script>

<style lang="less" scoped>
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