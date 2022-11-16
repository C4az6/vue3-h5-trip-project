import { defineStore } from "pinia";
import { getHotSuggestData, getHomeCategories } from '@/services'
const useHomeStore = defineStore('home', {
  state: () => ({
    // 热门建议
    hotSuggests: [],
    categories: []
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
    }
  }
})

export default useHomeStore;