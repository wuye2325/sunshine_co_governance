import type React from 'react';
import CaseCard from '../cards/CaseCard';

const issuesData = [
  {
    id: 'issue-1',
    title: '劳动合同缺失',
    content: '多数实习生反映与播客方并未签订正式的劳动合同或实习协议，导致权益保障困难。',
    highlight: true
  },
  {
    id: 'issue-2',
    title: '薪资发放不规范',
    content: '播客平台存在无固定工资发放日期、缺乏明确的薪资支付标准等问题。',
    highlight: false
  },
  {
    id: 'issue-3',
    title: '沟通渠道不畅',
    content: '实习生反映在工资拖欠问题发生后，难以联系到负责人或得到明确回应。',
    highlight: false
  },
  {
    id: 'issue-4',
    title: '行业监管不足',
    content: '新媒体和播客行业缺乏有效的行业自律和外部监管机制，劳动权益保障体系不完善。',
    highlight: true
  }
];

const Issues: React.FC = () => {
  return (
    <section id="issues" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 font-serif">存在的问题</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issuesData.map((issue) => (
            <CaseCard
              key={issue.id}
              title={issue.title}
              content={issue.content}
              highlight={issue.highlight}
            />
          ))}
        </div>

        <div className="mt-12 bg-primary text-white p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">专家观点</h3>
          <p className="mb-4">
            劳动法专家指出，即使是实习生，也应当享有基本的劳动权益保障。企业应当与实习生签订实习协议，
            明确约定工作内容、工作时间、实习津贴等内容，并按时足额支付实习津贴。
          </p>
          <p>
            媒体行业专家表示，新媒体和播客行业应当建立更加规范的用工制度和行业标准，保障从业者特别是
            实习生的合法权益，推动行业健康发展。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Issues;
