<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
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

      <div class="stay">共一晚</div>

      <div class="end">
        <div class="date">
          <span>离店</span>
          <span>{{endDate}}</span>
        </div>
      </div>
    </div>

    <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" :round="false" @confirm="onConfirm">

    </van-calendar>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { formatMonthDay } from '@/utils/format_date'
const router = useRouter();
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

// 日期范围处理
const nowDate = new Date();
const startDate = ref(formatMonthDay(nowDate));
// 动态日期处理
const endDate = ref(formatMonthDay(nowDate.setDate(nowDate.getDate() + 1)));
// 日期格式化

// 是否显示日历组件
const showCalendar = ref(false);
// 监听日历点击事件
const onConfirm = (date) => {
  // 设置日期
  const selectStartDate = date[0];
  const selectEndDate = date[1];
  startDate.value = formatMonthDay(selectStartDate)
  endDate.value = formatMonthDay(selectEndDate)
  // 隐藏日历组件
  showCalendar.value = false;
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
    color: #666;
  }
  .date {
    display: flex;
    flex-direction: column;
    span:first-child {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }
  }
}

.section {
  display: flex;
  height: 45px;
  padding: 0 20px;
}
</style>