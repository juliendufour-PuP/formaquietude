import React, { useRef, useEffect } from 'react';

const CARD_W = 220;
const GAP = 50;
const SPEED = 0.025; // deg/frame ≈ 1,5°/s

export function ThreeDPhotoCarousel({ cards = [], onSelect }) {
  const stageRef = useRef(null);
  const ringRef = useRef(null);
  const n = cards.length || 1;
  const step = 360 / n;
  const radius = Math.round((n * (CARD_W + GAP)) / (2 * Math.PI));

  useEffect(() => {
    const ring = ringRef.current;
    const stage = stageRef.current;
    if (!ring || !stage) return;

    let rot = 0;
    let drag = null;
    let hover = false;
    let raf;

    const paint = () => {
      ring.style.transform = `translateZ(${-radius}px) rotateY(${rot.toFixed(2)}deg)`;
    };
    const loop = () => {
      if (!hover && drag === null) rot += SPEED;
      paint();
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onEnter = () => { hover = true; };
    const onLeave = () => { hover = false; drag = null; };
    const onDown = (e) => { drag = e.clientX; };
    const onMove = (e) => {
      if (drag === null) return;
      rot += (e.clientX - drag) * 0.25;
      drag = e.clientX;
      paint();
    };
    const onUp = () => { drag = null; };

    stage.addEventListener('mouseenter', onEnter);
    stage.addEventListener('mouseleave', onLeave);
    stage.addEventListener('pointerdown', onDown);
    stage.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener('mouseenter', onEnter);
      stage.removeEventListener('mouseleave', onLeave);
      stage.removeEventListener('pointerdown', onDown);
      stage.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [radius]);

  return (
    <div
      ref={stageRef}
      className="relative h-[400px] w-full cursor-grab overflow-hidden active:cursor-grabbing"
      style={{ perspective: '1500px', touchAction: 'pan-y' }}
    >
      <div
        ref={ringRef}
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d', transform: `translateZ(${-radius}px)` }}
      >
        {cards.map((card, i) => (
          <div
            key={card.title}
            onClick={() => onSelect && onSelect(card)}
            className="absolute left-1/2 top-1/2"
            style={{
              width: CARD_W,
              height: 300,
              marginLeft: -CARD_W / 2,
              marginTop: -150,
              backfaceVisibility: 'hidden',
              transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-[#2a1f61] shadow-[0_16px_40px_rgba(42,31,97,0.22)]">
              <img
                src={card.image}
                alt={card.title}
                draggable={false}
                className="block h-[200px] w-full object-cover"
              />
              <div className="px-3.5 py-3 text-[13.5px] font-semibold leading-snug text-white">
                {card.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[180px] bg-gradient-to-r from-[#f6f6fb] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[180px] bg-gradient-to-l from-[#f6f6fb] to-transparent" />
    </div>
  );
}

export default ThreeDPhotoCarousel;