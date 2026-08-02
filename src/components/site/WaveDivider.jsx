import React from 'react';

const WAVE_URL =
  'https://media.base44.com/images/public/6a6c5be8ce88d3267258bfc1/d735a3c5e_image.png';

/**
 * Wave separator — transitions from a light (cream/white) section above
 * into the indigo (#2a1f61) section below. Place it right BEFORE an
 * indigo section so the wave's lower indigo blends into that section.
 */
export default function WaveDivider({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-[60px] sm:h-[90px] lg:h-[110px] bg-[#2a1f61] ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${WAVE_URL})` }}
      />
      {/* Bridge the image's darker indigo into the section's #2a1f61 */}
      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-b from-transparent to-[#2a1f61]" />
    </div>
  );
}