import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

const links = [
  { label: 'Les formations', href: '#formations' },
  { label: 'La méthode', href: '#methode' },
  { label: 'Prochaines dates', href: '#dates' },
  { label: 'Financement', href: '#financement' },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solid ? 'bg-white/85 backdrop-blur-xl border-b border-[#2a1f61]/10 py-3' : 'py-5'}`}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center">
          <img
            src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/659c19b0e_logo-formaquietude.png"
            alt="FormaQuiétude — formations bien-être"
            className={`w-auto transition-all duration-500 ${solid ? 'h-9' : 'h-11'}`}
          />
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-[#2a1f61]/75 hover:text-[#ff6b00] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+33476228043"
            aria-label="Appeler le centre FormaQuiétude"
            className="inline-flex items-center justify-center rounded-full border border-[#2a1f61]/15 bg-white/70 px-3.5 py-2.5 text-[#2a1f61] hover:border-[#ff6b00] hover:text-[#ff6b00] transition"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a href="#rappel" className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-5 py-2.5 text-[13px] font-semibold text-white hover:brightness-95 transition">
            Être recontactée
          </a>
        </div>
      </div>
    </header>
  );
}