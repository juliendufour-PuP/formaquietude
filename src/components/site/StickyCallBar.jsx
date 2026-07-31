import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Check } from 'lucide-react';

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('idle');

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setState('loading');
    await base44.entities.Lead.create({ full_name: 'Rappel express', phone, source: 'barre_rapide' });
    setState('done');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-50 border-t border-white/10 bg-[#2a1f61]/95 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
            <p className="hidden md:block text-white text-[14.5px] font-medium">
              Votre numéro pour être rappelée — sous 24 h ouvrées, sans engagement.
            </p>
            {state === 'done' ? (
              <p className="flex items-center gap-2 text-[#ff6b00] font-semibold text-[14.5px] mx-auto md:mx-0">
                <Check className="w-4 h-4" /> Merci, nous vous rappelons très vite.
              </p>
            ) : (
              <form onSubmit={submit} className="flex items-center gap-2 w-full md:w-auto">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="06 __ __ __ __"
                  className="flex-1 md:w-56 h-11 rounded-full bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/40 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
                />
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-6 h-11 text-[14px] font-semibold text-white hover:brightness-95 transition disabled:opacity-60"
                >
                  {state === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                  Être rappelée
                </button>
              </form>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}