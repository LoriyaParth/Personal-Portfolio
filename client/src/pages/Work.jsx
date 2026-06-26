import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';
import Card3D from '../components/Card3D';

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-accent uppercase">Curated Work</span>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-white mt-3 mb-6">
          Featured Projects
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          A compilation of client deliverables and personal engineering ventures that evoke pride.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-accent py-10">Loading portfolio works...</div>
      ) : (
        <div className="space-y-12">
          {projects.map((project) => (
            <Card3D key={project._id} className="p-8 md:p-12 border border-accent/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{project.year}</span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
                    <a href="https://github.com/LoriyaParth" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      {project.title}
                    </a>
                  </h2>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-accent/20 py-4 my-6">
                      {Object.entries(project.stats).map(([key, val]) => (
                        <div key={key}>
                          <p className="text-sm md:text-base font-bold text-accent">{val}</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">
                            {key === 'onboarding' ? 'Security' : key === 'signups' ? 'Audience' : 'Tracking'}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-darkaccent/40 text-slate-300 px-3 py-1 rounded-md border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={project.projectUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-darkbg hover:bg-accent font-semibold transition-all text-sm group"
                    >
                      View Repo
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right side mockup image */}
                <a
                  href="https://github.com/LoriyaParth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/img overflow-hidden rounded-2xl border border-accent/20 shadow-2xl block"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-darkbg/50 to-transparent pointer-events-none z-10" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] md:aspect-[16/10] object-cover group-hover/img:scale-105 transition-transform duration-700"
                  />
                </a>
              </div>
            </Card3D>
          ))}
        </div>
      )}
    </div>
  );
};

export default Work;
