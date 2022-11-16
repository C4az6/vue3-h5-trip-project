import { defineStore } from "pinia";
import { getHotSuggestData, getHomeCategories, getHouseListData } from '@/services'
const useHomeStore = defineStore('home', {
  state: () => ({
    // 热门建议
    hotSuggests: [],
    // 分类列表
    categories: [],
    // 房屋信息列表
    houseList: []
  }),
  actions: {
    async fetchHotSuggestData() {
      // 1.热门建议
      const { data } = await getHotSuggestData();
      this.hotSuggests = data;
    },
    async fetchcategories() {
      const { data } = await getHomeCategories();
      this.categories = data;
    },
    async fetchHouseListData(page = 1) {
      const { data } = await getHouseListData(page);
      this.houseList = [...this.houseList, data];
    }
  }
})

export default useHomeStore;