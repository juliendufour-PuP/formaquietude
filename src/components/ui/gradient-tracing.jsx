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
}) {
  const gradientId = `pulse-${useId().replace(/[:]/g, '')}`;

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
              from={`-${width * 0.5}`}
              to={width}
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              from={`0`}
              to={`${width * 1.5}`}
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