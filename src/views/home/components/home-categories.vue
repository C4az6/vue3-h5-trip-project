<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <p>{{item.title}}</p>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);

</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  margin-top: 10px;
  padding: 0 10px;
  /* 隐藏滚动条 */
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    flex-shrink: 0;
    img {
      width: 32px;
      height: 32px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>