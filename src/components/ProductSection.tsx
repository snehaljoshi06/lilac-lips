import React, { useState } from 'react';
import { Minus, Plus, ShoppingBag, ArrowRight, ChevronDown, Check, Info } from 'lucide-react';
import { LILAC_LIP_BALM } from '../data/brandData';
import { useCart } from '../context/CartContext';

export const ProductSection: React.FC = () => {
  const { addToCart, buyNow } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('specs');
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(LILAC_LIP_BALM, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2400);
  };

  const handleBuyNow = () => {
    buyNow(LILAC_LIP_BALM, quantity);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const currentImage = LILAC_LIP_BALM.images[selectedImageIndex] || LILAC_LIP_BALM.images[0];

  return (
    <section id="shop" className="py-16 md:py-24 bg-[#FFF9F5] border-t border-[#F8DDE5]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#593A57]/70 font-medium mb-2">
            The Product
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#593A57]">
            Our First Creation
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#593A57]/80">
            Formulated, hand-melted, and poured by us in the chemistry laboratory.
          </p>
        </div>

        {/* Product Grid: Sticky Gallery (Left) & Purchase Module (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Image Showcase with Thumbnails */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {/* Primary Main Image Frame */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-[#F8DDE5] shadow-xs group">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover object-center transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              
              {/* Image Label Pill */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium text-[#593A57] border border-white/70 shadow-2xs">
                {currentImage.label}
              </div>

              {/* Toast confirmation */}
              {addedToast && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#593A57] text-[#FFF9F5] text-xs py-2 px-4 rounded-full shadow-lg flex items-center gap-2 animate-fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Added {quantity} jar{quantity > 1 ? 's' : ''} to bag!</span>
                </div>
              )}
            </div>

            {/* Clickable Image Thumbnails */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
              {LILAC_LIP_BALM.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-white ${
                    selectedImageIndex === idx
                      ? 'border-[#593A57] shadow-xs ring-2 ring-[#DCD0F0]'
                      : 'border-[#F8DDE5] opacity-75 hover:opacity-100 hover:border-[#DCD0F0]'
                  }`}
                  aria-label={`Switch photo to ${img.label}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

            {/* Honest Photography Note */}
            <p className="text-[11px] text-[#593A57]/65 text-center italic">
              Thumbnails show our real laboratory process and our actual handmade jar.
            </p>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Title & Price Header */}
            <div>
              <div className="flex items-center gap-2 text-xs text-[#593A57]/70 font-medium mb-1">
                <span>{LILAC_LIP_BALM.batch}</span>
                <span aria-hidden="true">·</span>
                <span>Single Variant</span>
              </div>
              <h3 className="text-3xl font-serif font-medium text-[#593A57]">
                {LILAC_LIP_BALM.name}
              </h3>
              
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-3xl font-serif font-semibold text-[#593A57] tabular-nums">
                  ₹{LILAC_LIP_BALM.price}
                </span>
                <span className="text-xs text-[#593A57]/70">per jar (inclusive of demo pricing)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#593A57]/85 leading-relaxed bg-[#F8DDE5]/30 p-3.5 rounded-xl border border-[#F8DDE5]">
              "{LILAC_LIP_BALM.description}"
            </p>

            {/* Specifications Summary (Honest & Unadulterated) */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-[#F8DDE5]">
                <span className="text-[#593A57]/60 block font-medium">Packaging</span>
                <span className="font-semibold text-[#593A57] mt-0.5 block">
                  {LILAC_LIP_BALM.packaging}
                </span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#F8DDE5]">
                <span className="text-[#593A57]/60 block font-medium">Balm Appearance</span>
                <span className="font-semibold text-[#593A57] mt-0.5 block">
                  {LILAC_LIP_BALM.appearance}
                </span>
              </div>
            </div>

            {/* Quantity Selector & Purchase Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#593A57]">
                  Quantity
                </span>
                <span className="text-xs text-[#593A57]/70 tabular-nums">
                  Total: ₹{LILAC_LIP_BALM.price * quantity}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Stepper */}
                <div className="flex items-center border border-[#DCD0F0] rounded-xl bg-white px-2 py-1 shadow-2xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="p-2 text-[#593A57] hover:bg-[#F8DDE5]/50 disabled:opacity-30 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-semibold text-sm text-[#593A57] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="p-2 text-[#593A57] hover:bg-[#F8DDE5]/50 rounded-lg transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-5 rounded-xl bg-[#F8DDE5] hover:bg-[#ebd0d8] text-[#593A57] font-semibold text-sm border border-[#F8DDE5] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
              </div>

              {/* Buy Now Button (Direct to checkout) */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 px-6 rounded-xl bg-[#593A57] hover:bg-[#41283F] text-[#FFF9F5] font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Buy Now · ₹{LILAC_LIP_BALM.price * quantity}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Product Details Accordion */}
            <div className="divide-y divide-[#F8DDE5] border-t border-b border-[#F8DDE5] pt-1">
              
              {/* Accordion Item 1: Packaging & Appearance */}
              <div>
                <button
                  onClick={() => toggleAccordion('specs')}
                  className="w-full py-3.5 flex items-center justify-between text-left text-sm font-semibold text-[#593A57] hover:text-[#41283F] cursor-pointer"
                >
                  <span>Packaging & Physical Appearance</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openAccordion === 'specs' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'specs' && (
                  <div className="pb-4 text-xs text-[#593A57]/80 space-y-2">
                    <p>
                      Each jar is a small, clear transparent round acrylic container allowing the natural settled pink-purple hues to shine through.
                    </p>
                    <p>
                      Because each jar was poured by hand in our chemistry lab, the exact swirl and surface finish vary gently from jar to jar.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 2: Formulation & Ingredients */}
              <div>
                <button
                  onClick={() => toggleAccordion('ingredients')}
                  className="w-full py-3.5 flex items-center justify-between text-left text-sm font-semibold text-[#593A57] hover:text-[#41283F] cursor-pointer"
                >
                  <span>Formulation Notes & Ingredients</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openAccordion === 'ingredients' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'ingredients' && (
                  <div className="pb-4 text-xs text-[#593A57]/80 space-y-2">
                    <div className="flex items-start gap-2 bg-[#DCD0F0]/25 p-2.5 rounded-lg border border-[#DCD0F0]/50">
                      <Info className="w-4 h-4 text-[#593A57] shrink-0 mt-0.5" />
                      <p className="font-medium text-[#593A57]">
                        We're preparing the ingredient details from our lab notes.
                      </p>
                    </div>
                    <p>
                      Our preliminary batch was formulated using an emollient wax base, conditioning plant oils, and cosmetic-grade berry pigment. To maintain student transparency, the exact INCI ingredient breakdown and precise weight percentages will be updated once our chemistry log is officially indexed.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 3: How to Use & Store */}
              <div>
                <button
                  onClick={() => toggleAccordion('usage')}
                  className="w-full py-3.5 flex items-center justify-between text-left text-sm font-semibold text-[#593A57] hover:text-[#41283F] cursor-pointer"
                >
                  <span>Application & Storage Advice</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openAccordion === 'usage' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'usage' && (
                  <div className="pb-4 text-xs text-[#593A57]/80 space-y-2">
                    <p>
                      • <strong>To Apply:</strong> Swipe a clean fingertip across the balm surface and apply evenly to dry or chapped lips.
                    </p>
                    <p>
                      • <strong>Storage:</strong> Keep the transparent jar in a cool, dry bag or desk pocket. Protect from direct sun exposure or open flames to preserve balm firmness.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 4: Student Project Disclaimer */}
              <div>
                <button
                  onClick={() => toggleAccordion('batch')}
                  className="w-full py-3.5 flex items-center justify-between text-left text-sm font-semibold text-[#593A57] hover:text-[#41283F] cursor-pointer"
                >
                  <span>Student Batch Project Status</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openAccordion === 'batch' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'batch' && (
                  <div className="pb-4 text-xs text-[#593A57]/80 space-y-2">
                    <p>
                      This product represents our first prototype developed as part of our college laboratory coursework. We do not manufacture industrial cosmetics or claim commercial medical certifications. We made this with genuine care, curiosity, and scientific enthusiasm!
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
