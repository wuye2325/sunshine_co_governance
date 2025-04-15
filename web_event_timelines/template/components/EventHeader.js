registerComponent('event-header', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: String,
        publishTime: String
    },
    template: `
        <header class="bg-[var(--bg-secondary)] py-8 px-4">
            <div class="max-w-[800px] mx-auto">
                <h1 class="text-[2.5rem] font-[600] leading-[1.2] mb-4 text-[var(--text-primary)]" data-field="title">
                    {{ title }}
                </h1>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h2 v-if="subtitle" class="text-[1.5rem] font-[500] mb-2 sm:mb-0 text-[var(--text-secondary)]" data-field="subtitle">
                        {{ subtitle }}
                    </h2>
                    <time v-if="publishTime" class="text-[0.875rem] text-[var(--text-secondary)]" data-field="publish-time">
                        发布时间：{{ publishTime }}
                    </time>
                </div>
            </div>
        </header>
    `
}); 