<template>
  <section class="mb-12 md:mb-16">
    <h3 class="text-2xl font-semibold mb-6 md:mb-8">事件时间线</h3>
    <div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-6 pl-6 md:ml-0 md:pl-0 md:border-l-0 md:before:content-[''] md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-1/2 md:before:w-0.5 md:before:bg-gray-200 md:before:dark:bg-gray-700">
      
      <!-- Timeline Items -->
      <div v-for="(item, index) in timeline" :key="index" class="mb-8 md:mb-10 relative timeline-item">
        <div class="md:flex items-start md:gap-6">
          <!-- Dot and Date (Mobile: left, Desktop: alternating) -->
          <div :class="['timeline-meta flex-shrink-0 md:w-1/2', index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left order-last']">
            <div class="absolute -left-[31px] top-1.5 md:static md:transform-none w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 timeline-dot md:mx-auto md:mb-2 md:-mt-0.5" 
                 :style="index % 2 === 0 ? {left: '50%', marginLeft: '-8px', position: 'absolute'} : {left: '50%', marginLeft: '-8px', position: 'absolute'}">
            </div>
            <time 
              class="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 md:mb-0"
              data-field="timeline-date"
            >
              {{ formatTimelineDate(item.time) }}
            </time>
          </div>

          <!-- Content (Mobile: right, Desktop: alternating) -->
          <div :class="['timeline-content bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:w-1/2', index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto']">
            <h4 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{{ item.title }}</h4>
            <div 
              class="text-gray-700 dark:text-gray-300 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
              data-field="timeline-content"
              v-html="item.content"
            >
            </div>
            <!-- Attachments (Images) -->
            <div v-if="item.attachments && item.attachments.length" class="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div v-for="(att, attIndex) in item.attachments" :key="attIndex">
                <a :href="att.url" target="_blank" rel="noopener noreferrer" class="block group">
                  <img :src="att.url" :alt="att.description || '附件图片'" class="rounded object-cover w-full h-24 group-hover:opacity-80 transition-opacity">
                  <p v-if="att.description" class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ att.description }}</p>
                </a>
              </div>
            </div>
            <!-- Links -->
            <div v-if="item.links && item.links.length" class="mt-3 space-y-1">
              <div v-for="(link, linkIndex) in item.links" :key="linkIndex">
                <a 
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TimelineItem } from '../types/event';

// Props definition
const props = defineProps<{ 
  timeline: TimelineItem[]; 
}>();

// Format the date for display
const formatTimelineDate = (dateString: string): string => {
  try {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return dateString; // Fallback
  }
};
</script>

<style scoped>
/* Mimic the reference style for the timeline line and dots */
/* Mobile: line on the left */
/* Desktop: line in the center, alternating content */

/* Adjust dot position precisely relative to the line */
.timeline-dot {
  /* Ensure dot is centered on the line */
}

/* Responsive adjustments for the alternating layout */
@media (min-width: 768px) {
  .timeline-item > div {
    /* Ensures proper alignment in desktop view */
  }
  .timeline-meta {
    margin-top: 6px; /* Align date/dot slightly better with content block top */
  }
  /* Style for the connection line on desktop */
  .timeline-item:not(:last-child):after {
      content: '';
      position: absolute;
      width: 2px;
      background-color: #e5e7eb; /* Match line color */
      dark:bg-gray-700;
      top: 1.5rem; /* Start below the dot */
      bottom: -1rem; /* Extend slightly below the item */
      left: 50%;
      transform: translateX(-50%);
      z-index: -1; /* Ensure line is behind content */
  }

}
</style> 