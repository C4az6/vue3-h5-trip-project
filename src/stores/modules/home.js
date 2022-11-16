import { defineStore } from "pinia";
import { getHotSuggestData } from '@/services'
const useHomeStore = defineStore('home', {
  state: () => ({
    // 热门建议
    hotSuggests: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      // 1.热门建议
      const { data } = await getHotSuggestData();
      this.hotSuggests = data;
    }
  }
})

export default useHomeStore;