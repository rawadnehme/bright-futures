import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { nav, org } from '@/data/content';
import { cn } from '@/lib/cn';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background,border-color,box-shadow] duration-500',
          scrolled
            ? 'border-b border-ink/5 bg-paper/80 backdrop-blur-xl shadow-soft'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group flex items-center gap-2 font-display text-lg tracking-tight text-ink">
            <motion.span
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber text-ink"
              whileHover={{ rotate: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Sparkles className="h-4 w-4" strokeWidth={2.5} />
            </motion.span>
            <span className="font-semibold">{org.name}</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.filter((item) => item.href !== '#donate').map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="#donate"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper shadow-soft transition-all duration-300 hover:bg-ink-soft hover:shadow-lift"
            >
              Donate
            </a>
          </nav>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-paper/60 text-ink backdrop-blur md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-paper md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
              {nav.filter((item) => item.href !== '#donate').map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45 }}
                  className="font-display text-4xl font-semibold tracking-tight text-ink"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#donate"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + (nav.length - 1) * 0.06, duration: 0.45 }}
                className="mt-4 rounded-full bg-ink px-8 py-4 text-base font-semibold text-paper shadow-lift"
              >
                Donate
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
