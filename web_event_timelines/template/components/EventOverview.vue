<template>
  <section v-if="overview" class="mb-10 md:mb-14 bg-white dark:bg-gray-800/50 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-5 md:p-6">
    <div class="text-center mb-6">
      <h3 class="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">事件概述</h3>
      <div class="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
    </div>
    <div 
      class="prose prose-base dark:prose-invert max-w-none prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline transition-colors duration-200"
      data-field="overview"
      v-html="overview"
    >
    </div>
  </section>
</template>

<script setup lang="ts">
// Props definition
const props = defineProps<{ 
  overview: string; // Expected to be a string, potentially containing HTML
}>();

// Log props to satisfy linter (if needed, though usually overview being used in template is enough)
console.log('Overview prop length:', props.overview.length);
</script>

<style scoped>
/* Using Tailwind Prose plugin for basic rich text styling */
/* Add additional styles if needed */
.prose a {
  @apply transition-colors duration-200;
}
</style> 