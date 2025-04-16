import type React from 'react';
import QuoteCard from '../cards/QuoteCard';

const responsesData = [
  {
    id: 'response-1',
    quote: "不合时宜播客在2025年4月8日发布官方声明，承认存在实习生工资拖欠问题，表示是由于临时财务困难导致，并承诺将尽快解决。",
    author: "不合时宜播客官方",
    date: "2025年4月8日",
    highlight: true
  },
  {
    id: 'response-2',
    quote: "Siyi提供的聊天记录显示，不合时宜播客曾表示'会尽快安排工资支付，感谢理解'，但之后一直未能兑现承诺。",
    author: "聊天记录摘要",
    date: "2025年3月",
    highlight: false
  },
  {
    id: 'response-3',
    quote: "在Siyi公开此事后，不合时宜播客负责人回应称'将全力解决实习生工资问题，针对Siyi的情况已在处理中'。",
    author: "社交媒体回应",
    date: "2025年4月8日",
    highlight: false
  },
  {
    id: 'response-4',
    quote: "Siyi在社交媒体平台表示：'我已经等待了3个月，却连一个明确的支付时间表都没有得到。这不仅是我个人的问题，还有其他99%的实习生也面临同样的情况。'",
    author: "Siyi",
    date: "2025年4月7日",
    highlight: true
  }
];

const Responses: React.FC = () => {
  return (
    <section id="responses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 font-serif">各方回应</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {responsesData.map((response) => (
            <QuoteCard
              key={response.id}
              quote={response.quote}
              author={response.author}
              date={response.date}
              highlight={response.highlight}
            />
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border border-card-border">
          <h3 className="text-xl font-bold text-primary mb-4">媒体关注</h3>
          <p className="mb-4">
            此事件引发了多家媒体的关注和报道，包括专业的播客行业媒体和主流新闻平台。多数媒体对此事保持中立态度，
            呼吁播客平台应当重视实习生的劳动权益，并按照约定及时支付工资。
          </p>
          <p>
            播客行业协会也发表了声明，建议行业从业者应当遵守劳动法规定，尊重实习生权益，规范行业秩序。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Responses;
