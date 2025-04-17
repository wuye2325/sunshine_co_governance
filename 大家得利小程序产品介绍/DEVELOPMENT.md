# 开发指南

## 开发计划

### 第一阶段：项目初始化与基础设施搭建

1. 环境配置
   - 创建 Vue3 项目
   - 配置 TypeScript
   - 安装并配置 TailwindCSS
   - 配置 ESLint 和 Prettier
   - 设置 Git 仓库

2. 基础组件开发
   - ThemeToggle（主题切换）
   - BaseLayout（基础布局）
   - BaseButton（按钮组件）
   - BaseCard（卡片组件）

### 第二阶段：核心内容组件开发

按照大纲文档分步开发以下组件：

1. 痛点展示组件（PainPoints.vue）
   - 社区事务信息不透明
   - 业主参与率低
   - 物业服务质量监管
   - 业委会长效管理

2. 解决方案组件（Solutions.vue）
   - 产品定位
   - 核心价值
   - 产品优势

3. 核心功能组件（CoreFeatures.vue）
   - 业委会工作流程管理
   - 小区治理知识社区
   - 邻里互动社区

4. 应用场景组件（UseCases.vue）
   - 地面停车位改造案例展示

5. 使用指南组件（Guidelines.vue）
   - 开启条件
   - 行动号召

### 第三阶段：交互与动画

1. 实现组件过渡动画
2. 添加页面滚动效果
3. 实现响应式布局适配

### 第四阶段：性能优化与测试

1. 组件懒加载
2. 图片优化
3. 跨浏览器测试
4. 性能测试

## 开发规范

### 命名规范

1. 组件命名
   - 使用 PascalCase
   - 例如：`PainPoints.vue`, `CoreFeatures.vue`

2. 文件命名
   - 使用 kebab-case
   - 例如：`pain-points.ts`, `core-features.ts`

3. 变量命名
   - 使用 camelCase
   - 例如：`isPainPointsVisible`, `currentTheme`

### 代码风格

1. Vue 组件结构
```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup lang="ts">
// 导入语句
// 组件逻辑
// 状态定义
// 计算属性
// 方法定义
</script>

<style scoped>
/* 组件样式 */
</style>
```

2. TypeScript 类型定义
   - 使用接口定义数据结构
   - 为所有 props 添加类型注解
   - 为复杂函数添加返回类型注解

### Git 提交规范

使用语义化提交信息：

- feat: 新功能
- fix: 修复问题
- docs: 文档修改
- style: 代码格式修改
- refactor: 代码重构
- test: 测试用例修改
- chore: 其他修改

例如：`feat: 添加痛点展示组件`

## 组件开发顺序

为了能够边开发边预览，我们将按照以下顺序开发组件：

1. 基础设施
   - 主题切换
   - 布局组件
   - 通用组件

2. 内容组件（按照大纲顺序）
   - 首页头部
   - 痛点展示
   - 解决方案
   - 核心功能
   - 应用场景
   - 使用指南
   - 页脚

每个组件开发完成后，都可以在本地预览效果，确保符合设计要求后再进行下一个组件的开发。

## 预览和测试

1. 本地开发预览
```bash
npm run dev
```

2. 组件测试
```bash
npm run test
```

3. 构建预览
```bash
npm run build
npm run preview
```

## 部署

1. 构建生产版本
```bash
npm run build
```

2. 部署到服务器
   - 将 dist 目录下的文件部署到 Web 服务器
   - 确保配置正确的 base URL 