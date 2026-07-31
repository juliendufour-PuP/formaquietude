import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionHeading from './SectionHeading';

const transportAnswer = (
  <div className="space-y-4">
    <p>
      <span className="font-semibold text-[#2a1f61]">Adresse :</span>{' '}
      <a href="https://www.google.com/maps/dir/?api=1&destination=9-11+Av.+Paul+Verlaine,+38100+Grenoble" target="_blank" rel="noreferrer" className="text-[#ff6b00] underline">9-11 avenue Paul Verlaine, 38100 Grenoble</a>
    </p>
    <p><span className="font-semibold text-[#2a1f61]">En voiture :</span> Parking disponible sur place et places réservées.</p>
    <p><span className="font-semibold text-[#2a1f61]">En transports en commun :</span> Trains disponibles depuis toute la France jusqu’à la gare de Grenoble-centre ou Échirolles. TRAM A arrêt Grand’place puis correspondance bus 12 arrêt Verlaine. Plus d’infos sur{' '}
      <a href="https://www.tag.fr" target="_blank" rel="noreferrer" className="text-[#ff6b00] underline">Tag.fr</a> et{' '}
      <a href="https://www.ter.sncf.com/auvergne-rhone-alpes" target="_blank" rel="noreferrer" className="text-[#ff6b00] underline">TER Auvergne Rhône-Alpes</a>.
    </p>
    <p><span className="font-semibold text-[#2a1f61]">En vélo :</span> Grenoble est la première ville cyclable de France ! La ligne Chronovelo 3 passe juste devant le centre. Plus d’infos{' '}
      <a href="https://chronovelo.fr" target="_blank" rel="noreferrer" className="text-[#ff6b00] underline">en cliquant ici</a>.
    </p>
  </div>
);

const faqs = [
  ['Faut-il un diplôme pour s’inscrire ?', 'Aucun prérequis médical ou paramédical n’est exigé pour le cursus Suédois. Les spécialisations (pierres chaudes, femme enceinte) demandent une base en massage, acquise chez nous ou ailleurs.'],
  ['Comment financer ma formation avec le CPF ?', 'Nos formations sont référencées sur Mon Compte Formation. Nous vous transmettons le lien direct de votre session et suivons la validation du dossier avec vous : le solde de vos droits peut couvrir jusqu’à 100 % du coût.'],
  ['Puis-je exercer légalement après la formation ?', 'Oui. Le massage bien-être est une pratique de confort, sans visée thérapeutique. Vous pouvez exercer en micro-entreprise, en cabinet, en spa ou à domicile dès la fin du cursus. Nous vous accompagnons sur le statut et l’assurance RC pro.'],
  ['Que se passe-t-il si je dois reporter ma session ?', 'Un report est possible sans frais jusqu’à 21 jours avant le début de la formation, sur la session équivalente de votre choix dans les 12 mois.'],
  ['Comment me rendre au centre ?', transportAnswer],
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