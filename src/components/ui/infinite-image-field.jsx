import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef } from "react";

function drawRoundedRect(ctx, x, y, w, h, r) {
  const cr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + cr, y);
  ctx.lineTo(x + w - cr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + cr);
  ctx.lineTo(x + w, y + h - cr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - cr, y + h);
  ctx.lineTo(x + cr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - cr);
  ctx.lineTo(x, y + cr);
  ctx.quadraticCurveTo(x, y, x + cr, y);
  ctx.closePath();
}

export function InfiniteImageField({
  className,
  images = [],
  imageWidth = 200,
  imageHeight = 280,
  gap = 28,
  maxSpeed = 5,
  smoothing = 0.07,
  borderRadius = 0,
  ...rest
}) {
  const canvasRef = useRef(null);
  const loadedImagesRef = useRef([]);
  const dimsRef = useRef({ w: 0, h: 0 });
  const camRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const isInsideRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    loadedImagesRef.current = images.map((src) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      return img;
    });
  }, [images]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w: W, h: H } = dimsRef.current;
    const imgs = loadedImagesRef.current;
    if (W === 0 || H === 0 || imgs.length === 0) {
      rafRef.current = requestAnimationFrame(draw);
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cellW = imageWidth + gap;
    const cellH = imageHeight + gap;
    const numImages = imgs.length;

    const tx = isInsideRef.current ? (mouseRef.current.x - 0.5) * 2 * maxSpeed : 0;
    const ty = isInsideRef.current ? (mouseRef.current.y - 0.5) * 2 * maxSpeed : 0;

    velRef.current.x += (tx - velRef.current.x) * smoothing;
    velRef.current.y += (ty - velRef.current.y) * smoothing;
    camRef.current.x += velRef.current.x;
    camRef.current.y += velRef.current.y;

    const camX = camRef.current.x;
    const camY = camRef.current.y;

    ctx.clearRect(0, 0, W, H);

    const colMin = Math.floor((camX - W / 2) / cellW) - 1;
    const colMax = Math.ceil((camX + W / 2) / cellW) + 1;
    const rowMin = Math.floor((camY - H / 2) / cellH) - 1;
    const rowMax = Math.ceil((camY + H / 2) / cellH) + 1;

    for (let row = rowMin; row <= rowMax; row++) {
      for (let col = colMin; col <= colMax; col++) {
        const sx = col * cellW - camX + W / 2 - imageWidth / 2;
        const sy = row * cellH - camY + H / 2 - imageHeight / 2;
        const imgIdx = Math.abs(col * 7 + row * 13 + ((col * row * 3) | 0)) % numImages;
        const img = imgs[imgIdx];

        ctx.save();
        drawRoundedRect(ctx, sx, sy, imageWidth, imageHeight, borderRadius);
        ctx.clip();
        if (img && img.complete && img.naturalWidth > 0) {
          ctx.drawImage(img, sx, sy, imageWidth, imageHeight);
        } else {
          ctx.fillStyle = "rgba(255,255,255,0.08)";
          ctx.fillRect(sx, sy, imageWidth, imageHeight);
        }
        ctx.restore();

        ctx.save();
        drawRoundedRect(ctx, sx, sy, imageWidth, imageHeight, borderRadius);
        ctx.strokeStyle = "rgba(255,255,255,0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
    }

    rafRef.current = requestAnimationFrame(draw);
  }, [imageWidth, imageHeight, gap, maxSpeed, smoothing, borderRadius]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      dimsRef.current = { w: rect.width, h: rect.height };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    const onEnter = () => { isInsideRef.current = true; };
    const onLeave = () => { isInsideRef.current = false; };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [draw]);

  return (
    <div {...rest} className={cn("relative w-full h-full overflow-hidden", className)}>
      <canvas ref={canvasRef} className="block w-full h-full bg-transparent" />
    </div>
  );
}

export default InfiniteImageField;