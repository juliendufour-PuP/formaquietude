import { memo } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

const transition = { duration: 0.15, ease: [0.32, 0.72, 0, 1] };

const Cylinder = memo(({ cards, controls, onSelect }) => {
  const isSmall = typeof window !== 'undefined' && window.innerWidth <= 640;
  const cylinderWidth = isSmall ? 3200 : 7000;
  const faceCount = cards.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  const transform = useTransform(rotation, (v) => `rotate3d(0, 1, 0, ${v}deg)`);

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{ perspective: '1200px', transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <motion.div
        drag="x"
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
        style={{ transform, rotateY: rotation, width: cylinderWidth, transformStyle: 'preserve-3d' }}
        onDrag={(_, info) => rotation.set(rotation.get() + info.offset.x * 0.05)}
        onDragEnd={(_, info) =>
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: { type: 'spring', stiffness: 100, damping: 30, mass: 0.1 },
          })
        }
        animate={controls}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="absolute flex h-full origin-center items-center justify-center p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
            }}
            onClick={() => onSelect && onSelect(card)}
          >
            <motion.div
              className="w-full overflow-hidden rounded-[22px] bg-[#2a1f61] p-1.5 shadow-[0_30px_60px_-30px_rgba(42,31,97,0.65)]"
              initial={{ filter: 'blur(4px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={transition}
            >
              <img
                src={card.image}
                alt={card.title}
                draggable={false}
                className="pointer-events-none w-full aspect-[4/3] rounded-[16px] object-cover"
              />
              <p className="px-3 pb-4 pt-4 text-[13px] font-bold leading-snug text-white">
                {card.title}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});
Cylinder.displayName = 'Cylinder';

export function ThreeDPhotoCarousel({ cards = [], onSelect }) {
  const controls = useAnimation();
  return (
    <div className="relative h-[460px] sm:h-[520px] w-full overflow-hidden">
      <Cylinder cards={cards} controls={controls} onSelect={onSelect} />
    </div>
  );
}

export default ThreeDPhotoCarousel;