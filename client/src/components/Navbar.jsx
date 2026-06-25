import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center py-6 px-4">
      <nav className="glass-panel py-2 px-2 sm:py-2.5 sm:px-3 rounded-full flex items-center justify-between gap-2 sm:gap-6 max-w-xl w-full shadow-lg border border-teal-500/20">
        <div className="hidden md:flex items-center gap-1.5 px-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Available</span>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-darkbg font-semibold shadow-md shadow-accent/20 scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setActiveTab('letstalk')}
          className={`rounded-full font-semibold transition-all duration-300 ${
            activeTab === 'letstalk'
              ? 'px-2.5 py-1 text-[10px] sm:px-3.5 sm:py-1 sm:text-xs bg-emerald-400 text-darkbg shadow-md shadow-emerald-400/20 scale-95'
              : 'px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm border border-accent/40 text-accent hover:bg-accent hover:text-darkbg scale-105'
          }`}
        >
          Let's talk
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
