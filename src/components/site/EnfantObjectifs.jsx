import React from 'react';
import { motion } from 'framer-motion';
import { Target, MapPin, Clock, Euro, ThumbsUp, Smile, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const objectives = [
  'Acquérir les bases théoriques et pratiques de la relaxation ludique adaptée à l’enfant',
  'Comprendre et assimiler les méthodes de relaxation ludique pour enfant, ses principes et le positionnement professionnel',
  'Maîtriser les différents supports, jeux et ateliers pour animer une séance de relaxation ludique pour enfant',
  'Utiliser les techniques enseignées pour les enfants, mais également pour soi-même',
  'Adapter sa pratique en fonction des problématiques rencontrées',
];

const stats = [
  { icon: ThumbsUp, value: '100 %', label: 'des stagiaires recommandent les formations en relaxation ludique' },
  { icon: Smile, value: '100 %', label: 'des stagiaires sont globalement satisfaits des formations en relaxation ludique' },
];

const practical = [
  { icon: Clock, label: '35 h de formation en présentiel' },
  { icon: MapPin, label: 'Au Centre — Grenoble' },
  { icon: Euro, label: '990 € net de taxe' },
];

export default function EnfantObjectifs() {
  return (
    <section className="bg-[#f9f5f2] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Objectifs pédagogiques"
          title="Ce que vous maîtriserez à l’issue de la formation"
          subtitle="La formation Praticien en Relaxation Ludique pour Enfants — nominée au Prix Psychologies 2024, catégorie Mieux-Être." />

        <div className="mt-16 grid lg:grid-cols-[1.35fr_1fr] gap-6 items-start">
          {/* Objectifs — liste numérotée */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[26px] bg-white border border-[#2a1f61]/8 p-7 sm:p-9 shadow-[0_30px_60px_-40px_rgba(42,31,97,0.25)]">
            <div className="flex items-center gap-3 mb-7">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b00]/12 text-[#ff6b00]">
                <Target className="w-5 h-5" />
              </span>
              <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#d6722d]">
                Les objectifs de la formation
              </p>
            </div>
            <ol className="space-y-3">
              {objectives.map((o, i) => (
                <motion.li
                  key={o}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-4 rounded-[16px] px-4 py-4 hover:bg-[#f5eee9] transition-colors">
                  <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#a3b18a] text-white font-display text-[15px] font-semibold group-hover:bg-[#ff6b00] transition-colors">
                    {i + 1}
                  </span>
                  <p className="text-[15px] leading-relaxed text-[#232049] pt-1.5">{o}</p>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Colonne droite — bento */}
          <div className="flex flex-col gap-6">
            {/* En pratique */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[26px] bg-[#2a1f61] p-7 text-white relative overflow-hidden">
              <span className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#ff6b00]/20 blur-2xl" />
              <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff8c1a] mb-6">
                En pratique
              </p>
              <ul className="space-y-5">
                {practical.map((p) => (
                  <li key={p.label} className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-[#ff8c1a]">
                      <p.icon className="w-5 h-5" strokeWidth={2} />
                    </span>
                    <span className="text-[14.5px] font-medium leading-snug">{p.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[22px] bg-[#f5eee9] border border-[#2a1f61]/8 p-5 flex flex-col items-start">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b00]/12 text-[#ff6b00] mb-4">
                    <s.icon className="w-5 h-5" />
                  </span>
                  <p className="font-display text-[2.2rem] font-semibold leading-none text-[#2a1f61]">{s.value}</p>
                  <p className="mt-2 text-[12px] leading-snug text-[#232049]/65">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Badge Psychologies */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 rounded-[18px] bg-[#ff6b00]/8 border border-[#ff6b00]/15 px-5 py-4">
              <Sparkles className="w-5 h-5 text-[#ff6b00] shrink-0" />
              <p className="text-[13px] leading-snug text-[#232049]">
                <span className="font-semibold">Nominée au Prix Psychologies 2024</span> — catégorie Mieux-Être
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}