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

export { EventData, TimelineItem, EvidenceItem };