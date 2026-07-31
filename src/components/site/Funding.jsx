import React from 'react';
import { Award, BadgeCheck, Landmark, FileCheck2 } from 'lucide-react';
import Image from '@/components/ui/image';
import SectionHeading from './SectionHeading';

const cards = [
  { icon: BadgeCheck, t: 'Éligible au CPF', d: 'Mobilisez vos droits acquis via Mon Compte Formation : jusqu’à 100 % du coût pris en charge.' },
  { icon: Award, t: 'Nominé Prix Psychologie 2025', d: 'Notre approche du toucher relationnel distinguée parmi les organismes du bien-être.' },
  { icon: Landmark, t: 'Certification Qualiopi', d: 'Gage de qualité du processus pédagogique, exigé par tous les financeurs publics.' },
  { icon: FileCheck2, t: 'Attestation professionnelle', d: 'Document remis en fin de cursus, reconnu par les spas, hôtels et assureurs RC pro.' },
];

export default function Funding() {
  return (
    <section id="financement" className="relative bg-[#f4f4f9] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certifications & financement"
          title="Une formation reconnue, un budget maîtrisé"
          subtitle="Nous montons votre dossier avec vous, du premier devis jusqu’à la validation du financeur."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-[22px] bg-white border border-[#2a1f61]/10 p-7 hover:border-[#ff6b00]/40 transition-colors">
              <Icon className="w-7 h-7 text-[#ff6b00]" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-[#2a1f61] leading-tight">{t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#2a1f61]/65">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-[24px]">
          <Image
            src="/__generating__/ef621ba7-6ad5-41ab-8852-731b3efc8827.png"
            alt="Studio de formation au massage avec tables et linge blanc"
            className="w-full h-[260px] sm:h-[380px]"
            fittingType="fill"
          />
        </div>
      </div>
    </section>
  );
}