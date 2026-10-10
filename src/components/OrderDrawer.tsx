import React, { useState } from 'react';
import { CartItem, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onQuickAdd: (item: MenuItem) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onQuickAdd,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.menuItem.price * curr.quantity, 0);
  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    const generatedId = `SL-${Math.floor(100 + Math.random() * 900)}`;
    setOrderId(generatedId);
    setOrderConfirmed(true);
  };

  const handleFinish = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E7DECD] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#F4EFE6] border-b border-[#E7DECD] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#2A1D17] text-[#FAF8F5] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-display font-medium text-lg text-[#2A1D17]">
                  Pickup Counter
                </h3>
                <p className="text-xs text-[#525860]">
                  428 St. Clair Ave · Est. 12-15 min
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#543D30] hover:bg-black/5 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6">
            {orderConfirmed ? (
              <div className="text-center py-8 space-y-5 animate-scaleUp">
                <div className="w-16 h-16 rounded-full bg-[#556E5A]/15 text-[#556E5A] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#556E5A]">
                    Order Received
                  </span>
                  <h4 className="text-2xl font-display font-medium text-[#2A1D17] mt-1">
                    Order #{orderId}
                  </h4>
                  <p className="text-sm text-[#525860] mt-2">
                    Thank you, <span className="font-medium text-[#2A1D17]">{customerName || 'Friend'}</span>! Our baristas are preparing your items fresh.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E7DECD] text-left text-xs space-y-2 text-[#34383D]">
                  <div className="flex items-center gap-2 text-[#556E5A] font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Estimated Pickup: in ~12 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#525860]">
                    <MapPin className="w-4 h-4" />
                    <span>Pick up at the Roastery Bar (counter 2)</span>
                  </div>
                  <div className="pt-2 border-t border-[#E7DECD] flex justify-between font-bold text-sm text-[#2A1D17]">
                    <span>Total Paid:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleFinish}
                  className="w-full py-3 rounded-full bg-[#2A1D17] text-[#FAF8F5] text-sm font-medium hover:bg-[#543D30] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#F4EFE6] text-[#543D30] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="font-display font-medium text-lg text-[#2A1D17]">
                  Your bag is currently empty
                </h4>
                <p className="text-xs text-[#525860] max-w-xs mx-auto">
                  Explore our single-origin coffees, stone-ground matcha, or warm sourdough pastries.
                </p>

                {/* Popular Quick-Add suggestions */}
                <div className="pt-6 border-t border-[#E7DECD] text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#543D30]/80 mb-3">
                    Barista Recommendations:
                  </p>
                  <div className="space-y-2">
                    {MENU_ITEMS.slice(0, 3).map((fav) => (
                      <div
                        key={fav.id}
                        className="p-3 rounded-xl bg-white border border-[#E7DECD] flex items-center justify-between gap-3 hover:border-[#DACDB6] transition-colors"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[#2A1D17] truncate">
                            {fav.name}
                          </p>
                          <p className="text-[11px] text-[#525860] tabular-nums">
                            ${fav.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onQuickAdd(fav)}
                          className="px-2.5 py-1 rounded-lg bg-[#F4EFE6] hover:bg-[#2A1D17] hover:text-white text-xs font-medium text-[#2A1D17] transition-colors shrink-0"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="p-4 rounded-2xl bg-white border border-[#E7DECD] shadow-xs space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-[#2A1D17]">
                          {cartItem.menuItem.name}
                        </h4>
                        <p className="text-xs text-[#525860] tabular-nums">
                          ${cartItem.menuItem.price.toFixed(2)} each
                        </p>
                        {cartItem.selectedMilk && (
                          <p className="text-[11px] text-[#556E5A] mt-0.5">
                            {cartItem.selectedMilk}
                          </p>
                        )}
                        {cartItem.notes && (
                          <p className="text-[11px] text-[#525860]/80 italic mt-0.5">
                            "{cartItem.notes}"
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(cartItem.id)}
                        className="p-1 text-[#525860]/60 hover:text-red-600 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E7DECD]/60">
                      <div className="inline-flex items-center gap-2 p-1 rounded-lg bg-[#F4EFE6]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(cartItem.id, -1)}
                          className="p-1 hover:bg-white rounded text-[#2A1D17] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold w-5 text-center tabular-nums">
                          {cartItem.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(cartItem.id, 1)}
                          className="p-1 hover:bg-white rounded text-[#2A1D17] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-semibold text-sm text-[#2A1D17] tabular-nums">
                        ${(cartItem.menuItem.price * cartItem.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Pickup details input */}
                <form id="orderForm" onSubmit={handleCheckout} className="pt-4 space-y-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#2A1D17] uppercase tracking-wider block mb-1">
                      Your Name for Pickup Callout:
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Elena Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E7DECD] text-xs text-[#2A1D17] placeholder-[#525860]/50 focus:outline-none focus:ring-2 focus:ring-[#2A1D17]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#2A1D17] uppercase tracking-wider block mb-1">
                      Phone Number (for SMS readiness):
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. (503) 555-0144"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E7DECD] text-xs text-[#2A1D17] placeholder-[#525860]/50 focus:outline-none focus:ring-2 focus:ring-[#2A1D17]"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {!orderConfirmed && items.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#F4EFE6] border-t border-[#E7DECD] space-y-3">
              <div className="space-y-1 text-xs text-[#525860]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium text-[#2A1D17]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="tabular-nums font-medium text-[#2A1D17]">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#2A1D17] pt-1 border-t border-[#E7DECD]">
                  <span>Total</span>
                  <span className="tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                form="orderForm"
                className="w-full py-3.5 rounded-full bg-[#2A1D17] hover:bg-[#543D30] text-[#FAF8F5] text-xs sm:text-sm font-medium tracking-wide transition-all shadow-sm active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Confirm Pickup Order (${total.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
