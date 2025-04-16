import type React from 'react';

const PodcastIntro: React.FC = () => {
  return (
    <section id="overview" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 播客图标和信息 */}
          <div className="md:w-1/3">
            <div className="podcast-logo bg-primary rounded-xl p-6 text-center text-white flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center mb-4">
                <img src="/images/audio-wave.svg" alt="不合时宜播客图标" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-1">不合时宜播客 (The Weirdo)</h3>
              <p className="text-sm mb-3">成立于2019年</p>
              <div className="stats flex justify-between w-full text-sm">
                <div>
                  <p className="font-bold">500+</p>
                  <p className="opacity-80">集数</p>
                </div>
                <div>
                  <p className="font-bold">50+</p>
                  <p className="opacity-80">嘉宾</p>
                </div>
                <div>
                  <p className="font-bold">5万+</p>
                  <p className="opacity-80">订阅</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <a href="https://podcasts.apple.com/cn/podcast/%E4%B8%8D%E5%90%88%E6%97%B6%E5%AE%9C/id1487143507"
                   className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 py-1 px-3 rounded-full transition-all">
                  Apple播客
                </a>
                <a href="https://www.xiaoyuzhoufm.com/podcast/5e280fb8418a84a0461fd076"
                   className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 py-1 px-3 rounded-full transition-all">
                  小宇宙
                </a>
              </div>
            </div>
          </div>

          {/* 事件描述 */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">事件概述</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-card-border mb-6">
              <p className="mb-4">
                "不合时宜"播客于2024-2025年期间被前实习生Siyi公开指控拖欠多名实习生工资。据Siyi在社交媒体上的发文，
                不合时宜播客拖欠了约99%的实习生工资，时长从1个月到3个月不等。
              </p>
              <p className="mb-4">
                此事件经过社交媒体的传播，引发了播客行业和媒体从业者的广泛讨论，关注到劳动权益保障和播客
                行业内部治理的问题。
              </p>
              <p>
                事件当事人Siyi于2025年4月7日首次在微博上公开此事，引发关注。
              </p>
            </div>
            <div className="flex items-center text-sm bg-yellow-50 p-4 rounded-lg border border-yellow">
              <i className="fas fa-exclamation-circle text-yellow-600 mr-3 text-lg" />
              <p>
                本网站仅收集整理公开信息，不对内容真实性负责，如有侵权或错误请联系移除或更正。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastIntro;
