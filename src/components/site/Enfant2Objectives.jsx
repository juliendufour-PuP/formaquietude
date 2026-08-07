import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

const objectives = [
{ n: '01', t: "Acquérir les bases théoriques et pratiques de la relaxation ludique adaptée à l'enfant" },
{ n: '02', t: "Comprendre et assimiler les méthodes de relaxation ludique pour enfant, ses principes et le positionnement professionnel" },
{ n: '03', t: "Maîtriser les différents supports, jeux et ateliers pour animer une séance de relaxation ludique pour enfant" },
{ n: '04', t: "Utiliser les techniques enseignées pour les enfants, mais également pour soi-même" },
{ n: '05', t: "Adapter sa pratique en fonction des problématiques rencontrées" }];


export default function Enfant2Objectives() {
  return (
    <section className="relative bg-[#2a1f61] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/06fede28f_generated_image.png"
          alt="Enfants qui jouent dans une salle de jeu"
          className="w-full h-full"
          fittingType="fill" />
      </div>

      <div className="relative backdrop-blur-md bg-[#2a1f61]/40 border-y border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] py-16 lg:py-20 hidden">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center">
            <h3 className="font-display text-[1.7rem] sm:text-[2.1rem] leading-tight font-semibold text-white text-balance">
              Ce que vous maîtriserez à l'issue de la formation
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/75 max-w-2xl mx-auto">
              Cinq objectifs clairs, de l'acquisition des bases théoriques à l'adaptation de votre pratique
              face aux problématiques rencontrées auprès de chaque enfant.
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {objectives.map((o, i) =>
            <motion.div
              key={o.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 w-[260px] shrink-0 rounded-[20px] bg-white/10 border border-white/15 px-6 py-7 backdrop-blur-sm">
                <span className="font-display text-2xl font-semibold text-[#ff8c1a] leading-none">{o.n}</span>
                <span className="text-[13.5px] font-medium text-white/90 leading-snug">{o.t}</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}