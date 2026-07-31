import React from 'react';
import { GradientTracing } from '@/components/ui/gradient-tracing';

export default function BookingBackdrop({
  baseColor = 'transparent',
  gradientColors = ['#ff6b00', '#ff6b00', '#ffffff'],
  opacityClass = 'opacity-70',
  top = '38%',
  reverse = false,
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${opacityClass}`}
      style={{
        maskImage: 'linear-gradient(to right, black 0%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, black 0%, black 85%, transparent)',
      }}
    >
      <div className="absolute left-0 w-full" style={{ top }}>
        <GradientTracing
          width={1200}
          height={240}
          path="M0,60 C350,200 750,-40 1200,140"
          baseColor={baseColor}
          gradientColors={gradientColors}
          animationDuration={6}
          strokeWidth={5}
          fluid
          reverse={reverse}
          className="w-full"
        />
      </div>
    </div>
  );
}