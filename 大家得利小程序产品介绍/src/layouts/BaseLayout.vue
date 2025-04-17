<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark">
    <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-primary dark:text-white">大家得利</h1>
        <div class="flex items-center space-x-4">
          <nav class="hidden md:flex space-x-6">
            <a
              v-for="(item, index) in navItems"
              :key="index"
              :href="item.href"
              class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-200"
            >
              {{ item.text }}
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 pt-24 pb-12">
      <slot></slot>
    </main>

    <footer class="bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-4 py-8">
        <div class="text-center text-gray-600 dark:text-gray-400">
          <p>Copyright © 2025 [2325]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import ThemeToggle from '@/components/common/ThemeToggle.vue'

const navItems = [
  { text: '痛点分析', href: '#pain-points' },
  { text: '解决方案', href: '#solutions' },
  { text: '核心功能', href: '#features' },
  { text: '应用场景', href: '#use-cases' },
  { text: '使用指南', href: '#guidelines' }
]
</script> 