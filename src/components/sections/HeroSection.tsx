// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/30 text-center">
      <div className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          I&apos;m a Passionate <span className="text-primary">Developer</span> & <span className="text-primary">Designer</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl md:text-2xl">
          I craft elegant, efficient, and user-centric digital experiences that solve real-world problems and delight users.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <SmoothScrollLink href="#contact">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-3 text-lg font-semibold">
              Get In Touch
            </Button>
          </SmoothScrollLink>
          <SmoothScrollLink href="#work">
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 py-3 text-lg font-semibold">
              View My Work
            </Button>
          </SmoothScrollLink>
        </div>
      </div>
      <SmoothScrollLink
        href="#about"
        className="absolute bottom-10 animate-bounce text-primary hover:opacity-70"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-8 w-8" />
      </SmoothScrollLink>
    </section>
  );
}
