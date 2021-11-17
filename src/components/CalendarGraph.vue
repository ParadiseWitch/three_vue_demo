<template>
  <!-- <div class="cg-container">
    <div v-for="item in 12" :key="item" class="cg-week-container">
      <div v-for="item in 7" :key="item" class="cg-day-block"></div>
    </div>
  </div> -->
  test
  <CalendarHeatmap
    :values="contribution"
    end-date="2021-11-20"
    :max="5"
    tooltip-unit="read"
  ></CalendarHeatmap>
</template>
<script lang="ts">
import { reactive } from "@vue/reactivity";
import { CalendarHeatmap } from "vue3-calendar-heatmap";
export default {
  components: {
    CalendarHeatmap,
  },
  setup() {
    let contribution = reactive([
      { date: "2021-10-11", count: 1 },
      { date: "2021-10-13", count: 6 },
      { date: "2021-10-17", count: 6 },
      { date: "2021-10-21", count: 6 },
      { date: "2021-10-25", count: 6 },
      { date: "2021-10-28", count: 6 },
      { date: "2021-11-05", count: 6 },
      { date: "2021-11-12", count: 10 },
    ]);
    return {
      contribution,
    };
  },
};
</script>
<style>
.cg-container {
  display: flex;
  width: 100%;
  height: 100px;
  /* border: rgb(0, 0, 0) 1px solid; */
}
.cg-week-container {
  /* width: 14px; */
  height: 100%;
  /* border: rgb(168, 89, 89) 1px solid; */
}
.cg-day-block {
  margin: 3px;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background-color: aquamarine;
}
react{
  border-radius: 50%;
}
</style>
