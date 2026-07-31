import React, { useId } from 'react';

// One bright stroke (the head) with a contiguous, tapering trail behind it that
// fades to nothing — a single comet in a single colour.
const PATTERN = 1880;
const HEAD_LEN = 42;

function buildTrail() {
  const trail = [{ from: 0, len: HEAD_LEN, opacity: 1, widthScale: 1 }];
  let cum = 0;
  let len = 30;
  let i = 1;
  while (len > 2.5 && i < 40) {
    cum += len;
    trail.push({
      from: cum,
      len,
      opacity: Math.pow(0.82, i),
      widthScale: Math.max(0.5, 1 - i * 0.022),
    });
    len *= 0.86;
    i++;
  }
  return trail;
}
const TRAIL = buildTrail();

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
  const animName = `gt-${rawId}`;
  const color = gradientColors[1] ?? gradientColors[0];

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
            stroke={color}
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
      </svg>
      <style>{`@keyframes ${animName}{from{stroke-dashoffset:var(--gt-from)}to{stroke-dashoffset:calc(var(--gt-from) - ${PATTERN}px)}}`}</style>
    </div>
  );
}

export default GradientTracing;