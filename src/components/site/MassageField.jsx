import React from 'react';
import InfiniteImageField from '@/components/ui/infinite-image-field';

const MASSAGE_IMAGES = [
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1611072965169-e1e0d7c1d1a1?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1554057009-11b7f8b47c6a?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=560&fit=crop&q=80',
];

const types = [
  'Massage suédois',
  'Massage ayurvédique Abhyanga',
  'Massage thaï traditionnel',
  'Massage profond & sportif',
  'Pierres chaudes',
  'Femme enceinte',
  'Massage californien',
  'Réflexologie plantaire',
  'Modelage institut',
  'Massage aux huiles chaudes',
];

export default function MassageField() {
  return (
    <section className="relative bg-[#2a1f61] overflow-hidden">
      <div className="absolute inset-0 opacity-45">
        <InfiniteImageField
          images={MASSAGE_IMAGES}
          imageWidth={200}
          imageHeight={280}
          gap={24}
          borderRadius={16}
          maxSpeed={4}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2a1f61]/90 via-[#2a1f61]/60 to-[#2a1f61]/95" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 py-24 lg:py-32 text-center">
        <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff6b00] mb-5">
          Nos techniques enseignées
        </p>
        <h2 className="font-display text-[2.4rem] sm:text-6xl font-semibold text-white leading-[1.03] text-balance max-w-3xl mx-auto">
          Tous les types de massages bien-être, appris sur table
        </h2>
        <p className="mt-6 text-[16.5px] text-white/70 max-w-2xl mx-auto leading-relaxed">
          Relaxation, thérapeutique ou spécialisée : chaque protocole est enseigné en petit groupe,
          avec 80 % de pratique et un suivi individualisé.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {types.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/25 bg-white/10 backdrop-blur px-5 py-2.5 text-[14px] font-medium text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}