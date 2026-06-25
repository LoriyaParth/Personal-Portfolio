import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Stack from './pages/Stack';
import Work from './pages/Work';
import Contact from './pages/Contact';
import LetsTalk from './pages/LetsTalk';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About setActiveTab={setActiveTab} />;
      case 'stack':
        return <Stack />;
      case 'work':
        return <Work />;
      case 'contact':
        return <Contact setActiveTab={setActiveTab} />;
      case 'letstalk':
        return <LetsTalk />;
      default:
        return <About setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Background Glow overlays */}
      <div className="absolute top-0 left-[20%] w-[350px] h-[350px] bg-teal-500/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] bg-emerald-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Main Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Primary Section Content */}
      <main className="flex-grow">
        <div key={activeTab} className="transition-all duration-500 ease-in-out transform translate-y-0 opacity-100">
          {renderContent()}
        </div>
      </main>

      {/* Footer Navigation */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
