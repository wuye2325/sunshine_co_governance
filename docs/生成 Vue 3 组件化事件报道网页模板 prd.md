### 生成 Vue 3 组件化事件报道网页模板


#### **需求：基于 Vue 3 实现可复用的事件报道网页模板，支持可视化内容填充（含数据字段标记）**  
**核心目标**：通过组件化架构和数据驱动设计，构建长期复用的事件报道页面模板，所有可替换内容标记 `data-field` 属性以便后续工具识别。


### **一、技术栈与项目结构**  
1. **技术栈要求**  
   - 使用 **Vue 3 + TypeScript**，搭配组合式 API（`setup` + `ref/reactive`）实现响应式数据管理
   - 使用 **Vite** 作为构建工具，支持快速开发和高效构建
   - 基础样式集成 **Tailwind CSS**，结合原生 CSS 实现现代简约风格
   - 实现 **深色/浅色模式切换**（默认跟随系统设置）
   - 使用 TypeScript 进行类型检查和开发支持

2. **项目结构**  
   ```
   web_event_timelines/
   ├── template/              # 单页模板
   │   ├── index.html        # 模板页面
   │   └── components/       # Vue组件
   ├── types/                # 类型定义
   │   └── event.d.ts       # 事件数据接口定义
   ├── data/                 # 事件数据目录
   │   ├── event01.json     # 事件1数据
   │   └── event02.json     # 事件2数据
   ├── vite.config.ts       # Vite配置
   ├── tsconfig.json        # TypeScript配置
   ├── package.json         # 项目依赖
   └── index.html           # 事件列表页
   ```


### **二、组件化架构与数据驱动**  
#### **1. 核心组件列表（Vue单文件组件）**  
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
- 父组件通过 `props` 向子组件传递 `EventData` 类型数据，子组件禁止直接操作 DOM，所有内容通过数据驱动渲染
- 可替换字段必须通过 `data-field` 属性标记，值与接口字段名称一致（如标题对应 `data-field="title"`）


### **三、样式与交互规范**  
#### **1. 设计风格（参考 Linear App 简约现代风）**  
- **配色**：  
  - 主色：#2C3E50（深蓝，用于标题和交互元素）  
  - 中性色：#333（正文）、#f5f5f5（浅灰背景）、#ffffff（白色背景）  
  - 深色模式：通过 `@media (prefers-color-scheme: dark)` 自动切换，主体文字为 #f5f5f5，背景为 #2d2d2d
- **排版**：  
  - 标题层级：H1（24px，加粗）、H2（20px，加粗）、正文（16px，行高 1.6）
  - 响应式字体：使用 `clamp()` 动态调整字号（如 `font-size: clamp(14px, 2vw, 16px)`）

#### **2. 交互与动画**  
- **微交互**：  
  - 按钮悬停：`scale(1.02)` + 主色透明度变化（`opacity: 0.9`），过渡时间 0.3s
  - 卡片悬停：添加 `shadow-md`（Tailwind 类），边框颜色渐变为主色
- **加载动画**：内容区块使用 `v-if` + `<transition>` 实现淡入动画（`opacity: 0` → `opacity: 1`，时长 500ms）

#### **3. 响应式布局**  
- PC端：内容区最大宽度 1200px，居中 `margin: 0 auto`，争议焦点分两栏（`flex-1`）
- 移动端（`max-width: 768px`）：  
  - 分栏模块转为单栏，`padding: 1rem`
  - 时间线日期显示为块级元素，居左对齐


### **四、构建与部署**
1. **开发环境**
   - Node.js 16+
   - npm 或 yarn
   - VS Code + Vue 3插件

2. **构建工具**
   - Vite作为构建工具
   - TypeScript支持
   - 热更新开发服务器

3. **部署方案**
   - 构建输出：`dist`目录
   - 静态文件托管：Cloudflare Pages
   - 自动化部署：GitHub集成

4. **性能优化**
   - 组件懒加载
   - 图片优化
   - 代码分割
   - 缓存策略


### **五、输出要求**  
1. **文件结构**  
   - 使用Vue 3单文件组件（.vue）
   - 完整的TypeScript类型定义
   - 清晰的目录结构

2. **代码规范**  
   - ESLint + Prettier配置
   - TypeScript严格模式
   - 组件命名规范

3. **兼容性**  
   - 支持现代浏览器
   - 响应式设计
   - 深色模式支持
