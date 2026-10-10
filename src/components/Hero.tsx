import React from 'react';
import { ArrowDown, Clock, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/hero_cafe_interior_1791614018734.jpg';

export const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToStory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const storyEl = document.querySelector('#story');
    if (storyEl) {
      storyEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#19110B]"
    >
      {/* Background Hero Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Warm and cozy modern third-wave cafe interior with morning window light and steaming coffee"
          className="w-full h-full object-cover object-center scale-105 animate-[kenburns_24s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Darkening Scrims for Flawless Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#19110B] via-[#19110B]/65 to-[#19110B]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(25,17,11,0.5)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center flex flex-col items-center">
        {/* Refined Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#E7DECD] text-xs uppercase tracking-[0.25em] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#E7DECD]" />
          <span>Micro-Roastery & Seasonal Kitchen</span>
        </div>

        {/* Bold Catchy Tagline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#FAF8F5] tracking-tight leading-[1.08] max-w-4xl text-balance mb-6">
          Carefully Crafted, <br />
          <span className="italic font-light text-[#E7DECD]">Responsibly Sourced.</span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#FAF8F5]/85 font-normal max-w-2xl leading-relaxed mb-8 text-balance">
          Small-batch single-origin coffees, ceremonial Uji matcha, and honest morning bakes prepared daily in our warm, sunlit space.
        </p>

        {/* Opening Hours Banner Directly Underneath */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-2.5 rounded-2xl bg-[#19110B]/75 backdrop-blur-md border border-white/15 text-[#FAF8F5] text-xs sm:text-sm mb-10 shadow-lg">
          <div className="flex items-center gap-2 text-[#E7DECD]">
            <Clock className="w-4 h-4 text-[#556E5A]" />
            <span className="font-medium">Current Hours:</span>
          </div>
          <span className="text-[#FAF8F5]/90">
            Mon – Fri: 7:00 AM – 6:00 PM
          </span>
          <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-[#FAF8F5]/90">
            Sat – Sun: 8:00 AM – 7:00 PM
          </span>
          <span className="text-white/30 hidden md:inline" aria-hidden="true">·</span>
          <span className="text-[#556E5A] font-medium hidden md:inline">
            Kitchen until 3:30 PM
          </span>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#19110B] bg-[#E7DECD] hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <span>Explore The Menu</span>
            <ArrowDown className="w-4 h-4 text-[#543D30]" />
          </a>

          <a
            href="#story"
            onClick={scrollToStory}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide text-[#FAF8F5] bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all duration-200"
          >
            <span>Our Sourcing Story</span>
          </a>
        </div>
      </div>

      {/* Floating subtle scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
        <a
          href="#menu"
          onClick={scrollToMenu}
          className="flex flex-col items-center text-white/60 hover:text-white text-[11px] uppercase tracking-widest gap-1 transition-colors"
          aria-label="Scroll to menu section"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
