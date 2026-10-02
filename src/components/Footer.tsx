import React from 'react';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import { HOTEL_INFO, buildWhatsAppLink } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-950 text-zinc-400 pt-14 pb-24 sm:pb-20 px-4 sm:px-8 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-2">
            <h3 className="text-xl font-serif font-bold text-white tracking-wider uppercase">
              GRAND HOLIDAY HOTEL
            </h3>
            <div className="text-[11px] font-semibold tracking-widest text-[#D4AF37] uppercase">
              FIZAGAT, MINGORA SWAT
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed pt-1">
              Riverside family lodging in Swat. Clean rooms, 24/7 hot water, uninterrupted generator power, and authentic fresh trout dining.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#rooms" className="text-zinc-400 hover:text-white transition-colors">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#experience" className="text-zinc-400 hover:text-white transition-colors">
                  The Fizagat Experience
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-zinc-400 hover:text-white transition-colors">
                  Amenities & Facilities
                </a>
              </li>
              <li>
                <a href="#dining" className="text-zinc-400 hover:text-white transition-colors">
                  Fresh River Trout Dining
                </a>
              </li>
              <li>
                <a href="#location" className="text-zinc-400 hover:text-white transition-colors">
                  Location & Driving Map
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-2.5 text-xs text-zinc-400">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Contact Reception
            </h4>

            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <a
                href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="text-zinc-200 hover:text-white font-medium"
              >
                {HOTEL_INFO.phonePrimary} (Calls & WhatsApp)
              </a>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{HOTEL_INFO.address}</span>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppLink({})}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-full text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Clean Sub-Footer Bar */}
        <div className="border-t border-zinc-800/80 pt-6 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-light">
          {/* Left Side */}
          <p>© 2026 Grand Holiday Hotel Fizagat. All rights reserved.</p>

          {/* Right Side (Developer Credit - Luxurious Signature Badge) */}
          <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full text-zinc-400 text-[11px] font-medium tracking-wide shadow-sm hover:border-amber-500/40 transition-colors">
            <span>Crafted with excellence by</span>
            <span className="text-amber-400 font-semibold tracking-wider uppercase text-[10px] bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
              Anees
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
