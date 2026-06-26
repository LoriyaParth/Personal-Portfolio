import React from 'react';
import Card3D from '../components/Card3D';
import FloatingPersona from '../components/FloatingPersona';

const About = ({ setActiveTab }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Sun/Smiling Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center animate-spin-slow">
          <svg className="w-10 h-10 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </div>
      </div>

      {/* Main Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          PARTH LORIYA <span className="text-teal-300 italic">| MERN & Fullstack Developer</span>
        </h1>
        <p className="text-slate-300 leading-relaxed text-base md:text-lg">
          I am a passionate MERN Stack Developer currently pursuing my B.Tech in Computer Engineering at <strong>A.D. Patel Institute of Technology</strong> (CGPA: 7.46, expected graduation May 2027). Recently, I completed a Full-Stack Developer Internship at <strong>Prelytix Pvt. Ltd.</strong> (May 2026 – Jun 2026), building full-stack modules using React, Node.js, Express, and MongoDB.
        </p>
      </div>

      {/* Marquee Banner */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-emerald-400 text-darkbg py-3 overflow-hidden select-none mb-20 font-bold uppercase tracking-wider text-sm whitespace-nowrap">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap">
          {Array(4).fill([
            "EMPATHY •", "USER FRIENDLY •", "ACCESSIBILITY •", "DESIGN THINKING •", "MERN STACK •", "3D INTERACTIVES •"
          ]).flat().map((text, idx) => (
            <span key={idx} className="mx-4 whitespace-nowrap">{text}</span>
          ))}
        </div>
      </div>

      {/* Bento Grid Info Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Info text */}
        <div className="md:col-span-1 flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-2">Beyond Portfolio</span>
          <h2 className="font-serif text-3xl font-semibold text-slate-100 mb-4">Let's know more about me</h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            I balance technical skill sets with design principles. I love working close to design mockups and crafting immersive frontend experiences without leaving code optimization behind.
          </p>
          <button 
            onClick={() => setActiveTab('letstalk')}
            className="w-fit px-5 py-2.5 rounded-full bg-accent text-darkbg font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 transition-all"
          >
            Let's build something
          </button>
        </div>

        {/* Current Read */}
        <Card3D className="p-6 flex flex-col justify-between min-h-[280px]">
          <div>
            <span className="text-xs font-semibold tracking-wider text-teal-400">+ Current Read</span>
            <p className="text-xs text-slate-400 mt-1">The Psychology of Money - Morgan Housel</p>
          </div>
          <div className="book-container flex justify-center py-4">
            <div className="book">
              <div className="book-spine" />
              <div className="book-cover flex items-center justify-center p-3 text-center text-[10px] font-bold text-white uppercase select-none">
                The Psychology of Money
              </div>
              <div className="book-page" />
            </div>
          </div>
        </Card3D>

        {/* Dynamic Bento Column */}
        <div className="flex flex-col gap-6">
          {/* Persona Widget */}
          <Card3D className="p-6 flex flex-col justify-between">
            <span className="text-xs font-semibold tracking-wider text-teal-400">+ My Persona</span>
            <p className="text-xs text-slate-400 mb-4">Know me as a person</p>
            <FloatingPersona />
          </Card3D>
          
          {/* Map Location Widget */}
          <Card3D className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                📍
              </div>
              <div>
                <p className="text-xs font-bold text-slate-200">Morbi, Gujarat PIN-363630</p>
                <p className="text-[10px] text-slate-400">Home Location</p>
              </div>
            </div>
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          </Card3D>
        </div>
      </div>
    </div>
  );
};

export default About;
