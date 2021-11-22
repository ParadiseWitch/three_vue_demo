<template>
  <CalendarGraph></CalendarGraph>

</template>

<script>
import { ref } from '@vue/reactivity'
import CalendarGraph from './components/CalendarGraph.vue'

export default {
  name: 'App',
  components: {
    CalendarGraph
  },
  setup(){
    const r = ref()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
