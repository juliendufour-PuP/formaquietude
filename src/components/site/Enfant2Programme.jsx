import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Gamepad2, Sparkles, ClipboardList } from 'lucide-react';
import SectionHeading from './SectionHeading';

const modules = [
  {
    icon: Brain,
    title: "La relaxation et le développement psychologique de l'enfant",
    items: [
      "Définition de la relaxation ludique : qu'est-ce que la relaxation ludique pour l'enfant ?",
      "Pourquoi a-t-on recours à la relaxation ludique pour l'enfant ?",
      "Les bienfaits sur les plans psychomoteur, psycho-social, psycho-affectif, psycho-émotionnel et psychosomatique",
      "L'avancée des neurosciences dans la prise en charge des enfants",
      "Les différents besoins des enfants en fonction de leur développement psychologique"
    ]
  },
  {
    icon: Heart,
    title: "L'accompagnement de l'enfant dans une activité d'éveil et de relaxation",
    items: [
      "Le rôle des adultes dans les activités d'éveil et de relaxation",
      "L'animation en fonction de l'âge de l'enfant",
      "Les besoins de l'enfant",
      "Les limites de l'enfant"
    ]
  },
  {
    icon: Gamepad2,
    title: "Les techniques de jeux et d'animation",
    items: [
      "Présentation des différents jeux, outils et techniques de relaxation",
      "Présentation des supports en fonction de l'âge des enfants et de leurs besoins",
      "Présentation des visualisations spécifiques aux enfants",
      "Utilisation des outils : exercices et études de cas sur la relaxation ludique"
    ]
  },
  {
    icon: ClipboardList,
    title: "Mise en place d'un atelier & animation de séances",
    items: [
      "Création et animation d'atelier en fonction de l'âge, de l'espace et du besoin de l'enfant",
      "Création et animation de séances types"
    ]
  }
];

const objectives = [
  "Acquérir les bases théoriques et pratiques de la relaxation ludique adaptée à l'enfant",
  "Comprendre et assimiler les méthodes de relaxation ludique pour enfant, ses principes et le positionnement professionnel",
  "Maîtriser les différents supports, jeux et ateliers pour animer une séance de relaxation ludique pour enfant",
  "Utiliser les techniques enseignées pour les enfants, mais également pour soi-même",
  "Adapter sa pratique en fonction des problématiques rencontrées"
];

export default function Enfant2Programme() {
  return (
    <>
      {/* Objectifs */}
      <section className="bg-[#f9f5f2] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Objectifs pédagogiques"
            title="Ce que vous maîtriserez à l'issue de la formation"
            subtitle="Formation récompensée par le Magazine Psychologies en 2024, catégorie Mieux-Être." />

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
                <Sparkles className="w-5 h-5" />
              </span>
              <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff8c1a]">
                Les objectifs de la formation
              </p>
            </div>

            <ol className="relative flex flex-col gap-6">
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
        </div>
      </section>

      {/* Programme détaillé */}
      <section id="programme" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Programme de la formation"
            title="Le parcours pédagogique en 4 modules"
            subtitle="Une progression structurée, de la théorie du développement de l'enfant à la mise en pratique d'ateliers et de séances." />

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            {modules.map((m, i) =>
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[22px] border border-[#2a1f61]/10 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(42,31,97,0.4)]">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ff6b00]/10 text-[#ff6b00]">
                    <m.icon className="w-6 h-6" />
                  </span>
                  <span className="font-display text-[1.3rem] font-semibold text-[#2a1f61] leading-snug">
                    {m.title}
                  </span>
                </div>
                <ul className="space-y-3">
                  {m.items.map((item, j) =>
                    <li key={j} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-[#2a1f61]/70">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                      {item}
                    </li>
                  )}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}