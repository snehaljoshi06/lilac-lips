import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { BRAND_CONFIG, LILAC_LIP_BALM } from '../data/brandData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Subtle organic background color washes */}
      <div 
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 rounded-full bg-[#F8DDE5]/60 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 -z-10 w-80 h-80 rounded-full bg-[#DCD0F0]/50 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story, Title & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Zero-Pill Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#593A57]/70 font-medium">
              <span>College Chemistry Project</span>
              <span aria-hidden="true">·</span>
              <span>Batch 01</span>
              <span aria-hidden="true">·</span>
              <span>Student Crafted</span>
            </div>

            {/* Main Editorial Serif Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#593A57] leading-[1.12] text-balance">
              {BRAND_CONFIG.tagline}
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-[#593A57]/85 font-light leading-relaxed max-w-xl">
              {BRAND_CONFIG.subtagline}
            </p>

            {/* Product Highlight Strip */}
            <div className="pt-2 pb-1 border-t border-[#F8DDE5] max-w-lg">
              <div className="flex items-baseline justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#593A57] font-serif">
                    {LILAC_LIP_BALM.name}
                  </h2>
                  <p className="text-xs text-[#593A57]/70">
                    Hand-poured in a small transparent round jar
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-serif font-semibold text-[#593A57] tabular-nums">
                    ₹{LILAC_LIP_BALM.price}
                  </span>
                  <span className="text-xs text-[#593A57]/60 block">per jar</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('shop')}
                className="px-7 py-3.5 rounded-full bg-[#593A57] text-[#FFF9F5] text-sm font-medium hover:bg-[#41283F] shadow-sm hover:shadow transition-all cursor-pointer text-center"
              >
                Explore Our Lip Balm
              </button>
              
              <button
                onClick={() => scrollTo('process')}
                className="px-7 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#593A57] text-sm font-medium border border-[#DCD0F0] hover:border-[#593A57]/40 shadow-2xs transition-all cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>See How We Made It</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Genuine Project Trust Marker */}
            <div className="pt-3 flex items-center gap-2 text-xs text-[#593A57]/70">
              <Sparkles className="w-3.5 h-3.5 text-[#593A57]/60 shrink-0" />
              <span>Real prototype made by college chemistry students · Zero artificial fragrances added</span>
            </div>

          </div>

          {/* Right Column: Prominent Real Product Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Soft decorative halo */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-[#F8DDE5] via-[#DCD0F0]/40 to-[#FFF9F5] rounded-3xl -rotate-2 -z-10" 
                aria-hidden="true" 
              />

              {/* Main Photo Card */}
              <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-[#F8DDE5] overflow-hidden group">
                <div className="relative aspect-[4/5] sm:aspect-square rounded-xl overflow-hidden bg-[#FAF2EC]">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.22_AM_6729fdd5.jpeg"
                    alt="Actual handmade Lilac Lips lip balm in transparent round jar held in hand"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle caption overlay badge at corner */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-xs py-2 px-3 rounded-lg border border-white/60 shadow-2xs">
                    <p className="text-[11px] font-medium text-[#593A57] leading-tight">
                      Our Actual Handmade Jar
                    </p>
                    <p className="text-[10px] text-[#593A57]/70 leading-tight">
                      Dual-tone pink & plum balm settled in transparent acrylic
                    </p>
                  </div>
                </div>

                {/* Subtext under hero image */}
                <div className="mt-3 px-1 flex items-center justify-between text-xs text-[#593A57]/75">
                  <span className="font-serif italic">Batch 01 · First Lab Pour</span>
                  <span className="tabular-nums font-medium">₹200 / jar</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
