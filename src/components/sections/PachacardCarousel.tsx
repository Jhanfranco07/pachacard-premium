import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images?: string[];     // rutas desde /public, ej: "/carrusel/pachacard-1.jpg"
  autoPlayMs?: number;   // 0 = sin autoplay
  className?: string;
  aspect?: "wide" | "card"; // wide: 16/9 aprox, card: 4/3 aprox
};

export function PachacardCarousel({
  images,
  autoPlayMs = 4500,
  className,
  aspect = "wide",
}: Props) {
  const slides = useMemo(
    () =>
      images?.length
        ? images
        : [
            "/carrusel/pachacard-1.jpg",
            "/carrusel/pachacard-2.jpg",
            "/carrusel/pachacard-3.jpg",
            "/carrusel/pachacard-4.jpg",
          ],
    [images],
  );

  const [active, setActive] = useState(0);

  // swipe/drag
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const dragX = useRef(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // width container for drag calc
  const trackRef = useRef<HTMLDivElement | null>(null);

  const clampIndex = (i: number) => {
    const n = slides.length;
    if (n <= 0) return 0;
    return (i + n) % n;
  };

  const prev = () => setActive((a) => clampIndex(a - 1));
  const next = () => setActive((a) => clampIndex(a + 1));
  const goTo = (i: number) => setActive(clampIndex(i));

  // prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(!!mq?.matches);
    onChange();
    mq?.addEventListener?.("change", onChange);
    return () => mq?.removeEventListener?.("change", onChange);
  }, []);

  // Autoplay (pausa en hover y mientras arrastras)
  useEffect(() => {
    if (!autoPlayMs || autoPlayMs <= 0) return;
    if (slides.length <= 1) return;
    if (isHovering || isDragging) return;

    const t = window.setInterval(() => {
      setActive((a) => clampIndex(a + 1));
    }, autoPlayMs);

    return () => window.clearInterval(t);
  }, [autoPlayMs, slides.length, isHovering, isDragging]);

  // Keyboard
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // Pointer swipe handlers
  const onPointerDown = (e: React.PointerEvent) => {
    // Si tocó un botón/dot, no iniciar swipe
    const target = e.target as HTMLElement;
    if (target.closest("button")) return;

    isPointerDown.current = true;
    setIsDragging(true);

    startX.current = e.clientX;
    dragX.current = 0;

    (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;

    const dx = e.clientX - startX.current;
    dragX.current = dx;

    // forzar render (sin meter state cada pixel: usamos style inline con ref)
    // pero igual marcamos dragging para desactivar autoplay
    // (ya está true)
    if (trackRef.current) {
      trackRef.current.style.setProperty("--drag-x", `${dx}px`);
    }
  };

  const endDrag = () => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;

    const el = trackRef.current;
    const w = el?.clientWidth || 1;

    // umbral de swipe
    const threshold = Math.max(50, w * 0.12);

    const dx = dragX.current;

    // reset drag variable
    if (el) el.style.setProperty("--drag-x", "0px");

    setIsDragging(false);

    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    // si no pasa umbral, se queda en la misma
  };

  const onPointerUp = () => endDrag();
  const onPointerCancel = () => endDrag();
  const onPointerLeave = () => {
    // si sale del área mientras arrastra, igual finaliza
    if (isPointerDown.current) endDrag();
  };

  if (!slides.length) return null;

  const aspectClass =
    aspect === "card"
      ? "h-56 sm:h-72 md:h-80"
      : "h-52 sm:h-64 md:h-72 lg:h-80";

  // Transform base: -active*100% y si arrastra: + dragX
  const baseTranslate = `translateX(calc(${-active * 100}% + var(--drag-x, 0px)))`;

  return (
    <div className={className}>
      <div
        className="relative mx-auto max-w-4xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Marco premium */}
        <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-3 sm:p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          {/* Área del carrusel */}
          <div
            role="region"
            aria-label="Carrusel de fotos PACHACARD"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="relative overflow-hidden rounded-xl outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            onPointerLeave={onPointerLeave}
          >
            {/* Overlay luz */}
            <div className="pointer-events-none absolute inset-0 z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
              <div className="absolute -inset-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_45%)]" />
            </div>

            {/* Track */}
            <div
              ref={trackRef}
              className="flex w-full"
              style={{
                transform: baseTranslate,
                transition:
                  reducedMotion || isDragging
                    ? "none"
                    : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                willChange: "transform",
              }}
            >
              {slides.map((src, i) => (
                <div key={src + i} className="min-w-full">
                  <img
                    src={src}
                    alt={`PACHACARD ${i + 1}`}
                    className={`${aspectClass} w-full object-cover select-none`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Flechas */}
            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Imagen anterior"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={prev}
                  className={[
                    "absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20",
                    "h-11 w-11 sm:h-12 sm:w-12 rounded-full",
                    "bg-black/35 hover:bg-black/55 active:bg-black/65",
                    "border border-white/20 backdrop-blur-md",
                    "shadow-[0_12px_30px_rgba(0,0,0,0.35)]",
                    "flex items-center justify-center",
                    "transition-all duration-200",
                    "hover:scale-[1.03] active:scale-[0.98]",
                    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/25",
                  ].join(" ")}
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>

                <button
                  type="button"
                  aria-label="Imagen siguiente"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={next}
                  className={[
                    "absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20",
                    "h-11 w-11 sm:h-12 sm:w-12 rounded-full",
                    "bg-black/35 hover:bg-black/55 active:bg-black/65",
                    "border border-white/20 backdrop-blur-md",
                    "shadow-[0_12px_30px_rgba(0,0,0,0.35)]",
                    "flex items-center justify-center",
                    "transition-all duration-200",
                    "hover:scale-[1.03] active:scale-[0.98]",
                    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/25",
                  ].join(" ")}
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Dots premium */}
          {slides.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2.5">
              {slides.map((_, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir a la foto ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={[
                      "group relative h-2.5 rounded-full transition-all",
                      "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20",
                      isActive ? "w-10" : "w-2.5 hover:w-4",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "absolute inset-0 rounded-full transition-all",
                        isActive
                          ? "bg-[#FBBF24] shadow-[0_0_0_3px_rgba(251,191,36,0.18)]"
                          : "bg-white/35 group-hover:bg-white/55",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          )}


        </div>
      </div>
    </div>
  );
}
