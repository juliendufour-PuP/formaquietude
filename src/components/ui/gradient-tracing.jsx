import React, { useId } from 'react';

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
        <path d={path} stroke={baseColor} strokeOpacity="0.15" strokeWidth={strokeWidth} />
        <path
          d={path}
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          strokeDasharray="70 1800"
          style={{
            animation: `${animName} ${animationDuration}s linear infinite`,
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        />
        <defs>
          <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={width} y2="0">
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop offset="0.5" stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`@keyframes ${animName}{to{stroke-dashoffset:-1870}}`}</style>
    </div>
  );
}

export default GradientTracing;