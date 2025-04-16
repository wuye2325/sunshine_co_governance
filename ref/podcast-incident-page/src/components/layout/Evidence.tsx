import type React from 'react';
import { useState } from 'react';

interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'screenshot' | 'document' | 'statement';
}

const evidenceList: EvidenceItem[] = [
  {
    id: 'evidence-1',
    title: 'Siyi微博发文',
    description: 'Siyi在微博平台上发布了关于工资拖欠的完整叙述，并附上了证明材料。',
    date: '2025年4月7日',
    type: 'statement'
  },
  {
    id: 'evidence-2',
    title: '聊天记录',
    description: 'Siyi与播客负责人的聊天记录，显示多次询问工资事宜但未得到明确承诺。',
    date: '2025年3月',
    type: 'screenshot'
  },
  {
    id: 'evidence-3',
    title: '工作安排邮件',
    description: '播客方发给Siyi的工作安排邮件，确认了工作内容和约定的薪资标准。',
    date: '2024年',
    type: 'document'
  },
  {
    id: 'evidence-4',
    title: '播客方公开声明',
    description: '不合时宜播客在官方账号发布的关于此事的回应声明。',
    date: '2025年4月8日',
    type: 'statement'
  },
  {
    id: 'evidence-5',
    title: '其他实习生证言',
    description: '多位前实习生在社交媒体上的匿名证言，证实存在类似的工资拖欠问题。',
    date: '2025年4月',
    type: 'statement'
  }
];

const Evidence: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredEvidence = activeFilter === 'all'
    ? evidenceList
    : evidenceList.filter(item => item.type === activeFilter);

  return (
    <section id="evidence" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-6 font-serif">相关证据</h2>
        <p className="text-center text-text-secondary mb-8">
          以下为事件相关的公开证据材料，均来源于公开渠道
        </p>

        {/* 筛选器 */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 border border-card-border">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'all' ? 'bg-primary text-white' : 'text-text-secondary hover:bg-gray-100'
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setActiveFilter('statement')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'statement' ? 'bg-primary text-white' : 'text-text-secondary hover:bg-gray-100'
              }`}
            >
              声明
            </button>
            <button
              onClick={() => setActiveFilter('screenshot')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'screenshot' ? 'bg-primary text-white' : 'text-text-secondary hover:bg-gray-100'
              }`}
            >
              截图
            </button>
            <button
              onClick={() => setActiveFilter('document')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'document' ? 'bg-primary text-white' : 'text-text-secondary hover:bg-gray-100'
              }`}
            >
              文档
            </button>
          </div>
        </div>

        {/* 证据列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvidence.map((evidence) => (
            <div
              key={evidence.id}
              className="bg-white rounded-lg p-5 border border-card-border shadow-sm hover:shadow transition-all"
            >
              <div className="flex items-start mb-3">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${
                  evidence.type === 'statement' ? 'bg-blue-100 text-blue' :
                  evidence.type === 'screenshot' ? 'bg-purple-100 text-secondary' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  <i className={`fas ${
                    evidence.type === 'statement' ? 'fa-comment-alt' :
                    evidence.type === 'screenshot' ? 'fa-image' : 'fa-file-alt'
                  }`} />
                </div>
                <div>
                  <h3 className="font-bold text-primary">{evidence.title}</h3>
                  <p className="text-xs text-text-secondary">{evidence.date}</p>
                </div>
              </div>
              <p className="text-sm mb-3">{evidence.description}</p>
              <button className="text-xs text-secondary font-medium hover:underline">
                查看详情 →
              </button>
            </div>
          ))}
        </div>

        {filteredEvidence.length === 0 && (
          <div className="text-center py-10 text-text-secondary">
            <i className="fas fa-search text-3xl mb-3" />
            <p>没有找到符合条件的证据</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Evidence;
