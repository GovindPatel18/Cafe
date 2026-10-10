import React from 'react';
import baristaPourImg from '../assets/images/story_barista_pourover_1791614071250.jpg';
import { Award, Compass, HeartHandshake, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F4EFE6] border-y border-[#E7DECD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Ethical Commitment */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#556E5A]">
              <Compass className="w-4 h-4 text-[#556E5A]" />
              <span>Small-Batch Roasting & Direct Trade</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#2A1D17] tracking-tight leading-[1.15]">
              Honoring the hands that grow, <br className="hidden sm:block" />
              <span className="italic font-light text-[#543D30]">
                reverence for the pour.
              </span>
            </h2>

            <div className="space-y-4 text-[#34383D] text-base leading-relaxed">
              <p>
                Solas began with a humble belief: exceptional coffee is not created in the cup—it is nurtured in high-elevation volcanic soils, sustained by multi-generational farming families, and safeguarded through transparent direct-trade partnerships.
              </p>
              <p>
                We source exclusively from regenerative farms across Huila, Colombia and Yirgacheffe, Ethiopia, paying an average of 42% above Fair Trade minimums directly to producers. Every sack of green beans arrives with harvest coordinates, washing station documentation, and farmer equity assurances.
              </p>
              <p>
                Inside our open roastery, we roast on a cast-iron 12kg drum roaster in micro-batches twice every week. By carefully modulating thermal airflow, we unlock each lot's native fruit acidity, jasmine florals, and rich cocoa terroir without hiding them behind dark, bitter scorch marks.
              </p>
            </div>

            {/* Three Proof Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#DACDB6]">
              <div className="p-4 rounded-xl bg-white/70 border border-[#E7DECD]">
                <div className="flex items-center gap-2 text-[#556E5A] mb-1">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="font-sans font-bold text-lg text-[#2A1D17] tabular-nums">
                    100%
                  </span>
                </div>
                <p className="text-xs font-medium text-[#2A1D17]">Direct-Trade</p>
                <p className="text-[11px] text-[#525860] mt-0.5">Farm-gate pricing with complete provenance.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#E7DECD]">
                <div className="flex items-center gap-2 text-[#556E5A] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-sans font-bold text-lg text-[#2A1D17] tabular-nums">
                    12 kg
                  </span>
                </div>
                <p className="text-xs font-medium text-[#2A1D17]">Micro-Batches</p>
                <p className="text-[11px] text-[#525860] mt-0.5">Drum roasted weekly for peak aromatic life.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#E7DECD]">
                <div className="flex items-center gap-2 text-[#556E5A] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-sans font-bold text-lg text-[#2A1D17] tabular-nums">
                    72 hr
                  </span>
                </div>
                <p className="text-xs font-medium text-[#2A1D17]">Wild Ferment</p>
                <p className="text-[11px] text-[#525860] mt-0.5">Slow-fermented levain for all bistro pastries.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Orientation Barista Pour-over Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative subtle framing */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-[#E7DECD]/60 -rotate-1 hidden sm:block" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-[#19110B]">
                <img
                  src={baristaPourImg}
                  alt="Barista expertly pouring hot water from a gooseneck kettle into a glass V60 pour-over dripper with blooming coffee"
                  className="w-full aspect-[3/4] object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Caption Plaque */}
                <div className="p-5 bg-white border-t border-[#E7DECD]">
                  <div className="flex items-center justify-between text-xs text-[#543D30] mb-1">
                    <span className="font-semibold text-[#2A1D17]">Pour-over Station · Bar 01</span>
                    <span className="italic">Manual Extraction</span>
                  </div>
                  <p className="text-xs text-[#525860] leading-relaxed">
                    Precision water mineral ratio (120 PPM) poured at exactly 93°C to accentuate the stone-fruit notes of our washed Ethiopian lots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
