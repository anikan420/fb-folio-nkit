// src/app/about/page.tsx
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutSection } from '@/components/sections/AboutSection';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ScrollRevealWrapper } from '@/components/animation/ScrollRevealWrapper';

export const metadata: Metadata = {
  title: 'About Ankit Bansod | DeepWork Portfolio',
  description: 'Learn more about Ankit Bansod, a Full-Stack Developer and UI/UX enthusiast.',
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent"> {/* Changed bg-background to bg-transparent */}
      <Header />
      <main className="flex-grow pt-20"> {/* Add padding top to account for fixed header */}
        <ScrollRevealWrapper>
          <AboutSection />
        </ScrollRevealWrapper>
        {/* You can add more sections to the About page here, wrapped in ScrollRevealWrapper */}
        <SectionWrapper className="bg-muted/30 backdrop-blur-lg border border-border/10 shadow-lg rounded-xl my-8"> {/* Glassmorphism for muted section */}
           <ScrollRevealWrapper>
            <div className="text-center py-8 md:py-12"> {/* Added padding inside the glassmorphic section */}
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">My Philosophy</h2>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-4">
                    I believe in crafting digital experiences that are not only functional and performant but also delightful to use. My approach is rooted in user-centric design principles, continuous learning, and a passion for solving complex problems with elegant solutions.
                </p>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                    Whether it&apos;s building a responsive web application, designing an intuitive mobile interface, or diving into the intricacies of backend systems, I strive for excellence and impact in every project I undertake.
                </p>
            </div>
           </ScrollRevealWrapper>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
