import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Users, Building2, Euro } from 'lucide-react';

const items = [
  { label: 'Durée', icon: CalendarCheck, value: '35h / 5 jours' },
  { label: 'Groupe', icon: Users, value: '10 personnes maximum' },
  { label: 'Modalité', icon: Building2, value: 'Présentiel' },
  { label: 'Tarif', icon: Euro, value: 'INTER : à partir de 990€ NET' }
];

export default function InfoBanner() {
  return (
    <section className="relative -mt-px">
      <div className="backdrop-blur-md bg-[#ff6b00]/85 border-y border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/25">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center gap-2 py-6 lg:py-8 px-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/90">{it.label}</span>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  <span className="text-[13.5px] font-semibold text-white leading-snug">{it.value}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}