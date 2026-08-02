import React from 'react';

/**
 * Wave separator — crisp SVG that keeps the exact section colors:
 * transparent above the curve (lets the light section show through) and
 * filled with the indigo (#2a1f61) of the section that follows, so the
 * transition is seamless. Place it right BEFORE an indigo section.
 */
export default function WaveDivider({ className = '' }) {
  return (
    <div aria-hidden="true" className={`relative w-full h-[64px] sm:h-[96px] lg:h-[120px] ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 72 C 360 46, 600 28, 820 36 C 1020 43, 1160 72, 1440 60 L 1440 100 L 0 100 Z"
          fill="#2a1f61"
        />
      </svg>
    </div>
  );
}