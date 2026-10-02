import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOTEL_INFO, NEARBY_ATTRACTIONS, buildWhatsAppLink } from '../data/hotelData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-12 sm:py-16 px-4 sm:px-8 bg-zinc-50 border-b border-zinc-200/80">
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
            LOCATION & ACCESSIBILITY
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 leading-tight mb-2">
            Prime Riverside Location in Fizagat
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Directly situated on Main Bypass Road with fast access to Mingora city and northern Swat tourist valleys.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Sleek borderless travel times list & address */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3.5">
                Key Travel Distances
              </h3>

              {/* Borderless List */}
              <div className="space-y-3">
                {NEARBY_ATTRACTIONS.map((spot) => (
                  <div
                    key={spot.name}
                    className="flex items-center justify-between py-2 border-b border-zinc-200/80 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89762]" />
                      <span className="text-xs sm:text-sm font-medium text-zinc-800">{spot.name}</span>
                    </div>
                    <span className="text-xs font-bold text-zinc-900 bg-white px-2.5 py-1 rounded-full border border-zinc-200 shadow-2xs">
                      {spot.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Quick Actions */}
            <div className="pt-2">
              <div className="flex items-start gap-2.5 mb-3.5">
                <MapPin className="w-4 h-4 text-[#B89762] shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-600 leading-snug">
                  {HOTEL_INFO.address}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-zinc-100 active:scale-95 border border-zinc-200 text-zinc-700 rounded-full text-xs font-medium transition-all shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={buildWhatsAppLink({
                    customMessage: "Hello Grand Holiday Hotel, please send me your live location on WhatsApp."
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-full text-xs font-semibold shadow-xs shadow-emerald-600/15 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Send WhatsApp Location</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:col-span-7"
          >
            <div className="rounded-3xl shadow-xl border border-zinc-300 overflow-hidden bg-white">
              <div className="relative aspect-16/10 w-full">
                <iframe
                  title="Grand Holiday Hotel Fizagat Swat Location Map"
                  src="https://maps.google.com/maps?q=Fizagat+Mingora+Swat+Khyber+Pakhtunkhwa&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Map Footer Bar with Open in Google Maps */}
              <div className="p-4 bg-white border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-zinc-600">
                  <span className="font-semibold text-zinc-900">Grand Holiday Hotel</span> · Fizagat, Swat
                </div>

                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-full text-xs font-bold shadow-md shadow-emerald-600/20 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
