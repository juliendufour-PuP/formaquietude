import React from 'react';
import { ShieldCheck, Users, Clock, GraduationCap } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'Certification Qualiopi', sub: 'Actions de formation' },
  { icon: GraduationCap, label: 'Éligible CPF', sub: 'Financement jusqu’à 100 %' },
  { icon: Users, label: '8 élèves maximum', sub: 'Suivi individualisé' },
  { icon: Clock, label: '80 % de pratique', sub: 'Sur table, dès le jour 1' },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#2a1f61] py-8">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-4">
            <Icon className="w-6 h-6 text-[#ff6b00] shrink-0" />
            <div>
              <p className="text-white text-[14px] font-semibold leading-tight">{label}</p>
              <p className="text-white/55 text-[12.5px]">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}