import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
    { id: 'letstalk', label: "Let's Talk" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-6 px-4">
      <nav className="glass-panel py-1.5 px-2 sm:py-2.5 sm:px-3 rounded-full flex items-center justify-center max-w-xl w-full shadow-lg border border-teal-500/20">
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-darkbg font-semibold shadow-md shadow-accent/20 scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
