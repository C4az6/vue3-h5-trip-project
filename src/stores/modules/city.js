import { defineStore } from "pinia";
import { getCityAll } from '@/services'


const useCityStore = defineStore("city", {
  state: () => ({
    allCities: [],
    currentCity: {
      cityName: "叙利亚"
    }
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


