<template>
  <section v-if="debate && (debate.official.length || debate.public.length)" class="mb-12 md:mb-16">
    <div class="text-center mb-8">
      <h3 class="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-400">观点汇总</h3>
      <div class="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
    </div>
    <div class="grid md:grid-cols-2 gap-6 md:gap-8">
      <!-- 官方/权威观点 -->
      <div v-if="debate.official.length" 
           class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 rounded-lg p-5 shadow-sm">
        <h4 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200 flex items-center">
          <i class="fas fa-gavel mr-2"></i>官方/权威回应
        </h4>
        <div class="space-y-4">
          <div v-for="(item, index) in debate.official" :key="'official-' + index" class="text-sm">
            <p class="font-medium text-gray-700 dark:text-gray-300 mb-1"><span class="opacity-75">来源:</span> {{ item.source }}</p>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.content }}</p>
            <!-- Links -->
            <div v-if="item.links && item.links.length" class="mt-2 space-y-1">
              <a 
                v-for="(link, linkIndex) in item.links" 
                :key="'official-link-' + linkIndex" 
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <i class="fas fa-link fa-xs mr-1 opacity-75"></i>
                <span>{{ link.text }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 公众/其他观点 -->
      <div v-if="debate.public.length" 
           class="bg-gray-50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/50 rounded-lg p-5 shadow-sm">
        <h4 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
           <i class="fas fa-users mr-2"></i>公众/相关方观点
        </h4>
        <div class="space-y-4">
          <div v-for="(item, index) in debate.public" :key="'public-' + index" class="text-sm">
            <p class="font-medium text-gray-700 dark:text-gray-300 mb-1"><span class="opacity-75">来源:</span> {{ item.source }}</p>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.content }}</p>
            <!-- Links -->
            <div v-if="item.links && item.links.length" class="mt-2 space-y-1">
              <a 
                v-for="(link, linkIndex) in item.links" 
                :key="'public-link-' + linkIndex" 
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center text-xs text-gray-600 dark:text-gray-400 hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <i class="fas fa-link fa-xs mr-1 opacity-75"></i>
                <span>{{ link.text }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { EventData } from '../types/event'; // Import EventData instead

// Props definition using the correct type path
const props = defineProps<{ 
  debate: EventData['content']['debate']; 
}>();

// Log props to satisfy linter
console.log('Debate props:', props.debate);
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style> 