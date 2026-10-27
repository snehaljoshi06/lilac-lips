/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { FromLabToLips } from './components/FromLabToLips';
import { OurStory } from './components/OurStory';
import { LabDiary } from './components/LabDiary';
import { ChemistryCorner } from './components/ChemistryCorner';
import { PhotoGallery } from './components/PhotoGallery';
import { OurTeam } from './components/OurTeam';
import { ContactFeedback } from './components/ContactFeedback';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenGallery = (initialPhotoIndex: number = 0) => {
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLightboxIndex(initialPhotoIndex);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FFF9F5] text-[#593A57] selection:bg-[#F8DDE5] selection:text-[#593A57]">
        {/* 1. Announcement Bar */}
        <AnnouncementBar />

        {/* 2. Top Bar Navigation */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 3. Hero Section */}
          <Hero />

          {/* 4. Product Section */}
          <ProductSection />

          {/* 5. From Lab to Lips (Video Experience & 3-Step Process) */}
          <FromLabToLips onOpenGallery={handleOpenGallery} />

          {/* 6. Our Story (Origin & Project Milestones) */}
          <OurStory />

          {/* 7. Our Lab Diary (Digital Scrapbook) */}
          <LabDiary />

          {/* 8. Chemistry Corner (Formulation & Ingredient Notice) */}
          <ChemistryCorner />

          {/* 9. Photo Gallery & Lightbox */}
          <PhotoGallery
            activeLightboxIndex={activeLightboxIndex}
            setActiveLightboxIndex={setActiveLightboxIndex}
          />

          {/* 10. Our Team */}
          <OurTeam />

          {/* 11. Feedback and Contact */}
          <ContactFeedback />
        </main>

        {/* 12. Footer */}
        <Footer />

        {/* Interactive Shopping Cart Slide-over Drawer */}
        <CartDrawer />

        {/* Demonstration Checkout Modal */}
        <CheckoutModal />

        {/* Back to top helper */}
        <BackToTop />
      </div>
    </CartProvider>
  );
}
