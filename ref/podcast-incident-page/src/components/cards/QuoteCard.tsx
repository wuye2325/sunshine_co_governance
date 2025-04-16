import type React from 'react';

interface QuoteCardProps {
  quote: string;
  author: string;
  source?: string;
  date?: string;
  highlight?: boolean;
}

const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  author,
  source,
  date,
  highlight = false
}) => {
  return (
    <div
      className={`quote-card p-6 rounded-lg ${
        highlight
          ? 'bg-primary text-white'
          : 'bg-white border border-card-border text-gray-800'
      } shadow-sm mb-6 relative`}
    >
      {/* 引号图标 */}
      <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-secondary text-white flex items-center justify-center">
        <i className="fas fa-quote-left" />
      </div>

      <blockquote className="pl-4 border-l-4 border-secondary mb-4">
        <p className="italic text-sm mb-2">{quote}</p>
      </blockquote>

      <div className="flex justify-between items-end">
        <div>
          <p className="font-medium">{author}</p>
          {source && <p className="text-xs opacity-80">{source}</p>}
        </div>
        {date && <p className="text-xs opacity-70">{date}</p>}
      </div>
    </div>
  );
};

export default QuoteCard;
