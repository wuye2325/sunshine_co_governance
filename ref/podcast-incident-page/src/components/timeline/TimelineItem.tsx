import type React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  content: string;
  position: 'left' | 'right';
  highlight?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  content,
  position,
  highlight = false
}) => {
  return (
    <div className={`timeline-item flex ${position === 'left' ? 'flex-row' : 'flex-row-reverse'} mb-10`}>
      {/* 时间线左侧内容 */}
      <div className={`w-5/12 ${position === 'right' ? 'text-right pr-8' : 'pl-8'}`}>
        {position === 'left' && (
          <>
            <div className="text-sm text-text-secondary mb-1">{date}</div>
            <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
            <p className="text-sm">{content}</p>
          </>
        )}
      </div>

      {/* 中间时间线 */}
      <div className="timeline-center w-2/12 flex flex-col items-center">
        <div className={`timeline-dot h-6 w-6 rounded-full ${highlight ? 'bg-secondary' : 'bg-primary'} border-4 border-white z-10`} />
        <div className="timeline-line h-full w-1 bg-gray-300 -mt-3" />
      </div>

      {/* 时间线右侧内容 */}
      <div className={`w-5/12 ${position === 'left' ? 'text-right pr-8' : 'pl-8'}`}>
        {position === 'right' && (
          <>
            <div className="text-sm text-text-secondary mb-1">{date}</div>
            <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
            <p className="text-sm">{content}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
