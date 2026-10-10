import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Navigation,
  Sparkles,
} from 'lucide-react';

export const VisitUsFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mapMode, setMapMode] = useState<'map' | 'transit'>('map');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
    }
  };

  const address = "428 St. Clair Avenue West, Historic Mill District, Portland, OR 97209";
  const phone = "(503) 555-0198";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Solas Specialty Coffee, ${address}`
  )}`;

  return (
    <footer id="visit" className="bg-[#19110B] text-[#FAF8F5] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background subtle ambient warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#556E5A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Visit Us Grid: Contact & Interactive Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 mb-20 items-stretch">
          {/* Left Column: Physical Location & Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7DECD] mb-3">
                Visit Solas
              </p>
              <h3 className="text-3xl sm:text-4xl font-display font-medium text-[#FAF8F5] tracking-tight mb-4">
                Come savor a slow cup with us.
              </h3>
              <p className="text-[#E7DECD]/80 text-sm sm:text-base leading-relaxed max-w-lg">
                Housed in a restored 1924 timber and brick warehouse, our cafe offers sunlit communal tables, quiet corner booths, and free high-speed fiber internet.
              </p>
            </div>

            {/* Direct Address & Phone Info */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#E7DECD] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#E7DECD]/60 font-semibold mb-1">
                    Physical Address
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-[#FAF8F5]">
                    {address}
                  </p>
                  <p className="text-xs text-[#E7DECD]/70 mt-0.5">
                    Corner of 9th & St. Clair · Dedicated street bike parking available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#E7DECD] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#E7DECD]/60 font-semibold mb-1">
                    Direct Telephone
                  </h4>
                  <a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="text-sm sm:text-base font-medium text-[#FAF8F5] hover:text-[#E7DECD] transition-colors"
                  >
                    {phone}
                  </a>
                  <p className="text-xs text-[#E7DECD]/70 mt-0.5">
                    Barista counter inquiries, whole bean orders, & catering questions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#E7DECD] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#E7DECD]/60 font-semibold mb-1">
                    Hours of Operation
                  </h4>
                  <div className="text-xs sm:text-sm text-[#FAF8F5] space-y-0.5">
                    <p><span className="text-[#E7DECD]/80 font-medium">Monday – Friday:</span> 7:00 AM – 6:00 PM</p>
                    <p><span className="text-[#E7DECD]/80 font-medium">Saturday & Sunday:</span> 8:00 AM – 7:00 PM</p>
                    <p className="text-[11px] text-[#556E5A] font-medium pt-1">Fresh bakery batch pulls at 7:00 AM & 11:30 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Directions Button */}
            <div className="pt-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#E7DECD] text-[#19110B] hover:bg-white transition-all duration-200 active:scale-[0.98] shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#543D30]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map Placeholder */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="h-full min-h-[360px] rounded-3xl overflow-hidden border border-white/15 bg-[#121314] relative flex flex-col">
              {/* Map Top Bar Control */}
              <div className="p-3 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#E7DECD]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#556E5A]" />
                  <span className="font-medium">Mill District Roastery & Bistro</span>
                </div>
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setMapMode('map')}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      mapMode === 'map' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Map View
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapMode('transit')}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      mapMode === 'transit' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Transit & Parking
                  </button>
                </div>
              </div>

              {/* Map Content View */}
              {mapMode === 'map' ? (
                <div className="relative flex-1 bg-[#1a1e24] flex items-center justify-center p-6 min-h-[300px]">
                  {/* Subtle Stylized Map Vector Graphics Background */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Simulated stylized street lines */}
                    <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#ffffff" strokeWidth="3" opacity="0.4" />
                    <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
                    <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#ffffff" strokeWidth="3" opacity="0.4" />
                    <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
                    {/* River or park feature */}
                    <path
                      d="M -20 180 Q 200 120 400 240 T 800 200"
                      fill="none"
                      stroke="#556E5A"
                      strokeWidth="12"
                      opacity="0.3"
                    />
                  </svg>

                  {/* Solas Marker Badge with Pulse */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="p-4 rounded-2xl bg-[#19110B]/95 backdrop-blur-md border border-[#E7DECD]/40 text-center shadow-2xl max-w-xs transform hover:scale-105 transition-transform duration-200">
                      <div className="w-10 h-10 rounded-full bg-[#556E5A] text-white mx-auto flex items-center justify-center shadow-md mb-2">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <p className="font-display font-medium text-sm text-[#FAF8F5]">
                        Solas Specialty Coffee
                      </p>
                      <p className="text-[11px] text-[#E7DECD]/80 mt-0.5">
                        428 St. Clair Ave W, Portland
                      </p>
                      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-center gap-2">
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-semibold text-[#E7DECD] hover:underline flex items-center gap-1"
                        >
                          <span>Get Turn-by-Turn Directions</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Corner Coordinates & Map Brand Credit */}
                  <div className="absolute bottom-3 left-3 text-[10px] text-white/50 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    45.5231° N, 122.6765° W · Elevation 54m
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] text-white/50 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    Interactive Map Canvas
                  </div>
                </div>
              ) : (
                <div className="flex-1 bg-[#1a1e24] p-6 text-xs text-[#FAF8F5] space-y-4 flex flex-col justify-center">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <h5 className="font-semibold text-[#E7DECD] text-sm mb-1">Max Light Rail / Streetcar</h5>
                    <p className="text-white/80 leading-relaxed">
                      Take the NS Line to the St. Clair Station. Walk 2 blocks east towards the historic brick clock tower.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <h5 className="font-semibold text-[#E7DECD] text-sm mb-1">Automobile & EV Parking</h5>
                    <p className="text-white/80 leading-relaxed">
                      Validated 90-minute customer parking located directly behind the roastery off 9th Street (enter via lane). Two Level 2 EV charging stalls.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <h5 className="font-semibold text-[#E7DECD] text-sm mb-1">Bicycle Storage</h5>
                    <p className="text-white/80 leading-relaxed">
                      Secured lockup staple racks located on the covered front patio with free tire inflation station.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Row: Integrated Interactive Email Newsletter Signup */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#556E5A] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#556E5A]" />
                <span>The Roast Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#FAF8F5] tracking-tight mb-2">
                Join our coffee & harvest journal.
              </h3>
              <p className="text-sm text-[#E7DECD]/80 leading-relaxed max-w-xl">
                Receive first access to limited micro-lot drops, seasonal bistro menu previews, and home brewing recipes. Plus 10% off your first coffee bag.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-[#556E5A]/20 border border-[#556E5A]/40 flex items-center gap-3 text-sm text-[#FAF8F5]">
                  <CheckCircle2 className="w-5 h-5 text-[#556E5A] shrink-0" />
                  <div>
                    <p className="font-semibold text-white">You are now subscribed!</p>
                    <p className="text-xs text-[#E7DECD]/80 mt-0.5">
                      Check your inbox for your 10% welcome voucher and brew guide.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E7DECD] focus:border-transparent transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-[#E7DECD] hover:bg-white text-[#19110B] text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap active:scale-[0.98]"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[11px] text-[#E7DECD]/50 px-2">
                    Zero spam. Unsubscribe anytime with one tap.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Strip: Social Links (Instagram & TikTok) + Copyright & Brand */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#E7DECD]/70">
          <div className="flex items-center gap-3">
            <span className="font-display font-medium text-base text-[#FAF8F5]">Solas</span>
            <span className="text-white/20">/</span>
            <span>© {new Date().getFullYear()} Solas Specialty Coffee & Bistro. All rights reserved.</span>
          </div>

          {/* Social Links to Instagram & TikTok */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Solas on Instagram"
              className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors group"
            >
              <svg
                className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Solas on TikTok"
              className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors group"
            >
              <svg
                className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.4a8.28 8.28 0 0 0 4.77 1.5V6.45c-.34 0-.67-.08-1-.26z" />
              </svg>
              <span>TikTok</span>
            </a>

            <a
              href="#home"
              className="hover:text-[#FAF8F5] transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
