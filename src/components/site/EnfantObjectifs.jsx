import React from 'react';
import { motion } from 'framer-motion';
import { Target, MapPin, Clock, Euro, ThumbsUp, Smile } from 'lucide-react';
import SectionHeading from './SectionHeading';

const objectives = [
'Acquérir les bases théoriques et pratiques de la relaxation ludique adaptée à l’enfant',
'Comprendre et assimiler les méthodes de relaxation ludique pour enfant, ses principes et le positionnement professionnel',
'Maîtriser les différents supports, jeux et ateliers pour animer une séance de relaxation ludique pour enfant',
'Utiliser les techniques enseignées pour les enfants, mais également pour soi-même',
'Adapter sa pratique en fonction des problématiques rencontrées'];


const stats = [
{ icon: ThumbsUp, value: '100 %', label: 'des stagiaires recommandent les formations en relaxation ludique' },
{ icon: Smile, value: '100 %', label: 'des stagiaires sont globalement satisfaits des formations en relaxation ludique' }];


const practical = [
{ icon: Clock, label: '35 h de formation en présentiel' },
{ icon: MapPin, label: 'Au Centre — Grenoble' },
{ icon: Euro, label: '990 € net de taxe' }];


export default function EnfantObjectifs() {
  return (
    <section className="bg-[#f9f5f2] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Objectifs pédagogiques"
          title="Ce que vous maîtriserez à l’issue de la formation"
          subtitle="La formation Praticien en Relaxation Ludique pour Enfants — nominée au Prix Psychologies 2024, catégorie Mieux-Être." />
        

        <div className="mt-16 grid lg:grid-cols-[1.35fr_1fr] gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b00]/12 text-[#ff6b00]">
                <Target className="w-5 h-5" />
              </span>
              <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#d6722d]">
                Les objectifs de la formation
              </p>
            </div>
            <ol className="space-y-4">
              {objectives.map((o, i) =>
              <motion.li
                key={o}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 rounded-[18px] bg-white border border-[#2a1f61]/8 p-5">
                
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#a3b18a] text-white font-display text-[15px] font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-[15px] leading-relaxed text-[#232049]">{o}</p>
                </motion.li>
              )}
            </ol>
          </div>

          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[22px] bg-[#f5eee9] p-7 hidden">
              
              <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#d6722d] mb-5">
                En pratique
              </p>
              <ul className="space-y-4">
                {practical.map((p) =>
                <li key={p.label} className="flex items-center gap-3 text-[15px] font-medium text-[#232049]">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#2a1f61] shadow-sm">
                      <p.icon className="w-4 h-4" strokeWidth={2} />
                    </span>
                    {p.label}
                  </li>
                )}
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) =>
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[22px] bg-[#2a1f61] p-6 text-white text-center flex flex-col items-center justify-center hidden">
                
                  <s.icon className="w-6 h-6 text-[#ff6b00] mb-3" />
                  <p className="font-display text-[2rem] font-semibold leading-none">{s.value}</p>
                  <p className="mt-3 text-[12.5px] leading-snug text-white/70">{s.label}</p>
                </motion.div>
              )}
            </div>
            <p className="text-[12px] text-center text-[#232049]/50 hidden">Chiffres 2021</p>
          </div>
        </div>
      </div>
    </section>);

}