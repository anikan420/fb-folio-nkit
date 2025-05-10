// src/components/sections/CaseStudiesSection.tsx
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { caseStudiesData, type CaseStudy } from '@/lib/data/caseStudies'; // Updated import
import { ScrollRevealWrapper } from '@/components/animation/ScrollRevealWrapper';


export function CaseStudiesSection() {
  return (
    <SectionWrapper id="case-studies" className="bg-background">
      <div className="text-left mb-12 md:mb-16">
         <ScrollRevealWrapper delay={0}>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
            My Case Studies
          </h2>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper delay={100}>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Explore some of the projects where I&apos;ve applied my design and development expertise to create impactful solutions.
          </p>
        </ScrollRevealWrapper>
      </div>

      <div className="space-y-20 md:space-y-24">
        {caseStudiesData.map((study, index) => (
          <ScrollRevealWrapper key={study.id} delay={index * 150}>
            <div // Outer wrapper for group hover effects and transform
              className={cn(
                "group relative transition-all duration-300 ease-out hover:-translate-y-2"
              )}
            >
              {/* Gradient Shadow on Hover */}
              <div
                className="absolute -inset-1.5 -z-20 rounded-3xl 
                           bg-gradient-to-r from-red-500 via-orange-500 to-green-500 
                           opacity-0 group-hover:opacity-40 blur-xl 
                           transition-all duration-300 ease-out"
                style={{
                  // Ensure this div doesn't intercept pointer events if it overlays content
                  pointerEvents: 'none',
                }}
              />

              {/* Gradient Border on Hover */}
              <div
                className="absolute -inset-px -z-10 rounded-2xl
                           bg-gradient-to-r from-red-500 via-orange-500 to-green-500
                           opacity-0 transition-opacity duration-300 ease-out
                           group-hover:opacity-100"
                 style={{
                  pointerEvents: 'none',
                }}
              />
              
              {/* Actual Card Content Wrapper */}
              <div
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-8 bg-card rounded-2xl shadow-xl", 
                  index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''
                )}
              >
                {/* Text content column */}
                <div className={cn(
                  `flex flex-col justify-center transition-transform duration-300 ease-out`,
                  index % 2 !== 0 
                    ? 'md:col-start-2 group-hover:md:translate-x-1' 
                    : 'group-hover:md:-translate-x-1'
                )}>
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                    {study.category}
                  </p>
                  <h3 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">
                    {study.title}
                  </h3>
                  <p className="mb-6 text-lg text-foreground/80">
                    {study.description}
                  </p>
                  <Link
                    href={`/case-studies/${study.id}`} // Updated link
                    className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Read case study
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Image column */}
                <div className={cn(
                  `relative h-80 md:h-[450px] w-full overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-out`,
                  index % 2 !== 0 ? 'md:col-start-1' : '',
                  "group-hover:scale-105",
                  index % 2 !== 0 
                    ? 'group-hover:md:-translate-x-1' 
                    : 'group-hover:md:translate-x-1'
                )}>
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-out group-hover:scale-110"
                    data-ai-hint={study.dataAiHint}
                  />
                </div>
              </div>
            </div>
          </ScrollRevealWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}

    