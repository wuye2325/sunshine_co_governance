<template>
  <section class="mb-12 md:mb-16">
    <h3 class="text-2xl font-semibold mb-6 md:mb-8">争议焦点</h3>
    <div class="md:flex md:gap-8">
      <!-- Official Response Column -->
      <div class="md:w-1/2 mb-6 md:mb-0">
        <h4 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-700">物业回应</h4>
        <div v-if="debate.official && debate.official.length" class="space-y-4">
          <div v-for="(item, index) in debate.official" :key="`official-${index}`" class="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <p class="font-medium text-gray-700 dark:text-gray-300 mb-1">来源: {{ item.source }}</p>
            <p class="text-gray-600 dark:text-gray-400" data-field="official-response">{{ item.content }}</p>
            <!-- Links -->
            <div v-if="item.links && item.links.length" class="mt-2 space-y-1">
              <a 
                v-for="(link, linkIndex) in item.links" 
                :key="`official-link-${linkIndex}`"
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <i class="fas fa-link fa-xs mr-1"></i>{{ link.text }}
              </a>
            </div>
          </div>
        </div>
        <p v-else class="text-gray-500 dark:text-gray-400 italic">暂无物业回应信息。</p>
      </div>

      <!-- Public Response Column -->
      <div class="md:w-1/2">
        <h4 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-700">业主观点</h4>
        <div v-if="debate.public && debate.public.length" class="space-y-4">
          <div v-for="(item, index) in debate.public" :key="`public-${index}`" class="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
            <p class="font-medium text-gray-700 dark:text-gray-300 mb-1">来源: {{ item.source }}</p>
            <p class="text-gray-600 dark:text-gray-400" data-field="public-response">{{ item.content }}</p>
            <!-- Links -->
            <div v-if="item.links && item.links.length" class="mt-2 space-y-1">
              <a 
                v-for="(link, linkIndex) in item.links" 
                :key="`public-link-${linkIndex}`"
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-sm text-green-600 dark:text-green-400 hover:underline"
              >
                <i class="fas fa-link fa-xs mr-1"></i>{{ link.text }}
              </a>
            </div>
          </div>
        </div>
        <p v-else class="text-gray-500 dark:text-gray-400 italic">暂无业主观点信息。</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { EventData } from '../types/event.d.ts';

// Props definition, expects the 'debate' part of EventData
const props = defineProps<{ 
  debate: EventData['content']['debate']; 
}>();
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style> 