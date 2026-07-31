import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionHeading from './SectionHeading';

const faqs = [
  ['Faut-il un diplôme pour s’inscrire ?', 'Aucun prérequis médical ou paramédical n’est exigé pour le cursus Suédois. Les spécialisations (pierres chaudes, femme enceinte) demandent une base en massage, acquise chez nous ou ailleurs.'],
  ['Comment financer ma formation avec le CPF ?', 'Nos formations sont référencées sur Mon Compte Formation. Nous vous transmettons le lien direct de votre session et suivons la validation du dossier avec vous : le solde de vos droits peut couvrir jusqu’à 100 % du coût.'],
  ['Puis-je exercer légalement après la formation ?', 'Oui. Le massage bien-être est une pratique de confort, sans visée thérapeutique. Vous pouvez exercer en micro-entreprise, en cabinet, en spa ou à domicile dès la fin du cursus. Nous vous accompagnons sur le statut et l’assurance RC pro.'],
  ['Combien d’élèves par session ?', '8 au maximum, toujours en nombre pair afin que chacune pratique et reçoive à parts égales, avec correction posturale individuelle du formateur.'],
  ['Que se passe-t-il si je dois reporter ma session ?', 'Un report est possible sans frais jusqu’à 21 jours avant le début de la formation, sur la session équivalente de votre choix dans les 12 mois.'],
];

export default function Faq() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <SectionHeading
          align="left"
          eyebrow="Questions fréquentes"
          title="Tout ce qu’il faut savoir avant de vous lancer"
          subtitle="Une question qui n’est pas ici ? Demandez un rappel, nous y répondons en direct."
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q} className="border-b border-[#2a1f61]/10">
              <AccordionTrigger className="text-left font-display text-xl sm:text-2xl font-semibold text-[#2a1f61] hover:text-[#ff6b00] hover:no-underline py-6">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] leading-relaxed text-[#2a1f61]/70 pb-6">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}