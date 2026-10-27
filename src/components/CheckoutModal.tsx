import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, ShoppingBag, ArrowLeft, ShieldAlert } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    totalItems,
    subtotal,
    clearCart,
    isCheckoutOpen,
    setIsCheckoutOpen,
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    notes: '',
  });

  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');
  const [error, setError] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmitOrderDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      setError('Please complete all required customer details.');
      return;
    }

    // Generate a demonstration reference code
    const randomCode = `LL-2026-B1-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationCode(randomCode);

    // Save demonstration reservation locally
    try {
      const pastReservations = JSON.parse(localStorage.getItem('lilac_lips_reservations') || '[]');
      pastReservations.push({
        code: randomCode,
        customer: formData,
        items: cart,
        subtotal,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('lilac_lips_reservations', JSON.stringify(pastReservations));
    } catch {
      // Storage unavailable
    }

    setDemoSubmitted(true);
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setDemoSubmitted(false);
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="relative bg-[#FFF9F5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#DCD0F0] my-8">
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#593A57] hover:bg-[#F8DDE5] transition-colors cursor-pointer border border-[#F8DDE5]"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>

          {demoSubmitted ? (
            /* Post-Submission Demonstration State (Transparent & Honest) */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#DCD0F0]/60 text-[#593A57] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#593A57]/70">
                  Student Project Showcase
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#593A57] mt-1">
                  Demonstration Reservation Logged
                </h3>
                <p className="text-xs font-mono text-[#593A57]/60 mt-1">
                  Reference: <span className="font-bold text-[#593A57]">{reservationCode}</span>
                </p>
              </div>

              {/* Mandatory Statement from Spec 5 */}
              <div className="bg-white p-5 rounded-2xl border border-[#F8DDE5] text-left space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#593A57]">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Important Demonstration Disclosure</span>
                </div>
                <p className="text-xs text-[#593A57]/80 leading-relaxed">
                  As noted in our brand story, <strong>LILAC LIPS</strong> is a student project created in our college chemistry lab. Real payment gateways, financial card processing, and commercial parcel delivery are <strong>not activated</strong>. No actual money has been charged or debited.
                </p>
                <div className="pt-2 border-t border-[#F8DDE5]/60 text-[11px] text-[#593A57]/70">
                  Your interest and feedback have been logged for our student showcase review!
                </div>
              </div>

              {/* Summary of What Was Selected */}
              <div className="p-4 bg-[#FAF2EC] rounded-2xl border border-[#F8DDE5] text-xs space-y-1.5 text-left">
                <div className="flex justify-between font-medium text-[#593A57]">
                  <span>Reserved Product:</span>
                  <span>Lilac Lips Lip Balm ({totalItems} jars)</span>
                </div>
                <div className="flex justify-between text-[#593A57]">
                  <span>Calculated Total:</span>
                  <span className="font-semibold tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#593A57]/70 text-[11px]">
                  <span>Customer Contact:</span>
                  <span>{formData.name} ({formData.phone})</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-xl bg-[#593A57] hover:bg-[#41283F] text-[#FFF9F5] text-sm font-semibold transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <div className="space-y-6">
              
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#593A57]/70 font-medium">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Demonstration Checkout</span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#593A57] mt-1">
                  Order Summary & Reservation
                </h3>
              </div>

              {/* Prominent Demonstration Banner */}
              <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Notice:</strong> This is a student-project demonstration checkout. No actual credit card or payment is collected. Submitting logs a demonstration reservation in browser storage.
                </p>
              </div>

              {/* Order Summary Strip */}
              <div className="bg-white p-4 rounded-2xl border border-[#F8DDE5] space-y-2 text-xs">
                <div className="flex justify-between font-semibold text-[#593A57]">
                  <span>Lilac Lips Lip Balm (₹200 × {totalItems})</span>
                  <span className="tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#593A57]/70">
                  <span>Prototype Batch Packaging</span>
                  <span>Included</span>
                </div>
                <div className="border-t border-[#F8DDE5] pt-2 flex justify-between font-serif text-sm font-bold text-[#593A57]">
                  <span>Subtotal in INR</span>
                  <span className="tabular-nums">₹{subtotal}</span>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              {/* Customer Information Form */}
              <form onSubmit={handleSubmitOrderDemo} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#593A57] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Patel"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#DCD0F0] text-xs text-[#593A57] focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#593A57] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#DCD0F0] text-xs text-[#593A57] focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#593A57] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@college.edu or personal email"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#DCD0F0] text-xs text-[#593A57] focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#593A57] mb-1">
                    Campus Hostel / Delivery Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Hostel / Dept / Residential address"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#DCD0F0] text-xs text-[#593A57] focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#593A57] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Pune / Mumbai"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#DCD0F0] text-xs text-[#593A57] focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#593A57] mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="e.g. 412105"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#DCD0F0] text-xs text-[#593A57] focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#593A57] mb-1">
                    Note for Student Chemists (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Wishing you good luck on your lab viva!"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#DCD0F0] text-xs text-[#593A57] focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-white"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-xs text-[#593A57]/70 hover:text-[#593A57] flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Bag</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#593A57] hover:bg-[#41283F] text-[#FFF9F5] text-xs font-semibold transition-all cursor-pointer shadow-xs"
                  >
                    Submit Demo Reservation (₹{subtotal})
                  </button>
                </div>
              </form>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
