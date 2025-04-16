import type React from 'react';
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    id: 'event-1',
    date: '2025年4月7日',
    title: 'Siyi发布微博',
    content: 'Siyi在微博上公开发布了关于不合时宜播客拖欠实习生工资的事件。',
    position: 'left' as const,
    highlight: true
  },
  {
    id: 'event-2',
    date: '2025年4月8日',
    title: '"不合时宜"发布声明',
    content: '不合时宜播客发布官方声明，对事件进行回应，声明中提及实习生工资问题。',
    position: 'right' as const
  },
  {
    id: 'event-3',
    date: '2025年3月4日',
    title: 'Siyi向播客方发送邮件',
    content: 'Siyi向不合时宜播客发送邮件，询问工资发放问题，未得到回复。',
    position: 'left' as const
  },
  {
    id: 'event-4',
    date: '2025年3月5日',
    title: '播客方回应',
    content: 'Siyi收到不合时宜播客方回应，表示因财务问题暂时无法支付实习工资。',
    position: 'right' as const
  },
  {
    id: 'event-5',
    date: '2025年3月7日',
    title: '再次联系',
    content: 'Siyi再次联系播客方，请求给出明确的工资支付时间表。',
    position: 'left' as const
  },
  {
    id: 'event-6',
    date: '2025年4月7日',
    title: 'Siyi公开事件',
    content: 'Siyi在社交媒体上公开此事，表示"不合时宜"播客拖欠99%的实习生工资1-3个月。',
    position: 'right' as const,
    highlight: true
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 font-serif">事件时间线</h2>

        <div className="timeline-container relative">
          {/* 起始点 */}
          <div className="flex justify-center mb-8">
            <div className="h-8 w-8 rounded-full bg-primary border-4 border-white" />
          </div>

          {/* 时间线事件 */}
          {timelineData.map((item) => (
            <TimelineItem
              key={item.id}
              date={item.date}
              title={item.title}
              content={item.content}
              position={item.position}
              highlight={item.highlight}
            />
          ))}

          {/* 结束点 */}
          <div className="flex justify-center mt-8">
            <div className="h-8 w-8 rounded-full bg-secondary border-4 border-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
