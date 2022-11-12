<template>
  <div class="home">
    <div class="nav-bar-wrap">
      旅游伴侣
    </div>

    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <div class="location">
      <span class="city-text">广州</span>
      <div class="position">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>

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
</style>