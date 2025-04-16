<template>
  <header class="mb-8 md:mb-12 text-center">
    <h1 
      class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
      data-field="title"
    >
      {{ title }}
    </h1>
    <h2 
      v-if="subtitle"
      class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
      data-field="subtitle"
    >
      {{ subtitle }}
    </h2>
    <p 
      class="text-sm text-gray-500 dark:text-gray-500"
      data-field="publish-time"
    >
      发布于: {{ formattedPublishTime }}
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