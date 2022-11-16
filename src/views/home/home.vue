<template>
  <div class="home">
    <div class="nav-bar-wrap">
      旅游伴侣
    </div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <HomeSearchBox :hotSuggests="hotSuggests"></HomeSearchBox>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomeSearchBox from './components/home-search-box.vue'
import hyRequest from '@/services/request'


const hotSuggests = ref([]);
// 发送网络请求
// 1.热门建议
hyRequest.get({
  url: "/home/hotSuggests"
}).then(res => {
  console.log("response: ", res);
  hotSuggests.value = res.data;
})


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