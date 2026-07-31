import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function ContactBranding() {
  return (
    <div className="flex flex-col items-start gap-4 max-w-xs">
      <div className="flex flex-col">
        <img
          src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/659c19b0e_logo-formaquietude.png"
          alt="FormaQuietude — Formations Bien-être"
          className="h-11 w-auto brightness-0 invert"
        />
      </div>
      <p className="text-[14px] leading-relaxed text-white/55">
        Centre de formation aux métiers du bien-être depuis 2009. Organisme certifié Qualiopi,
        formations éligibles au CPF.
      </p>
      <div className="flex gap-2.5">
        {[Instagram, Facebook, Linkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="p-2.5 rounded-full border border-white/25 text-white/80 hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] transition-colors"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
}