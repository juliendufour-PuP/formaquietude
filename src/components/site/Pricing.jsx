import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const common = [
  '10 formations aux techniques de massage — 223 h',
  '2 formations complémentaires en e-learning',
  'Initiation à l’anatomie et aux postures professionnelles',
  'Apprentissage pratique en présentiel',
  'Entraînements supervisés avec nos formatrices',
  'Supports de cours, protocoles et enchaînements complets',
  'Un certificat délivré pour chaque technique',
  'Certification « Praticien en massage bien-être »',
];

const payment = ['Paiement possible en 3, 4 ou 10 fois', '10 % d’avantage sur vos prochaines formations'];

const extras = [
  'Formation certifiante à la création d’entreprise',
  'Certification RS 7004 pour structurer votre projet',
  'Financement partiel possible avec le CPF',
];

const plans = [
  {
    title: 'Devenir Praticien en massage bien-être',
    desc: 'Le cursus complet pour maîtriser les techniques essentielles du massage bien-être, développer votre posture professionnelle et exercer avec confiance.',
    price: '4 000 €',
    cta: 'Découvrir le parcours métier',
    featured: false,
    items: [...common, ...payment].map((t) => ({ t, on: true })),
    missing: extras,
  },
  {
    title: 'Devenir Praticien et lancer son activité',
    desc: 'Le parcours tout-en-un pour apprendre votre métier, développer votre savoir-faire et construire une activité professionnelle solide et pérenne.',
    price: '4 000 €',
    cta: 'Découvrir le cursus complet',
    featured: true,
    items: [...common.map((t) => ({ t, on: true })), ...extras.map((t) => ({ t, on: true, plus: true })), ...payment.map((t) => ({ t, on: true }))],
    missing: [],
  },
];

export default function Pricing({ onSelect }) {
  return (
    <section id="financement" className="bg-[#f4f4f9] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Parcours & tarifs"
          title="2 parcours pour devenir Praticien en massage bien-être"
          subtitle="Vous souhaitez vous former au métier ou être accompagnée jusqu’à la création de votre activité ? Choisissez le parcours qui correspond à votre objectif professionnel."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-7 items-start">
          {plans.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-[26px] p-8 sm:p-10 border ${p.featured ? 'bg-[#2a1f61] border-[#2a1f61] text-white shadow-[0_40px_80px_-40px_rgba(42,31,97,0.7)]' : 'bg-white border-[#2a1f61]/10'}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[#ff6b00] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  Le plus complet
                </span>
              )}
              <h3 className={`font-display text-[2rem] leading-tight font-semibold ${p.featured ? 'text-white' : 'text-[#2a1f61]'}`}>
                {p.title}
              </h3>
              <p className={`mt-4 text-[15.5px] leading-relaxed ${p.featured ? 'text-white/70' : 'text-[#2a1f61]/65'}`}>{p.desc}</p>

              <div className="mt-7 flex items-end gap-2">
                <span className={`font-display text-5xl font-semibold ${p.featured ? 'text-white' : 'text-[#2a1f61]'}`}>{p.price}</span>
                <span className={`mb-2 text-[13px] ${p.featured ? 'text-white/60' : 'text-[#2a1f61]/50'}`}>TTC</span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/264d6736b_image.png"
                  alt="Éligible Mon Compte Formation"
                  className="h-[62px] w-auto rounded-lg bg-white p-1"
                />
                <img
                  src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/22ccf1530_image.png"
                  alt="Qualiopi — processus certifié"
                  className="h-[50px] w-auto rounded-lg bg-white p-1"
                />
              </div>

              <button
                onClick={() => onSelect && onSelect(p.title)}
                className={`mt-8 w-full rounded-full px-7 py-4 text-[15px] font-semibold transition-colors ${p.featured ? 'bg-[#ff6b00] text-white hover:brightness-95' : 'bg-[#2a1f61] text-white hover:bg-[#ff6b00]'}`}
              >
                {p.cta}
              </button>

              {p.featured && (
                <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff6b00]/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#ff6b00]">
                  <Sparkles className="w-3.5 h-3.5" /> Tout le parcours métier + 3 atouts business
                </p>
              )}

              <ul className={`space-y-3 ${p.featured ? 'mt-6' : 'mt-8'}`}>
                {p.items.map((it) => (
                  <li
                    key={it.t}
                    className={`flex items-start gap-3 text-[14.5px] leading-snug ${
                      it.plus
                        ? 'rounded-xl bg-[#ff6b00]/15 px-3 py-2 font-semibold text-white'
                        : p.featured
                        ? 'text-white/80'
                        : 'text-[#2a1f61]/75'
                    }`}
                  >
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${it.plus ? 'text-[#ff6b00]' : p.featured ? 'text-white/50' : 'text-[#2a1f61]/35'}`} />
                    {it.t}
                  </li>
                ))}
                {p.missing.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-[14.5px] leading-snug text-[#2a1f61]/35 line-through">
                    <X className="w-4 h-4 shrink-0 mt-0.5 text-[#2a1f61]/25" /> {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}