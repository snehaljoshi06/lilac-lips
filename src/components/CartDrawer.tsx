import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    totalItems,
    subtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF9F5] shadow-2xl flex flex-col justify-between border-l border-[#DCD0F0]">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#F8DDE5] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#593A57]" />
              <h2 className="text-lg font-serif font-semibold text-[#593A57]">
                Your Shopping Bag
              </h2>
              <span className="text-xs font-mono bg-[#DCD0F0]/50 px-2 py-0.5 rounded-full text-[#593A57]">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-[#593A57] hover:bg-[#F8DDE5]/50 transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Items Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              /* Empty Cart State */
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F8DDE5] flex items-center justify-center text-[#593A57]">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif text-[#593A57]">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-[#593A57]/70 max-w-xs leading-relaxed">
                  You haven't added our Lilac Lips lip balm yet. Explore our handcrafted student formula!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-[#593A57] text-[#FFF9F5] text-xs font-semibold hover:bg-[#41283F] transition-colors cursor-pointer"
                >
                  Explore Product
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3.5 bg-white rounded-2xl border border-[#F8DDE5] shadow-2xs flex gap-3.5"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#FAF2EC] shrink-0 border border-[#F8DDE5]">
                      <img
                        src={item.product.images[0]?.src}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="text-sm font-semibold font-serif text-[#593A57]">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-[#593A57]/40 hover:text-red-500 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#593A57]/70">
                          {item.product.packaging}
                        </p>
                        <p className="text-xs font-semibold text-[#593A57] mt-1 tabular-nums">
                          ₹{item.product.price} each
                        </p>
                      </div>

                      {/* Quantity Stepper & Line Total */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#DCD0F0] rounded-lg bg-[#FFF9F5] px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-[#593A57] hover:bg-white rounded transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-semibold tabular-nums text-[#593A57]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-[#593A57] hover:bg-white rounded transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-sm font-semibold font-serif text-[#593A57] tabular-nums">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-[11px] text-[#593A57]/60 hover:text-[#593A57] underline transition-colors block text-right pt-1"
                >
                  Clear all items
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer with Subtotal & Checkout Trigger */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#F8DDE5] bg-white space-y-4">
              
              <div className="space-y-1.5 text-xs text-[#593A57]">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-semibold tabular-nums text-sm">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#593A57]/70">
                  <span>Campus Demonstration Order</span>
                  <span>Free demo</span>
                </div>
                <div className="border-t border-[#F8DDE5] pt-2 flex justify-between text-base font-semibold font-serif">
                  <span>Total</span>
                  <span className="text-lg tabular-nums">₹{subtotal}</span>
                </div>
              </div>

              {/* Student Demonstration Notice */}
              <div className="p-2.5 bg-[#FAF2EC] rounded-xl text-[10px] text-[#593A57]/75 leading-tight flex items-start gap-1.5 border border-[#F8DDE5]">
                <Sparkles className="w-3 h-3 shrink-0 mt-0.5 text-[#593A57]" />
                <span>Demonstration Mode: Orders collect student interest & feedback without processing monetary transactions.</span>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 px-6 rounded-xl bg-[#593A57] hover:bg-[#41283F] text-[#FFF9F5] font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Proceed to Checkout Demo (₹{subtotal})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
