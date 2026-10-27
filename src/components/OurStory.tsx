import React from 'react';
import { Sparkles, Calendar, BookOpen, Camera, Globe, Lightbulb } from 'lucide-react';
import { BRAND_CONFIG, TIMELINE_MILESTONES } from '../data/brandData';

export const OurStory: React.FC = () => {
  const milestoneIcons = [Lightbulb, BookOpen, Camera, Globe];

  return (
    <section id="story" className="py-16 md:py-24 bg-[#FFF9F5] border-t border-[#F8DDE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#593A57]/70 font-medium mb-2">
            Our Origin
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#593A57]">
            How Lilac Lips Began
          </h2>
        </div>

        {/* Story Intro Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Main Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <blockquote className="text-xl sm:text-2xl font-serif text-[#593A57] leading-relaxed italic border-l-2 border-[#DCD0F0] pl-6 py-1">
              "{BRAND_CONFIG.storySnippet}"
            </blockquote>

            <p className="text-sm sm:text-base text-[#593A57]/80 leading-relaxed font-light">
              Most classroom experiments finish when you wash the test tubes and file the lab report. But when we saw our formulation cooling into a beautiful, silky lilac lip balm, we felt this shouldn't just stay in a drawer. We designed a label, took photos between lectures, and gave our project a voice.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#593A57]/70">
              <span className="font-semibold text-[#593A57]">Made by College Students</span>
              <span aria-hidden="true">·</span>
              <span>Organic Chemistry Lab</span>
              <span aria-hidden="true">·</span>
              <span>2026 Academic Term</span>
            </div>
          </div>

          {/* Real Photo Companion */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-white p-3 border border-[#F8DDE5] shadow-xs group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF2EC]">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg"
                  alt="Student lab partners working at the Bunsen burner in college chemistry"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-2.5 text-[11px] text-[#593A57]/75 text-center font-serif italic">
                Our actual lab work: Heating and stirring the formula in the chemistry lab.
              </p>
            </div>
          </div>

        </div>

        {/* Project Milestones Timeline */}
        <div className="mt-14 pt-12 border-t border-[#F8DDE5]">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-[#593A57]">
              Our Project Milestones
            </h3>
            <p className="text-xs text-[#593A57]/70 mt-1">
              Honest steps of turning a classroom lab project into a little brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_MILESTONES.map((milestone, idx) => {
              const Icon = milestoneIcons[idx] || Sparkles;
              return (
                <div
                  key={milestone.step}
                  className="bg-white rounded-2xl p-5 border border-[#F8DDE5] hover:border-[#DCD0F0] shadow-xs flex flex-col justify-between transition-all"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#593A57]/60">
                        {milestone.step}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#DCD0F0]/40 flex items-center justify-center text-[#593A57]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-base font-semibold font-serif text-[#593A57]">
                      {milestone.title}
                    </h4>

                    <p className="text-xs text-[#593A57]/80 leading-relaxed mt-2.5">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F8DDE5]/60 text-[11px] font-medium text-[#593A57]/60">
                    {milestone.note}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
