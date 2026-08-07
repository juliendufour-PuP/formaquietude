import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';

const plans = [
{
  title: "Intégrer la Relaxation Ludique dans ses pratiques éducatives",
  badge: "Parcours certifiant RS7530",
  desc: "Apprenez à concevoir et à animer des séances de relaxation ludique adaptées aux besoins spécifiques des enfants, afin de les accompagner dans la gestion du stress, l'expression de leurs émotions et le dépassement de leurs difficultés.",
  price: "1500 \u20AC",
  cta: "Découvrir ce parcours",
  featured: false,
  items: [
  "42 heures de formation en classe virtuelle",
  "Un groupe limité à 10 participants",
  "Les fondamentaux de la relaxation ludique adaptée aux enfants",
  "L'observation et l'analyse des besoins et comportements de l'enfant",
  "La définition d'objectifs adaptés : stress, timidité, colère, manque de confiance…",
  "La conception de séances individuelles ou collectives personnalisées",
  "Des techniques, jeux et activités sensorielles directement applicables",
  "L'adaptation des séances aux enfants en situation de handicap",
  "Le passage de la certification RS7530, enregistrée au Répertoire spécifique de France Compétences",
  "Des études de cas, exercices pratiques, mises en situation et jeux de rôle"]

},
{
  title: "Accompagner le développement du jeune enfant",
  badge: "Bloc 1 du CAP AEPE — RNCP38565",
  desc: "Préparez-vous au Bloc 1 du CAP AEPE et développez les compétences indispensables pour accompagner le jeune enfant dans son éveil, ses apprentissages, ses besoins quotidiens et son développement global.",
  price: "1500 \u20AC",
  cta: "Découvrir ce parcours",
  featured: true,
  items: [
  "40 heures de formation en classe virtuelle + 13 heures de E-learning",
  "Un groupe limité à 10 participants",
  "Un accès à la plateforme de formation 24 h/24 pendant 12 mois",
  "Des modules interactifs, vidéos, fiches pédagogiques et quiz",
  "L'éveil et le développement global du jeune enfant",
  "La biologie, les sciences médico-sociales et la prévention",
  "Les soins du quotidien, le nursing et l'accompagnement des apprentissages",
  "La mise en place d'activités d'éveil adaptées à chaque enfant",
  "Une initiation à la relaxation ludique comme support d'éveil",
  "La préparation aux compétences attendues pour le Bloc 1 du CAP AEPE"]

}];


export default function Enfant2Pricing({ onSelect }) {
  return (
    <section id="parcours-tarifs" className="bg-[#f4f4f9] py-24 lg:py-32 relative overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Parcours & tarifs"
          title="2 parcours en bien-être de l'enfant"
          subtitle="Vous accompagnez les enfants dans leur épanouissement et leur développement ? Choisissez le parcours certifiant qui correspond à votre projet professionnel." />

        <div className="mt-16 grid lg:grid-cols-2 gap-7 items-stretch">
          {plans.map((p, i) =>
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative h-full flex flex-col rounded-[26px] p-8 sm:p-10 border ${p.featured ? 'bg-[#2a1f61] border-[#2a1f61] text-white shadow-[0_40px_80px_-40px_rgba(42,31,97,0.7)]' : 'bg-white border-[#2a1f61]/10'}`}>

              <span className="absolute -top-3 left-8 rounded-full bg-[#ff6b00] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_-8px_rgba(255,107,0,0.8)]">
                {p.badge}
              </span>

              <h3 className={`mt-2 font-display text-[1.7rem] leading-tight font-semibold ${p.featured ? 'text-white' : 'text-[#2a1f61]'}`}>
                {p.title}
              </h3>
              <p className={`mt-4 text-[15px] leading-relaxed ${p.featured ? 'text-white/70' : 'text-[#2a1f61]/65'}`}>{p.desc}</p>

              <div className="mt-7 flex flex-col items-center gap-1 text-center">
                <div className="flex items-end justify-center gap-2">
                  <span className={`font-display font-semibold text-5xl sm:text-6xl ${p.featured ? 'text-white' : 'text-[#2a1f61]'}`}>{p.price}</span>
                  <span className={`mb-2 text-[13px] ${p.featured ? 'text-white/60' : 'text-[#2a1f61]/50'}`}>NET</span>
                </div>
                <p className={`font-medium text-[15px] ${p.featured ? 'text-white/70' : 'text-[#ff6b00]'}`}>Éligible au CPF — sans avance de frais</p>
              </div>

              <button
              onClick={() => onSelect && onSelect(p.title)}
              className={`mt-8 w-full rounded-full px-7 py-4 text-[15px] font-semibold transition-colors ${p.featured ? 'bg-[#ff6b00] text-white hover:brightness-95' : 'bg-[#2a1f61] text-white hover:bg-[#ff6b00]'}`}>
                {p.cta}
              </button>

              <ul className="mt-8 space-y-3 flex-1">
                {p.items.map((it) =>
              <li
                key={it}
                className={`flex items-start gap-3 text-[14px] leading-snug ${p.featured ? 'text-white/80' : 'text-[#2a1f61]/75'}`}>
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.featured ? 'text-white/50' : 'text-[#2a1f61]/35'}`} />
                    {it}
                  </li>
              )}
              </ul>

              {p.featured &&
            <div className="mt-8 flex items-center justify-center gap-4">
                  <img
                src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/264d6736b_image.png"
                alt="Éligible Mon Compte Formation"
                className="h-[62px] w-auto rounded-lg bg-white p-1" />
                  <img
                src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/22ccf1530_image.png"
                alt="Qualiopi — processus certifié"
                className="h-[50px] w-auto rounded-lg bg-white px-5 py-1" />
                </div>
            }
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}