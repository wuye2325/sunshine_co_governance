好的，我来帮您设计一个完整的 JSON 数据录入管理后台的 PRD 文档。

# JSON 数据录入管理后台 PRD

## 一、项目概述

### 1. 项目目标
开发一个基于 Vue 3 的管理后台，用于可视化录入事件报道数据，自动生成符合规范的 JSON 文件。

### 2. 技术栈
- 前端框架：Vue 3 + TypeScript
- UI 框架：Element Plus
- 构建工具：Vite
- 路由：Vue Router
- 状态管理：Pinia
- 表单验证：VeeValidate

### 3. 项目结构
```plaintext
event-admin/
├── src/
│   ├── components/         # 组件目录
│   │   ├── form/          # 表单相关组件
│   │   └── common/        # 公共组件
│   ├── views/             # 页面视图
│   ├── types/             # 类型定义
│   ├── utils/             # 工具函数
│   └── stores/            # 状态管理
├── public/                # 静态资源
└── uploads/               # 临时文件上传目录
```

## 二、数据结构设计

### 1. 核心数据接口
```typescript
interface EventData {
  meta: {
    title: string;          // 必填
    subtitle?: string;      // 可选
    publishTime: string;    // 必填，YYYY-MM-DD
    originalLink?: string;  // 可选，原文链接
  };
  content: {
    overview: string;       // 必填，支持HTML格式
    timeline: TimelineItem[];
    debate: DebateSection;
    evidences: EvidenceItem[];
  };
}

interface TimelineItem {
  time: string;            // 必填，YYYY-MM-DD
  title: string;           // 必填
  content: string;         // 必填
  links?: Link[];          // 可选
  attachments?: Attachment[]; // 可选
}

interface Link {
  text: string;
  url: string;
}

interface Attachment {
  type: 'image';
  url: string;             // 相对路径
  description?: string;
}

interface DebateSection {
  official: DebateItem[];
  public: DebateItem[];
}

interface EvidenceItem {
  title: string;
  content: string;
  date: string;           // YYYY-MM-DD
  source: string;
  tags: string[];
  attachments?: Attachment[];
}
```

## 三、功能模块设计

### 1. 表单组件设计
```typescript
// 主要表单组件
- EventMetaForm      // 元数据表单
- TimelineForm       // 时间线表单
- DebateForm        // 争议观点表单
- EvidenceForm      // 证据材料表单
- AttachmentUpload  // 附件上传组件
- LinkInput         // 链接输入组件
```

### 2. 文件处理功能

#### 2.1 图片处理
```typescript
interface ImageProcessor {
  // 图片上传处理
  upload(file: File): Promise<string>;
  // 文件名转换（中文转英文）
  convertFileName(originalName: string): string;
  // 生成相对路径
  generateRelativePath(fileName: string): string;
  // 移动文件到目标目录
  moveToTarget(tempPath: string, targetPath: string): Promise<void>;
}
```

#### 2.2 存储路径配置
```typescript
const CONFIG = {
  TEMP_UPLOAD_DIR: './uploads',
  TARGET_IMAGE_DIR: '../web_event_timelines/template/images',
  JSON_OUTPUT_DIR: '../web_event_timelines/data'
};
```

### 3. 表单验证规则

```typescript
const validationRules = {
  meta: {
    title: { required: true, min: 2 },
    publishTime: { required: true, date: true },
  },
  timeline: {
    time: { required: true, date: true },
    title: { required: true },
    content: { required: true },
    links: {
      url: { url: true }
    }
  },
  // ... 其他验证规则
};
```

### 4. 数据处理功能

```typescript
interface DataProcessor {
  // 文本格式化
  formatText(text: string): string;  // 中英文引号转换等
  
  // JSON 生成
  generateJSON(data: EventData): string;
  
  // 数据验证
  validate(data: EventData): ValidationResult;
  
  // 文件保存
  saveToFile(fileName: string, content: string): Promise<void>;
}
```

## 四、用户界面设计

### 1. 布局结构
- 顶部导航栏：新建/保存/预览
- 左侧：表单分步导航
- 右侧：表单内容区
- 底部：操作按钮区

### 2. 交互设计
- 分步表单导航
- 动态表单项（添加/删除）
- 拖拽排序
- 实时预览
- 自动保存

## 五、关键功能实现

### 1. 动态表单处理
```vue
<template>
  <div v-for="(item, index) in items" :key="index">
    <input v-model="item.value" />
    <button @click="removeItem(index)">删除</button>
  </div>
  <button @click="addItem">添加</button>
</template>
```

### 2. 图片上传流程
1. 选择文件
2. 文件名转换
3. 临时保存
4. 生成预览
5. 确认提交后移动到目标目录

### 3. 数据格式化与验证
1. 输入即时验证
2. 提交前完整性检查
3. 特殊字符处理
4. JSON 格式化

## 六、注意事项

1. **安全性考虑**
   - 文件上传类型限制
   - 文件大小限制
   - 路径注入防护

2. **性能优化**
   - 大量数据的分页处理
   - 图片压缩
   - 表单防抖

3. **用户体验**
   - 自动保存
   - 操作提示
   - 错误反馈

## 七、后续优化

1. 数据导入功能
2. 模板管理
3. 批量处理
4. 多语言支持
5. 数据备份