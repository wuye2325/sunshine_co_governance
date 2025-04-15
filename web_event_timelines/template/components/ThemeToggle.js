registerComponent('theme-toggle', {
    setup() {
        const isDark = Vue.ref(
            window.matchMedia('(prefers-color-scheme: dark)').matches
        );

        const toggleTheme = () => {
            isDark.value = !isDark.value;
            document.documentElement.classList.toggle('dark', isDark.value);
            localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
        };

        // 初始化主题
        Vue.onMounted(() => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                isDark.value = savedTheme === 'dark';
                document.documentElement.classList.toggle('dark', isDark.value);
            }
        });

        return {
            isDark,
            toggleTheme
        };
    },
    template: `
        <button @click="toggleTheme" 
                class="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-[var(--bg-secondary)] shadow-md transition-all duration-300 hover:shadow-lg"
                :title="isDark ? '切换到浅色模式' : '切换到深色模式'">
            <!-- 月亮图标（深色模式） -->
            <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <!-- 太阳图标（浅色模式） -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </button>
    `
}); 