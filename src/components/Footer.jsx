import { Heart, Mail, Sparkles } from 'lucide-react';
import { org } from '@/data/content';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink px-6 pt-20 pb-10 text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-xs text-center md:text-left">
            <a href="#top" className="inline-flex items-center gap-2 font-display text-xl font-semibold text-paper">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber text-ink">
                <Sparkles className="h-4 w-4" strokeWidth={2.5} />
              </span>
              {org.name}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              Supporting {org.school} students in {org.location} through community generosity.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <a
              href={`mailto:${org.email}`}
              className="group inline-flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
            >
              <Mail className="h-4 w-4" />
              {org.email}
            </a>
            <a
              href="#donate"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition-all duration-300 hover:bg-amber-soft hover:shadow-lift"
            >
              <Heart className="h-4 w-4" fill="currentColor" />
              Donate Now
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-8 text-xs text-paper/40 md:flex-row">
          <p>© {year} {org.name}. Made with heart for our community.</p>
          <p>All donations go directly to {org.school}, {org.location}.</p>
        </div>

        <div className="flex items-center justify-center text-[11px] tracking-wide text-paper/35">
          <span>
            Designed and built by{' '}
            <a
              href="https://jjsites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-paper/70 underline-offset-4 transition-colors hover:text-amber hover:underline"
            >
              jjsitedesign
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
