import { impact } from '@/data/content';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { Counter } from '@/components/motion/Counter';
import { Underline } from '@/components/motion/Underline';

export function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden bg-ink py-28 text-paper md:py-36">
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-amber/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[520px] w-[520px] rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grid-notebook opacity-20 mix-blend-screen" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            {impact.eyebrow}
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {impact.headline[0]}
              <br />
              <span className="italic text-amber">
                <Underline strokeClassName="stroke-amber-soft">{impact.headline[1]}</Underline>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} as="p" className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            {impact.sub}
          </Reveal>
        </div>

        <StaggerGroup className="mt-20 grid gap-6 md:grid-cols-3">
          {impact.stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-paper/10 bg-paper/[0.03] p-10 backdrop-blur transition-colors duration-500 hover:bg-paper/[0.06]">
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative text-5xl font-semibold tracking-tight text-paper md:text-6xl font-display">
                  {typeof stat.value === 'number' ? (
                    <Counter to={stat.value} suffix={stat.suffix ?? ''} />
                  ) : (
                    <span>{stat.value}</span>
                  )}
                </div>
                <div className="relative mt-4 text-lg font-semibold text-paper">{stat.label}</div>
                <div className="relative mt-1 text-sm text-paper/60">{stat.sub}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
