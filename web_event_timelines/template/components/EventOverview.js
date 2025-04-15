registerComponent('event-overview', {
    props: {
        content: {
            type: String,
            required: true
        }
    },
    template: `
        <section class="py-8 px-4">
            <div class="max-w-[800px] mx-auto">
                <h2 class="text-[1.5rem] font-[600] mb-6 text-[var(--text-primary)]">事件概述</h2>
                <div class="bg-[var(--bg-color)] rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <p class="text-[1rem] text-[var(--text-primary)] leading-[1.6]" data-field="overview">
                        {{ content }}
                    </p>
                </div>
            </div>
        </section>
    `
}); 