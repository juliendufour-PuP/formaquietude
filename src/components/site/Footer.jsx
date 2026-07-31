import React from 'react';
import { Instagram, Facebook, Linkedin, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#2a1f61]/10 pt-16 pb-28 md:pb-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-display text-3xl font-semibold text-[#2a1f61]">Formaquiétude</p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#2a1f61]/65 max-w-sm">
            Centre de formation aux métiers du bien-être depuis 2009. Organisme certifié Qualiopi,
            formations éligibles au CPF, nominé au Prix Psychologie 2025.
          </p>
          <div className="mt-6 flex gap-3">
            {[[Instagram, 'https://instagram.com'], [Facebook, 'https://facebook.com'], [Linkedin, 'https://linkedin.com']].map(([Icon, href]) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-[#2a1f61]/15 text-[#2a1f61] hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.24em] uppercase font-semibold text-[#ff6b00] mb-5">Navigation</p>
          <ul className="space-y-3 text-[15px] text-[#2a1f61]/70">
            {[['Les formations', '#formations'], ['La méthode', '#methode'], ['Prochaines dates', '#dates'], ['Financement', '#financement'], ['Être recontactée', '#rappel']].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-[#ff6b00] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.24em] uppercase font-semibold text-[#ff6b00] mb-5">Contact</p>
          <ul className="space-y-3 text-[15px] text-[#2a1f61]/70">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 shrink-0" /> 12 rue de la Quiétude, 69002 Lyon</li>
            <li><a href="tel:+33478000000" className="hover:text-[#ff6b00]">04 78 00 00 00</a></li>
            <li><a href="mailto:contact@formaquietude.fr" className="hover:text-[#ff6b00]">contact@formaquietude.fr</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 mt-12 pt-6 border-t border-[#2a1f61]/10 flex flex-col sm:flex-row justify-between gap-3 text-[13px] text-[#2a1f61]/50">
        <p>© {new Date().getFullYear()} Formaquiétude — Organisme de formation enregistré sous le n° 84 69 00000 69.</p>
        <div className="flex gap-6">
          <a href="#rappel" className="hover:text-[#ff6b00]">Mentions légales</a>
          <a href="#rappel" className="hover:text-[#ff6b00]">Confidentialité</a>
          <a href="#financement" className="hover:text-[#ff6b00]">Accessibilité & handicap</a>
        </div>
      </div>
    </footer>
  );
}