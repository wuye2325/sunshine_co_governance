import React from 'react';

const ProcessExperience = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          阳光共治流程体验
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              流程体验说明
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              在这里，您可以体验阳光共治的完整流程，包括：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>5%动议制度</li>
              <li>异议讨论制度</li>
              <li>快速咨询制度</li>
              <li>业主大会表决</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                发起动议
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                体验如何发起一个动议，并收集5%业主的附议
              </p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                开始体验
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                参与表决
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                体验如何参与业主大会的表决过程
              </p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                开始体验
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessExperience; 