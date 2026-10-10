import React, { useState } from 'react';
import { MenuCategory, MenuItem } from '../types';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { Plus, Coffee, Sparkles, Check, Info } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  addedItemId: string | null;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onQuickAdd,
  addedItemId,
}) => {
  const [activeTab, setActiveTab] = useState<MenuCategory>('coffee');
  const [filterDietary, setFilterDietary] = useState<string>('all');

  const currentCategory = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0];

  const categoryItems = MENU_ITEMS.filter((item) => {
    if (item.category !== activeTab) return false;
    if (filterDietary === 'all') return true;
    return item.dietary?.includes(filterDietary as any);
  });

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#556E5A] mb-3">
            Seasonal Provisions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#2A1D17] tracking-tight mb-4">
            The Variety Menu
          </h2>
          <p className="text-[#34383D] text-base leading-relaxed">
            Every item is calibrated for flavor balance, prepared with single-origin beans, stone-ground botanicals, and heirloom pantry ingredients.
          </p>
        </div>

        {/* Four Clickable Interactive Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F4EFE6] border border-[#E7DECD] shadow-inner max-w-full overflow-x-auto scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(cat.id);
                    setFilterDietary('all');
                  }}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#2A1D17] text-[#FAF8F5] shadow-sm'
                      : 'text-[#543D30] hover:text-[#19110B] hover:bg-black/5'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subtle Category Tagline & Dietary Quick Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E7DECD]">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#543D30]/80 font-medium">
              Category Focus
            </p>
            <p className="text-sm sm:text-base font-display text-[#2A1D17]">
              {currentCategory.tagline}
            </p>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex items-center gap-1.5 text-xs text-[#543D30]">
            <span className="text-xs text-[#543D30]/70 mr-1 hidden sm:inline">Filter:</span>
            {['all', 'House Specialty', 'Vegan', 'Organic'].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilterDietary(f)}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  filterDietary === f
                    ? 'bg-[#556E5A] text-white font-medium'
                    : 'bg-[#F4EFE6] text-[#543D30] hover:bg-[#E7DECD]'
                }`}
              >
                {f === 'all' ? 'All Items' : f}
              </button>
            ))}
          </div>
        </div>

        {/* Main Menu Grid Woven With High-Quality Macro Photography Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left / Featured Photography Brief Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="group relative rounded-3xl overflow-hidden border border-[#E7DECD] bg-[#F4EFE6] shadow-sm">
              <div className="aspect-[4/3] sm:aspect-[4/3] overflow-hidden relative">
                <img
                  src={currentCategory.photoUrl}
                  alt={currentCategory.photoTitle}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19110B]/85 via-[#19110B]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wide">
                    Craft Brief · {currentCategory.name}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-display text-lg sm:text-xl font-medium tracking-tight mb-1 text-[#FAF8F5]">
                    {currentCategory.photoTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FAF8F5]/85 leading-snug">
                    {currentCategory.photoSubtitle}
                  </p>
                </div>
              </div>

              {/* Informative Tasting Note Strip */}
              <div className="p-5 sm:p-6 bg-[#FAF8F5] border-t border-[#E7DECD] flex items-center justify-between text-xs text-[#543D30]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#556E5A]" />
                  <span>Fresh daily batches</span>
                </div>
                <span className="text-[#543D30]/40" aria-hidden="true">·</span>
                <span>Oat & Almond milk available</span>
                <span className="text-[#543D30]/40" aria-hidden="true">·</span>
                <span>Order ahead for pickup</span>
              </div>
            </div>
          </div>

          {/* Right: Crisp List of Menu Items with Clear Grid & Pricing */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            {categoryItems.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-[#F4EFE6] border border-[#E7DECD] text-[#543D30]">
                <p className="text-sm">No items match the selected filter in this category.</p>
                <button
                  type="button"
                  onClick={() => setFilterDietary('all')}
                  className="mt-3 text-xs underline font-medium text-[#2A1D17]"
                >
                  Reset filter
                </button>
              </div>
            ) : (
              categoryItems.map((item) => {
                const wasJustAdded = addedItemId === item.id;
                return (
                  <div
                    key={item.id}
                    className="group relative rounded-2xl p-5 sm:p-6 bg-white border border-[#E7DECD] hover:border-[#DACDB6] transition-all duration-200 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Title and Price */}
                        <div className="flex items-baseline justify-between gap-3 mb-1.5">
                          <button
                            type="button"
                            onClick={() => onSelectItem(item)}
                            className="text-left font-display font-medium text-lg sm:text-xl text-[#2A1D17] hover:text-[#543D30] transition-colors group-hover:underline underline-offset-2"
                          >
                            {item.name}
                          </button>
                          <span className="font-sans font-semibold text-base sm:text-lg text-[#2A1D17] tabular-nums whitespace-nowrap">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>

                        {/* Appetite-driven Description */}
                        <p className="text-sm text-[#525860] leading-relaxed mb-3">
                          {item.description}
                        </p>

                        {/* Origin / Notes & Dietary Unboxed Metadata */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#543D30]/80">
                          {item.notes && <span>{item.notes}</span>}
                          {item.origin && (
                            <>
                              <span className="text-[#DACDB6]" aria-hidden="true">·</span>
                              <span className="italic">{item.origin}</span>
                            </>
                          )}
                          {item.dietary && item.dietary.length > 0 && (
                            <>
                              <span className="text-[#DACDB6]" aria-hidden="true">·</span>
                              <span className="text-[#556E5A] font-medium">
                                {item.dietary.join(', ')}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Quick Add / Customize Action Button */}
                      <div className="flex flex-col items-end gap-2 shrink-0 pt-0.5">
                        <button
                          type="button"
                          onClick={() => onQuickAdd(item)}
                          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            wasJustAdded
                              ? 'bg-[#556E5A] text-white'
                              : 'bg-[#F4EFE6] text-[#2A1D17] hover:bg-[#2A1D17] hover:text-[#FAF8F5]'
                          }`}
                          title="Quick add to pickup order"
                        >
                          {wasJustAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Order</span>
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => onSelectItem(item)}
                          className="text-[11px] text-[#543D30]/70 hover:text-[#2A1D17] underline transition-colors"
                        >
                          Customize
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Bottom Menu Guarantee Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-[#F4EFE6] border border-[#E7DECD] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#543D30]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#556E5A] shadow-xs">
              <Coffee className="w-4 h-4" />
            </span>
            <div>
              <p className="font-semibold text-[#2A1D17]">Custom Roasts & Barista Consultations</p>
              <p className="text-[#525860]">Have dietary preferences or looking for whole bean retail bags? Ask our baristas anytime.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#visit"
              className="px-4 py-2 rounded-full border border-[#DACDB6] bg-white text-[#2A1D17] hover:bg-[#FAF8F5] transition-colors font-medium"
            >
              Visit In Person
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
