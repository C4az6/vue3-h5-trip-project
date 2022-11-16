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
  </div>
</template>

<script setup>
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategories from './components/home-categories.vue';
import HomeContent from './components/home-content.vue'
import useHomeStore from '@/stores/modules/home'
import { ref } from 'vue';
const homeStore = useHomeStore();

/* 数据初始化 */
homeStore.fetchHotSuggestData();
homeStore.fetchcategories();
homeStore.fetchHouseListData();


// 监听window窗口的滚动
window.addEventListener("scroll", () => {
  /* 
    scrollTop: 距离顶部的值
    scrollHeight: 总共可滚动的值
    clientHeight: 客户端的高度

    判断是否触底的计算公式：scrollTop+clientHeight >= scrollHeight，为true说明触底了
  */
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  // console.log(scrollTop, clientHeight, scrollHeight);
  if (clientHeight + scrollTop >= scrollHeight) {
    homeStore.fetchHouseListData();
  }
})

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