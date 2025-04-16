<template>
  <button 
    @click="toggleTheme"
    class="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
    aria-label="切换主题模式"
  >
    <i v-if="isDark" class="fas fa-sun w-5 h-5"></i>
    <i v-else class="fas fa-moon w-5 h-5"></i>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(false);

// Check localStorage or system preference on mount
onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    isDark.value = true;
  } else {
    document.documentElement.classList.remove('dark');
    isDark.value = false;
  }
});

// Toggle theme function
const toggleTheme = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    isDark.value = false;
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    isDark.value = true;
  }
};
</script>

<style scoped>
/* Add button-specific styles here if needed */
</style> 