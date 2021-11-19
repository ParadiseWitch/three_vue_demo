<template>
  <div style=""></div>
  <div class="bg-white dark:bg-gray-800">
    <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
    <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
  </div>
  
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    let width = ref(600);
    let height = ref(200);
    return {
      width,
      height,
    };
  },
};
</script>

<style scoped>
</style>
