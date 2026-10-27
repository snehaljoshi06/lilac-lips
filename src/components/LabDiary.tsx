import React from 'react';
import { Bookmark, FileText } from 'lucide-react';
import { LAB_DIARY_ENTRIES } from '../data/brandData';

export const LabDiary: React.FC = () => {
  return (
    <section id="diary" className="py-16 md:py-24 bg-[#FFF9F5] border-t border-[#F8DDE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#593A57]/70 font-medium mb-2">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Digital Scrapbook</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#593A57]">
            Notes From Our First Batch
          </h2>
          <p className="mt-2 text-sm text-[#593A57]/80">
            Real field notes, lab discoveries, and reflections scribbled during our experiments.
          </p>
        </div>

        {/* Scrapbook Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LAB_DIARY_ENTRIES.map((entry, index) => (
            <div
              key={entry.id}
              className="relative bg-white rounded-2xl p-5 border border-[#F8DDE5] shadow-sm hover:shadow transition-all group flex flex-col justify-between"
              style={{
                transform: index === 0 ? 'rotate(-0.5deg)' : index === 1 ? 'rotate(0.5deg)' : 'rotate(-0.3deg)',
              }}
            >
              {/* Notebook Washi Tape / Pin Decorator */}
              <div 
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#DCD0F0]/70 rounded-xs shadow-2xs backdrop-blur-xs border border-white/50 -rotate-1 select-none pointer-events-none"
                aria-hidden="true"
              />

              <div>
                {/* Real Lab Photo thumbnail */}
                {entry.photo && (
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF2EC] mb-4 border border-[#F8DDE5]">
                    <img
                      src={entry.photo}
                      alt={entry.photoAlt || entry.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono text-[#593A57]">
                      {entry.dateTag}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 text-[11px] font-mono text-[#593A57]/70 mb-1.5">
                  <FileText className="w-3 h-3" />
                  <span>Entry {index + 1}</span>
                </div>

                <h3 className="text-lg font-serif font-semibold text-[#593A57]">
                  {entry.title}
                </h3>

                <p className="text-xs text-[#593A57]/85 leading-relaxed mt-2.5 font-light">
                  {entry.text}
                </p>
              </div>

              {/* Notebook Hand-noted Annotation */}
              <div className="mt-5 pt-3 border-t border-[#F8DDE5] bg-[#F8DDE5]/30 -mx-5 -mb-5 p-4 rounded-b-2xl">
                <span className="text-[11px] font-serif italic text-[#593A57] block">
                  {entry.annotation}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notebook Summary Quote */}
        <div className="mt-14 max-w-xl mx-auto p-4 rounded-xl bg-[#DCD0F0]/20 border border-[#DCD0F0]/60 text-center">
          <p className="text-xs text-[#593A57]/80 italic">
            "Learning chemistry through a product you can actually swipe on your lips changes the whole subject."
          </p>
          <span className="text-[11px] font-medium text-[#593A57]/60 block mt-1">
            — Student Formulation Team Notes
          </span>
        </div>

      </div>
    </section>
  );
};
