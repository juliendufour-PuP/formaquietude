import React from 'react';
import { motion } from 'framer-motion';
import { Target, MapPin, Clock, Euro, ThumbsUp, Smile, Sparkles, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';

const objectives = [
'Acquérir les bases théoriques et pratiques de la relaxation ludique adaptée à l’enfant',
'Comprendre et assimiler les méthodes de relaxation ludique pour enfant, ses principes et le positionnement professionnel',
'Maîtriser les différents supports, jeux et ateliers pour animer une séance de relaxation ludique pour enfant',
'Utiliser les techniques enseignées pour les enfants, mais également pour soi-même',
'Adapter sa pratique en fonction des problématiques rencontrées'];


const stats = [
{ icon: ThumbsUp, value: '100 %', label: 'des stagiaires recommandent les formations' },
{ icon: Smile, value: '100 %', label: 'des stagiaires globalement satisfaits' }];


const practical = [
{ icon: Clock, label: '35 h en présentiel' },
{ icon: MapPin, label: 'Grenoble — au Centre' },
{ icon: Euro, label: '990 € net de taxe' }];


export default function EnfantObjectifs() {
  return (
    <section className="bg-[#f9f5f2] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Objectifs pédagogiques"
          title="Ce que vous maîtriserez à l’issue de la formation"
          subtitle="La formation Praticien en Relaxation Ludique pour Enfants — nominée au Prix Psychologies 2024, catégorie Mieux-Être." />

        {/* Bandeau indigo — objectifs en grille */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 relative overflow-hidden rounded-[28px] bg-[#2a1f61] p-8 sm:p-12">
          <span className="absolute -top-16 -left-10 w-56 h-56 rounded-full bg-[#ff6b00]/15 blur-3xl" />
          <span className="absolute -bottom-20 right-10 w-64 h-64 rounded-full bg-[#a3b18a]/15 blur-3xl" />

          <div className="relative flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#ff6b00]/20 text-[#ff8c1a]">
              <Target className="w-5 h-5" />
            </span>
            <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff8c1a]">
              Les objectifs de la formation
            </p>
          </div>

          <ol className="relative grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {objectives.map((o, i) =>
            <motion.li
              key={o}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 pb-6 border-b border-white/10">
                <span className="shrink-0 font-display text-[1.6rem] font-semibold leading-none text-[#ff6b00]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[15px] leading-relaxed text-white/85 pt-1">{o}</p>
              </motion.li>
            )}
          </ol>
        </motion.div>

        {/* Barre inférieure — pratique + stats + badge */}
        <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[24px] bg-white border border-[#2a1f61]/8 p-7 sm:p-8 hidden">
            <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#d6722d] mb-6">
              En pratique
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {practical.map((p) =>
              <div key={p.label} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a1f61]/8 text-[#2a1f61] shrink-0">
                    <p.icon className="w-5 h-5" strokeWidth={2} />
                  </span>
                  <p className="text-[14px] font-medium leading-snug text-[#232049] pt-1.5">{p.label}</p>
                </div>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) =>
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[22px] bg-[#f5eee9] border border-[#2a1f61]/8 p-5 flex flex-col hidden">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b00]/12 text-[#ff6b00] mb-3">
                  <s.icon className="w-5 h-5" />
                </span>
                <p className="font-display text-[2rem] font-semibold leading-none text-[#2a1f61]">{s.value}</p>
                <p className="mt-2 text-[11.5px] leading-snug text-[#232049]/65">{s.label}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex items-center justify-center gap-3 rounded-[18px] bg-[#ff6b00]/8 border border-[#ff6b00]/15 px-5 py-4 hidden">
          <Sparkles className="w-5 h-5 text-[#ff6b00] shrink-0" />
          <p className="text-[13px] leading-snug text-[#232049]">
            <span className="font-semibold">Nominée au Prix Psychologies 2024</span> — catégorie Mieux-Être
          </p>
          <Check className="w-4 h-4 text-[#a3b18a] shrink-0" />
        </motion.div>
      </div>
    </section>);

}