<template>
  <section class="mb-12 md:mb-16">
    <div class="text-center mb-8 md:mb-10">
      <h3 class="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-400">事件时间线</h3>
      <div class="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
    </div>
    <!-- DEBUGGING: Check if timeline data is received -->
    <!-- <p class="text-red-500 p-4 bg-red-100 rounded mb-4">调试信息：时间线项数量 = {{ timeline?.length ?? 'undefined' }}</p> -->
    <div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 pl-8 
               md:ml-0 md:pl-0 md:border-l-0 
               before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-0.5 before:bg-gray-200 before:dark:bg-gray-700 before:-translate-x-1/2 
               before:hidden md:before:block">

      <!-- Timeline Items -->
      <div v-for="(item, index) in timeline" :key="index" class="mb-8 md:mb-10 relative timeline-item group">
        <div class="md:flex items-start md:gap-8">
          <!-- Dot and Date (Mobile: left, Desktop: alternating) -->
          <div :class="['timeline-meta flex-shrink-0 md:w-1/2', index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left md:order-last']">
            <!-- Dot -->
            <div class="absolute -left-[46px] top-0 w-7 h-7 flex items-center justify-center bg-white dark:bg-gray-900 border-2 border-blue-500 rounded-full timeline-dot 
                        md:absolute md:left-1/2 md:-translate-x-[50%] md:top-0
                        group-hover:scale-110 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-transform duration-300">
              <i class="fas fa-calendar-days fa-xs text-blue-500 dark:text-blue-400"></i>
            </div>
            <!-- Date -->
            <time 
              class="inline-block text-xs font-semibold text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-2.5 py-1 rounded-full mb-2 md:mb-0 md:mt-0.5"
              data-field="timeline-date"
            >
              {{ formatTimelineDate(item.time) }}
            </time>
          </div>

          <!-- Content (Mobile: right, Desktop: alternating) -->
          <div :class="[
                 'timeline-content relative bg-white dark:bg-gray-800/50 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-5 md:w-1/2 transition-all duration-300 ease-in-out',
                 'group-hover:shadow-lg group-hover:border-gray-300 dark:group-hover:border-gray-600',
                 'group-hover:-translate-y-0.5 group-hover:scale-[1.01]',
                 index % 2 === 0 ? 'md:ml-auto border-r-4 border-blue-600 dark:border-blue-500' : 'md:mr-auto border-l-4 border-blue-600 dark:border-blue-500'
               ]">
            <div class="flex items-center mb-2">
              <i class="fas fa-info-circle fa-sm mr-2 text-blue-500 dark:text-blue-400 opacity-75"></i>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h4>
            </div>
            <div 
              class="text-gray-700 dark:text-gray-300 leading-relaxed max-w-none"
              data-field="timeline-content"
              v-html="item.content"
            >
            </div>
            <!-- Attachments (Images) -->
            <div v-if="item.attachments && item.attachments.length" class="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div v-for="(att, attIndex) in item.attachments" :key="attIndex">
                <div @click="openPreview(att)" class="cursor-pointer group/attachment overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                  <img :src="att.url" :alt="att.description || '附件图片'" class="object-cover w-full h-24 transition-transform duration-300 ease-in-out group-hover/attachment:scale-105">
                  <p v-if="att.description" class="text-xs text-gray-500 dark:text-gray-400 mt-1 px-1 pb-1 truncate">{{ att.description }}</p>
                </div>
              </div>
            </div>
            <!-- Links -->
            <div v-if="item.links && item.links.length" class="mt-4 space-y-1.5">
              <div v-for="(link, linkIndex) in item.links" :key="linkIndex">
                <a 
                  :href="link.url" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <i class="fas fa-link fa-xs mr-1.5 opacity-75"></i>
                  <span>{{ link.text }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Preview -->
    <ImagePreview
      :show="previewVisible"
      :image-url="previewImage?.url || ''"
      :image-alt="previewImage?.description"
      @close="closePreview"
    />
  </section>
</template>

<script setup lang="ts">
import type { TimelineItem } from '../types/event';
import { ref } from 'vue'
import ImagePreview from './ImagePreview.vue'

// Props definition
// @ts-ignore // Suppress potential unused variable warning for props in script setup
const props = defineProps<{ 
  timeline: TimelineItem[]; 
}>();

// Log props to satisfy linter (can be removed later if desired)
console.log('Timeline props:', props.timeline?.length); 

// Format the date for display
const formatTimelineDate = (dateString: string): string => {
  try {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return dateString; // Fallback
  }
};

const previewVisible = ref(false)
const previewImage = ref<{ url: string; description?: string } | null>(null)

const openPreview = (image: { url: string; description?: string }) => {
  previewImage.value = image
  previewVisible.value = true
}

const closePreview = () => {
  previewVisible.value = false
  previewImage.value = null
}
</script>

<style scoped>
/* 添加段落样式 */
:deep(p) {
  @apply mb-3 last:mb-0;
}

:deep(p + p) {
  @apply mt-3;
}

/* 移除不需要的样式 */
</style> 