registerComponent('event-timeline', {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    template: `
        <section class="py-8 px-4">
            <div class="max-w-[800px] mx-auto">
                <h2 class="text-[1.5rem] font-[600] mb-8 text-[var(--text-primary)]">事件进程</h2>
                <div class="relative">
                    <!-- 时间线轴 -->
                    <div class="absolute left-4 sm:left-1/2 h-full w-[2px] bg-[var(--primary-color)] opacity-50 transform -translate-x-1/2"></div>
                    
                    <!-- 时间线项目 -->
                    <div class="space-y-8">
                        <div v-for="(item, index) in items" :key="index" 
                             class="relative timeline-item">
                            <div class="flex items-center sm:justify-between"
                                 :class="{'sm:flex-row-reverse': index % 2 !== 0}">
                                <!-- 时间点 -->
                                <div class="absolute left-4 sm:left-1/2 w-4 h-4 bg-[var(--primary-color)] rounded-full transform -translate-x-1/2 border-4 border-[var(--bg-color)]"></div>
                                
                                <!-- 内容卡片 -->
                                <div class="ml-12 sm:ml-0 sm:w-5/12 bg-[var(--bg-secondary)] p-6 rounded-lg shadow-md transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg"
                                     :class="{'sm:mr-8': index % 2 === 0, 'sm:ml-8': index % 2 !== 0}">
                                    <time class="text-[0.875rem] font-[600] text-[var(--primary-color)]" data-field="timeline-date">
                                        {{ item.date }}
                                    </time>
                                    <p class="mt-4 text-[1rem] text-[var(--text-primary)] leading-[1.6]" data-field="timeline-content">
                                        {{ item.content }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}); 