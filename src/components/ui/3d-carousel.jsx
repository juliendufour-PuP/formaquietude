import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const CARD_W = 210;
const GAP = 18;
const STEP = CARD_W + GAP;

function Card({ card, index, x, center, onSelect }) {
  // distance in px between this card's center and the viewport center
  const dist = useTransform(x, (v) => v + index * STEP + CARD_W / 2 - center);
  const rotateY = useTransform(dist, [-600, 0, 600], [38, 0, -38], { clamp: true });
  const scale = useTransform(dist, [-600, 0, 600], [0.82, 1.06, 0.82], { clamp: true });
  const opacity = useTransform(dist, [-800, -500, 0, 500, 800], [0.25, 0.85, 1, 0.85, 0.25]);
  const z = useTransform(dist, (d) => -Math.abs(d) * 0.35);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect && onSelect(card)}
      style={{ width: CARD_W, rotateY, scale, opacity, z, transformStyle: 'preserve-3d' }}
      className="shrink-0 text-left focus:outline-none"
    >
      <div className="overflow-hidden rounded-[22px] bg-[#2a1f61] p-1.5 shadow-[0_30px_60px_-28px_rgba(42,31,97,0.7)]">
        <img
          src={card.image}
          alt={card.title}
          draggable={false}
          className="pointer-events-none w-full aspect-[4/3] rounded-[16px] object-cover"
        />
        <p className="min-h-[52px] px-3 pb-4 pt-3 text-[12.5px] font-bold leading-snug text-white">
          {card.title}
        </p>
      </div>
    </motion.button>
  );
}

export function ThreeDPhotoCarousel({ cards = [], onSelect }) {
  const wrapRef = useRef(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    const update = () => wrapRef.current && setWidth(wrapRef.current.offsetWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total = cards.length * STEP;
  const maxDrag = Math.max(0, total - width + 80);

  return (
    <div ref={wrapRef} className="relative w-full overflow-hidden py-6">
      <motion.div
        drag="x"
        dragConstraints={{ left: -maxDrag, right: 0 }}
        dragElastic={0.08}
        style={{ x, perspective: 1200, transformStyle: 'preserve-3d', gap: GAP }}
        className="flex cursor-grab items-center px-6 active:cursor-grabbing"
      >
        {cards.map((card, i) => (
          <Card
            key={card.title}
            card={card}
            index={i}
            x={x}
            center={width / 2}
            onSelect={onSelect}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ThreeDPhotoCarousel;