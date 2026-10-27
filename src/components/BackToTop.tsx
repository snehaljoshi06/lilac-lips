import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-white text-[#593A57] border border-[#DCD0F0] shadow-md hover:bg-[#F8DDE5] hover:scale-105 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DCD0F0]"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
