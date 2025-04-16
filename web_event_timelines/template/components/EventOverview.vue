<template>
  <section class="mb-12 md:mb-16 prose prose-lg dark:prose-invert max-w-none">
    <h3 class="text-2xl font-semibold mb-4">事件概述</h3>
    <div 
      data-field="overview"
      v-html="overview"
      class="text-gray-800 dark:text-gray-300 leading-relaxed"
    >
    </div>
  </section>
</template>

<script setup lang="ts">
// Props definition
defineProps<{ 
  overview: string; // Expected to be a string, potentially containing HTML
}>();
</script>

<style scoped>
/* Using Tailwind Prose plugin for basic rich text styling */
/* Add additional styles if needed */
</style> 