<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="">
      </div>

      <div class="infos">
        <div class="summary">{{itemData?.summaryText}}</div>
        <div class="name">{{itemData?.houseName}}</div>
        <div class="price">
          <van-rate :model-value="itemScore" color="#ffffff" :size="15" readonly allow-half />
          <div class="new">￥{{itemData?.finalPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";


const itemScore = computed(() => Number(props.itemData.commentScore))

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  .item-inner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }

    .infos {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.3);

      .summary {
        font-size: 12px;
      }
      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-top: 10px;
      }
    }
  }
}
</style>