import { motion } from 'framer-motion';
import { ArrowUpRight, DollarSign, Heart, Shield } from 'lucide-react';
import { donate, org } from '@/data/content';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { Underline } from '@/components/motion/Underline';
import { MagneticButton } from '@/components/motion/MagneticButton';

function AmountCard({ amount, note, index }) {
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -4 }}
        className="group relative h-full rounded-2xl border border-ink/10 bg-paper p-6 text-center shadow-soft transition-colors duration-300 hover:border-amber/60 hover:shadow-lift"
      >
        <div className="font-display text-3xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-amber md:text-4xl">
          {amount}
        </div>
        <div className="mt-2 text-xs leading-snug text-ink-soft">{note}</div>
        <div
          className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </motion.div>
    </StaggerItem>
  );
}

function PaymentCard({ title, tag, url, accent, onClick }) {
  const isGreen = accent === 'green';
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border p-8 md:p-10 ${
        isGreen
          ? 'border-brand-green/20 bg-gradient-to-br from-brand-green/5 via-paper to-paper'
          : 'border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 via-paper to-paper'
      } shadow-lift`}
    >
      <div
        className={`pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full blur-3xl ${
          isGreen ? 'bg-brand-green/15' : 'bg-brand-blue/15'
        }`}
        aria-hidden
      />
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-paper ${
              isGreen ? 'bg-brand-green' : 'bg-brand-blue'
            }`}
          >
            <DollarSign className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{title}</h3>
            <p className="text-sm text-ink-soft">Fast, easy, secure</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-ink/8 bg-paper/60 p-4 backdrop-blur">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft/80">
            {isGreen ? 'CashApp tag' : 'Venmo tag'}
          </p>
          <p
            className={`mt-1 font-mono text-[1.25rem] font-bold ${
              isGreen ? 'text-brand-green' : 'text-brand-blue'
            }`}
          >
            {tag}
          </p>
        </div>

        <a href={url} target="_blank" rel="noopener noreferrer" className="mt-6">
          <MagneticButton
            onClick={onClick}
            className={`inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-base font-semibold text-paper transition-colors duration-300 ${
              isGreen ? 'bg-brand-green hover:brightness-110' : 'bg-brand-blue hover:brightness-110'
            } shadow-soft hover:shadow-lift`}
          >
            <Heart className="h-4 w-4" fill="currentColor" />
            Open {title.split(' ').pop()} to Donate
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </a>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-ink/50">
          <Shield className="h-3 w-3" />
          Student-run. 100% goes to kids who need it most.
        </div>
      </div>
    </div>
  );
}

export function Donate() {
  return (
    <section id="donate" className="relative bg-gradient-to-b from-paper via-amber/[0.06] to-paper py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            {donate.eyebrow}
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              <Underline>{donate.headline}</Underline>
            </h2>
          </Reveal>
          <Reveal delay={0.2} as="p" className="mx-auto mt-6 text-lg leading-relaxed text-ink-soft">
            {donate.sub}
          </Reveal>
        </div>

        <StaggerGroup className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-3">
          {donate.amounts.map((a, i) => (
            <AmountCard key={a.amount} {...a} index={i} />
          ))}
        </StaggerGroup>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <PaymentCard
              title="Donate via CashApp"
              tag={org.payments.cashapp.tag}
              url={org.payments.cashapp.url}
              accent="green"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <PaymentCard
              title="Donate via Venmo"
              tag={org.payments.venmo.tag}
              url={org.payments.venmo.url}
              accent="blue"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
