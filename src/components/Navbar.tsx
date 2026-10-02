import React, { useState } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { HOTEL_INFO, buildWhatsAppLink } from '../data/hotelData';

interface NavbarProps {
  onQuickBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Rooms', href: '#rooms' },
    { label: 'Experience', href: '#experience' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Dining', href: '#dining' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex justify-between items-center transition-all">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Brand Logo (Left): Elegant Gold/White Serif typography */}
        <a href="#" className="flex flex-col group">
          <span className="text-lg sm:text-xl font-serif font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
            GRAND HOLIDAY
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D4AF37] leading-none mt-0.5">
            HOTEL • FIZAGAT
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white hover:text-[#D4AF37] transition-colors py-1 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick WhatsApp Icon Button */}
          <a
            href={buildWhatsAppLink({})}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white p-2.5 rounded-full shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center"
            aria-label="Direct WhatsApp Contact"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
          </a>

          {/* Desktop Phone Quick Link */}
          <a
            href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white px-3 py-1.5 rounded-full bg-white/5 border border-white/10 transition-colors"
          >
            <Phone className="w-3 h-3 text-[#D4AF37]" />
            <span className="tabular-nums font-medium">{HOTEL_INFO.phonePrimary}</span>
          </a>

          {/* Mobile Menu Toggle: Sleek minimalist icon */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-zinc-200 p-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sleek Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800 px-5 py-4 shadow-2xl animate-in slide-in-from-top duration-200 md:hidden flex flex-col gap-3">
          <nav className="flex flex-col divide-y divide-zinc-800/60">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-[#D4AF37] py-2.5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-zinc-600 text-xs">→</span>
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={buildWhatsAppLink({})}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs shadow-md shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Booking & Inquiry</span>
            </a>
            <a
              href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="w-full bg-zinc-900 border border-zinc-700 text-zinc-200 font-medium py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Front Desk ({HOTEL_INFO.phonePrimary})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
