import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, Heart } from 'lucide-react';
import { hero, org } from '@/data/content';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Underline } from '@/components/motion/Underline';

function FloatingGlyph({ className, delay = 0, children }) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 28, rotate: -8 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden bg-paper pt-40 pb-32 md:pt-48 md:pb-40"
    >
      <div className="pointer-events-none absolute inset-0 grid-notebook opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-amber/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden
      />

      {/* Floating glyphs */}
      <FloatingGlyph delay={0.3} className="absolute left-[6%] top-[22%] hidden md:block">
        <PencilGlyph />
      </FloatingGlyph>
      <FloatingGlyph delay={0.6} className="absolute right-[8%] top-[30%] hidden md:block">
        <BookGlyph />
      </FloatingGlyph>
      <FloatingGlyph delay={0.45} className="absolute left-[12%] bottom-[16%] hidden lg:block">
        <AppleGlyph />
      </FloatingGlyph>
      <FloatingGlyph delay={0.75} className="absolute right-[14%] bottom-[18%] hidden lg:block">
        <BackpackGlyph />
      </FloatingGlyph>

      <motion.div
        style={{ y: yParallax, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-deep/60 px-4 py-2 backdrop-blur"
        >
          <Heart className="h-3.5 w-3.5 text-brand-rose" fill="currentColor" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
            {hero.eyebrow}
          </span>
        </motion.div>

        <h1 className="font-display text-[2.85rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {hero.headline.map((chunk, i) => (
            <motion.span
              key={i}
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {i === hero.headline.length - 1 ? (
                <span className="italic">
                  <Underline>{chunk}</Underline>
                </span>
              ) : (
                chunk
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <MagneticButton
            onClick={() => {
              const el = document.getElementById('donate');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex h-14 items-center gap-2 rounded-full bg-ink px-9 text-base font-semibold text-paper shadow-lift transition-colors duration-300 hover:bg-ink-soft"
          >
            <Heart className="h-4 w-4" fill="currentColor" />
            {hero.cta}
          </MagneticButton>

          <a
            href="#mission"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-ink-soft transition-colors hover:text-ink"
          >
            {hero.secondary}
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/40"
        >
          <span className="h-px w-6 bg-ink/20" />
          {org.school} · {org.location}
          <span className="h-px w-6 bg-ink/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Hand-drawn-ish school supply SVGs */

function PencilGlyph() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" className="drop-shadow-sm">
      <g transform="rotate(-18 55 55)">
        <rect x="18" y="50" width="68" height="14" rx="2" fill="#F5A524" />
        <rect x="18" y="50" width="68" height="4" fill="#FDE0AB" />
        <polygon points="86,50 100,57 86,64" fill="#FEFAF1" stroke="#0B1220" strokeWidth="1.5" />
        <polygon points="93,53.5 100,57 93,60.5" fill="#0B1220" />
        <rect x="10" y="50" width="10" height="14" rx="2" fill="#F87171" />
        <rect x="10" y="50" width="10" height="3" fill="#FDA4AF" />
        <rect x="18" y="50" width="2" height="14" fill="#0B1220" opacity="0.2" />
      </g>
    </svg>
  );
}

function BookGlyph() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="drop-shadow-sm">
      <g transform="rotate(12 60 60)">
        <rect x="20" y="28" width="80" height="64" rx="4" fill="#3B82F6" />
        <rect x="20" y="28" width="80" height="8" fill="#2563EB" />
        <rect x="30" y="44" width="60" height="4" rx="2" fill="#FEFAF1" opacity="0.9" />
        <rect x="30" y="54" width="44" height="4" rx="2" fill="#FEFAF1" opacity="0.7" />
        <rect x="30" y="64" width="54" height="4" rx="2" fill="#FEFAF1" opacity="0.7" />
        <rect x="30" y="74" width="36" height="4" rx="2" fill="#FEFAF1" opacity="0.6" />
      </g>
    </svg>
  );
}

function AppleGlyph() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" className="drop-shadow-sm">
      <path
        d="M48 22c-4-6-14-6-20-2-7 5-10 14-7 24 3 11 12 26 22 26s17-10 22-22c4-10 2-22-5-28-6-4-12-2-12-2z"
        fill="#F87171"
      />
      <path d="M50 22c4-6 10-10 14-8" stroke="#1F7F4F" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M48 22c-2-4 0-8 4-9" stroke="#2EB88A" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M38 34c-2 2-3 6-2 10" stroke="#FEFAF1" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  );
}

function BackpackGlyph() {
  return (
    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" className="drop-shadow-sm">
      <g transform="rotate(-8 52 52)">
        <path d="M30 36c0-10 8-18 22-18s22 8 22 18v4H30v-4z" fill="#2EB88A" />
        <rect x="26" y="40" width="52" height="50" rx="10" fill="#2EB88A" />
        <rect x="36" y="54" width="32" height="22" rx="5" fill="#FEFAF1" />
        <rect x="36" y="54" width="32" height="6" fill="#E2D9B7" />
        <circle cx="52" cy="68" r="2.5" fill="#0B1220" />
        <rect x="44" y="18" width="16" height="10" rx="4" fill="#0B1220" opacity="0.15" />
      </g>
    </svg>
  );
}
