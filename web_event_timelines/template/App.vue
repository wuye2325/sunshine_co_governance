<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300 ease-in-out">
    <!-- Theme Toggle Button -->
    <ThemeToggle />

    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p class="text-lg">加载中...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-center text-red-500">
        <i class="fas fa-exclamation-triangle fa-2x mb-4"></i>
        <p class="text-lg">加载事件数据失败。</p>
        <p class="text-sm">{{ error.message }}</p>
      </div>
    </div>

    <!-- Content Area -->
    <main v-else-if="eventData" class="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 max-w-4xl">
      <!-- Render components with fetched data -->
      <EventHeader 
        :title="eventData.meta.title"
        :subtitle="eventData.meta.subtitle"
        :publishTime="eventData.meta.publishTime"
      />
      
      <EventOverview 
        :overview="eventData.content.overview"
      /> 
      
      <EventTimeline 
        :timeline="eventData.content.timeline"
      />
      
      <DebateSection 
        :debate="eventData.content.debate"
      />
      
      <!-- EvidenceSection is commented out as requested -->
      <!-- 
      <EvidenceSection 
        :evidences="eventData.content.evidences"
      />
      -->
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { EventData } from './types/event.d.ts'; // Updated relative path

// --- Component Imports --- 
import ThemeToggle from './components/ThemeToggle.vue';
import EventHeader from './components/EventHeader.vue';
import EventOverview from './components/EventOverview.vue'; 
import EventTimeline from './components/EventTimeline.vue';
import DebateSection from './components/DebateSection.vue';
// import EvidenceSection from './components/EvidenceSection.vue'; // Commented out

// --- State --- 
const eventData = ref<EventData | null>(null);
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);

// --- Data Fetching --- 
onMounted(async () => {
  loading.value = true;
  error.value = null;
  eventData.value = null;
  
  try {
    // 1. Get event ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id') || 'event01'; // Default to event01 if no id

    // 2. Construct the path to the data file
    // Assuming data files are in ../data/ relative to index.html
    const dataUrl = `../data/${eventId}.json`; 

    // 3. Fetch the data
    console.log(`Fetching data from: ${dataUrl}`); // Debug log
    const response = await fetch(dataUrl);
    console.log(`Fetch status: ${response.status}`); // Debug log

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} for ${dataUrl}`);
    }

    const data: EventData = await response.json();
    console.log('Data fetched successfully:', data); // Debug log
    eventData.value = data;

    // 4. Update page title dynamically
    if (data.meta?.title) {
      document.title = data.meta.title; // Update browser tab title
    }

  } catch (err) {
    console.error('Failed to load event data:', err); // Debug log
    error.value = err instanceof Error ? err : new Error('An unknown error occurred');
  } finally {
    loading.value = false;
    console.log(`Loading finished. Loading: ${loading.value}, Error: ${error.value}`); // Debug log
  }
});

</script>

<style scoped>
/* Container max-width is now handled by Tailwind classes */
/* Add component-specific styles here if needed */
</style> 