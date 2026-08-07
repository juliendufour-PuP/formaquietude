import React, { useRef, useEffect, useState, useCallback } from 'react';

const CARD_W = 230;
const CARD_H = 320;
const SPACING = 125; // px between card centers (overlap → fan effect)
const ROT_STEP = 42; // deg per offset step
const SCALE_STEP = 0.06;
const OPACITY_STEP = 0.14;
const AUTO_MS = 4200;

/**
 * 3D "cover flow" carousel.
 * - Centre card is full-scale, facing the viewer.
 * - Cards to the left/right shrink, rotate on Y (tilting away), and fade.
 * - Drag, click-to-focus, keyboard arrows, and gentle auto-advance.
 */
export function ThreeDPhotoCarousel({ cards = [], onSelect }) {
  const n = cards.length || 1;
  const [active, setActive] = useState(Math.floor(n / 2));
  const stageRef = useRef(null);
  const dragRef = useRef({ x: 0, active: 0, dragging: false });
  const [dragShift, setDragShift] = useState(0);
  const hoverRef = useRef(false);

  const clamp = useCallback((i) => Math.min(n - 1, Math.max(0, i)), [n]);

  const goTo = useCallback(
    (i) => {
      setActive(clamp(i));
    },
    [clamp]
  );

  const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);
  const prev = useCallback(() => setActive((a) => (a - 1 + n) % n), [n]);

  // Auto-advance, paused on hover / drag.
  useEffect(() => {
    const id = setInterval(() => {
      if (!hoverRef.current && !dragRef.current.dragging) next();
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [next]);

  // Keyboard navigation when stage is focused.
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  };

  // Pointer drag.
  const onDown = (e) => {
    dragRef.current = { x: e.clientX, active, dragging: true };
  };
  const onMove = (e) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.x;
    setDragShift(dx / SPACING);
  };
  const onUp = () => {
    if (!dragRef.current.dragging) return;
    const target = Math.round(dragRef.current.active + dragShift);
    setActive(clamp(target));
    setDragShift(0);
    dragRef.current.dragging = false;
  };

  const effectiveActive = active + dragShift;

  return (
    <div
      ref={stageRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Massages à la carte"
      onKeyDown={onKeyDown}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      className="relative h-[360px] w-full cursor-grab overflow-hidden outline-none active:cursor-grabbing"
      style={{ perspective: '1300px', touchAction: 'pan-y' }}
    >
      <div
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {cards.map((card, i) => {
          const offset = i - effectiveActive;
          const abs = Math.abs(offset);
          const scale = Math.max(0.6, 1 - abs * SCALE_STEP);
          const opacity = Math.max(0.12, 1 - abs * OPACITY_STEP);
          const rot = Math.max(-60, Math.min(60, offset * -ROT_STEP));
          const z = 100 - abs;
          return (
            <div
              key={card.title}
              onClick={() => {
                if (i === active && dragShift === 0) onSelect && onSelect(card);
                else goTo(i);
              }}
              className="absolute left-1/2 top-1/2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: CARD_W,
                height: CARD_H,
                marginLeft: -CARD_W / 2,
                marginTop: -CARD_H / 2,
                zIndex: z,
                opacity,
                transform: `translateX(${offset * SPACING}px) translateZ(${
                  -abs * 60
                }px) rotateY(${rot}deg) scale(${scale})`,
              }}
            >
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-black/5">
                <img
                  src={card.image}
                  alt={card.title}
                  draggable={false}
                  className="block h-[220px] w-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 items-center justify-center px-3 text-center">
                  <p className="text-[13px] font-semibold leading-snug text-[#2a1f61] line-clamp-3">
                    {card.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[140px] bg-gradient-to-r from-[#2a1f61] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[140px] bg-gradient-to-l from-[#2a1f61] to-transparent" />
    </div>
  );
}

export default ThreeDPhotoCarousel;