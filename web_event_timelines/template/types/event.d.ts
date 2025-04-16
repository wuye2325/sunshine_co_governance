interface EventData {
  meta: {
    title: string; // 主标题（必填，标记 data-field="title"）
    subtitle?: string; // 副标题（标记 data-field="subtitle"）
    publishTime: string; // 发布时间（YYYY-MM-DD，标记 data-field="publish-time"）
  };
  content: {
    overview: string; // 事件概述（富文本，标记 data-field="overview"）
    timeline: TimelineItem[]; // 时间线数组
    debate: { official: DebateContent[]; public: DebateContent[] }; // 调整争议焦点结构以匹配 JSON 数据
    evidences: EvidenceItem[]; // 证据列表（图片/文本/链接）
  };
}

interface TimelineItem {
  time: string; // 时间点（标记 data-field="timeline-date"） // 使用 time 而不是 date
  title: string; // 时间点标题
  content: string; // 描述（富文本，标记 data-field="timeline-content"）
  attachments?: MediaAttachment[]; // 附件 (图片)
  links?: LinkAttachment[]; // 链接
}

interface DebateContent { // 用于官方和公众观点的通用接口
  source: string; // 来源
  content: string; // 内容
  links?: LinkAttachment[]; // 相关链接
}

interface EvidenceItem {
  title: string; // 证据标题
  content: string; // 内容（文本，标记 data-field="evidence-content"）
  date: string; // 日期
  source: string; // 来源链接或描述
  tags: string[]; // 标签
  attachments?: MediaAttachment[]; // 附件 (图片)
  // 移除 type 字段，内容由 content 和 attachments 决定
  // description 字段似乎在 JSON 中不存在，移除
}

interface MediaAttachment { // 通用媒体附件接口
  type: 'image' | 'video'; // 类型
  url: string; // URL
  description?: string; // 描述
}

interface LinkAttachment { // 链接附件接口
  text: string; // 链接文字
  url: string; // 链接地址
}

// Use export type for better compatibility with type-only imports
export type { EventData, TimelineItem, EvidenceItem, DebateContent, MediaAttachment, LinkAttachment }; 