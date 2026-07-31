import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignCls = align === 'left' ? 'text-left mx-0' : 'text-center mx-auto';
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${alignCls}`}
    >
      {eyebrow && (
        <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#ff6b00] mb-4">{eyebrow}</p>
      )}
      <h2 className={`font-display text-[2.2rem] sm:text-5xl leading-[1.05] font-semibold text-balance ${light ? 'text-white' : 'text-[#2a1f61]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-[17px] leading-relaxed ${light ? 'text-white/70' : 'text-[#2a1f61]/65'}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}