import React from 'react';

const Footer = ({ setActiveTab }) => {
  return (
    <footer className="w-full border-t border-accent/20 py-10 px-6 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="font-serif text-lg text-slate-200">giving up is the only sure way to fail</h3>
          <p className="text-xs text-slate-400 mt-1">© {new Date().getFullYear()} All rights reserved. Built by Parth Loriya</p>
        </div>
        <div className="flex gap-6 text-sm text-slate-400">
          <button onClick={() => setActiveTab('about')} className="hover:text-accent transition-colors">About</button>
          <button onClick={() => setActiveTab('stack')} className="hover:text-accent transition-colors">Stack</button>
          <button onClick={() => setActiveTab('work')} className="hover:text-accent transition-colors">Work</button>
          <button onClick={() => setActiveTab('letstalk')} className="hover:text-accent transition-colors">Let's Talk</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
