import React from 'react';
import { FlaskConical, Thermometer, Layers, Droplets, Info } from 'lucide-react';
import { CHEMISTRY_INSIGHTS, INGREDIENT_PLACEHOLDERS } from '../data/brandData';

export const ChemistryCorner: React.FC = () => {
  const insightIcons = [Layers, Thermometer, Droplets];

  return (
    <section className="py-16 md:py-24 bg-[#F8DDE5]/30 border-t border-[#F8DDE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#593A57]/70 font-medium mb-2">
            <FlaskConical className="w-4 h-4 text-[#593A57]" />
            <span>Formulation Science</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#593A57]">
            A Little Chemistry Behind It
          </h2>
          <p className="mt-2 text-sm text-[#593A57]/80">
            What we learned in college lab about balancing wax melting points, emollients, and cosmetic pigments.
          </p>
        </div>

        {/* 3 Scientific Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {CHEMISTRY_INSIGHTS.map((item, idx) => {
            const Icon = insightIcons[idx] || FlaskConical;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#F8DDE5] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#DCD0F0]/50 flex items-center justify-center text-[#593A57] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#593A57]/60 block mb-1">
                    {item.subtitle}
                  </span>
                  
                  <h3 className="text-lg font-serif font-semibold text-[#593A57]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#593A57]/80 leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Lab Notes Message Box (Strict Requirement from Spec 9) */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#DCD0F0] shadow-xs">
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#DCD0F0]/50 flex items-center justify-center text-[#593A57] shrink-0 mt-1">
              <Info className="w-5 h-5" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#593A57]">
                  Ingredient Transparency Notice
                </span>
                <span className="text-[11px] font-mono text-[#593A57]/60">· Lab Batch 01</span>
              </div>

              <h4 className="text-xl font-serif text-[#593A57]">
                We're preparing the ingredient details from our lab notes.
              </h4>

              <p className="text-xs text-[#593A57]/80 leading-relaxed">
                As college chemistry students, we believe in scientific honesty. We do not make claims like "organic", "hypoallergenic", or "miracle healing". Below are our functional formulation pillars currently being indexed from our laboratory notebook:
              </p>
            </div>
          </div>

          {/* Honest Ingredient Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#F8DDE5]">
            {INGREDIENT_PLACEHOLDERS.map((ing) => (
              <div
                key={ing.name}
                className="bg-[#FFF9F5] p-3.5 rounded-xl border border-[#F8DDE5] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#593A57]/60 uppercase tracking-wider block mb-1">
                    {ing.status === 'pending' ? 'Pending Lab Index' : 'Confirmed'}
                  </span>
                  <h5 className="text-sm font-semibold text-[#593A57] font-serif">
                    {ing.name}
                  </h5>
                  <p className="text-[11px] text-[#593A57]/75 mt-1.5 leading-relaxed">
                    {ing.role}
                  </p>
                </div>
                <span className="text-[10px] italic text-[#593A57]/60 mt-3 block pt-2 border-t border-[#F8DDE5]/60">
                  {ing.note}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
