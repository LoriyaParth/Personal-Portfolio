import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Stack from './pages/Stack';
import Work from './pages/Work';
import Contact from './pages/Contact';
import LetsTalk from './pages/LetsTalk';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const yOffset = -90; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = ['about', 'stack', 'work', 'contact', 'letstalk'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies viewport center
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Top Background Glow overlays */}
      <div className="absolute top-0 left-[20%] w-[350px] h-[350px] bg-teal-500/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] bg-emerald-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Main Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabClick} />

      {/* Primary Section Content */}
      <main className="flex-grow space-y-24 pt-24 pb-20">
        <div id="about" className="scroll-mt-28">
          <About setActiveTab={handleTabClick} />
        </div>
        <div id="stack" className="scroll-mt-28">
          <Stack />
        </div>
        <div id="work" className="scroll-mt-28">
          <Work />
        </div>
        <div id="contact" className="scroll-mt-28">
          <Contact setActiveTab={handleTabClick} />
        </div>
        <div id="letstalk" className="scroll-mt-28">
          <LetsTalk />
        </div>
      </main>

      {/* Footer Navigation */}
      <Footer setActiveTab={handleTabClick} />
    </div>
  );
}

export default App;
