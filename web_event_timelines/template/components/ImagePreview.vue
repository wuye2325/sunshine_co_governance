<template>
  <div v-if="show" @click="close" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity">
    <div class="relative max-w-4xl w-full mx-4">
      <button @click="close" class="absolute top-4 right-4 text-white hover:text-gray-300">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img :src="imageUrl" :alt="imageAlt" class="w-full h-auto rounded-lg shadow-xl">
      <p v-if="imageAlt" class="mt-2 text-center text-white">{{ imageAlt }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  imageUrl: string
  imageAlt?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}
</script> 