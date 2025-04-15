registerComponent('debate-section', {
    props: {
        official: {
            type: String,
            required: true
        },
        public: {
            type: String,
            required: true
        }
    },
    template: `
        <section class="py-8 px-4">
            <div class="max-w-[800px] mx-auto">
                <h2 class="text-[1.5rem] font-[600] mb-8 text-[var(--text-primary)]">争议焦点</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 官方回应 -->
                    <div class="bg-[var(--bg-secondary)] rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                        <h3 class="text-[1.25rem] font-[600] mb-4 text-[var(--primary-color)]">官方回应</h3>
                        <p class="text-[1rem] text-[var(--text-primary)] leading-[1.6]" data-field="official-response">
                            {{ official }}
                        </p>
                    </div>
                    
                    <!-- 公众观点 -->
                    <div class="bg-[var(--bg-secondary)] rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                        <h3 class="text-[1.25rem] font-[600] mb-4 text-[var(--accent)]">公众观点</h3>
                        <p class="text-[1rem] text-[var(--text-primary)] leading-[1.6]" data-field="public-response">
                            {{ public }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `
}); 