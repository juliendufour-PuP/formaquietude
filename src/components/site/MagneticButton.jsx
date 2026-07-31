import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, onClick, className = '', pulse = false }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.18, y: (e.clientY - (r.top + r.height / 2)) * 0.3 });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#ff6b00] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_14px_40px_-12px_rgba(255,107,0,0.7)] transition-shadow hover:shadow-[0_18px_50px_-10px_rgba(255,107,0,0.85)] ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
      )}
      {children}
    </motion.button>
  );
}