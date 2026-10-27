import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'The Process', href: '#process' },
    { name: 'Shop', href: '#shop' },
    { name: 'Lab Diary', href: '#diary' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF9F5]/95 backdrop-blur-md shadow-xs border-b border-[#DCD0F0]/50 py-3.5'
          : 'bg-[#FFF9F5] border-b border-[#F8DDE5]/60 py-4.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark (1 line, display face) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl sm:text-3xl font-serif font-semibold tracking-wider text-[#593A57] hover:text-[#41283F] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>LILAC LIPS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#DCD0F0] inline-block" aria-hidden="true" />
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#593A57]/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#593A57] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DCD0F0] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action / Cart Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label={`Shopping cart with ${totalItems} items`}
            className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#F8DDE5]/70 hover:bg-[#F8DDE5] text-[#593A57] transition-colors cursor-pointer border border-[#F8DDE5]"
          >
            <ShoppingBag className="w-4 h-4 text-[#593A57] group-hover:scale-105 transition-transform" />
            <span className="hidden sm:inline text-xs font-semibold tracking-wide">Bag</span>
            <span
              className={`text-xs font-bold px-1.5 py-0.2 rounded-full min-w-5 text-center tabular-nums transition-colors ${
                totalItems > 0
                  ? 'bg-[#593A57] text-[#FFF9F5]'
                  : 'bg-[#593A57]/10 text-[#593A57]'
              }`}
            >
              {totalItems}
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-[#593A57] hover:bg-[#F8DDE5]/50 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9F5] border-b border-[#DCD0F0] px-4 pt-3 pb-6 shadow-md transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#593A57] hover:bg-[#F8DDE5]/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#F8DDE5]/60 text-xs text-[#593A57]/70 px-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#593A57]/60" />
              <span>College Chemistry Lab Prototype · ₹200</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
