import React from 'react';
import { Images } from 'lucide-react';

interface FromLabToLipsProps {
  onOpenGallery: (initialPhotoIndex?: number) => void;
}

export const FromLabToLips: React.FC<FromLabToLipsProps> = ({ onOpenGallery }) => {
  const videoSrc = '/videos/WhatsApp%20Video%202026-10-27%20at%2011.33.20%20AM.mp4';
  const posterSrc = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg';

  const processSteps = [
    {
      num: '01',
      title: 'Preparing the Materials',
      desc: 'We measured the emollient base and set up our borosilicate beakers and stirring rods on the laboratory bench.',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg',
      photoIndex: 1,
    },
    {
      num: '02',
      title: 'Making & Filling the Balm',
      desc: 'Heating gently over the Bunsen burner flame to disperse our rich berry pigment uniformly, then hand-pouring into transparent jars.',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM_a5601248.jpeg',
      photoIndex: 2,
    },
    {
      num: '03',
      title: 'Presenting Our Finished Product',
      desc: 'Letting each jar solidify into its distinct two-tone pink and purple layers, followed by campus photography.',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.22_AM_6729fdd5.jpeg',
      photoIndex: 0,
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#F8DDE5]/20 border-t border-[#F8DDE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#593A57]/70 font-medium mb-2">
            <span>From Lab to Lips</span>
            <span aria-hidden="true">·</span>
            <span>Real Chemistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#593A57]">
            A Little Behind the Scenes
          </h2>
          <p className="mt-2 text-base text-[#593A57]/80">
            From our chemistry lab to our first product.
          </p>
        </div>

        {/* Large Video Player Frame with HTML5 Controls */}
        <div className="max-w-4xl mx-auto">
          <div
            id="lab-video-container"
            className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-[#593A57] shadow-lg border border-[#DCD0F0] flex items-center justify-center"
          >
            <video
              controls
              playsInline
              preload="metadata"
              poster={posterSrc}
              className="w-full h-full object-cover"
              src={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
              <source src="/videos/WhatsApp Video 2026-10-27 at 11.33.20 AM.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="text-sm font-serif italic text-[#593A57]">
              "A little look at how we made our first lip balm in the college chemistry lab."
            </p>
            <p className="text-xs text-[#593A57]/65 mt-1">
              Video recorded directly on our phones during laboratory hours.
            </p>
          </div>
        </div>

        {/* Small Three-Part Process Timeline below Video */}
        <div className="mt-16 pt-12 border-t border-[#F8DDE5]">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-serif text-[#593A57]">
              Our Three-Step Making Process
            </h3>
            <p className="text-xs text-[#593A57]/70 mt-1">
              Photographed as it happened in the chemistry lab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-5 border border-[#F8DDE5] shadow-xs hover:border-[#DCD0F0] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo thumbnail */}
                  <div
                    onClick={() => onOpenGallery(step.photoIndex)}
                    className="relative aspect-video rounded-xl overflow-hidden bg-[#FAF2EC] mb-4 cursor-pointer group"
                    title="Click to view in photo gallery"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#593A57]/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold text-[#593A57]">
                      Step {step.num}
                    </div>
                  </div>

                  <h4 className="text-base font-semibold text-[#593A57] font-serif">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#593A57]/80 leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F8DDE5]/60 flex items-center justify-between text-[11px] text-[#593A57]/70">
                  <span className="font-mono">{step.num} / 03</span>
                  <button
                    onClick={() => onOpenGallery(step.photoIndex)}
                    className="hover:text-[#593A57] font-medium underline underline-offset-2 cursor-pointer"
                  >
                    Inspect Photo →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Photo Gallery */}
          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenGallery(0)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#593A57] text-sm font-semibold border border-[#DCD0F0] hover:border-[#593A57] shadow-2xs hover:shadow transition-all cursor-pointer"
            >
              <Images className="w-4 h-4 text-[#593A57]" />
              <span>Explore Our Lab Photos</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
