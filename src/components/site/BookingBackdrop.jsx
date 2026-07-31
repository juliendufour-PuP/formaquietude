import React from 'react';
import { GradientTracing } from '@/components/ui/gradient-tracing';

const LINES = [
  { top: '12%', path: 'M0,120 C300,10 700,220 1200,60', d: 3.2 },
  { top: '38%', path: 'M0,60 C350,200 750,-40 1200,140', d: 4.4 },
  { top: '66%', path: 'M0,180 C280,40 800,240 1200,80', d: 3.8 },
];

export default function BookingBackdrop({
  baseColor = 'white',
  gradientColors = ['#ff6b00', '#ff6b00', '#ffffff'],
  opacityClass = 'opacity-70',
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${opacityClass}`}>
      {LINES.map((l) => (
        <div key={l.top} className="absolute left-0 w-full" style={{ top: l.top }}>
          <GradientTracing
            width={1200}
            height={240}
            path={l.path}
            baseColor={baseColor}
            gradientColors={gradientColors}
            animationDuration={l.d}
            strokeWidth={1.5}
            className="mx-auto"
          />
        </div>
      ))}
    </div>
  );
}