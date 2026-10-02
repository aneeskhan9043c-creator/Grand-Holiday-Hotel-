import React, { useState } from 'react';
import { Calendar, BedDouble, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { ROOMS, buildWhatsAppLink } from '../data/hotelData';

export const Hero: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(todayStr);
  const [selectedRoom, setSelectedRoom] = useState<string>(ROOMS[0].name);

  const handleAvailabilitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppLink({
      roomName: selectedRoom,
      checkIn,
      customMessage: `Hello Grand Holiday Hotel! I would like to check rates & availability for:\n• Check-in Date: ${checkIn}\n• Room Category: ${selectedRoom}\n\nPlease share available family rates.`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[85vh] pt-24 pb-10 px-4 sm:px-8 flex flex-col justify-end bg-zinc-950 text-white overflow-hidden">
      {/* High-Quality Vivid Background Image */}
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
        alt="Swat River Valley Hotel View"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-102 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />

      {/* Vivid Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/30 z-0" />

      {/* Content Layer (z-index 10) */}
      <div className="relative z-10 max-w-xl">
        {/* Eyebrow Badge (Animated) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-3"
        >
          <span>★ FIZAGAT, MINGORA SWAT</span>
        </motion.div>

        {/* Main H1 Headline (Animated - NO DUPLICATE HOTEL NAME) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight tracking-tight mb-3"
        >
          Riverside Comfort & Peaceful Family Stay
        </motion.h1>

        {/* Subheadline (Animated) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.45 }}
          className="text-sm sm:text-base text-zinc-300 font-light max-w-sm mb-6 leading-relaxed"
        >
          Enjoy breathtaking Swat River views, 24/7 hot water, uninterrupted power, and authentic local dining.
        </motion.p>

        {/* Vibrant High-Contrast Buttons (Animated) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-xs mb-6"
        >
          <a
            href={buildWhatsAppLink({
              customMessage: "Hello Grand Holiday Hotel, I would like to inquire about room availability and booking for my family."
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all text-sm tracking-wide whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 fill-current shrink-0" />
            <span>WhatsApp Booking & Inquiry</span>
          </a>

          <a
            href="#rooms"
            className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-medium py-3.5 px-6 rounded-2xl text-center text-sm transition-all whitespace-nowrap"
          >
            Explore Rooms & Rates
          </a>
        </motion.div>
      </div>

      {/* Compact Quick-Check Floating Strip (Floating Dark Glass Card) - (Animated) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.75 }}
        className="relative z-10 w-full max-w-md bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-3.5 rounded-2xl shadow-2xl flex flex-col gap-2.5"
      >
        <form onSubmit={handleAvailabilitySubmit} className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-end">
          {/* Check-in Input */}
          <div className="flex-1">
            <label className="block text-[10px] uppercase font-semibold text-zinc-400 mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-amber-400" />
              Check-in
            </label>
            <input
              type="date"
              min={todayStr}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-zinc-800/90 border border-zinc-700 text-white text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-400 [color-scheme:dark]"
              required
            />
          </div>

          {/* Room Category Select */}
          <div className="flex-1">
            <label className="block text-[10px] uppercase font-semibold text-zinc-400 mb-1 flex items-center gap-1">
              <BedDouble className="w-3 h-3 text-amber-400" />
              Room
            </label>
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full bg-zinc-800/90 border border-zinc-700 text-white text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-400 [&>option]:bg-zinc-900 [&>option]:text-white"
            >
              {ROOMS.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name} ({room.pricePerNight})
                </option>
              ))}
            </select>
          </div>

          {/* Check Rates Action Button */}
          <div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 active:scale-95 text-zinc-950 font-bold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md shadow-amber-500/20 whitespace-nowrap h-[39px] flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span>Check Rates</span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
