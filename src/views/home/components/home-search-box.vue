<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <span @click="cityClick" class="city-text">{{currentCity.cityName}}</span>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span>入住</span>
          <span>{{startDate}}</span>
        </div>
      </div>

      <div class="stay">共{{stayCount}}晚</div>

      <div class="end">
        <div class="date">
          <span>离店</span>
          <span>{{endDate}}</span>
        </div>
      </div>
    </div>

    <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" :round="false" @confirm="onConfirm" :showConfirm="false">
    </van-calendar>

    <!-- 价格人数宣而战 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggest">
      <template v-for="(item,index) in hotSuggests" :key="index">
        <div class="item" :style="{color: item.tagText.color, background: item.tagText.background.color}">
          {{item.tagText.text}}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="onSearchClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { formatMonthDay, getDiffDays } from '@/utils/format_date'
import useHomeStore from '@/stores/modules/home'
const router = useRouter();

const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore)


/* 城市相关数据 */
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


/* 日期相关数据 */
// 日期范围处理
const nowDate = new Date();
const newDate = new Date().setDate(nowDate.getDate() + 1);
console.log("nowDate: ", nowDate);
console.log("newDate: ", newDate);
const startDate = ref(formatMonthDay(nowDate));
// 动态日期处理
const endDate = ref(formatMonthDay(newDate));
const stayCount = ref(getDiffDays(nowDate, newDate));

// 是否显示日历组件
const showCalendar = ref(false);
// 监听日历点击事件
const onConfirm = (date) => {
  // 设置日期
  const selectStartDate = date[0];
  const selectEndDate = date[1];
  startDate.value = formatMonthDay(selectStartDate)
  endDate.value = formatMonthDay(selectEndDate)
  stayCount.value = getDiffDays(selectStartDate, selectEndDate);
  // 隐藏日历组件
  showCalendar.value = false;
};

/* 搜索点击事件 */
const onSearchClick = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  });
}

</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}
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

.date-range {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  height: 45px;
  .stay {
    font-size: 12px;
    color: lightpink;
  }
  .date {
    display: flex;
    flex-direction: column;
    span:last-child {
      font-size: 14px;
      color: #000;
      margin-top: 4px;
    }
  }
}

.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}
.keyword {
}

.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 45px;
  padding: 0 20px;
  color: #666;
  font-size: 12px;
}

.hot-suggest {
  justify-content: flex-start;
  min-height: 84px;
  margin: 10px 0;
  animation: animate-opacity 0.6s linear;
  .item {
    padding: 3px 6px;
    border-radius: 14px;
    margin: 5px 3px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    margin-top: 10px;
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
    animation: heart-btn 0.6s linear infinite;
  }
}

@keyframes heart-btn {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes animate-opacity {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
  75% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>