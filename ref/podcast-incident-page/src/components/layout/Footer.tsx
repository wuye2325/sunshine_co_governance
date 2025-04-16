import type React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="stats-box border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">参与讨论人数</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>微博</span>
                <span className="text-secondary font-bold">2514</span>
              </li>
              <li className="flex justify-between">
                <span>小红书</span>
                <span className="text-secondary font-bold">187</span>
              </li>
              <li className="flex justify-between">
                <span>即刻</span>
                <span className="text-secondary font-bold">5936</span>
              </li>
            </ul>
          </div>

          <div className="stats-box border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">相关媒体报道</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://example.com/news1" className="hover:text-secondary">媒体报道链接 1</a></li>
              <li><a href="https://example.com/news2" className="hover:text-secondary">媒体报道链接 2</a></li>
              <li><a href="https://example.com/news3" className="hover:text-secondary">媒体报道链接 3</a></li>
            </ul>
          </div>

          <div className="stats-box border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">事件进展</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>最后更新</span>
                <span>2025年4月16日</span>
              </li>
              <li className="flex justify-between">
                <span>事件状态</span>
                <span className="text-yellow-400">进行中</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">本网站仅作为事件记录，所有内容均来源于公开信息</p>
          <p>&copy; 2025 播客行业纠纷记录文档库</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
