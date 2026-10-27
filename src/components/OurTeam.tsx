import React from 'react';
import { Heart, Beaker, Palette, Code, Sparkles } from 'lucide-react';

export const OurTeam: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF9F5] border-t border-[#F8DDE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-white to-[#FAF2EC] rounded-3xl p-8 sm:p-12 border border-[#F8DDE5] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Team Narrative & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#593A57]/70 font-medium">
                <Heart className="w-3.5 h-3.5 text-[#593A57]" />
                <span>Student Initiative</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#593A57]">
                Made by Students, With Love.
              </h2>

              <p className="text-sm sm:text-base text-[#593A57]/85 leading-relaxed font-light">
                This project represents what happens when classroom chemistry, visual creativity, and modern web design meet. Rather than letting our laboratory findings end in an exam booklet, we wanted to build something tangible, honest, and delightful.
              </p>

              {/* Three Pillars: Chemistry + Design + Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 bg-white rounded-xl border border-[#F8DDE5] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#DCD0F0]/40 flex items-center justify-center text-[#593A57] mb-2">
                    <Beaker className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-semibold text-[#593A57] font-serif">
                    Chemistry
                  </h3>
                  <p className="text-[11px] text-[#593A57]/70 mt-1">
                    Formulating emollients, regulating temperature, and balancing tint.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#F8DDE5] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#F8DDE5] flex items-center justify-center text-[#593A57] mb-2">
                    <Palette className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-semibold text-[#593A57] font-serif">
                    Creative
                  </h3>
                  <p className="text-[11px] text-[#593A57]/70 mt-1">
                    Crafting our Lilac Lips identity, label tone, and visual aesthetic.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#F8DDE5] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#DCD0F0]/40 flex items-center justify-center text-[#593A57] mb-2">
                    <Code className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-semibold text-[#593A57] font-serif">
                    Code
                  </h3>
                  <p className="text-[11px] text-[#593A57]/70 mt-1">
                    Building a fast, accessible, responsive website to share our work.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#593A57]/70 italic flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#593A57]/60" />
                <span>No outside agencies or corporate sponsors — purely student driven.</span>
              </div>

            </div>

            {/* Real Lab Photograph of the Students */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white p-3 border border-[#F8DDE5] shadow-xs">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#FAF2EC]">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg"
                    alt="Students formulating lip balm at the laboratory Bunsen burner"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-serif font-medium text-[#593A57]">
                    In the Lab
                  </p>
                  <p className="text-[11px] text-[#593A57]/70">
                    College chemistry lab session · 2026
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
