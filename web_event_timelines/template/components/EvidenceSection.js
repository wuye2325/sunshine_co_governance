registerComponent('evidence-section', {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    template: `
        <section class="py-8 px-4">
            <div class="max-w-[800px] mx-auto">
                <h2 class="text-[1.5rem] font-[600] mb-8 text-[var(--text-primary)]">证据材料</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div v-for="(item, index) in items" :key="index"
                         class="bg-[var(--bg-secondary)] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]">
                        <!-- 图片类型 -->
                        <img v-if="item.type === 'image'"
                             :src="item.content"
                             :alt="item.description"
                             class="w-full h-48 object-cover rounded-t-lg"
                             loading="lazy"
                             data-field="evidence-image">
                        
                        <div class="p-6">
                            <!-- 文本类型 -->
                            <p v-if="item.type === 'text'"
                               class="text-[1rem] text-[var(--text-primary)] leading-[1.6]"
                               data-field="evidence-text">
                                {{ item.content }}
                            </p>
                            
                            <!-- 链接类型 -->
                            <a v-if="item.type === 'link'"
                               :href="item.content"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="text-[var(--accent)] hover:underline transition-colors duration-300"
                               data-field="evidence-link">
                                {{ item.description || item.content }}
                            </a>
                            
                            <!-- 描述文本 -->
                            <p v-if="item.description && item.type !== 'link'"
                               class="mt-2 text-[0.875rem] text-[var(--text-secondary)]"
                               data-field="evidence-description">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}); 