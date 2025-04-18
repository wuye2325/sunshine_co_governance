import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/web_event_timelines/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'vue': 'vue/dist/vue.esm-bundler.js',
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        template: resolve(__dirname, 'template/index.html'),
        main: resolve(__dirname, '../index.html'),
        process: resolve(__dirname, '../process.html')
      }
    },
    assetsDir: 'assets',
    copyPublicDir: true
  }
}) 