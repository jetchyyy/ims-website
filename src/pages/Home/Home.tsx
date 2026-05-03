import { Hero, Services, Pricing, Contact } from '../../components/sections';
import { useSEO } from '@/hooks/useSEO';

export const Home = () => {
  useSEO({
    title: 'Home',
    description:
      'International Marketing Services helps brands grow through publication, website development, and digital marketing solutions.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Contact />
    </>
  );
};