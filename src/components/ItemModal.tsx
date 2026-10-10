import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Plus, Minus, Check, Coffee } from 'lucide-react';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, milk: string, notes: string) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedMilk, setSelectedMilk] = useState(
    item.category === 'coffee' || item.category === 'tea' ? 'Organic Oat Milk' : ''
  );
  const [notes, setNotes] = useState('');

  const milkOptions = [
    'Organic Oat Milk (House Choice)',
    'Pasture-Raised Whole Milk',
    'Unsweetened Almond Milk',
    'No Milk / Black',
  ];

  const handleAdd = () => {
    onAddToCart(item, quantity, selectedMilk, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl border border-[#E7DECD] shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#F4EFE6] border-b border-[#E7DECD] flex items-start justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#556E5A] block mb-1">
              {item.category.toUpperCase()} SELECTION
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#2A1D17]">
              {item.name}
            </h3>
            <p className="text-sm font-semibold text-[#2A1D17] mt-1 tabular-nums">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#543D30] hover:bg-black/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          <p className="text-sm text-[#34383D] leading-relaxed">
            {item.description}
          </p>

          {item.origin && (
            <div className="p-3.5 rounded-xl bg-white border border-[#E7DECD] text-xs">
              <span className="font-semibold text-[#2A1D17] block mb-0.5">Origin Provenance:</span>
              <span className="text-[#525860] italic">{item.origin}</span>
            </div>
          )}

          {/* Milk Customization if drink */}
          {(item.category === 'coffee' || item.category === 'tea') && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#2A1D17] uppercase tracking-wider block">
                Choose Milk / Base:
              </label>
              <div className="space-y-1.5">
                {milkOptions.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                      selectedMilk === opt
                        ? 'bg-white border-[#2A1D17] text-[#2A1D17] font-medium shadow-xs'
                        : 'border-[#E7DECD] text-[#525860] hover:bg-white/60'
                    }`}
                  >
                    <span>{opt}</span>
                    <input
                      type="radio"
                      name="milkOption"
                      checked={selectedMilk === opt}
                      onChange={() => setSelectedMilk(opt)}
                      className="accent-[#2A1D17]"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Special Requests */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#2A1D17] uppercase tracking-wider block">
              Barista Instructions (Optional):
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Extra hot, light ice, warm pastry..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E7DECD] text-xs text-[#2A1D17] placeholder-[#525860]/50 focus:outline-none focus:ring-2 focus:ring-[#2A1D17]"
            />
          </div>

          {/* Quantity Stepper */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-semibold text-[#2A1D17] uppercase tracking-wider">
              Quantity:
            </span>
            <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-[#F4EFE6] border border-[#E7DECD]">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1.5 rounded-lg hover:bg-white text-[#2A1D17] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-sm font-semibold w-6 text-center tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-1.5 rounded-lg hover:bg-white text-[#2A1D17] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer with Add Button */}
        <div className="p-5 bg-[#F4EFE6] border-t border-[#E7DECD] flex items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-[11px] text-[#525860]">Item Total</p>
            <p className="text-lg font-bold text-[#2A1D17] tabular-nums">
              ${(item.price * quantity).toFixed(2)}
            </p>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 py-3 px-6 rounded-full bg-[#2A1D17] text-[#FAF8F5] font-medium text-xs sm:text-sm tracking-wide hover:bg-[#543D30] transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add to Pickup Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};
