<template>
  <button 
    @click="toggleTheme"
    class="fixed bottom-4 right-4 z-50 p-2.5 rounded-lg bg-gray-200/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:scale-110"
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