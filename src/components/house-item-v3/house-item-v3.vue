<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="">
      </div>

      <div class="infos">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span class="text">{{itemData?.location}}</span>
        </div>
        <div class="name">{{itemData?.houseName}}</div>
        <div class="summary">{{itemData?.summaryText}}</div>
        <div class="price">
          <div class="new">{{"￥"+itemData?.finalPrice}}</div>
          <div class="old">{{"￥"+itemData?.productPrice}}</div>
          <div class="tip">{{itemData?.priceTipBadge?.text}}</div>
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
      bottom: 0;
      padding: 8px 10px;
      .location {
        display: flex;
        img {
          width: 12px;
          height: 12px;
        }
        .text {
          font-size: 12px;
          color: #666;
          margin-left: 2px;
        }
      }

      .summary {
        font-size: 12px;
        color: #666;
      }
      .name {
        color: #333;
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        align-items: center;
        margin: 8px 0;
        .new {
          color: #ff9654;
          font-size: 14px;
        }
        .old {
          margin: 0 3px;
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
        }
        .tip {
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          color: #fff;
          padding: 0 6px;
          border-radius: 8px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>