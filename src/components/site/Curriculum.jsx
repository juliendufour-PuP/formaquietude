import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from '@/components/ui/image';
import SectionHeading from './SectionHeading';
import FormationCard from './FormationCard';

export default function Curriculum({ formations, sessions, onSelect }) {
  const [ambient, setAmbient] = useState(null);

  const nextFor = (title) =>
    sessions
      .filter((s) => s.formation_title === title)
      .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))[0];

  return (
    <section id="formations" className="relative overflow-hidden bg-[#f4f4f9] py-24 lg:py-32">
      <AnimatePresence>
        {ambient && (
          <motion.div
            key={ambient}
            initial={{ opacity: 0 }} animate={{ opacity: 0.16 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 pointer-events-none"
          >
            <Image src={ambient} alt="" className="w-full h-full blur-2xl scale-110" fittingType="fill" />
            <div className="absolute inset-0 bg-[#2a1f61]/30" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Le catalogue"
          title="Six formations professionnelles en massage bien-être"
          subtitle="Chaque cursus délivre un protocole complet, immédiatement exploitable en cabinet, en spa ou à domicile. Attestation de fin de formation remise à chaque élève."
        />
        <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {formations.map((f, i) => (
            <FormationCard
              key={f.id}
              formation={f}
              nextSession={nextFor(f.title)}
              index={i}
              onSelect={onSelect}
              onHover={setAmbient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}