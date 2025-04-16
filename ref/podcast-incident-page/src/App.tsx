import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import PodcastIntro from './components/layout/PodcastIntro';
import Timeline from './components/timeline/Timeline';
import Responses from './components/layout/Responses';
import Issues from './components/layout/Issues';
import Cases from './components/layout/Cases';
import Evidence from './components/layout/Evidence';
import Footer from './components/layout/Footer';

function App() {
  // 监听滚动，高亮当前部分
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'timeline', 'responses', 'issues', 'cases', 'evidence'];
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }

      // 可选：在这里更新URL hash或导航状态
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App min-h-screen bg-bg-light">
      <Header />
      <Navigation />
      <main>
        <PodcastIntro />
        <Timeline />
        <Responses />
        <Issues />
        <Cases />
        <Evidence />
      </main>
      <Footer />
    </div>
  );
}

export default App;
