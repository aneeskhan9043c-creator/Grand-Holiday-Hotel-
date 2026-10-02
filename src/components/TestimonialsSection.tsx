import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/hotelData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalReviews = TESTIMONIALS.length;

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
    setProgressKey((prev) => prev + 1);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
    setProgressKey((prev) => prev + 1);
  };

  // 3.0 Seconds Auto-Play rotation timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextReview();
      }, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-zinc-100/70 border-b border-zinc-200/80 overflow-hidden">
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
            GUEST EXPERIENCES
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 leading-tight mb-2">
            Trusted by Families Across Pakistan
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Real guest reviews from travelers staying along the riverfront in Fizagat, Swat.
          </p>
        </motion.div>

        {/* Animated Single-Card Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-xl mx-auto bg-zinc-900 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-zinc-800 relative overflow-hidden text-center group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 3-Second Gold Progress Bar at Top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-800/80 overflow-hidden">
            <motion.div
              key={progressKey}
              initial={{ width: '0%' }}
              animate={isPaused ? { width: '0%' } : { width: '100%' }}
              transition={{ duration: 3.0, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
            />
          </div>

          {/* Subtle Warm Gold Glow Background */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative Quote Icon */}
          <div className="flex justify-center mb-4 text-[#B89762]/30">
            <Quote className="w-10 h-10 rotate-180" />
          </div>

          {/* 5-Star Rating */}
          <div className="flex items-center justify-center gap-1 mb-4 text-amber-400">
            {[...Array(activeReview.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Review Text with Smooth AnimatePresence Slide/Fade */}
          <div className="min-h-[105px] flex items-center justify-center mb-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, x: direction * 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 25 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full px-2"
              >
                <p className="text-sm sm:text-base text-zinc-200 font-light italic leading-relaxed">
                  "{activeReview.comment}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Reviewer Details */}
          <div className="mb-6">
            <div className="font-serif font-bold text-base text-white tracking-wide">
              {activeReview.author}
            </div>
            <div className="inline-block mt-1 px-3 py-0.5 rounded-full bg-zinc-800 text-[#D4AF37] text-[11px] font-medium border border-zinc-700/60">
              {activeReview.city} • Stayed in {activeReview.roomType}
            </div>
          </div>

          {/* Controls: Left / Right Arrows & Pagination Dots */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 mt-2">
            <button
              type="button"
              onClick={prevReview}
              className="p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 active:scale-90 text-zinc-300 hover:text-white transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                    setProgressKey((prev) => prev + 1);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-amber-400'
                      : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextReview}
              className="p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 active:scale-90 text-zinc-300 hover:text-white transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
