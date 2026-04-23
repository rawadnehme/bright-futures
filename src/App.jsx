import { useEffect } from 'react';
import { Nav } from '@/components/Nav';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Story } from '@/components/Story';
import { Impact } from '@/components/Impact';
import { Donate } from '@/components/Donate';
import { Footer } from '@/components/Footer';

export default function App() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const id = href.slice(1);
      const target = id === 'top' ? document.body : document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Swap <html> bg color between hero paper (top) and footer ink (bottom)
  // so overscroll bounce matches the adjacent section.
  useEffect(() => {
    const root = document.documentElement;
    const PAPER = '#FEFAF1';
    const INK = '#0B1220';
    let current = '';
    const update = () => {
      const max = root.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      const next = ratio > 0.5 ? INK : PAPER;
      if (next !== current) {
        root.style.backgroundColor = next;
        current = next;
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Story />
        <Impact />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
