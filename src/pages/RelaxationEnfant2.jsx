import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ScrollProgress from '@/components/site/ScrollProgress';
import Navbar from '@/components/site/Navbar';
import HeroEnfant from '@/components/site/HeroEnfant';
import EnfantFormations from '@/components/site/EnfantFormations';
import MethodEnfant from '@/components/site/MethodEnfant';
import EnfantObjectifs from '@/components/site/EnfantObjectifs';
import ProofTicker from '@/components/site/ProofTicker';
import Faq from '@/components/site/Faq';
import ContactSection from '@/components/site/ContactSection';
import WaveDivider from '@/components/site/WaveDivider';
import LeadForm from '@/components/site/LeadForm';

const TITLES = [
  'Accompagner le développement du jeune enfant — Bloc 1 CAP AEPE',
  'Massage enfant',
  'Praticien en relaxation ludique pour enfants',
  'Relaxation ludique pour enfants en situation de handicap',
  'Intégrer la relaxation ludique dans ses pratiques éducatives',
];

export default function RelaxationEnfant2() {
  const [testimonials, setTestimonials] = useState([]);
  const [dialog, setDialog] = useState(null);

  useEffect(() => {
    // No-op: testimonials fetched on main page
  }, []);

  return (
    <div className="bg-white">
      <ScrollProgress />
      <Navbar />
      <HeroEnfant />
      <EnfantFormations onSelect={(title) => setDialog({ title, kind: 'rappel' })} />
      <MethodEnfant />
      <EnfantObjectifs />
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