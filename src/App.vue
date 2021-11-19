<template>
  <CalendarGraph></CalendarGraph>

   <div
    class="
      p-6
      max-w-sm
      mx-auto
      bg-white
      rounded-xl
      shadow-md
      flex
      items-center
      space-x-4
    "
  >
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="./img/logo.ico" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>

  <div class="bg-white dark:bg-gray-800">
    <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
    <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
  </div>
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
