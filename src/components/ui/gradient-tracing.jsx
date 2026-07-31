import React, { useId } from 'react';

// Comet trail: a bright head followed by progressively shorter, dimmer segments,
// so the trail tapers (diffuse) instead of being a uniform stroke.
const TRAIL = [
  { len: 60, from: 0, opacity: 1, widthScale: 1 },
  { len: 44, from: 72, opacity: 0.6, widthScale: 0.82 },
  { len: 30, from: 122, opacity: 0.36, widthScale: 0.64 },
  { len: 20, from: 158, opacity: 0.2, widthScale: 0.48 },
  { len: 13, from: 184, opacity: 0.1, widthScale: 0.34 },
];
const PATTERN = 1880;

export function GradientTracing({
  width,
  height,
  baseColor = 'white',
  gradientColors = ['#ff6b00', '#ff6b00', '#ffffff'],
  animationDuration = 2,
  strokeWidth = 2,
  path = `M0,${height / 2} L${width},${height / 2}`,
  className = '',
  fluid = false,
  reverse = false,
}) {
  const rawId = useId().replace(/[:]/g, '');
  const gradientId = `pulse-${rawId}`;
  const animName = `gt-${rawId}`;

  return (
    <div className={`relative ${className}`} style={{ width: fluid ? '100%' : width, height }}>
      <svg
        width={fluid ? '100%' : width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio={fluid ? 'none' : undefined}
        fill="none"
      >
        <path d={path} stroke={baseColor} strokeOpacity="0.12" strokeWidth={strokeWidth} />
        {TRAIL.map((s, i) => (
          <path
            key={i}
            d={path}
            stroke={`url(#${gradientId})`}
            strokeOpacity={s.opacity}
            strokeLinecap="round"
            strokeWidth={strokeWidth * s.widthScale}
            strokeDasharray={`${s.len} ${PATTERN - s.len}`}
            style={{
              ['--gt-from']: `${s.from}px`,
              animation: `${animName} ${animationDuration}s linear infinite`,
              animationDirection: reverse ? 'reverse' : 'normal',
            }}
          />
        ))}
        <defs>
          <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={width} y2="0">
            <stop stopColor={gradientColors[0]} />
            <stop offset="0.5" stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} />
          </linearGradient>
        </defs>
      </svg>
      <style>{`@keyframes ${animName}{from{stroke-dashoffset:var(--gt-from)}to{stroke-dashoffset:calc(var(--gt-from) - ${PATTERN}px)}}`}</style>
    </div>
  );
}

export default GradientTracing;