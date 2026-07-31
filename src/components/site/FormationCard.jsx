import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, CalendarDays } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function FormationCard({ formation, nextSession, index, onSelect, onHover }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => onHover && onHover(formation.image_url)}
      onMouseLeave={() => onHover && onHover(null)}
      className="group flex flex-col overflow-hidden rounded-[24px] bg-white border border-[#2a1f61]/10 hover:border-[#ff6b00]/40 hover:shadow-[0_36px_70px_-40px_rgba(42,31,97,0.5)] transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <Image
          src={formation.image_url}
          alt={formation.title}
          className="w-full h-[260px] transition-transform duration-700 group-hover:scale-[1.06]"
          fittingType="fill"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3.5 py-1.5 text-[13px] font-semibold tracking-wide text-[#2a1f61]">
          {formation.price} €
        </span>
        {formation.cpf_eligible && (
          <span className="absolute top-4 right-4 rounded-full bg-[#ff6b00] px-3 py-1.5 text-[11px] font-semibold text-white">CPF</span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-7">
        <h3 className="font-display text-[1.75rem] leading-tight font-semibold text-[#2a1f61]">{formation.title}</h3>
        <p className="mt-2 text-[13px] text-[#2a1f61]/50">{formation.duration} · {formation.level}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-[#2a1f61]/70">{formation.description}</p>

        <ul className="mt-5 mb-6 space-y-2">
          {(formation.highlights || []).map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-[14px] text-[#2a1f61]/75">
              <Check className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" /> {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5 border-t border-[#2a1f61]/10 flex flex-col items-start gap-4">
          <div className="flex items-center min-h-[30px]">
            {nextSession ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f4f4f9] px-3 py-1.5 text-[12px] font-semibold text-[#2a1f61]">
                <CalendarDays className="w-3.5 h-3.5 text-[#ff6b00]" />
                Prochaine : {format(new Date(nextSession.start_date), 'd MMM yyyy', { locale: fr })}
              </span>
            ) : (
              <span className="text-[12px] text-[#2a1f61]/50">Dates sur demande</span>
            )}
          </div>
          <button
            onClick={() => onSelect(formation.title)}
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-[#2a1f61] px-5 py-3 text-[13.5px] font-semibold text-white hover:bg-[#ff6b00] transition-colors"
          >
            Être recontactée <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}