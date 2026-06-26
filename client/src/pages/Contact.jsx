import React from 'react';
import Card3D from '../components/Card3D';

const Contact = ({ setActiveTab }) => {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/LoriyaParth', handle: 'LoriyaParth', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/loriya-parth-54b423394?utm_source=share_via&utm_content=profile&utm_medium=member_android', handle: 'LORIYA PARTH', icon: '💼' },
    { name: 'Email', url: 'mailto:loriyaparth51@gmail.com', handle: 'loriyaparth51@gmail.com', icon: '📧' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase">Say Hello</span>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-white mt-3 mb-6">
          Connect with me
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          I'm always open to new initiatives, full-time opportunities, consultations, or just chatting design and systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card3D className="p-8 flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-slate-100 mb-4">Start a conversation</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Need to explore an idea, schedule a workshop, or discuss a contract? Drop a line directly through my inbox or fill out the Let's Talk intake form.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('letstalk')}
            className="w-full py-3.5 rounded-full bg-accent text-darkbg font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all text-center"
          >
            Launch Let's Talk Form
          </button>
        </Card3D>

        <div className="grid grid-cols-1 gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-cardbg/40 border border-teal-950/60 rounded-2xl hover:border-accent/40 hover:bg-teal-950/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{social.icon}</span>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide">{social.name}</h3>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">{social.handle}</p>
                </div>
              </div>
              <span className="text-slate-600 group-hover:text-accent transform group-hover:translate-x-1 transition-all">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
