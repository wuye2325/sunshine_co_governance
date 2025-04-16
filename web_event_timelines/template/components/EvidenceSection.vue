<template>
  <section class="mb-12 md:mb-16">
    <h3 class="text-2xl font-semibold font-serif mb-6 md:mb-8">相关证据</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(evidence, index) in evidences" 
        :key="index" 
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
      >
        <div class="p-5">
          <h4 class="text-lg font-semibold font-serif mb-2 text-gray-900 dark:text-white">{{ evidence.title }}</h4>
          
          <!-- Tags -->
          <div v-if="evidence.tags && evidence.tags.length" class="mb-3 flex flex-wrap gap-1">
            <span 
              v-for="(tag, tagIndex) in evidence.tags" 
              :key="tagIndex"
              class="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Content -->
          <p 
            class="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed"
            data-field="evidence-content"
          >
            {{ evidence.content }}
          </p>

          <!-- Meta: Date and Source -->
          <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
            <p v-if="evidence.date">日期: {{ formatEvidenceDate(evidence.date) }}</p>
            <p v-if="evidence.source">
              来源: 
              <a v-if="isUrl(evidence.source)" :href="evidence.source" target="_blank" rel="noopener noreferrer" class="hover:underline text-blue-600 dark:text-blue-400">链接</a>
              <span v-else>{{ evidence.source }}</span>
            </p>
          </div>

          <!-- Attachments (Images) -->
          <div v-if="evidence.attachments && evidence.attachments.length" class="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
             <p class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">附件:</p>
             <div class="grid grid-cols-2 gap-2">
               <div v-for="(att, attIndex) in evidence.attachments" :key="attIndex">
                  <a :href="att.url" target="_blank" rel="noopener noreferrer" class="block group">
                    <img :src="att.url" :alt="att.description || '附件图片'" class="rounded object-cover w-full h-20 group-hover:opacity-80 transition-opacity">
                    <p v-if="att.description" class="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">{{ att.description }}</p>
                  </a>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <p v-if="!evidences || evidences.length === 0" class="text-gray-500 dark:text-gray-400 italic mt-4">暂无相关证据信息。</p>
  </section>
</template>

<script setup lang="ts">
import type { EvidenceItem } from '../types/event.d.ts';

// Props definition
const props = defineProps<{ 
  evidences: EvidenceItem[]; 
}>();

// Format date
const formatEvidenceDate = (dateString: string): string => {
  try {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return dateString; // Fallback
  }
};

// Helper to check if a string is a URL
const isUrl = (str: string): boolean => {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;  
  }
}

</script>

<style scoped>
/* Add component-specific styles here if needed */
</style> 