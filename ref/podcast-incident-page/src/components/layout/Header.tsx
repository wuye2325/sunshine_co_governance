import type React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold font-serif mb-2 text-center">不合时宜播客拖欠实习生工资事件</h1>
        <p className="text-xl text-center mb-6">2025年</p>
        <div className="flex justify-center">
          <a href="#timeline" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-full transition-all">
            查看时间线
          </a>
        </div>
      </div>
      {/* 背景波浪SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <img src="/images/wave.svg" alt="" className="w-full" />
      </div>
    </header>
  );
};

export default Header;
