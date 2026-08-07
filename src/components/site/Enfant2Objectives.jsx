import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

const objectives = [
{ n: '01', t: "Acquérir les bases théoriques et pratiques de la relaxation ludique adaptée à l'enfant" },
{ n: '02', t: "Comprendre et assimiler les méthodes de relaxation ludique pour enfant, ses principes et le positionnement professionnel" },
{ n: '03', t: "Maîtriser les différents supports, jeux et ateliers pour animer une séance de relaxation ludique pour enfant" },
{ n: '04', t: "Utiliser les techniques enseignées pour les enfants, mais également pour soi-même" },
{ n: '05', t: "Adapter sa pratique en fonction des problématiques rencontrées" }];


export default function Enfant2Objectives() {
  return (
    <section className="relative bg-[#2a1f61] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/06fede28f_generated_image.png"
          alt="Enfants qui jouent dans une salle de jeu"
          className="w-full h-full"
          fittingType="fill" />
      </div>

      































      
    </section>);

}