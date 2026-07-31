import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Clock, Mail } from 'lucide-react';
import LeadForm from './LeadForm';
import ContactBranding from './ContactBranding';

export default function ContactSection({ formations }) {
  return (
    <section id="rappel" className="relative bg-[#2a1f61] py-24 lg:py-32 overflow-hidden">
      <span className="pointer-events-none select-none absolute -left-6 bottom-4 font-display text-[15vw] leading-none text-white/[0.045] hidden lg:block">Savoir</span>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
          
          <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff6b00] mb-5">Premier pas</p>
          <h2 className="font-display text-[2.4rem] sm:text-5xl leading-[1.03] font-semibold text-white text-balance">Parlons de votre projet formation

          </h2>
          


          
          <ul className="mt-10 space-y-4">
            {[
            [Clock, 'Rappel sous 24 h ouvrées'],
            [PhoneCall, '04 78 00 00 00 — du lundi au vendredi, 9 h – 18 h'],
            [Mail, 'contact@formaquietude.fr']].
            map(([Icon, txt]) =>
            <li key={txt} className="flex items-center gap-4 text-white/80 text-[15px]">
                <Icon className="w-5 h-5 text-[#ff6b00] shrink-0" /> {txt}
              </li>
            )}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: 0.1 }}
          className="rounded-[26px] bg-white p-7 sm:p-9 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
          
          <h3 className="font-display text-3xl font-semibold text-[#2a1f61] mb-2">Je souhaite être recontactée</h3>
          <p className="text-[14.5px] text-[#2a1f61]/60 mb-7">Remplissez ce formulaire, nous faisons le reste.</p>
          <LeadForm source="rappel" formations={formations} />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 mt-14 flex justify-end">
        <ContactBranding />
      </div>
    </section>);

}