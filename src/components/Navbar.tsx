import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Coffee } from 'lucide-react';

interface NavbarProps {
  onOpenOrder: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Story', href: '#story' },
    { label: 'Visit Us', href: '#visit' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#19110B]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-sm'
            : 'bg-gradient-to-b from-[#19110B]/80 via-[#19110B]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 text-white whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
            >
              <span className="w-8 h-8 rounded-full bg-[#E7DECD]/15 border border-[#E7DECD]/30 flex items-center justify-center text-[#E7DECD] transition-transform group-hover:scale-105">
                <Coffee className="w-4 h-4" />
              </span>
              <span className="font-display font-medium text-xl sm:text-2xl tracking-tight text-[#FAF8F5]">
                Solas
              </span>
              <span className="hidden sm:inline-block text-[11px] font-sans uppercase tracking-[0.2em] text-[#E7DECD]/70 pl-1 border-l border-white/20">
                Specialty & Bistro
              </span>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#FAF8F5]/85">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="whitespace-nowrap shrink-0 hover:text-white transition-colors relative py-1 text-[13.5px] tracking-wide after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#E7DECD] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary CTA & Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenOrder}
                className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#19110B] bg-[#FAF8F5] hover:bg-[#E7DECD] transition-all duration-200 shadow-sm active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#543D30]" />
                <span>Order Online</span>
                {cartCount > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-[#556E5A] rounded-full tabular-nums">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#19110B]/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-wider text-[#E7DECD]/60 uppercase">
              Navigation
            </p>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-display text-[#FAF8F5] hover:text-[#E7DECD] transition-colors py-2 border-b border-white/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-xs text-[#E7DECD]/70 space-y-1">
              <p className="font-semibold text-[#FAF8F5]">Solas Specialty Coffee & Bistro</p>
              <p>428 St. Clair Avenue W, Mill District</p>
              <p>Open Daily from 7:00 AM</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 text-center rounded-full bg-[#E7DECD] text-[#19110B] font-medium text-sm transition-colors hover:bg-white flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online for Pickup</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
