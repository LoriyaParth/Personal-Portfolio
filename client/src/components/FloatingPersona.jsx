import React from 'react';

const FloatingPersona = () => {
  const personas = [
    { text: "Wolf 🐺", color: "bg-teal-950/60 text-teal-400 border-teal-800", x: "left-6 top-6 animate-bounce" },
    { text: "Quick learner ⚡", color: "bg-emerald-950/60 text-emerald-400 border-emerald-800", x: "right-6 top-14 animate-pulse" },
    { text: "Traveler ✈️", color: "bg-cyan-950/60 text-cyan-400 border-cyan-800", x: "left-12 bottom-12 animate-pulse" },
    { text: "Creator 🎨", color: "bg-teal-950/60 text-teal-300 border-teal-800", x: "right-12 bottom-6 animate-bounce" }
  ];

  return (
    <div className="relative w-full h-[180px] bg-darkaccent/30 rounded-2xl border border-teal-950/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent pointer-events-none" />
      {personas.map((p, idx) => (
        <div
          key={idx}
          className={`absolute px-4 py-2 rounded-full border text-sm font-semibold shadow-md transition-all duration-300 hover:scale-115 hover:rotate-2 hover:bg-teal-500 hover:text-darkbg cursor-default ${p.color} ${p.x}`}
          style={{ animationDuration: `${3 + idx}s` }}
        >
          {p.text}
        </div>
      ))}
    </div>
  );
};

export default FloatingPersona;
