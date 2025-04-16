<template>
  <header class="mb-10 md:mb-14 text-center bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 py-12 px-4 rounded-lg shadow-lg">
    <h1 
      class="text-3xl sm:text-4xl font-bold text-white mb-3"
      data-field="title"
    >
      {{ title }}
    </h1>
    <h2 
      v-if="subtitle"
      class="text-lg sm:text-xl text-blue-200 dark:text-blue-300 mb-6 font-medium"
      data-field="subtitle"
    >
      {{ subtitle }}
    </h2>
    <p 
      class="inline-flex items-center justify-center text-sm text-blue-300 dark:text-blue-400"
      data-field="publish-time"
    >
      <i class="far fa-calendar-alt mr-1.5 opacity-75"></i>
      发布于 {{ formattedPublishTime }}
    </p>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Props definition using defineProps
const props = defineProps<{ 
  title: string;
  subtitle?: string;
  publishTime: string; // Expected format: YYYY-MM-DD
}>();

// Format the date for display (optional, but good practice)
const formattedPublishTime = computed(() => {
  // Basic formatting, can be enhanced with libraries like date-fns or dayjs if needed
  try {
    const date = new Date(props.publishTime + 'T00:00:00'); // Ensure parsing as local date
    return date.toLocaleDateString('zh-CN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch (e) {
    console.error("Error formatting date:", e);
    return props.publishTime; // Fallback to original string
  }
});
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style> 