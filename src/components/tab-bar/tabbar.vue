<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#ff9854">
      <template v-for="(item,index) in tabbarData" :key="index">
        <van-tabbar-item icon="home-o" :badge="item.text == '消息' ? 99 : null" :to="item.path">
          <span>{{item.text}}</span>
          <template #icon="props">
            <img :src="props.active ? getAssetUrl(item.imageActive) : getAssetUrl(item.image)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import tabbarData from '@/assets/data/tabbar'
import { getAssetUrl } from '@/utils/load_assets'

const router = useRouter();
const active = ref(0);

</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tabbar-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 26px;
      margin-right: 2px;
    }
    .text {
      padding-top: 2px;
      font-size: 12px;
    }
  }
}
</style>