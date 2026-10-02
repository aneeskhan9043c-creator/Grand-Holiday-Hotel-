import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOTEL_INFO, buildWhatsAppLink } from '../data/hotelData';

export const AboutSection: React.FC = () => {
  return (
    <section id="experience" className="bg-zinc-50 py-12 sm:py-16 px-4 sm:px-8 border-y border-zinc-200/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Presentation with slow zoom hover and scroll reveal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200/80 aspect-4/3 w-full group"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop"
              alt="Scenic view of Swat River near Fizagat"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Glass Badge */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide border border-white/20 flex items-center gap-1.5 shadow-lg">
              <span>📍 Fizagat Riverfront • Swat Valley</span>
            </div>
          </motion.div>

          {/* Editorial Typography & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            {/* Eyebrow Badge */}
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#B89762] font-semibold mb-2">
              THE FIZAGAT EXPERIENCE
            </div>

            {/* Main H2 Headline */}
            <h2 className="text-2xl sm:text-4xl font-serif text-zinc-900 font-bold leading-tight mb-3">
              A Peaceful Riverside Retreat for Families
            </h2>

            {/* Sub-description */}
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
              Situated along the Swat River bypass, Grand Holiday Hotel combines clean, comfortable lodging with scenic valley breezes—just 2 minutes from Fizagat Park.
            </p>

            {/* Sleek Feature Highlights (Borderless 2-Column List) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="p-1">
                <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2 mb-1">
                  <span>📍 Prime Bypass Location</span>
                </h3>
                <p className="text-xs text-zinc-500 leading-normal">
                  2 mins from Fizagat Park & 8 mins drive to Mingora Bazaar.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-1">
                <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2 mb-1">
                  <span>🛡️ 100% Family Atmosphere</span>
                </h3>
                <p className="text-xs text-zinc-500 leading-normal">
                  Safe, peaceful, 24/7 hot water & heavy generator backup.
                </p>
              </div>
            </div>

            {/* Modern Vibrant CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-zinc-200">
              <a
                href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="bg-zinc-900 hover:bg-zinc-800 active:scale-95 text-white font-semibold py-3 px-6 rounded-full text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89762]" />
                <span>Inquire Front Desk</span>
              </a>

              <a
                href={buildWhatsAppLink({
                  customMessage: "Hello Grand Holiday Hotel Reception, I would like to inquire about room availability and details for my family stay."
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 active:scale-95 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all"
              >
                <span>💬 WhatsApp Reception</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
