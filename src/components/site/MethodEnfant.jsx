import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  Wind,
  Brain,
  Baby,
  HeartHandshake,
  Sun,
  Backpack } from
'lucide-react';
import { Image } from '@/components/ui/image';
import SectionHeading from './SectionHeading';

const steps = [
{ n: '01', t: 'Entretien pédagogique', d: 'Un échange de 20 minutes pour valider votre expérience auprès des enfants et définir le cursus adapté à votre métier.' },
{ n: '02', t: 'Montage du financement', d: 'Nous constituons ensemble votre dossier CPF ou entreprise. Aucune avance de frais dans la majorité des cas.' },
{ n: '03', t: 'Immersion en petit groupe', d: '10 élèves maximum, pratique encadrée d’attitudes et de gestes de relaxation adaptés à l’enfant, en présentiel à Grenoble.' },
{ n: '04', t: 'Mise en pratique & suivi', d: 'Concevoir et animer des séances adaptées à chaque enfant, y compris en situation de handicap — suivi post-formation inclus.' }];


const audience = [
{ icon: BookOpen, label: 'Instituteur / institutrice' },
{ icon: GraduationCap, label: 'Professeur des écoles' },
{ icon: Wind, label: 'Sophrogogue' },
{ icon: Brain, label: 'Psychothérapeute pour enfant' },
{ icon: Baby, label: 'Auxiliaire de puériculture' },
{ icon: HeartHandshake, label: 'Éducateur spécialisé' },
{ icon: Sun, label: 'Animateur petite enfance' },
{ icon: Backpack, label: 'ATSEM' }];


export default function MethodEnfant() {
  return (
    <>
      <section className="relative bg-[#2a1f61] py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/06fede28f_generated_image.png"
            alt="Enfants qui jouent dans une salle de jeu"
            className="w-full h-full"
            fittingType="fill" />
          <div className="absolute inset-0 bg-[#2a1f61]/82 hidden" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[26px] bg-[#3b3a8c]/35 border border-white/15 p-8 sm:p-10 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
              <div className="flex-1">
                






                
                <h3 className="mt-5 font-display text-[1.7rem] sm:text-[2.1rem] leading-tight font-semibold text-white text-balance">
                  Un parcours réservé aux professionnelles qui accompagnent déjà les enfants
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/75 max-w-2xl">
                  Ces cursus s’adressent aux personnes qui travaillent déjà auprès des enfants dans un cadre professionnel.
                  Vous exercez un autre métier auprès de l’enfant&nbsp;? Contactez-nous pour vérifier votre éligibilité.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-[42%] lg:justify-end">
                {audience.map((p) =>
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-[13px] font-medium text-white/85">
                    <p.icon className="w-4 h-4 text-[#ff8c1a]" />
                    {p.label}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="methode" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="La méthode Formaquiétude"
            title="Une méthode pensée pour les professionnelles du jeune enfant"
            subtitle="Un parcours en quatre temps, pour concevoir et animer des séances de relaxation adaptées à chaque enfant." />

          <div className="mt-16 grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/c2b944d4e_generated_image.png"
                  alt="Praticienne accompagnant un enfant dans un exercice de relaxation"
                  className="w-full h-[420px] lg:h-[540px]"
                  fittingType="fill" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-[20px] bg-[#ff6b00] px-7 py-5 text-white shadow-[0_24px_50px_-22px_rgba(255,107,0,0.8)]">
                <p className="font-display text-4xl font-semibold leading-none">RS 7530</p>
                <p className="text-[12.5px] mt-1 opacity-90 max-w-[150px] leading-snug">certification enregistrée par France Compétences</p>
              </div>
            </div>

            <ol className="space-y-9">
              {steps.map((s, i) =>
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16">
                  <span className="absolute left-0 top-0 font-display text-3xl font-semibold text-[#ff6b00]">{s.n}</span>
                  <span className="absolute left-[22px] top-11 bottom-[-24px] w-px bg-gradient-to-b from-[#ff6b00]/40 to-transparent last:hidden" />
                  <h3 className="font-display text-2xl font-semibold text-[#2a1f61]">{s.t}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2a1f61]/65">{s.d}</p>
                </motion.li>
              )}
            </ol>
          </div>
        </div>
      </section>
    </>);

}