<template>
  <section v-if="debate && (debate.official.length || debate.public.length)" class="mb-12 md:mb-16">
    <div class="text-center mb-8 md:mb-10"> <!-- Increased bottom margin -->
      <h3 class="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-400">观点汇总</h3>
      <div class="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
    </div>
    <div class="grid md:grid-cols-2 gap-8"> <!-- Increased gap -->
      <!-- 官方/权威观点卡片 -->
      <div v-if="debate.official.length" 
           class="group relative bg-white dark:bg-gray-800/50 rounded-lg shadow-md border-l-4 border-blue-600 dark:border-blue-500 p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.01]">
           <!-- Removed old background/border, added group, relative, new background, left border, padding, transitions -->
        <h4 class="text-xl font-semibold mb-5 text-blue-800 dark:text-blue-300 flex items-center"> <!-- Increased bottom margin, adjusted dark text color -->
          <i class="fas fa-gavel mr-2.5 opacity-80"></i>官方/权威回应 <!-- Increased icon margin, slight opacity -->
        </h4>
        <div class="space-y-5"> <!-- Increased spacing -->
          <div v-for="(item, index) in debate.official" :key="'official-' + index" class="text-sm">
            <p class="font-semibold text-gray-800 dark:text-gray-200 mb-1.5"><span class="font-medium opacity-60 mr-1">来源:</span> {{ item.source }}</p> <!-- Adjusted text colors/weights -->
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.content }}</p>
            <!-- Links -->
            <div v-if="item.links && item.links.length" class="mt-2.5 space-y-1.5"> <!-- Adjusted margin/spacing -->
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
      
      <!-- 公众/其他观点卡片 -->
      <div v-if="debate.public.length" 
           class="group relative bg-white dark:bg-gray-800/50 rounded-lg shadow-md border-l-4 border-gray-400 dark:border-gray-500 p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.01]">
           <!-- Removed old background/border, added group, relative, new background, left border (gray), padding, transitions -->
        <h4 class="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200 flex items-center"> <!-- Increased bottom margin -->
           <i class="fas fa-users mr-2.5 opacity-80"></i>公众/相关方观点 <!-- Increased icon margin, slight opacity -->
        </h4>
        <div class="space-y-5"> <!-- Increased spacing -->
          <div v-for="(item, index) in debate.public" :key="'public-' + index" class="text-sm">
             <p class="font-semibold text-gray-800 dark:text-gray-200 mb-1.5"><span class="font-medium opacity-60 mr-1">来源:</span> {{ item.source }}</p> <!-- Adjusted text colors/weights -->
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.content }}</p>
            <!-- Links -->
            <div v-if="item.links && item.links.length" class="mt-2.5 space-y-1.5"> <!-- Adjusted margin/spacing -->
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
/* Minor style adjustments if needed, most handled by Tailwind */
h4 i {
  /* Slightly adjust icon vertical alignment if needed */
  /* vertical-align: -0.125em; */
}
</style> 