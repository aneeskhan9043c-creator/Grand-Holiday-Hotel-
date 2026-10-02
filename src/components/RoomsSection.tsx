import React from 'react';
import { Bed, Users, Eye, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ROOMS, RoomType, buildWhatsAppLink } from '../data/hotelData';

interface RoomsSectionProps {
  onSelectRoom: (room: RoomType) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoom }) => {
  return (
    <section id="rooms" className="py-12 sm:py-16 px-4 sm:px-8 bg-white border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with spring fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#B89762] mb-1.5">
            ACCOMMODATIONS & RATES
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 leading-tight mb-2">
            Comfortable Rooms with River Views
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Clean, spacious, and fully equipped rooms for visiting families and tourists.
          </p>
        </motion.div>

        {/* Compact 3-Card Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROOMS.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
              className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Price with slow-zoom hover */}
              <div className="relative aspect-16/10 overflow-hidden bg-zinc-200">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-zinc-950/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md border border-white/10">
                  {room.pricePerNight} <span className="font-normal text-[10px] text-zinc-300">/ night</span>
                </div>
                <div className="absolute bottom-2.5 left-3 bg-black/60 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1.5 border border-white/10">
                  <Eye className="w-3 h-3 text-[#E6D5B8]" />
                  <span>{room.view}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-zinc-900 mb-0.5 group-hover:text-[#B89762] transition-colors">
                    {room.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#B89762] mb-3">
                    {room.tagline}
                  </div>

                  {/* 3-Point Checklist */}
                  <ul className="space-y-2 mb-5 text-xs text-zinc-600">
                    {room.features.slice(0, 3).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-3 border-t border-zinc-200/80">
                  <a
                    href={buildWhatsAppLink({
                      roomName: `${room.name} (${room.pricePerNight})`,
                      customMessage: `Hello Grand Holiday Hotel, I would like to inquire about the "${room.name}" (${room.pricePerNight}/night). Please confirm availability.`
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 rounded-full transition-all shadow-md shadow-emerald-600/15"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectRoom(room)}
                    className="w-full inline-flex items-center justify-center gap-1 py-1.5 text-[11px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    <span>View Room Specifications</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
