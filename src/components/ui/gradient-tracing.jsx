import React, { useId } from 'react';

// A SINGLE continuous stroke whose opacity is driven by an animated gradient mask:
// a bright head sweeps across, leaving a smooth fading trail of the same colour.
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
  const maskId = `cm-${rawId}`;
  const gradId = `cmg-${rawId}`;
  const animName = `gt-${rawId}`;
  const color = gradientColors[1] ?? gradientColors[0];

  const cometLen = Math.round(width * 0.22);
  const headAtRight = !reverse;
  const start = reverse ? width : -cometLen;
  const end = reverse ? -cometLen : width;

  const stops = headAtRight
    ? [
        { o: 0, op: 0 },
        { o: 0.5, op: 0.16 },
        { o: 0.8, op: 0.5 },
        { o: 1, op: 1 },
      ]
    : [
        { o: 0, op: 1 },
        { o: 0.2, op: 0.5 },
        { o: 0.5, op: 0.16 },
        { o: 1, op: 0 },
      ];

  return (
    <div className={`relative ${className}`} style={{ width: fluid ? '100%' : width, height }}>
      <svg
        width={fluid ? '100%' : width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio={fluid ? 'none' : undefined}
        fill="none"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            {stops.map((s) => (
              <stop key={s.o} offset={s.o} stopColor="white" stopOpacity={s.op} />
            ))}
          </linearGradient>
          <mask id={maskId} maskUnits="userSpaceOnUse" x={0} y={0} width={width} height={height}>
            <rect
              x={0}
              y={0}
              width={cometLen}
              height={height}
              fill={`url(#${gradId})`}
              style={{ animation: `${animName} ${animationDuration}s linear infinite` }}
            />
          </mask>
        </defs>

        <path d={path} stroke={baseColor} strokeOpacity="0.1" strokeWidth={strokeWidth} />
        <path
          d={path}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          mask={`url(#${maskId})`}
        />
      </svg>
      <style>{`@keyframes ${animName}{from{transform:translateX(${start}px)}to{transform:translateX(${end}px)}}`}</style>
    </div>
  );
}

export default GradientTracing;