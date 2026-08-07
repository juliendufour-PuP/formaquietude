import React, { useRef, useEffect } from 'react';

const CARD_W = 230;
const CARD_H = 320;
const SPEED = 0.4; // px per frame

/**
 * Infinite, gently scrolling massage carousel (right → left).
 * No 3D / depth — just a flat marquee of cards, edge to edge.
 * Pauses on hover. Click a card to trigger onSelect.
 */
export function ThreeDPhotoCarousel({ cards = [], onSelect }) {
  const trackRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    let raf;
    const loop = () => {
      if (!hoverRef.current) {
        x -= SPEED;
        const half = track.scrollWidth / 2;
        if (-x >= half) x += half;
        track.style.transform = `translateX(${x}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  const items = [...cards, ...cards];

  return (
    <div
      ref={trackRef}
      className="flex gap-5 w-max will-change-transform"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {items.map((card, i) => (
        <div
          key={`${card.title}-${i}`}
          onClick={() => onSelect && onSelect(card)}
          className="shrink-0 cursor-pointer"
          style={{ width: CARD_W, height: CARD_H }}
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
      ))}
    </div>
  );
}

export default ThreeDPhotoCarousel;