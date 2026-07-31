import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Accessibility,
  Award,
  Check,
  ArrowRight,
  Sparkle } from
'lucide-react';
import SectionHeading from './SectionHeading';

const formations = [
{
  icon: GraduationCap,
  title: 'Accompagner le développement du jeune enfant — Bloc 1 CAP AEPE',
  duration: '63 h · e-learning + classe virtuelle',
  price: '1 890 €',
  desc: 'Prépare au Bloc 1 du CAP Accompagnant Éducatif Petite Enfance (RNCP38565) en candidat individuel. Éveil, biologie, sciences médico-sociales, soins de nursing — avec une plus-value relaxation ludique intégrée.',
  badge: 'CAP AEPE — RNCP38565'
},
{
  icon: HeartHandshake,
  title: 'Massage enfant',
  duration: '14 h · 2 jours · présentiel',
  price: 'à partir de 320 €',
  desc: 'Un massage calme et réconfortant pour les enfants de 4 à 12 ans, par des gestes adaptés, simples et naturels. Abaisse le stress, favorise le sommeil et la confiance en soi.'
},
{
  icon: Sparkles,
  title: 'Praticien en relaxation ludique pour enfants',
  duration: '35 h · 5 jours · présentiel',
  price: 'à partir de 990 €',
  desc: 'Acquérez les bases fondamentales de la relaxation ludique pour accompagner l’enfant en individuel ou en groupe. Formation récompensée par le Magazine Psychologies en 2024.',
  badge: "R\xE9compens\xE9e par Psychologies 2025"
},
{
  icon: Accessibility,
  title: 'Relaxation ludique pour enfants en situation de handicap',
  duration: '21 h · 3 jours · visio',
  price: 'à partir de 600 €',
  desc: 'Méthode d’accompagnement de détente et de décontraction musculaire adaptée aux besoins et capacités de l’enfant. Récompensée par le Magazine Psychologies en 2024.',
  badge: "R\xE9compens\xE9e par Psychologies 2025"
},
{
  icon: Award,
  title: 'Intégrer la relaxation ludique dans ses pratiques éducatives et de soutien',
  duration: '42 h · classe virtuelle',
  price: "1 500 \u20AC",
  desc: 'Certification professionnelle RS 7530 enregistrée par France Compétences, éligible au CPF. Concevoir et animer des séances adaptées à chaque enfant, y compris en situation de handicap.',
  badge: "Certification RS 7530",
  featured: true
}];


export default function EnfantFormations({ onSelect }) {
  return (
    <>
      <section id="financement" className="bg-[#2a1f61] py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[26px] bg-white/[0.04] border border-white/10 p-8 sm:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            <div className="flex-1 text-center lg:text-left">
              <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff6b00] mb-3">
                Une expertise unique en France
              </p>
              <h3 className="font-display text-[1.8rem] sm:text-[2.2rem] leading-tight font-semibold text-white text-balance">
                Le seul centre en France à proposer des formations certifiantes RS éligibles au CPF en relaxation ludique pour enfants
              </h3>
              <p className="mt-4 text-[15.5px] leading-relaxed text-white/70 max-w-2xl">
                Nos formations sont enregistrées au Répertoire Spécifique de France Compétences (RS 7530) et intégralement financables via votre CPF — sans avance de frais dans la majorité des cas.
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 shrink-0">
              <img
                src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/264d6736b_image.png"
                alt="Éligible Mon Compte Formation"
                className="h-[64px] w-auto rounded-lg bg-white p-1" />
              
              <img
                src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/22ccf1530_image.png"
                alt="Qualiopi — processus certifié"
                className="h-[52px] w-auto rounded-lg bg-white px-5 py-1" />
              
            </div>
          </motion.div>
        </div>
      </section>

      <section id="formations" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Le cursus relaxation ludique"
            title="5 formations pour accompagner le bien-être de l’enfant"
            subtitle="Un parcours complet, de l’éveil du jeune enfant à la certification RS 7530, pour les professionnelles et les futures praticiennes qui veulent intervenir auprès des enfants." />
          

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {formations.map((f, i) =>
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-[22px] p-8 border ${f.featured ? 'bg-[#2a1f61] border-[#2a1f61] text-white shadow-[0_40px_80px_-40px_rgba(42,31,97,0.7)]' : 'bg-white border-[#2a1f61]/10'}`}>
              
                <span className="absolute -top-3 right-6 rounded-full bg-[#ff6b00] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_-8px_rgba(255,107,0,0.8)]">éligible CPF

              </span>
                <div className="flex items-start gap-5">
                  <div className="relative shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-[#ff8c1a] to-[#ff5e5e] shadow-[0_10px_24px_-8px_rgba(255,94,94,0.55)] ring-1 ring-white/30">
                    <f.icon className="w-7 h-7 text-white drop-shadow-sm" strokeWidth={2.2} />
                    <Sparkle className="absolute -top-1 right-0 w-3 h-3 text-white fill-white" />
                    <Sparkle className="absolute -bottom-1 left-0 w-2.5 h-2.5 text-white fill-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-display text-[1.4rem] leading-snug font-semibold ${f.featured ? 'text-white' : 'text-[#2a1f61]'}`}>
                      {f.title}
                    </h3>
                    {f.badge &&
                  <span className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${f.featured ? 'bg-[#ff6b00] text-white' : 'bg-[#ff6b00]/10 text-[#ff6b00]'}`}>
                        <Check className="w-3 h-3" /> {f.badge}
                      </span>
                  }
                  </div>
                </div>

                <p className={`mt-5 text-[15px] leading-relaxed ${f.featured ? 'text-white/75' : 'text-[#2a1f61]/70'}`}>
                  {f.desc}
                </p>

                <div className={`mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium ${f.featured ? 'text-white/70' : 'text-[#2a1f61]/60'}`}>
                  <span>{f.duration}</span>
                  <span className={`h-3 w-px ${f.featured ? 'bg-white/20' : 'bg-[#2a1f61]/15'}`} />
                  <span className={f.featured ? 'text-white' : 'text-[#ff6b00] font-semibold'}>{f.price}</span>
                </div>

                <button
                onClick={() => onSelect && onSelect(f.title)}
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold transition-colors ${f.featured ? 'bg-[#ff6b00] text-white hover:brightness-95' : 'bg-[#2a1f61] text-white hover:bg-[#ff6b00]'}`}>
                
                  Je souhaite être recontactée <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>);

}