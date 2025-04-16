import type React from 'react';
import CaseCard from '../cards/CaseCard';

const casesData = [
  {
    id: 'case-1',
    title: '某视频平台拖欠实习生工资案例',
    content: '2023年，某知名视频平台被曝出拖欠多名实习生工资，引发舆论关注。该平台最终承认管理疏漏，并补发了所有欠款。',
    source: '互联网行业案例',
    date: '2023年'
  },
  {
    id: 'case-2',
    title: '新媒体行业实习生权益保障调查',
    content: '中国传媒大学的一项研究表明，新媒体行业中约有40%的实习生曾遇到工资延迟发放或少发的情况，权益保障问题突出。',
    source: '学术研究',
    date: '2024年'
  },
  {
    id: 'case-3',
    title: '播客行业用工制度现状',
    content: '一份行业报告指出，播客行业由于轻资产运营特点，普遍存在用工不规范现象，特别是对于实习生和临时工作人员。',
    source: '行业报告',
    date: '2024年'
  }
];

const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 font-serif">相关案例</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {casesData.map((caseItem) => (
            <CaseCard
              key={caseItem.id}
              title={caseItem.title}
              content={caseItem.content}
              source={caseItem.source}
              date={caseItem.date}
            />
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-card-border">
          <h3 className="text-xl font-bold text-primary mb-4">实习生权益保障建议</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                <i className="fas fa-file-contract" />
              </div>
              <h4 className="text-lg font-bold mb-2">签订实习协议</h4>
              <p className="text-sm">
                实习前应当与用人单位签订明确的实习协议，约定工作内容、工作时间、实习津贴等内容。
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                <i className="fas fa-calendar-check" />
              </div>
              <h4 className="text-lg font-bold mb-2">记录工作内容</h4>
              <p className="text-sm">
                及时记录自己的工作内容和工作时间，保留重要的工作成果和沟通记录，作为维权证据。
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                <i className="fas fa-gavel" />
              </div>
              <h4 className="text-lg font-bold mb-2">了解维权渠道</h4>
              <p className="text-sm">
                了解劳动监察、劳动仲裁等维权渠道，在权益受到侵害时能够及时采取有效措施。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
