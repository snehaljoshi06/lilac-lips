import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Images, Upload } from 'lucide-react';

interface FromLabToLipsProps {
  onOpenGallery: (initialPhotoIndex?: number) => void;
}

export const FromLabToLips: React.FC<FromLabToLipsProps> = ({ onOpenGallery }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoSource, setHasVideoSource] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      // In placeholder mode, toggle state for UI feedback
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    const playerContainer = document.getElementById('lab-video-container');
    if (playerContainer) {
      if (!document.fullscreenElement) {
        playerContainer.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    }
  };

  const handleCustomVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setHasVideoSource(url);
      setIsPlaying(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }, 100);
    }
  };

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

        {/* Large Elegant Video Player Frame */}
        <div className="max-w-4xl mx-auto">
          <div
            id="lab-video-container"
            className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-[#593A57] shadow-lg border border-[#DCD0F0] group"
          >
            {hasVideoSource ? (
              <video
                ref={videoRef}
                src={hasVideoSource}
                poster="/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg"
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              />
            ) : (
              /* High-fidelity Video Player Placeholder with Real Lab Poster */
              <div className="relative w-full h-full">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg"
                  alt="Student chemistry laboratory setup with beaker and Bunsen burner"
                  className="w-full h-full object-cover filter brightness-[0.82]"
                />
                
                {/* Measured Scrim for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Status notice */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white/90 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#DCD0F0]" />
                  <span>College Chemistry Lab Reel</span>
                </div>
              </div>
            )}

            {/* Central Play/Pause Action Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {(!isPlaying || !hasVideoSource) && (
                <button
                  onClick={togglePlay}
                  className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-[#593A57] flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer group-hover:ring-4 group-hover:ring-[#DCD0F0]/50"
                  aria-label="Play video"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#593A57] ml-1" />
                </button>
              )}
            </div>

            {/* Video Player Control Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white text-xs z-10">
              
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="p-1.5 hover:text-[#DCD0F0] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-1.5 hover:text-[#DCD0F0] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="text-[11px] text-white/80 font-mono hidden sm:inline">
                  {isPlaying ? '0:14 / 0:42' : '0:00 / 0:42'}
                </span>
              </div>

              {/* Progress Scrubber Simulation */}
              <div className="flex-1 max-w-xs mx-4 hidden md:block">
                <div className="w-full bg-white/30 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#DCD0F0] h-full transition-all duration-300"
                    style={{ width: isPlaying ? '35%' : '0%' }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Upload or Connect Local Video File */}
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="video/mp4,video/webm,video/quicktime"
                  onChange={handleCustomVideoUpload}
                  className="hidden"
                />
                
                <button
                  onClick={() => fileInputRef.current?.click()}
                  title="Connect real video file from your computer"
                  className="px-2.5 py-1 rounded bg-white/20 hover:bg-white/30 text-white text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Upload className="w-3 h-3" />
                  <span className="hidden sm:inline">Connect MP4</span>
                </button>

                <button
                  onClick={handleFullscreen}
                  aria-label="Fullscreen"
                  className="p-1.5 hover:text-[#DCD0F0] transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Mandatory Caption specified in requirements */}
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

          {/* CTA to Photo Gallery as specified */}
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
