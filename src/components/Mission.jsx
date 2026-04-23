import { BookOpen, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { mission } from '@/data/content';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { Underline } from '@/components/motion/Underline';

const toneMap = {
  amber: {
    bg: 'bg-amber/15',
    text: 'text-ink',
    border: 'border-amber/40',
    tape: 'bg-amber',
  },
  blue: {
    bg: 'bg-brand-blue/12',
    text: 'text-ink',
    border: 'border-brand-blue/40',
    tape: 'bg-brand-blue',
  },
  green: {
    bg: 'bg-brand-green/12',
    text: 'text-ink',
    border: 'border-brand-green/40',
    tape: 'bg-brand-green',
  },
};
const iconMap = [BookOpen, Users, Lightbulb];

export function Mission() {
  return (
    <section id="mission" className="relative bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            {mission.eyebrow}
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              <Underline>{mission.headline}</Underline>
            </h2>
          </Reveal>
          {mission.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.2 + i * 0.1} as="p" className="mt-6 text-lg leading-relaxed text-ink-soft">
              {p}
            </Reveal>
          ))}
        </div>

        <StaggerGroup className="mt-20 grid gap-8 md:grid-cols-3">
          {mission.values.map((v, i) => {
            const Icon = iconMap[i] ?? BookOpen;
            const tone = toneMap[v.tone];
            const tilt = [-1.4, 0.8, -0.6][i] ?? 0;
            return (
              <StaggerItem key={v.title}>
                <motion.div
                  whileHover={{ rotate: 0, y: -4 }}
                  style={{ rotate: tilt }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                  className={`relative h-full rounded-2xl border ${tone.border} ${tone.bg} p-8 shadow-note backdrop-blur`}
                >
                  <span
                    aria-hidden
                    className={`absolute -top-3 left-6 h-6 w-20 rounded-sm ${tone.tape} opacity-70 shadow-sm`}
                    style={{ transform: 'rotate(-4deg)' }}
                  />
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-paper/80 text-ink shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{v.body}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
