### 生成 Vue 3 组件化事件报道网页模板


#### **需求：基于 Vue 3 实现可复用的事件报道网页模板，支持可视化内容填充（含数据字段标记）**  
**核心目标**：通过组件化架构和数据驱动设计，构建长期复用的事件报道页面模板，所有可替换内容标记 `data-field` 属性以便后续工具识别。


### **一、技术栈与项目结构**  
1. **技术栈要求**  
   - 使用 **Vue 3 + TypeScript**，搭配组合式 API（`setup` + `ref/reactive`）实现响应式数据管理。  
   - 基础样式集成 **Tailwind CSS 3.0+（CDN引入）**，结合原生 CSS 实现现代简约风格，通过 `<style scoped>` 避免样式污染。  
   - 实现 **深色/浅色模式切换**（默认跟随系统设置），使用 CSS 变量管理主题色。  

2. **项目结构**  
   ```
   src/
   ├── components/          # 组件目录
   │   ├── EventHeader.vue   # 标题区组件
   │   ├── EventOverview.vue # 事件概述组件
   │   ├── EventTimeline.vue # 时间线组件
   │   └── DebateSection.vue # 争议焦点组件
   ├── types/               # 类型定义
   │   └── event.d.ts        # 事件数据接口定义
   └── App.vue               # 主组件
   ```


### **二、组件化架构与数据驱动**  
#### **1. 核心组件列表（单文件组件 .vue）**  
| 组件名          | 功能描述                                                                 | 可替换字段标记（需添加 `data-field` 属性）          |  
|-----------------|--------------------------------------------------------------------------|---------------------------------------------------|  
| `EventHeader`   | 包含主标题、副标题、发布时间                                             | 标题（`data-field="title"`）、副标题（`data-field="subtitle"`）、时间（`data-field="publish-time"`） |  
| `EventTimeline` | 动态渲染时间线（接收数组数据）                                           | 时间点（`data-field="timeline-date"`）、描述内容（`data-field="timeline-content"`） |  
| `DebateSection` | 左右分栏展示争议观点（PC端双栏，移动端单栏）                             | 官方回应（`data-field="official-response"`）、公众观点（`data-field="public-response"`） |  
| `EvidenceSection` | 混合展示证据（图片/文本/链接）                                            | 图片链接（`data-field="evidence-image"`）、文本内容（`data-field="evidence-text"`）、链接地址（`data-field="evidence-link"`） |  

#### **2. 数据接口定义（TypeScript 接口）**  
```typescript
// types/event.d.ts
interface EventData {
  meta: {
    title: string; // 主标题（必填，标记 data-field="title"）
    subtitle?: string; // 副标题（标记 data-field="subtitle"）
    publishTime: string; // 发布时间（YYYY-MM-DD，标记 data-field="publish-time"）
  };
  content: {
    overview: string; // 事件概述（富文本，标记 data-field="overview"）
    timeline: TimelineItem[]; // 时间线数组
    debate: { official: string; public: string }; // 争议焦点
    evidences: EvidenceItem[]; // 证据列表（图片/文本/链接）
  };
}

interface TimelineItem {
  date: string; // 时间点（标记 data-field="timeline-date"）
  content: string; // 描述（富文本，标记 data-field="timeline-content"）
}

interface EvidenceItem {
  type: 'text' | 'image' | 'link'; // 证据类型
  content: string; // 内容（文本/图片URL/链接地址，标记 data-field="evidence-content"）
  description?: string; // 描述（标记 data-field="evidence-description"）
}
```

#### **3. 组件通信**  
- 父组件通过 `props` 向子组件传递 `EventData` 类型数据，子组件禁止直接操作 DOM，所有内容通过数据驱动渲染。  
- 可替换字段必须通过 `data-field` 属性标记，值与接口字段名称一致（如标题对应 `data-field="title"`）。  


### **三、样式与交互规范**  
#### **1. 设计风格（参考 Linear App 简约现代风）**  
- **配色**：  
  - 主色：#2C3E50（深蓝，用于标题和交互元素）  
  - 中性色：#333（正文）、#f5f5f5（浅灰背景）、#ffffff（白色背景）  
  - 深色模式：通过 `@media (prefers-color-scheme: dark)` 自动切换，主体文字为 #f5f5f5，背景为 #2d2d2d。  
- **排版**：  
  - 标题层级：H1（24px，加粗）、H2（20px，加粗）、正文（16px，行高 1.6）。  
  - 响应式字体：使用 `clamp()` 动态调整字号（如 `font-size: clamp(14px, 2vw, 16px)`）。  

#### **2. 交互与动画**  
- **微交互**：  
  - 按钮悬停：`scale(1.02)` + 主色透明度变化（`opacity: 0.9`），过渡时间 0.3s。  
  - 卡片悬停：添加 `shadow-md`（Tailwind 类），边框颜色渐变为主色。  
- **加载动画**：内容区块使用 `v-if` + `<transition>` 实现淡入动画（`opacity: 0` → `opacity: 1`，时长 500ms）。  

#### **3. 响应式布局**  
- PC端：内容区最大宽度 1200px，居中 `margin: 0 auto`，争议焦点分两栏（`flex-1`）。  
- 移动端（`max-width: 768px`）：  
  - 分栏模块转为单栏，`padding: 1rem`。  
  - 时间线日期显示为块级元素，居左对齐。  


### **四、关键实现细节**  
1. **可替换字段标记**  
   - 所有文本、图片、链接等可编辑内容必须添加 `data-field` 属性，值为接口中定义的字段名（如 `<h1 data-field="title">{{ eventData.meta.title }}</h1>`）。  
   - 图片组件通过 `:src="item.content"` 动态加载，同时保留 `data-field="evidence-image"` 标记。  

2. **主题切换**  
   - 引入 Tailwind CSS 的 `dark mode` 插件，通过 `<button @click="toggleTheme">` 切换系统默认主题，使用 `localStorage` 持久化存储用户选择。  

3. **性能优化**  
   - 长列表（如时间线）使用 `v-for` 配合 `:key="item.date"`，避免动态更新时的性能损耗。  
   - 图片使用 `loading="lazy"` 属性实现懒加载，非关键资源异步加载。  


### **五、输出要求**  
1. **文件结构**  
   - 主组件 `App.vue` 包含完整页面布局，引入所有子组件并传递 `EventData` 类型数据。  
   - 每个子组件包含独立的 HTML/CSS/JS，通过 `<script setup lang="ts">` 定义 TypeScript 接口和逻辑。  

2. **代码规范**  
   - 使用单文件组件（SFC），CSS 部分添加 `scoped` 属性，优先使用 Tailwind CSS 类名（如 `px-4 py-6`），复杂样式通过 `<style>` 标签补充。  
   - 代码包含必要注释，说明组件功能、props 定义及 `data-field` 标记用途。  

3. **兼容性**  
   - 支持现代浏览器（Chrome/Firefox/Safari），通过 Babel 转换 ES6+ 语法，确保 IE 11+ 兼容（可选）。  
