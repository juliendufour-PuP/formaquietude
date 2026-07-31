import React from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Star, ArrowDown } from 'lucide-react';
import Image from '@/components/ui/image';
import MagneticButton from './MagneticButton';

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      <span className="pointer-events-none select-none absolute -left-10 top-24 font-display text-[16vw] leading-none text-[#2a1f61]/[0.04] hidden lg:block">
        Maîtrise
      </span>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-[1fr_0.95fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff6b00] mb-6">
            Centre de formation aux métiers du bien-être
          </p>
          <h1 className="font-display text-[3rem] sm:text-[4.5rem] leading-[0.95] font-semibold text-[#2a1f61] text-balance">
            L’Art du Toucher,<br />
            <span className="italic text-[#ff6b00]">la Rigueur</span> du Métier.
          </h1>
          <p className="mt-7 text-[17px] leading-relaxed text-[#2a1f61]/70 max-w-xl">
            Devenez praticienne en massage bien-être en quelques jours de pratique intensive. Formations professionnelles
            certifiantes, groupes de 8 personnes maximum, 80 % de temps sur table.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton pulse onClick={() => go('rappel')}>Je souhaite être recontactée</MagneticButton>
            <button
              onClick={() => go('dates')}
              className="inline-flex items-center gap-2 rounded-full border border-[#2a1f61]/20 px-7 py-4 text-[15px] font-semibold text-[#2a1f61] hover:bg-[#2a1f61] hover:text-white transition-colors"
            >
              Voir les prochaines dates <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-[#2a1f61]/10 pt-8">
            {[['15 ans', 'd’expérience terrain'], ['2 400+', 'praticiennes formées'], ['8', 'élèves maximum']].map(([n, l]) => (
              <div key={n}>
                <p className="font-display text-3xl font-semibold text-[#2a1f61]">{n}</p>
                <p className="text-[13px] text-[#2a1f61]/55 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[28px] shadow-[0_40px_90px_-40px_rgba(42,31,97,0.55)]">
            <Image
              src="/__generating__/f3795f88-7e8b-410e-86f6-08fd05b8bd7d.png"
              alt="Mains d’une praticienne en pleine manœuvre de massage"
              className="w-full h-[420px] sm:h-[560px] lg:h-[640px]"
              fittingType="fill"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="absolute -bottom-8 left-4 right-4 sm:left-auto sm:-left-10 sm:right-auto sm:w-[330px] rounded-[22px] border border-white/60 bg-white/80 backdrop-blur-xl p-6 shadow-[0_30px_60px_-30px_rgba(42,31,97,0.45)]"
          >
            <div className="flex items-center gap-1 mb-4">
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-[#ff6b00] text-[#ff6b00]" />)}
              <span className="ml-2 text-[12px] font-semibold text-[#2a1f61]">4,9 / 5 — 312 avis</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <BadgeCheck className="w-5 h-5 text-[#ff6b00] shrink-0 mt-0.5" />
                <p className="text-[13.5px] font-semibold text-[#2a1f61] leading-snug">Formations éligibles au CPF</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#ff6b00] shrink-0 mt-0.5" />
                <p className="text-[13.5px] font-semibold text-[#2a1f61] leading-snug">Nominé — Prix Psychologie 2025</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}