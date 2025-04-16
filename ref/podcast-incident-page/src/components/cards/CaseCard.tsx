import type React from 'react';

interface CaseCardProps {
  title: string;
  content: string;
  source?: string;
  date?: string;
  highlight?: boolean;
}

const CaseCard: React.FC<CaseCardProps> = ({
  title,
  content,
  source,
  date,
  highlight = false
}) => {
  return (
    <div
      className={`case-card p-6 rounded-lg border ${
        highlight ? 'border-secondary bg-purple-50' : 'border-card-border bg-white'
      } shadow-sm mb-6`}
    >
      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm mb-4">{content}</p>

      {(source || date) && (
        <div className="flex justify-between text-xs text-text-secondary mt-auto">
          {source && <span>{source}</span>}
          {date && <span>{date}</span>}
        </div>
      )}
    </div>
  );
};

export default CaseCard;
