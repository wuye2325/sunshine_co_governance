/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./template/**/*.html",
    "./template/**/*.vue",
  ],
  darkMode: 'class', // 启用 class 策略的暗黑模式
  theme: {
    extend: {
      // 在这里可以扩展 Tailwind 的默认主题，如果需要的话
      // 例如，可以从 index.html 中迁移颜色和动画配置
      colors: {
          primary: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              200: '#bae6fd',
              300: '#7dd3fc',
              400: '#38bdf8',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#0c4a6e',
          },
          secondary: {
              50: '#f8fafc',
              100: '#f1f5f9',
              200: '#e2e8f0',
              300: '#cbd5e1',
              400: '#94a3b8',
              500: '#64748b',
              600: '#475569',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
          },
      },
      animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
          fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
          },
          slideUp: {
              '0%': { transform: 'translateY(20px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
          }
      }
    },
  },
  plugins: [],
} 