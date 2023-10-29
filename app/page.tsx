import { lazy } from 'react';
const Container = lazy(() => import('@/components/Container/Container'));
const Navbar = lazy(() => import('@/components/Navbar/Navbar'));
const MobileNav = lazy(() => import('@/components/MobileNav/MobileNav'));
const Hero = lazy(() => import('@/components/Hero/Hero'));
const About = lazy(() => import('@/components/About/About'));
const Projects = lazy(() => import('@/components/Projects/Projects'));
const Contact = lazy(() => import('@/components/Contact/Contact'));

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main} data-testid="home_page">
      <Container>
        <Navbar />
        <MobileNav />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
    </main>
  );
}
