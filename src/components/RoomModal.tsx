import React from 'react';
import { X, Check, Bed, Users, Eye, Sparkles, MessageSquare, ShieldCheck, Flame, Droplets } from 'lucide-react';
import { RoomType, buildWhatsAppLink } from '../data/hotelData';

interface RoomModalProps {
  room: RoomType | null;
  onClose: () => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-room-title"
      >
        {/* Modal Header Image */}
        <div className="relative aspect-16/9 w-full bg-zinc-900 shrink-0">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10"
            aria-label="Close room details dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E6D5B8]">
              {room.view}
            </span>
            <h3 id="modal-room-title" className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {room.name}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Rate & Meta Specs */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-zinc-200/80">
            <div>
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">
                Nightly Rate
              </span>
              <span className="text-2xl font-serif font-bold text-zinc-900 tabular-nums">
                {room.pricePerNight}
              </span>
              <span className="text-xs text-zinc-500 ml-1">/ night (Taxes included)</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-zinc-700">
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-[#B89762]" />
                <span>{room.size}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#B89762]" />
                <span>{room.maxGuests}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Overview & Atmosphere
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Inclusions Checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Included Amenities & Comforts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.detailedInclusions.map((inclusion, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                  <Check className="w-3.5 h-3.5 text-[#B89762] shrink-0 mt-0.5" />
                  <span>{inclusion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Essential Mountain Guarantees */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs text-zinc-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Grand Holiday Guest Guarantee</span>
            </div>
            <p>
              24/7 dedicated hot water geyser, round-the-clock silent generator power backup, secure gated parking, and family-first privacy protocol.
            </p>
          </div>
        </div>

        {/* Modal Sticky Footer Action */}
        <div className="p-4 sm:p-5 bg-white border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-zinc-500 hidden sm:block">
            Fast WhatsApp Confirmation in 5 mins
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-2.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors min-h-[44px]"
            >
              Close
            </button>
            <a
              href={buildWhatsAppLink({
                roomName: `${room.name} (${room.pricePerNight})`,
                customMessage: `Hello Grand Holiday Hotel, I would like to inquire about the "${room.name}" at ${room.pricePerNight} per night. Please confirm available dates for my family.`
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#B89762] hover:bg-[#A3834F] active:bg-[#8F7141] rounded-xl transition-all duration-150 shadow-xs min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              Inquire Room Rates via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
