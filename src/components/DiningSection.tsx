import React from 'react';
import { Check, BookOpen, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { buildWhatsAppLink } from '../data/hotelData';

interface DiningSectionProps {
  onOpenMenu: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onOpenMenu }) => {
  return (
    <section id="dining" className="py-12 sm:py-16 px-4 sm:px-8 bg-white border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content with scroll reveal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="text-[#B89762] text-[11px] uppercase tracking-widest font-semibold mb-2">
              FRESH SWAT RIVER TROUT
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mb-3 leading-tight">
              Authentic Riverside Trout & Local Cuisine
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 mb-5 leading-relaxed">
              Savor freshly caught Swat River trout fish, authentic chicken karahi, and traditional Peshawari breakfast served to your table or directly to your room.
            </p>

            {/* Clean bullet list with green checkmarks */}
            <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-zinc-700">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Freshly fried & charcoal grilled Swat River trout fish</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Desi breakfast, crispy lachha parathas & fresh eggs</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Hot Peshawari green tea (Kahwa) with cardamom</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppLink({
                  customMessage: "Hello Grand Holiday Hotel Restaurant, I would like to order room service / check dinner menu."
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-semibold px-5 py-2.5 rounded-full text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Order Room Service / Menu</span>
              </a>

              <button
                type="button"
                onClick={onOpenMenu}
                className="border border-zinc-300 text-zinc-800 hover:bg-zinc-100 active:scale-95 font-semibold px-5 py-2.5 rounded-full text-xs transition-all flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#B89762]" />
                <span>View Dining Menu</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Premium Dining Scene Image with scroll reveal and slow-zoom */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200/80 aspect-4/3 w-full bg-zinc-100 group"
          >
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
              alt="Authentic restaurant dining at Grand Holiday Hotel"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide border border-white/20 flex items-center gap-2 shadow-lg">
              <span>🐟 Fresh Swat River Trout Daily</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
