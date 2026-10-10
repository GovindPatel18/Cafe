/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { VisitUsFooter } from './components/VisitUsFooter';
import { ItemModal } from './components/ItemModal';
import { OrderDrawer } from './components/OrderDrawer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleQuickAdd = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: `${item.id}-${Date.now()}`,
          menuItem: item,
          quantity: 1,
          selectedMilk: item.category === 'coffee' || item.category === 'tea' ? 'Organic Oat Milk' : undefined,
        },
      ];
    });

    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId((curr) => (curr === item.id ? null : curr));
    }, 1500);
  };

  const handleAddToCartWithDetails = (
    item: MenuItem,
    quantity: number,
    milk: string,
    notes: string
  ) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: `${item.id}-${Date.now()}`,
        menuItem: item,
        quantity,
        selectedMilk: milk || undefined,
        notes: notes || undefined,
      },
    ]);
    setIsOrderDrawerOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => (ci.id === id ? { ...ci, quantity: ci.quantity + delta } : ci))
        .filter((ci) => ci.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1C1E] flex flex-col font-sans selection:bg-[#543D30]/20 selection:text-[#2A1D17]">
      {/* 1. NAVBAR */}
      <Navbar
        onOpenOrder={() => setIsOrderDrawerOpen(true)}
        cartCount={totalCartCount}
      />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <Hero />

        {/* 3. VARIETY MENU SECTION */}
        <MenuSection
          onSelectItem={(item) => setSelectedItem(item)}
          onQuickAdd={handleQuickAdd}
          addedItemId={justAddedId}
        />

        {/* 4. OUR STORY SECTION */}
        <StorySection />
      </main>

      {/* 5. VISIT US (FOOTER) */}
      <VisitUsFooter />

      {/* Interactive Item Customization Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCartWithDetails}
      />

      {/* Slide-over Online Order Pickup Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onQuickAdd={handleQuickAdd}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
