import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Image } from '@/components/ui/image';
import MagneticButton from './MagneticButton';
import BookingBackdrop from './BookingBackdrop';

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function HeroEnfant() {
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
          
          <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff6b00] mb-6">
            Centre de formation au bien-être de l’enfant
          </p>
          <h1 className="font-display text-[2.7rem] sm:text-[4rem] leading-[1] font-semibold text-[#2a1f61] text-balance">Formation relaxation ludique pour enfants

          </h1>
          <p className="mt-7 text-[17px] leading-relaxed text-[#2a1f61]/70 max-w-xl">
            Formez-vous au massage et à la relaxation ludique pour enfants. Le seul centre en France
            à proposer des formations certifiantes RS 7530, éligibles au CPF et certifiées Qualiopi —
            du CAP petite enfance à la pratique en situation de handicap.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton pulse onClick={() => go('rappel')}>Je souhaite être recontactée</MagneticButton>
            <button
              onClick={() => go('formations')}
              className="inline-flex items-center gap-2 rounded-full border border-[#2a1f61]/20 px-7 py-4 text-[15px] font-semibold text-[#2a1f61] hover:bg-[#2a1f61] hover:text-white transition-colors">
              
              Découvrir les formations <ArrowDown className="w-4 h-4" />
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
              alt="Cette formation est éligible à Mon Compte Formation"
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

          {[
          { n: '15 ans', l: 'd’expérience auprès des enfants', pos: '-top-5 -right-3 sm:-right-8', d: 0.45 },
          { n: '5', l: 'formations certifiantes éligibles CPF', pos: '-bottom-6 -right-3 sm:-right-8', d: 0.6 },
          { n: '10', l: 'élèves maximum par session de formation', pos: '-bottom-6 -left-3 sm:-left-8', d: 0.75 }].
          map((s) =>
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: s.d }}
            className={`absolute ${s.pos} rounded-[18px] border-l-4 border-[#ff6b00] bg-white px-5 py-4 shadow-[0_24px_50px_-20px_rgba(42,31,97,0.75)] ring-1 ring-[#2a1f61]/10`}>
            
              <p className="font-display text-2xl sm:text-3xl font-semibold text-[#ff6b00] leading-none">{s.n}</p>
              <p className="text-[11.5px] font-medium text-[#2a1f61]/75 mt-1.5 leading-snug max-w-[130px]">{s.l}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}