import { Nav } from '@/components/Nav';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Story } from '@/components/Story';
import { Impact } from '@/components/Impact';
import { Donate } from '@/components/Donate';
import { Footer } from '@/components/Footer';

export default function App() {
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
