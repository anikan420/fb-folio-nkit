// src/components/sections/CaseStudiesSection.tsx
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { caseStudiesData } from '@/lib/data/caseStudies';
import { ScrollRevealWrapper } from '@/components/animation/ScrollRevealWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function CaseStudiesSection() {
  return (
    <> {/* Fragment to hold multiple top-level sections */}
      <SectionWrapper id="case-studies" className="bg-transparent pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="text-left mb-8 md:mb-12">
          <ScrollRevealWrapper delay={0} slideDirection="up" slideOffset="4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground font-sans">
              My Case Studies
            </h2>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper delay={100} slideDirection="up" slideOffset="4">
            <p className="mt-4 max-w-2xl text-lg text-foreground/80 font-sans">
              Explore some of the projects where I&apos;ve applied my design and development expertise to create impactful solutions.
            </p>
          </ScrollRevealWrapper>
        </div>
      </SectionWrapper>

      {/* Container for the full-page cards */}
      <div>
        {caseStudiesData.map((study, index) => {
          const isTextOnLeft = index % 2 === 0;
          return (
            <section
              key={study.id}
              className="min-h-screen flex items-center justify-center py-12 md:py-20" // Each card is a full-height section
            >
              <Link href={`/case-studies/${study.id}`} passHref className="block w-full max-w-6xl mx-auto px-4 group" aria-label={`View case study for ${study.title}`}>
                <ScrollRevealWrapper
                  threshold={0.25} // When 25% of the card section is visible
                  once={true}
                  // className="w-full max-w-6xl mx-auto px-4" // Max-width and padding handled by Link parent
                  delay={50} // Stagger appearance of each card section
                  slideDirection="up"
                  slideOffset="10"
                >
                  <div // This is the card visual container (group for hover effects is now on Link parent)
                    className={cn(
                      "relative transition-all duration-300 ease-out",
                    )}
                  >
                    <div // This is the styled card (grid, background, border, etc.)
                      className={cn(
                        "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch p-6 rounded-2xl shadow-2xl overflow-hidden", // Padding changed to p-6 (24px)
                        "bg-card/80 backdrop-blur-md", // Glassmorphism effect for the card
                        "border border-border/10", // Subtle resting border
                        "transition-all duration-300 ease-out",
                        // Animated gradient border on hover (group from Link parent)
                        "before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-transparent group-hover:before:bg-[linear-gradient(135deg,hsl(var(--chart-1)/0.5)_0%,hsl(var(--chart-4)/0.5)_50%,hsl(var(--chart-2)/0.5)_100%)] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
                      )}
                    >
                      {/* Text content block */}
                      <ScrollRevealWrapper
                        delay={100} // Delay relative to the card appearing
                        slideDirection={isTextOnLeft ? 'left' : 'right'}
                        slideOffset="8"
                        className={cn(
                          `flex flex-col justify-start h-full`, // Use justify-start
                          isTextOnLeft ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1',
                          'md:order-1' // Ensure text is appropriately ordered
                        )}
                      >
                        <div className={cn(
                          `transition-transform duration-300 ease-out py-4 md:py-0 flex flex-col`, // Added flex flex-col
                        )}>
                          <Badge variant="secondary" className="mb-4 text-xs px-3 py-1 bg-primary/10 border-primary/30 text-primary self-start">
                            {study.category}
                          </Badge>
                          <h3 className="mb-10 text-3xl md:text-4xl font-bold text-foreground font-sans"> {/* Title to Subtitle: mb-10 (40px) */}
                            {study.title}
                          </h3>
                          <p className="text-lg text-foreground/80 font-sans line-clamp-3 md:line-clamp-none mb-[200px]"> {/* Subtitle to Button: mb-[200px] */}
                            {study.description}
                          </p>
                          <Button
                            asChild
                            variant="link"
                            size="lg"
                            className="text-primary hover:text-primary/90 p-0 self-start"
                          >
                            {/* The Link component itself will handle navigation, this is for visual consistency */}
                            <span className="group-hover:underline inline-flex items-center font-medium text-base">
                              Read case study
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                            </span>
                          </Button>
                        </div>
                      </ScrollRevealWrapper>

                      {/* Image block */}
                      <ScrollRevealWrapper
                        delay={150} // Delay relative to the card appearing
                        slideDirection={isTextOnLeft ? 'right' : 'left'}
                        slideOffset="8"
                        className={cn(
                          `relative w-full overflow-hidden rounded-xl shadow-lg flex flex-col justify-center h-full aspect-[4/3] md:aspect-auto`,
                          isTextOnLeft ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1 md:row-start-1',
                          'md:order-2' // Ensure image is appropriately ordered
                        )}
                      >
                        <div className={cn(
                          `relative h-full w-full`,
                          `transition-transform duration-300 ease-out`,
                          "group-hover:scale-105", // group from Link parent
                        )}>
                          <Image
                            src={study.imageUrl}
                            alt={study.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg transition-transform duration-500 ease-out" // image itself can have rounded corners
                            data-ai-hint={study.dataAiHint}
                            priority={index < 2} // Prioritize first few images
                          />
                        </div>
                      </ScrollRevealWrapper>
                    </div>
                  </div>
                </ScrollRevealWrapper>
              </Link>
            </section>
          );
        })}
      </div>
    </>
  );
}

