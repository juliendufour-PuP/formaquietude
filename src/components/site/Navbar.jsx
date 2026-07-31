import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';

const groups = [
  { label: 'Relaxation', items: ['Massage Suédois Professionnel', 'Massage Ayurvédique Abhyanga'] },
  { label: 'Thérapeutique', items: ['Massage Thaï Traditionnel', 'Massage Profond & Sportif'] },
  { label: 'Spécialisée', items: ['Massage aux Pierres Chaudes', 'Massage Femme Enceinte'] },
];

const links = [
  { label: 'Les formations', href: '#formations' },
  { label: 'La méthode', href: '#methode' },
  { label: 'Prochaines dates', href: '#dates' },
  { label: 'Financement', href: '#financement' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solid ? 'bg-white/85 backdrop-blur-xl border-b border-[#2a1f61]/10 py-3' : 'py-6'}`}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight text-[#2a1f61]">Formaquiétude</span>
            <span className="hidden sm:inline text-[10px] tracking-[0.2em] uppercase text-[#ff6b00] font-semibold">Depuis 2009</span>
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-[#2a1f61]/75 hover:text-[#ff6b00] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#rappel" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-5 py-2.5 text-[13px] font-semibold text-white hover:brightness-95 transition">
              <Phone className="w-3.5 h-3.5" /> Être recontactée
            </a>
            <button onClick={() => setOpen(true)} className="text-[12px] tracking-[0.2em] uppercase font-semibold text-[#2a1f61] border border-[#2a1f61]/20 rounded-full px-4 py-2.5 hover:bg-[#2a1f61] hover:text-white transition-colors">
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[#2a1f61] text-white overflow-y-auto"
          >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-8 flex items-center justify-between">
              <span className="font-display text-2xl">Formaquiétude</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full border border-white/25 hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pb-20 grid md:grid-cols-3 gap-12 mt-10">
              {groups.map((g, i) => (
                <motion.div key={g.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i, duration: 0.6 }}>
                  <p className="text-[11px] tracking-[0.28em] uppercase text-[#ff6b00] font-semibold mb-6">{g.label}</p>
                  <ul className="space-y-4">
                    {g.items.map((it) => (
                      <li key={it}>
                        <a href="#formations" onClick={() => setOpen(false)} className="font-display text-3xl leading-tight text-white/85 hover:text-white transition-colors">
                          {it.replace('Massage ', '')}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pb-16 border-t border-white/15 pt-10 flex flex-wrap gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-6">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/70 hover:text-white">{l.label}</a>
                ))}
              </div>
              <a href="#rappel" onClick={() => setOpen(false)} className="rounded-full bg-[#ff6b00] px-7 py-3.5 text-sm font-semibold">
                Je souhaite être recontactée
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}