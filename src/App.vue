<template>
  <div class="app">
    <router-view></router-view>

    <!-- <tab-bar></tab-bar> -->
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
// 拿到当前活跃的路由对象
const route = useRoute();
import TabBar from './components/tab-bar/tabbar.vue'
</script>

<style lang="less" scoped>
</style> 