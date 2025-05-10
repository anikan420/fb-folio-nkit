// src/app/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { ScrollRevealWrapper } from '@/components/animation/ScrollRevealWrapper';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ScrollRevealWrapper threshold={0.01} once={false}> {/* Hero might need different threshold/once */}
          <HeroSection />
        </ScrollRevealWrapper>
        
        <ScrollRevealWrapper delay={100}> {/* Adjusted delay as AboutSection is removed */}
          <CaseStudiesSection />
        </ScrollRevealWrapper>
      </main>
      <Footer />
    </div>
  );
}

    