import { defineStore } from "pinia";
import { getCityAll } from '@/services'


const useCityStore = defineStore("city", {
  state: () => ({
    allCities: []
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll();
      this.allCities = res.data;
      console.log("this.allCities: ", this.allCities);
    }
  }
})

export default useCityStore


