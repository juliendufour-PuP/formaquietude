import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, FileCheck, ClipboardCheck, Award, Accessibility, Timer, GraduationCap, Euro } from 'lucide-react';
import SectionHeading from './SectionHeading';

const methods = [
  { icon: BookOpen, label: "Lectures de documents" },
  { icon: Users, label: "Mises en situation et jeux de rôle" },
  { icon: FileCheck, label: "Études de cas" },
  { icon: ClipboardCheck, label: "Exercices individuels et en sous-groupes" },
  { icon: BookOpen, label: "Support de cours électronique" },
  { icon: ClipboardCheck, label: "Paperboard / Vidéoprojecteur" },
  { icon: GraduationCap, label: "Kit pédagogique" }
];

const evaluations = [
  "Questionnaire de positionnement pré-formation",
  "Exercices et mises en situation tout au long de la formation",
  "Évaluation des compétences en fin de formation (mise en situation professionnelle / études de cas)",
  "Questionnaire de satisfaction de l'action de formation"
];

const prerequisites = [
  "Personnel de santé, du social ou de la relation d'aide",
  "Animateur / coach",
  "Tout public intervenant ou désirant intervenir auprès d'enfants",
  "De préférence diplômé (BAFA, CAP petite enfance, psychologie…) ou certifié sophrologue-relaxologue, ou ayant une expérience auprès des enfants"
];

const adminInfo = [
  { icon: Award, label: "Sanction visée", value: "Certificat de fin de formation" },
  { icon: GraduationCap, label: "Nature de la formation", value: "Actions de formation" },
  { icon: Timer, label: "Délai d'accès", value: "10 jours (Article L 6353-5 du Code du Travail)" },
  { icon: Accessibility, label: "Accessibilité", value: "Accès PMR — Référente handicap : ROURE Élodie 04.76.22.80.43" }
];

export default function Enfant2Practical() {
  return (
    <section className="bg-[#f9f5f2] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Informations pratiques"
          title="Méthodes, évaluation et prérequis"
          subtitle="Tout ce qu'il faut savoir avant de vous inscrire à la formation Praticien en relaxation ludique pour enfants." />

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Méthodes mobilisées */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[22px] bg-white border border-[#2a1f61]/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b00]/10 text-[#ff6b00]">
                <BookOpen className="w-5 h-5" />
              </span>
              <h3 className="font-display text-xl font-semibold text-[#2a1f61]">Méthodes mobilisées</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {methods.map((m, i) =>
                <div key={i} className="flex items-center gap-3 rounded-xl bg-[#f9f5f2] px-4 py-3">
                  <m.icon className="w-4 h-4 text-[#ff6b00] shrink-0" />
                  <span className="text-[13px] font-medium text-[#2a1f61]/80 leading-snug">{m.label}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Modalités d'évaluation */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[22px] bg-white border border-[#2a1f61]/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b00]/10 text-[#ff6b00]">
                <FileCheck className="w-5 h-5" />
              </span>
              <h3 className="font-display text-xl font-semibold text-[#2a1f61]">Modalités d'évaluation des acquis</h3>
            </div>
            <ul className="space-y-4">
              {evaluations.map((e, i) =>
                <li key={i} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-[#2a1f61]/70">
                  <span className="shrink-0 font-display text-base font-semibold text-[#ff6b00]">{String(i + 1).padStart(2, '0')}</span>
                  {e}
                </li>
              )}
            </ul>
          </motion.div>

          {/* Prérequis */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[22px] bg-[#2a1f61] p-8 text-white lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b00]/20 text-[#ff8c1a]">
                <Users className="w-5 h-5" />
              </span>
              <h3 className="font-display text-xl font-semibold text-white">Prérequis</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {prerequisites.map((p, i) =>
                <div key={i} className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3">
                  <span className="shrink-0 mt-0.5 w-2 h-2 rounded-full bg-[#ff6b00]" />
                  <span className="text-[14px] leading-relaxed text-white/85">{p}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Infos administratives */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {adminInfo.map((info, i) =>
            <div key={i} className="rounded-[18px] bg-white border border-[#2a1f61]/10 p-6 flex flex-col gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b00]/10 text-[#ff6b00]">
                <info.icon className="w-5 h-5" />
              </span>
              <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#2a1f61]/50">{info.label}</p>
              <p className="text-[14px] leading-snug text-[#2a1f61]/80">{info.value}</p>
            </div>
          )}
        </motion.div>

        {/* Tarif */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-[22px] bg-gradient-to-r from-[#2a1f61] to-[#3b3a8c] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ff6b00]/20 text-[#ff8c1a]">
              <Euro className="w-7 h-7" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#ff8c1a]">Tarif</p>
              <p className="font-display text-3xl font-semibold text-white">À partir de 990 € NET</p>
              <p className="text-[13px] text-white/60 mt-1">INTER — éligible au CPF, sans avance de frais dans la majorité des cas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}