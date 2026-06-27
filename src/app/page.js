import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Results from '@/components/Results';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Projects from '@/components/Projects';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070B] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,.18),transparent_30%),linear-gradient(180deg,#05070B,#070A12_45%,#05070B)]" />
      <div className="fixed inset-0 -z-10 opacity-30 grid-bg" />
      <Header />
      <Hero />
      <Results />
      <About />
      <Services />
      <CaseStudies />
      <Projects />
      <CTA />
    </main>
  );
}
