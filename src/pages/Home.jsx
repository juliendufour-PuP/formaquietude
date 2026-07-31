import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ScrollProgress from '@/components/site/ScrollProgress';
import Navbar from '@/components/site/Navbar';
import Hero from '@/components/site/Hero';
import MassageCarousel from '@/components/site/MassageCarousel';
import Curriculum from '@/components/site/Curriculum';
import Method from '@/components/site/Method';
import BookingCalendar from '@/components/site/BookingCalendar';
import Pricing from '@/components/site/Pricing';
import ProofTicker from '@/components/site/ProofTicker';
import Faq from '@/components/site/Faq';
import ContactSection from '@/components/site/ContactSection';
import LeadForm from '@/components/site/LeadForm';

export default function Home() {
  const [formations, setFormations] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [dialog, setDialog] = useState(null);

  useEffect(() => {
    (async () => {
      const [f, s, t] = await Promise.all([
        base44.entities.Formation.list('order'),
        base44.entities.Session.list('start_date'),
        base44.entities.Testimonial.list(),
      ]);
      setFormations(f);
      setSessions(s);
      setTestimonials(t);
    })();
  }, []);

  const titles = [
    ...formations.map((f) => f.title),
    'Devenir Praticien en massage bien-être',
    'Devenir Praticien et lancer son activité',
  ];

  return (
    <div className="bg-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <MassageCarousel onSelect={(title) => setDialog({ title, sessionId: '', kind: 'rappel' })} />
      <Curriculum
        formations={formations}
        sessions={sessions}
        onSelect={(title) => setDialog({ title, sessionId: '', kind: 'rappel' })}
      />
      <Method />
      {/* BookingCalendar section — désactivée visuellement, conservée dans le code
      <BookingCalendar
        sessions={sessions}
        onReserve={(s) => setDialog({ title: s.formation_title, sessionId: s.id, kind: 'reservation' })}
      />
      */}
      <Pricing onSelect={(title) => setDialog({ title, sessionId: '', kind: 'rappel' })} />
      <ProofTicker testimonials={testimonials} />
      <Faq />
      <ContactSection formations={titles} />

      <Dialog open={!!dialog} onOpenChange={(o) => !o && setDialog(null)}>
        <DialogContent className="max-w-lg rounded-[24px] p-7 max-h-[92vh] overflow-y-auto">
          {dialog && (
            <>
              <h3 className="font-display text-3xl font-semibold text-[#2a1f61]">
                {dialog.kind === 'reservation' ? 'Réserver ma place' : 'Je souhaite être recontactée'}
              </h3>
              <p className="text-[14.5px] text-[#2a1f61]/60 mb-6">{dialog.title}</p>
              <LeadForm
                source={dialog.kind}
                defaultFormation={dialog.title}
                sessionId={dialog.sessionId}
                formations={titles}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}