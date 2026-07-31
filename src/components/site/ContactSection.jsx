import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Clock, Mail, MapPin } from 'lucide-react';
import LeadForm from './LeadForm';
import ContactBranding from './ContactBranding';

export default function ContactSection({ formations }) {
  return (
    <section id="rappel" className="relative bg-[#2a1f61] py-24 lg:py-32 overflow-hidden">

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
          
          <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff6b00] mb-5">Premier pas</p>
          <h2 className="font-display text-[2.4rem] sm:text-5xl leading-[1.03] font-semibold text-white text-balance">Parlons de votre projet formation

          </h2>
          


          
          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-4 text-white/80 text-[15px]">
              <Clock className="w-5 h-5 text-[#ff6b00] shrink-0" />
              Du lundi au vendredi · 09:00–12:30 &amp; 13:30–17:00
            </li>
            <li className="flex items-center gap-4 text-white/80 text-[15px]">
              <PhoneCall className="w-5 h-5 text-[#ff6b00] shrink-0" />
              <a href="tel:+33476228043" className="hover:text-[#ff6b00] transition-colors">04 76 22 80 43</a>
            </li>
            <li className="flex items-center gap-4 text-white/80 text-[15px]">
              <Mail className="w-5 h-5 text-[#ff6b00] shrink-0" />
              <a href="mailto:secretariat@formaquietude.fr" className="hover:text-[#ff6b00] transition-colors">secretariat@formaquietude.fr</a>
            </li>
            <li className="flex items-center gap-4 text-white/80 text-[15px]">
              <MapPin className="w-5 h-5 text-[#ff6b00] shrink-0" />
              <a href="https://www.google.com/maps/dir/?api=1&destination=9-11+Av.+Paul+Verlaine,+38100+Grenoble" target="_blank" rel="noreferrer" className="hover:text-[#ff6b00] transition-colors">9 - 11 Av. Paul Verlaine, 38100 Grenoble</a>
            </li>
          </ul>

          <div className="mt-10 pt-8 border-t border-white/10">
            <ContactBranding />
          </div>
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

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[13px] text-white/45">
        <p>© {new Date().getFullYear()} Formaquiétude — Organisme de formation enregistré sous le n° 84 69 00000 69.</p>
        <div className="flex gap-6">
          <a href="#rappel" className="hover:text-[#ff6b00] transition-colors">Mentions légales</a>
          <a href="#rappel" className="hover:text-[#ff6b00] transition-colors">Confidentialité</a>
          <a href="#financement" className="hover:text-[#ff6b00] transition-colors">Accessibilité &amp; handicap</a>
        </div>
      </div>
    </section>);

}