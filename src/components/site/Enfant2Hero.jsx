import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Award, Users, Clock, MapPin, Sparkles } from 'lucide-react';
import { Image } from '@/components/ui/image';
import MagneticButton from './MagneticButton';
import BookingBackdrop from './BookingBackdrop';

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Enfant2Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      <BookingBackdrop
        baseColor="#2a1f61"
        gradientColors={['#ff6b00', '#ff6b00', '#2a1f61']}
        opacityClass="opacity-60"
        top="4%" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-[1fr_0.95fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10">

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff6b00]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff6b00]">RÉCOMPENSÉE PRIX PSYCHOLOGIES 2024

            </span>
            <span className="rounded-full bg-[#2a1f61]/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2a1f61]/70">
              Certification RS 7530
            </span>
          </div>

          <h1 className="font-display text-[2.7rem] sm:text-[4rem] leading-[1] font-semibold text-[#2a1f61] text-balance">
            Praticien en relaxation ludique pour enfants
          </h1>
          <p className="mt-7 text-[17px] leading-relaxed text-[#2a1f61]/70 max-w-xl">
            Acquérez les bases fondamentales de la relaxation ludique afin d'accompagner
            l'enfant, de façon individuelle ou en groupe, dans une activité d'éveil et de
            relaxation en respectant les facteurs environnementaux.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton pulse onClick={() => go('rappel')}>Je souhaite être recontactée</MagneticButton>
            <button
              onClick={() => go('programme')}
              className="inline-flex items-center gap-2 rounded-full border border-[#2a1f61]/20 px-7 py-4 text-[15px] font-semibold text-[#2a1f61] hover:bg-[#2a1f61] hover:text-white transition-colors">
              Voir le programme <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-x-12 gap-y-8 border-t border-[#2a1f61]/10 pt-8">
            <div className="flex flex-col items-center">
              <img
                src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/fd697927e_imagesgoogle.png"
                alt="Avis Google"
                className="h-[70px] w-auto mix-blend-multiply" />
              <p className="mt-2 text-[13.5px] font-semibold text-[#2a1f61]">4,9/5 sur 312 avis Google</p>
            </div>
            <img
              src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/264d6736b_image.png"
              alt="Éligible Mon Compte Formation"
              className="h-[110px] w-auto self-center" />
            <img
              src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/22ccf1530_image.png"
              alt="Qualiopi — processus certifié"
              className="h-[90px] w-auto self-center" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative">

          <div className="overflow-hidden rounded-[28px] shadow-[0_40px_90px_-40px_rgba(42,31,97,0.55)]">
            <Image
              src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/26b1919c0_generated_image.png"
              alt="Praticienne accompagnant un enfant dans un exercice de relaxation"
              className="w-full h-[420px] sm:h-[560px] lg:h-[640px]"
              fittingType="fill" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 -right-4 sm:-right-6 z-20">
            <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full flex items-center justify-center bg-white shadow-[0_20px_50px_-20px_rgba(42,31,97,0.45)]">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#ff6b00] hidden" />
              <div className="absolute inset-[6px] rounded-full border-[3px] border-[#2a1f61] hidden" />
              <div className="flex flex-col items-center text-center px-2">
                <Sparkles className="w-5 h-5 text-[#ff6b00] hidden" strokeWidth={2} />
                <span className="mt-1 font-display text-[15px] sm:text-[16px] font-bold leading-tight text-[#2a1f61] uppercase tracking-wide">Expertise</span>
                <span className="text-[15px] sm:text-[16px] font-bold leading-tight text-[#ff6b00] uppercase tracking-wide [font-family:'Cormorant_Garamond',_ui-serif,_Georgia,_serif]">UNIQUE EN FRANCE</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}