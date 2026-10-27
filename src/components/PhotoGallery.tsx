import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/brandData';
import { GalleryPhoto } from '../types';

interface PhotoGalleryProps {
  activeLightboxIndex: number | null;
  setActiveLightboxIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  activeLightboxIndex,
  setActiveLightboxIndex,
}) => {
  const [filter, setFilter] = useState<'all' | 'product' | 'lab' | 'styling'>('all');

  const filteredPhotos = filter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === filter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev: number | null) =>
          prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev: number | null) =>
          prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, setActiveLightboxIndex]);

  const currentPhoto: GalleryPhoto | null =
    activeLightboxIndex !== null ? GALLERY_PHOTOS[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FFF9F5] border-t border-[#F8DDE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#593A57]/70 font-medium mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Documentary Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#593A57]">
            The Lilac Lips Gallery
          </h2>
          <p className="mt-2 text-sm text-[#593A57]/80">
            Real snapshots from our chemistry laboratory experiments to the final jar.
          </p>
        </div>

        {/* Interactive Filter Tabs (functional segmented control) */}
        <div className="flex items-center justify-center gap-1.5 p-1 bg-[#F8DDE5]/40 rounded-xl max-w-md mx-auto mb-10 border border-[#F8DDE5]">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-[#593A57] shadow-2xs font-semibold'
                : 'text-[#593A57]/70 hover:text-[#593A57]'
            }`}
          >
            All Photos ({GALLERY_PHOTOS.length})
          </button>
          <button
            onClick={() => setFilter('product')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'product'
                ? 'bg-white text-[#593A57] shadow-2xs font-semibold'
                : 'text-[#593A57]/70 hover:text-[#593A57]'
            }`}
          >
            Actual Jar
          </button>
          <button
            onClick={() => setFilter('lab')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'lab'
                ? 'bg-white text-[#593A57] shadow-2xs font-semibold'
                : 'text-[#593A57]/70 hover:text-[#593A57]'
            }`}
          >
            Chemistry Lab
          </button>
          <button
            onClick={() => setFilter('styling')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'styling'
                ? 'bg-white text-[#593A57] shadow-2xs font-semibold'
                : 'text-[#593A57]/70 hover:text-[#593A57]'
            }`}
          >
            Styling Concept
          </button>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => {
            const originalIndex = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);
            return (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxIndex(originalIndex)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#F8DDE5] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-[#FAF2EC]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle expand indicator icon on hover */}
                  <div className="absolute inset-0 bg-[#593A57]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#593A57] flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="text-sm font-semibold font-serif text-[#593A57] line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#593A57]/70 line-clamp-2 mt-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentPhoto && activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Top Bar with counter & close */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
            <span className="text-xs font-mono bg-black/50 px-3 py-1.5 rounded-full">
              Photo {activeLightboxIndex + 1} of {GALLERY_PHOTOS.length}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex(null);
              }}
              className="p-2 rounded-full bg-black/50 hover:bg-black text-white hover:text-[#DCD0F0] transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex(
                (activeLightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white hover:text-[#DCD0F0] transition-all cursor-pointer z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Photo & Caption Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] rounded-xl overflow-hidden bg-black/40">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption Box */}
            <div className="mt-4 text-center max-w-xl text-white">
              <h3 className="text-base sm:text-lg font-serif font-semibold">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
                {currentPhoto.caption}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_PHOTOS.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white hover:text-[#DCD0F0] transition-all cursor-pointer z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
