import React, { useEffect, useState } from 'react';
import { fetchStacks } from '../api';
import Card3D from '../components/Card3D';
import * as Icons from 'lucide-react';

const Stack = () => {
  const [stacks, setStacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStacks()
      .then((data) => {
        setStacks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6 text-accent" /> : <Icons.Code className="w-6 h-6 text-accent" />;
  };

  const categories = [...new Set(stacks.map(s => s.category))];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase">My Toolbox</span>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-white mt-3 mb-6">
          The stack I use to build
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Here is a breakdown of languages, frameworks, and tools I use to build premium scalable digital environments.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-teal-400 py-10">Loading technology stack...</div>
      ) : (
        <div className="space-y-12">
          {categories.map((category) => {
            const items = stacks.filter(s => s.category.toLowerCase() === category.toLowerCase());
            if (items.length === 0) return null;
            return (
              <div key={category} className="space-y-4">
                <h2 className="text-sm font-semibold tracking-wider text-teal-400 uppercase border-b border-teal-950/60 pb-2">
                  {category}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {items.map((item, idx) => (
                    <Card3D key={item._id || idx} className="p-3 sm:p-5 flex items-center gap-2 sm:gap-4 min-h-[80px]">
                      <div className="p-2 sm:p-3 bg-darkaccent/60 rounded-xl border border-teal-950 flex-shrink-0">
                        {getIcon(item.icon)}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-semibold text-slate-100 break-words">{item.name}</h3>
                      </div>
                    </Card3D>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Stack;
