import React from 'react';
import { Star, Quote } from 'lucide-react';
import BookingBackdrop from './BookingBackdrop';

export default function ProofTicker({ testimonials }) {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden relative">
      <BookingBackdrop baseColor="#2a1f61" gradientColors={['#ff6b00', '#ff6b00', '#2a1f61']} opacityClass="opacity-40" top="8%" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff6b00] mb-4">Elles ont osé la reconversion</p>
          <h2 className="font-display text-[2.2rem] sm:text-5xl font-semibold text-[#2a1f61] leading-[1.05]">
            2 400 praticiennes formées,<br />4,9 / 5 de satisfaction
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-5 h-5 fill-[#ff6b00] text-[#ff6b00]" />)}
          <span className="ml-2 text-[14px] font-semibold text-[#2a1f61]">312 avis vérifiés</span>
        </div>
      </div>

      <div className="marquee-wrap relative w-screen" style={{ zIndex: 1 }}>
        <div className="marquee-track flex gap-6 w-max">
          {loop.map((t, i) => (
            <figure key={`${t.id}-${i}`} className="w-[360px] shrink-0 rounded-[22px] bg-[#f4f4f9] p-7">
              <Quote className="w-7 h-7 text-[#ff6b00]/50" />
              <blockquote className="mt-4 text-[15.5px] leading-relaxed text-[#2a1f61]/80">« {t.quote} »</blockquote>
              <figcaption className="mt-5 pt-4 border-t border-[#2a1f61]/10">
                <p className="text-[14px] font-semibold text-[#2a1f61]">{t.name}</p>
                <p className="text-[12.5px] text-[#2a1f61]/55">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}