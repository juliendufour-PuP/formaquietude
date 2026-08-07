import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import SectionHeading from './SectionHeading';

const steps = [
{ n: '01', t: 'Entretien pédagogique', d: 'Un échange de 20 minutes pour valider votre expérience auprès des enfants et définir le cursus adapté à votre métier.' },
{ n: '02', t: 'Montage du financement', d: 'Nous constituons ensemble votre dossier CPF ou entreprise. Aucune avance de frais dans la majorité des cas.' },
{ n: '03', t: 'Immersion en petit groupe', d: '10 élèves maximum, pratique encadrée d’attitudes et de gestes de relaxation adaptés à l’enfant, en présentiel à Grenoble.' },
{ n: '04', t: 'Mise en pratique & suivi', d: 'Concevoir et animer des séances adaptées à chaque enfant, y compris en situation de handicap — suivi post-formation inclus.' }
];

export default function MethodEnfant() {
  return (
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
  );
}