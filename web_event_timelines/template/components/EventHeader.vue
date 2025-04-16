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
    <div class="flex flex-col items-center gap-4">
      <p 
        class="inline-flex items-center justify-center text-sm text-blue-300 dark:text-blue-400"
        data-field="publish-time"
      >
        <i class="far fa-calendar-alt mr-1.5 opacity-75"></i>
        发布于 {{ formattedPublishTime }}
      </p>
      <!-- 原文链接按钮 -->
      <a 
        v-if="originalLink"
        :href="originalLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 
               rounded-full transition-all duration-200 backdrop-blur-sm border border-blue-400/30 
               hover:border-blue-400/50 shadow-sm hover:shadow group z-10"
      >
        <i class="fas fa-external-link-alt mr-2 text-sm group-hover:translate-x-0.5 transition-transform duration-200"></i>
        <span>原文链接</span>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Props definition using defineProps
const props = defineProps<{ 
  title: string;
  subtitle?: string;
  publishTime: string; // Expected format: YYYY-MM-DD
  originalLink?: string; // 新增原文链接属性
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