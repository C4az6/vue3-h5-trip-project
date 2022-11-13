import { defineStore } from "pinia";
import { getCityAll } from '@/services'


const useCityStore = defineStore("city", {
  state: () => {
    allCities: { }
  },
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll();
      console.log(1111);
      console.log("response: ", res);
      this.allCities = res.data;
    }
  }
})

export default useCityStore


