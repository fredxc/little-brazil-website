import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FloatingConfig {
  src: string;
  top: string;
  left?: string;
  right?: string;
  /** Size on desktop (px) */
  size: number;
  /** Size on mobile (px) */
  sizeMobile: number;
  /** CSS blur value — "0px" = crisp focal point */
  blur: string;
  /** Parallax speed multiplier; higher = moves more on scroll */
  speed: number;
  opacity: number;
  /** Initial rotation in degrees */
  rotate: number;
  /** Staggered fade-in */
  delay: number;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpoint,
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

/**
 * 6 images scattered randomly across the section, pulled inward so they're
 * visible on mobile. Each image has a unique rotation, blur and parallax speed.
 *
 * Blur:   0px (sharp) → 4px (heavy defocus)
 * Speed:  0.3 → 1.1  (much stronger travel than before)
 * Rotate: slight tilts (-18° … +22°) for an organic scattered look
 */
const FLOATING_IMAGES: FloatingConfig[] = [
  {
    // top-left — crisp, large, fast
    src: "/pao-de-queijo.png",
    top: "6%",
    left: "-4%",
    size: 270,
    sizeMobile: 110,
    blur: "0px",
    speed: 0.2,
    opacity: 0.9,
    rotate: -25,
    delay: 0,
  },
  {
    // top-right — barely soft, medium-large, medium-fast
    src: "/pao-de-queijo.png",
    top: "12%",
    right: "3%",
    size: 195,
    sizeMobile: 85,
    blur: "0.6px",
    speed: 0.35,
    opacity: 0.75,
    rotate: 20,
    delay: 0.1,
  },
  {
    // mid-left — heavy blur, small, slow (far background)
    src: "/pao-de-queijo.png",
    top: "36%",
    left: "11%",
    size: 180,
    sizeMobile: 70,
    blur: "3px",
    speed: 0.6,
    opacity: 0.48,
    rotate: 12,
    delay: 0.07,
  },
  {
    // mid-right — crisp, biggest, fastest
    src: "/pao-de-queijo-2.png",
    top: "36%",
    right: "8%",
    size: 300,
    sizeMobile: 125,
    blur: "0px",
    speed: 0.2,
    opacity: 0.88,
    rotate: 0,
    delay: 0.15,
  },
  {
    // lower-left — mid blur, medium, medium
    src: "/pao-de-queijo-2.png",
    top: "65%",
    left: "3%",
    size: 210,
    sizeMobile: 90,
    blur: "2px",
    speed: 0.32,
    opacity: 0.72,
    rotate: 6,
    delay: 0.05,
  },
  {
    // lower-right — heavy blur, small, slow
    src: "/pao-de-queijo.png",
    top: "70%",
    right: "-1%",
    size: 150,
    sizeMobile: 65,
    blur: "3px",
    speed: 0.7,
    opacity: 0.55,
    rotate: 8,
    delay: 0.2,
  },
];

const CAROUSEL_IMAGES = [
  { src: "/carousel/carousel-1.jpg", alt: "Pão de queijo" },
  { src: "/carousel/carousel-2.jpg", alt: "Açaí no copo" },
  { src: "/carousel/carousel-3.jpg", alt: "Salgados brasileiros" },
  { src: "/carousel/carousel-4.jpg", alt: "Café com pão de queijo" },
];
// Menu items are now localized via t()

// ─── Sub-component: single parallax image ────────────────────────────────────

function FloatingImage({
  config,
  scrollYProgress,
  isMobile,
}: {
  config: FloatingConfig;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}) {
  const px = isMobile ? config.sizeMobile : config.size;
  // Parallax travel scales with size so mobile movement stays proportional
  const travel = isMobile ? config.speed * 220 : config.speed * 500;
  const y = useTransform(scrollYProgress, [0, 1], [-travel / 2, travel / 2]);

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        top: config.top,
        left: config.left,
        right: config.right,
        rotate: config.rotate,
        willChange: "transform",
        y,
      }}
      initial={{ opacity: 0, scale: 0.82 }}
      whileInView={{ opacity: config.opacity, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.1, delay: config.delay, ease: "easeOut" }}
    >
      <img
        src={config.src}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          width: px,
          height: px,
          objectFit: "contain",
          filter: `blur(${config.blur})`,
          willChange: "transform",
          display: "block",
        }}
      />
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function PaoDeQueijoSection() {
  const { t } = useLanguage();
  // t may return a string (joined array) or an array, so handle both
  const rawSalgados = t("menuSalgadosList");
  const rawDoces = t("menuDocesList");
  const salgados = Array.isArray(rawSalgados)
    ? rawSalgados
    : typeof rawSalgados === "string"
      ? rawSalgados.split(", ")
      : [];
  const doces = Array.isArray(rawDoces)
    ? rawDoces
    : typeof rawDoces === "string"
      ? rawDoces.split(", ")
      : [];
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  // Track how far the section has scrolled through the viewport [0 = entering, 1 = leaving]
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Carousel autoplay logic
  const [carouselApi, setCarouselApi] = useState<any>(null);
  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      if (carouselApi) carouselApi.scrollNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <section
      ref={sectionRef}
      id="pao-de-queijo"
      className="relative w-full min-h-[90svh] bg-white overflow-hidden flex items-center"
    >
      {/* Warm golden ambient glow — depth cue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(251,191,36,0.07) 0%, rgba(161,85,22,0.04) 45%, transparent 70%)",
        }}
      />

      {/* Edge fades — blend seamlessly with adjacent sections */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

      {/* ── Floating pão de queijo images ── */}
      {FLOATING_IMAGES.map((img, i) => (
        <FloatingImage
          key={i}
          config={img}
          scrollYProgress={scrollYProgress}
          isMobile={isMobile}
        />
      ))}

      {/* ── Centre content ── */}
      <div className="relative z-10 w-full flex flex-col items-center py-16 md:py-20 gap-5 md:gap-6">
        {/* 2-column grid: left = text+carousel, right = menu (spans both rows) */}
        <div className="container max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left column: text (top) + carousel (bottom) */}
          <div className="flex flex-col justify-between gap-6 h-full">
            {/* Title/Text (top row) */}
            <div className="space-y-3 text-left">
              <p
                className="text-yellow-400 text-[10px] tracking-[0.35em] uppercase font-semibold"
                style={{ fontFamily: "Copperplate, serif" }}
              >
                {t("pdqEyebrow")}
              </p>
              <h2
                className="text-3xl sm:text-4xl text-zinc-900 leading-tight"
                style={{
                  fontFamily: "Gardein, sans-serif",
                  fontWeight: 700,
                }}
              >
                {t("pdqTitle")}
              </h2>
              <p
                className="text-zinc-600 text-[13px] leading-relaxed"
                style={{
                  fontFamily: "Copperplate, serif",
                }}
              >
                {t("pdqSubtitle")}
              </p>
            </div>
            {/* Carousel (bottom row) */}
            <Carousel
              opts={{ loop: true }}
              setApi={setCarouselApi}
              className="w-full"
            >
              <CarouselContent>
                {CAROUSEL_IMAGES.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="overflow-hidden rounded-xl aspect-[4/3] ring-1 ring-zinc-200 shadow-xl shadow-black/10">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900" />
              <CarouselNext className="right-2 bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900" />
            </Carousel>
          </div>
          {/* Right column: menu (vertically centered, spans both rows) */}
          <div className="flex flex-col justify-center h-full min-h-full">
            <div className="w-full h-full min-h-full rounded-xl bg-white/90 ring-1 ring-zinc-200 shadow-lg px-8 py-6 flex flex-col gap-4 justify-center">
              {/* Salgados row */}
              <span
                className="text-yellow-700 font-bold text-xs uppercase tracking-wider"
                style={{ fontFamily: "Gardein, sans-serif" }}
              >
                {t("menuSalgados")}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {Array.isArray(salgados) &&
                  salgados.map((item) => (
                    <span
                      key={item}
                      className="transition-all duration-150 text-zinc-800 text-sm font-semibold px-3 py-1 rounded-full hover:bg-yellow-50 hover:text-yellow-900 cursor-pointer"
                      style={{ fontFamily: "Copperplate, serif" }}
                    >
                      {item}
                    </span>
                  ))}
              </div>
              {/* Doces row */}
              <span
                className="text-pink-700 font-bold text-xs uppercase tracking-wider mt-8"
                style={{ fontFamily: "Gardein, sans-serif" }}
              >
                {t("menuDoces")}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {Array.isArray(doces) &&
                  doces.map((item) => (
                    <span
                      key={item}
                      className="transition-all duration-150 text-zinc-800 text-sm font-semibold px-3 py-1 rounded-full hover:bg-pink-50 hover:text-pink-900 cursor-pointer"
                      style={{ fontFamily: "Copperplate, serif" }}
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
