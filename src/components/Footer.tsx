import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-[#F8DDE5] pt-14 pb-10 text-[#593A57]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F8DDE5]">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-serif font-semibold tracking-wider text-[#593A57] block"
            >
              {BRAND_CONFIG.name}
            </a>
            
            <p className="text-sm font-serif italic text-[#593A57]/80">
              "{BRAND_CONFIG.tagline}"
            </p>
            
            <p className="text-xs text-[#593A57]/70 leading-relaxed max-w-sm">
              Hand-poured by college students as part of our chemistry laboratory coursework. Now exploring brand creation and product storytelling.
            </p>

            <div className="pt-2 flex items-center gap-1.5 text-xs text-[#593A57]/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Batch 01 Prototype · ₹200 per jar</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#593A57]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#593A57]/80">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-[#593A57] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  onClick={(e) => handleNavClick(e, '#shop')}
                  className="hover:text-[#593A57] transition-colors"
                >
                  Our Lip Balm
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => handleNavClick(e, '#story')}
                  className="hover:text-[#593A57] transition-colors"
                >
                  How Lilac Lips Began
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleNavClick(e, '#process')}
                  className="hover:text-[#593A57] transition-colors"
                >
                  The Making Process
                </a>
              </li>
              <li>
                <a
                  href="#diary"
                  onClick={(e) => handleNavClick(e, '#diary')}
                  className="hover:text-[#593A57] transition-colors"
                >
                  Lab Diary
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, '#gallery')}
                  className="hover:text-[#593A57] transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-[#593A57] transition-colors"
                >
                  Feedback & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Placeholders (Spec 13) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#593A57]">
              Student Lab Project Contact
            </h4>
            <div className="space-y-2 text-xs text-[#593A57]/75">
              <p>
                <span className="font-medium text-[#593A57] block">Laboratory Location:</span>
                College Chemistry Department, Lab Room 304
              </p>
              <p>
                <span className="font-medium text-[#593A57] block">Project Inquiries:</span>
                contact.lilaclips@gmail.com
              </p>
              <p>
                <span className="font-medium text-[#593A57] block">Academic Term:</span>
                2026 Student Chemistry Innovation Initiative
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Student Project Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#593A57]/60">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} LILAC LIPS. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-center">
            <span>A student chemistry laboratory initiative</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-[#593A57] fill-[#593A57]" /> on campus
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
