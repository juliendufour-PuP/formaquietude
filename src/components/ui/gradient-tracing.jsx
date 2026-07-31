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
  const gradientId = `pulse-${useId().replace(/[:]/g, '')}`;
  const x1From = reverse ? width : -width * 0.5;
  const x1To = reverse ? -width * 0.5 : width;
  const x2From = reverse ? width * 1.5 : 0;
  const x2To = reverse ? 0 : width * 1.5;

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
        <path d={path} stroke={`url(#${gradientId})`} strokeLinecap="round" strokeWidth={strokeWidth} />
        <defs>
          <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
            <animate
              attributeName="x1"
              from={x1From}
              to={x1To}
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              from={x2From}
              to={x2To}
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default GradientTracing;