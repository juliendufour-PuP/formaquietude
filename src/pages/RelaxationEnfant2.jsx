import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ScrollProgress from '@/components/site/ScrollProgress';
import Navbar from '@/components/site/Navbar';
import Enfant2Hero from '@/components/site/Enfant2Hero';
import InfoBanner from '@/components/site/InfoBanner';
import Enfant2Programme from '@/components/site/Enfant2Programme';
import Enfant2Objectives from '@/components/site/Enfant2Objectives';
import Enfant2Pricing from '@/components/site/Enfant2Pricing';
import MethodEnfant from '@/components/site/MethodEnfant';
import ProofTicker from '@/components/site/ProofTicker';
import Faq from '@/components/site/Faq';
import ContactSection from '@/components/site/ContactSection';
import WaveDivider from '@/components/site/WaveDivider';
import LeadForm from '@/components/site/LeadForm';

const TITLES = [
  'Praticien en relaxation ludique pour enfants',
  'Massage enfant',
  'Relaxation ludique pour enfants en situation de handicap',
  'Accompagner le développement du jeune enfant — Bloc 1 CAP AEPE',
  'Intégrer la relaxation ludique dans ses pratiques éducatives',
];

export default function RelaxationEnfant2() {
  const [testimonials, setTestimonials] = useState([]);
  const [dialog, setDialog] = useState(null);

  useEffect(() => {
    base44.entities.Testimonial.list().then(setTestimonials).catch(() => {});
  }, []);

  return (
    <div className="bg-white">
      <ScrollProgress />
      <Navbar />
      <Enfant2Hero />
      <InfoBanner />
      <Enfant2Programme />
      <Enfant2Objectives />
      <Enfant2Pricing onSelect={(title) => setDialog({ title, kind: 'rappel' })} />
      <MethodEnfant />
      <ProofTicker testimonials={testimonials} />
      <Faq />
      <WaveDivider />
      <ContactSection formations={TITLES} />

      <Dialog open={!!dialog} onOpenChange={(o) => !o && setDialog(null)}>
        <DialogContent className="max-w-lg rounded-[24px] p-7 max-h-[92vh] overflow-y-auto">
          {dialog && (
            <>
              <h3 className="font-display text-3xl font-semibold text-[#2a1f61]">
                Je souhaite être recontactée
              </h3>
              <p className="text-[14.5px] text-[#2a1f61]/60 mb-6">{dialog.title}</p>
              <LeadForm
                source="rappel"
                defaultFormation={dialog.title}
                formations={TITLES}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}