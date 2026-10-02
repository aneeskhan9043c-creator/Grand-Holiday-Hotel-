import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { buildWhatsAppLink } from '../data/hotelData';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5"
    >
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-zinc-900 text-xs font-semibold py-2 px-3.5 rounded-full shadow-xl border border-zinc-200 animate-in fade-in slide-in-from-right-2">
          <span>Need quick room rates & availability?</span>
          <button
            type="button"
            onClick={() => setTooltipVisible(false)}
            className="text-zinc-400 hover:text-zinc-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={buildWhatsAppLink({})}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltipVisible(true)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl hover:shadow-2xl shadow-emerald-500/25 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Direct WhatsApp Chat with Grand Holiday Hotel Front Desk"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </aside>
  );
};
