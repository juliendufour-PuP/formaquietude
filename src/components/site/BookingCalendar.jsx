import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, differenceInCalendarDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, MapPin, Users, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function BookingCalendar({ sessions, onReserve }) {
  const [selected, setSelected] = useState(sessions[0]?.id || null);
  const strip = useRef(null);

  const scrollBy = (dir) => strip.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  const active = sessions.find((s) => s.id === selected);

  return (
    <section id="dates" className="bg-[#2a1f61] py-24 lg:py-32 relative overflow-hidden">
      <span className="pointer-events-none select-none absolute right-0 top-10 font-display text-[14vw] leading-none text-white/[0.04] hidden lg:block">Calme</span>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            align="left"
            light
            eyebrow="Calendrier 2026 — 2027"
            title="Réservez votre session"
            subtitle="Sessions en présentiel à Lyon, Paris et Bordeaux. Les places partent en moyenne 6 semaines avant l’ouverture."
          />
          <div className="flex gap-3">
            <button onClick={() => scrollBy(-1)} aria-label="Dates précédentes" className="p-3 rounded-full border border-white/25 text-white hover:bg-white/10 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Dates suivantes" className="p-3 rounded-full border border-white/25 text-white hover:bg-white/10 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={strip} className="mt-14 flex gap-5 overflow-x-auto no-scrollbar pb-4 snap-x">
          {sessions.map((s) => {
            const isActive = s.id === selected;
            const soon = differenceInCalendarDays(new Date(s.start_date), new Date()) < 45;
            return (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className={`snap-start shrink-0 w-[268px] text-left rounded-[22px] p-6 border transition-all duration-500 ${
                  isActive
                    ? 'bg-white border-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]'
                    : 'bg-white/[0.06] border-white/15 hover:bg-white/[0.12]'
                }`}
              >
                <p className={`font-display text-4xl font-semibold leading-none ${isActive ? 'text-[#2a1f61]' : 'text-white'}`}>
                  {format(new Date(s.start_date), 'dd')}
                </p>
                <p className={`mt-1 text-[12px] tracking-[0.2em] uppercase font-semibold ${isActive ? 'text-[#ff6b00]' : 'text-white/60'}`}>
                  {format(new Date(s.start_date), 'MMM yyyy', { locale: fr })}
                </p>
                <p className={`mt-4 text-[14.5px] font-semibold leading-snug ${isActive ? 'text-[#2a1f61]' : 'text-white/90'}`}>
                  {s.formation_title}
                </p>
                <div className={`mt-4 flex items-center gap-3 text-[12.5px] ${isActive ? 'text-[#2a1f61]/60' : 'text-white/60'}`}>
                  <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{s.city}</span>
                  <span className="inline-flex items-center gap-1"><Users className="w-3.5 h-3.5" />{s.seats_left} places</span>
                </div>
                {soon && s.seats_left <= 3 && (
                  <p className="mt-3 text-[11.5px] font-semibold text-[#ff6b00]">Bientôt complet</p>
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="mt-10 rounded-[24px] bg-white/[0.07] border border-white/15 backdrop-blur p-7 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <p className="text-[11px] tracking-[0.24em] uppercase font-semibold text-[#ff6b00] mb-2">Session sélectionnée</p>
                <p className="font-display text-3xl text-white leading-tight">{active.formation_title}</p>
                <p className="mt-2 text-white/65 text-[15px]">
                  Du {format(new Date(active.start_date), 'd MMMM', { locale: fr })}
                  {active.end_date ? ` au ${format(new Date(active.end_date), 'd MMMM yyyy', { locale: fr })}` : ''} · {active.city} · {active.seats_left} place(s) restante(s)
                </p>
              </div>
              <button
                onClick={() => onReserve(active)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_14px_40px_-14px_rgba(255,107,0,0.9)] hover:brightness-95 transition shrink-0"
              >
                Réserver ma place <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}