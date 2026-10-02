import React from 'react';
import { Droplets, Zap, ShieldCheck, UtensilsCrossed, Wifi, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { AMENITIES } from '../data/hotelData';

export const AmenitiesSection: React.FC = () => {
  const iconMap = [
    Droplets,
    Zap,
    UtensilsCrossed,
    ShieldCheck,
    Wifi,
    MapPin,
  ];

  return (
    <section id="facilities" className="py-12 sm:py-16 px-4 sm:px-8 bg-zinc-50 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto">
        {/* Header with spring fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#B89762] mb-1.5">
            COMFORT & CONVENIENCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 leading-tight mb-2">
            Key Amenities & Facilities
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Essential comforts for a worry-free family holiday along the Swat River.
          </p>
        </motion.div>

        {/* 3x2 Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {AMENITIES.map((amenity, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-amber-500/30 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-1 group-hover:text-[#B89762] transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
