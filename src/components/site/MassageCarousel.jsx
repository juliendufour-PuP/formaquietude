import React from 'react';
import { motion } from 'framer-motion';
import ThreeDPhotoCarousel from '@/components/ui/3d-carousel';

const img = (p) => `https://i0.wp.com/www.formaquietude.fr/wp-content/uploads/${p}?w=500&ssl=1`;

const MASSAGES = [
  { title: 'Massage amincissant', image: img('2024/01/Amincissant.png') },
  { title: 'Massage Amma Assis', image: img('2023/12/FormaQuietude-Ammas-Assis-Web_MG_0019-Avec-accentuation-Bruit-scaled.jpg') },
  { title: 'Massage californien', image: img('2024/01/Californien.png') },
  { title: 'Massage du dos « Le pilier »', image: img('2024/01/Pilier-banner.png') },
  { title: 'Massage Lomi Lomi', image: img('2024/02/Lomi-Lomi.png') },
  { title: 'Massage aux Pierres Chaudes', image: img('2024/02/Pierres-Chaudes.png') },
  { title: 'Massage oriental', image: img('2024/01/Oriental.png') },
  { title: 'Massage Sophro-Relaxant', image: img('2024/02/Sophro-Relaxant.png') },
  { title: 'Massage Suédois Sportif', image: img('2024/01/Suedois.png') },
  { title: 'Relaxation Coréenne', image: img('2025/07/Relaxation-Coreenne.jpg') },
  { title: 'Massage africain aux bâtons', image: img('2025/07/FormaQuietude-Formation-Massage-Africain-aux-batons-Image-2.jpg') },
  { title: 'Massage Thaï à l’huile', image: img('2024/02/Thai-a-lhuile.png') },
  { title: 'Neuro-percussif corporel Vibra-Corps®', image: img('2025/10/Corporel-Vibra-Corps.jpg') },
  { title: 'Neuro-percussif plantaire Vibra-Pied®', image: img('2025/10/Plantaire-Vibra-Pied.jpg') },
  { title: 'Massage Ayurvédique Abhyanga', image: img('2024/01/Ayurvedique.png') },
  { title: 'Massage balinais', image: img('2024/02/Balinais.png') },
  { title: '« Do In » / Auto-massage', image: img('2024/02/DO-In-Auto-Massage.png') },
  { title: 'Relaxation tibétaine aux bols chantants', image: img('2024/02/Tibetaine.png') },
  { title: 'Massage du crâne Shirotchampi', image: img('2024/01/Shirotchampi.png') },
  { title: 'Massage du ventre « Le 2e cerveau »', image: img('2024/02/Massage-du-ventre.png') },
  { title: 'Head Spa Rituel', image: img('2026/04/FormaQuietude-Fiche-Formation-Head_SPA.png') },
  { title: 'Massage facial liftant (inspiration Kobido)', image: img('2024/02/Kobido.png') },
  { title: 'Massage anti-âge Gua Sha & Quartz Rose', image: img('2024/01/Gua-Sha.png') },
  { title: 'Réflexologie Palmaire', image: img('2024/02/Reflexologie-Palmaire.png') },
  { title: 'Massage Bébé', image: img('2024/01/Bebe.png') },
  { title: 'Massage enfant', image: img('2024/01/Enfant.png') },
  { title: 'Massage bienveillant personne fragile', image: img('2024/02/Bienveillant.png') },
  { title: 'Massage femme enceinte', image: img('2024/01/Enceinte.png') },
];

export default function MassageCarousel({ onSelect }) {
  return (
    <section id="massages" className="relative bg-[#f6f6fb] py-12 lg:py-14 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff6b00] mb-5">
            Les massages à la carte
          </p>
          <h2 className="font-display text-[1.9rem] sm:text-[2.6rem] font-semibold text-[#2a1f61] leading-[1.1] max-w-3xl mx-auto text-balance">
            Les différents types de massages bien-être enseignés dans notre centre
          </h2>
        </motion.div>
      </div>

      <div className="mt-6">
        <ThreeDPhotoCarousel
          cards={MASSAGES}
          onSelect={(c) => onSelect && onSelect(c.title)}
        />
      </div>
    </section>
  );
}