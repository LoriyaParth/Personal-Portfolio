import React from 'react';

const FloatingPersona = () => {
  const personas = [
    { text: "Wolf 🐺", color: "bg-[#4d3b33]/40 text-[#fffdf0] border-[#b8866d]/30", x: "left-6 top-6 animate-bounce" },
    { text: "Quick learner ⚡", color: "bg-darkaccent/60 text-accent border-accent/30", x: "right-6 top-14 animate-pulse" },
    { text: "Traveler ✈️", color: "bg-accent/10 text-accent border-accent/20", x: "left-12 bottom-12 animate-pulse" },
    { text: "Creator 🎨", color: "bg-[#2f2724]/60 text-[#f4ebe1] border-[#b8866d]/20", x: "right-12 bottom-6 animate-bounce" }
  ];

  return (
    <div className="relative w-full h-[180px] bg-darkaccent/30 rounded-2xl border border-accent/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
      {personas.map((p, idx) => (
        <div
          key={idx}
          className={`absolute px-4 py-2 rounded-full border text-sm font-semibold shadow-md transition-all duration-300 hover:scale-115 hover:rotate-2 hover:bg-accent hover:text-darkbg cursor-default ${p.color} ${p.x}`}
          style={{ animationDuration: `${3 + idx}s` }}
        >
          {p.text}
        </div>
      ))}
    </div>
  );
};

export default FloatingPersona;
