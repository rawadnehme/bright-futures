import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';
import { story } from '@/data/content';
import { Reveal } from '@/components/motion/Reveal';
import { Underline } from '@/components/motion/Underline';

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-paper-deep py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 noise"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <Reveal className="relative">
          <motion.div
            initial={{ rotate: -2 }}
            whileInView={{ rotate: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 140, damping: 16 }}
            className="relative overflow-hidden rounded-[28px] border-4 border-paper bg-paper shadow-lift"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <motion.img
                src={story.photo.src}
                alt={story.photo.alt}
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -bottom-6 -right-4 max-w-[240px] rounded-2xl border border-ink/8 bg-paper p-5 shadow-lift md:-right-10"
          >
            <div className="mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber" />
              <span className="text-sm font-semibold text-ink">{story.photo.credit.label}</span>
            </div>
            <p className="text-xs leading-relaxed text-ink-soft">{story.photo.credit.sub}</p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            {story.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
            {story.headline[0]}
            <br />
            <span className="italic">
              <Underline>{story.headline[1]}</Underline>
            </span>
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-soft">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-paper shadow-soft">
            <Heart className="h-4 w-4 text-amber" fill="currentColor" />
            <span className="text-sm font-semibold">{story.pledge}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
