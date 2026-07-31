import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, Loader2 } from 'lucide-react';

const fundings = ['CPF', 'Personnel', 'Pôle emploi', 'Entreprise', 'Je ne sais pas'];

export default function LeadForm({ source = 'rappel', defaultFormation = '', sessionId = '', formations = [], onDone }) {
  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', message: '',
    formation_interest: defaultFormation, funding: 'CPF',
  });
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name.trim() || (!form.phone.trim() && !form.email.trim())) {
      setError('Merci d’indiquer votre nom et un moyen de vous joindre.');
      return;
    }
    setError('');
    setState('loading');
    try {
      await base44.entities.Lead.create({ ...form, session_id: sessionId, source });
      base44.analytics.track({ eventName: 'lead_submit', properties: { source } });
      setState('done');
      onDone && onDone();
    } catch (err) {
      setState('idle');
      setError('Une erreur est survenue. Merci de réessayer.');
    }
  };

  if (state === 'done') {
    return (
      <div className="text-center py-12 px-6">
        <div className="mx-auto w-14 h-14 rounded-full bg-[#ff6b00] flex items-center justify-center mb-6">
          <Check className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-display text-3xl text-[#2a1f61] mb-3">Demande enregistrée</h3>
        <p className="text-[#2a1f61]/65 max-w-sm mx-auto">
          Une conseillère pédagogique vous rappelle sous 24 h ouvrées pour construire votre parcours et votre dossier de financement.
        </p>
      </div>
    );
  }

  const inputCls = 'h-12 rounded-xl border-[#2a1f61]/15 bg-white text-[#2a1f61] placeholder:text-[#2a1f61]/40 focus-visible:ring-[#ff6b00]';

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Input className={inputCls} placeholder="Prénom et nom *" value={form.full_name} onChange={set('full_name')} />
        <Input className={inputCls} placeholder="Téléphone" value={form.phone} onChange={set('phone')} />
      </div>
      <Input className={inputCls} type="email" placeholder="Adresse e-mail" value={form.email} onChange={set('email')} />

      {formations.length > 0 && (
        <select
          value={form.formation_interest}
          onChange={set('formation_interest')}
          className="w-full h-12 rounded-xl border border-[#2a1f61]/15 bg-white px-3 text-[15px] text-[#2a1f61] focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
        >
          <option value="">Formation qui m’intéresse…</option>
          {formations.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
      )}

      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2a1f61]/50 mb-3">Financement envisagé</p>
        <div className="flex flex-wrap gap-2">
          {fundings.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setForm({ ...form, funding: f })}
              className={`rounded-full px-4 py-2 text-[13px] font-medium border transition-colors ${
                form.funding === f ? 'bg-[#2a1f61] text-white border-[#2a1f61]' : 'border-[#2a1f61]/20 text-[#2a1f61]/70 hover:border-[#ff6b00]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <Textarea
        className="rounded-xl border-[#2a1f61]/15 bg-white text-[#2a1f61] placeholder:text-[#2a1f61]/40 min-h-[90px] focus-visible:ring-[#ff6b00]"
        placeholder="Votre projet, vos disponibilités… (facultatif)"
        value={form.message}
        onChange={set('message')}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full rounded-full bg-[#ff6b00] py-4 text-[15px] font-semibold text-white shadow-[0_14px_40px_-14px_rgba(255,107,0,0.8)] hover:brightness-95 transition disabled:opacity-60 inline-flex items-center justify-center gap-2"
      >
        {state === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
        Je souhaite être recontactée
      </button>
      <p className="text-[12px] text-[#2a1f61]/45 text-center">
        Rappel sous 24 h ouvrées · Aucun engagement · Données utilisées uniquement pour votre demande.
      </p>
    </form>
  );
}