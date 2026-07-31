import React, { useId } from 'react';
import { motion } from 'framer-motion';

export function GradientTracing({
  width,
  height,
  baseColor = 'white',
  gradientColors = ['#ff6b00', '#ff6b00', '#ffffff'],
  animationDuration = 2,
  strokeWidth = 2,
  path = `M0,${height / 2} L${width},${height / 2}`,
  className = '',
}) {
  const gradientId = `pulse-${useId().replace(/:/g, '')}`;

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
        <path d={path} stroke={baseColor} strokeOpacity="0.15" strokeWidth={strokeWidth} />
        <path d={path} stroke={`url(#${gradientId})`} strokeLinecap="round" strokeWidth={strokeWidth} />
        <defs>
          <motion.linearGradient
            animate={{ x1: [0, width * 2], x2: [0, width] }}
            transition={{ duration: animationDuration, repeat: Infinity, ease: 'linear' }}
            id={gradientId}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default GradientTracing;