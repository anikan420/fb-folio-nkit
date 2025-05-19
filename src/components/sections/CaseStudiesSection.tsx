
"use client";

import { useState } from 'react';
import type { KeyboardEvent } from 'react'; // Import KeyboardEvent type
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { caseStudiesData, type CaseStudy } from '@/lib/data/caseStudies';
import { ScrollRevealWrapper } from '@/components/animation/ScrollRevealWrapper';
import { Badge } from '@/components/ui/badge';
import { PasswordModal } from '@/components/modals/PasswordModal';
import { SectionWrapper } from '@/components/layout/SectionWrapper';


export function CaseStudiesSection() {
  const router = useRouter();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleCaseStudyClick = (study: CaseStudy): void => {
    setSelectedCaseStudy(study);
    setIsPasswordModalOpen(true);
  };

  const handlePasswordSuccess = (): void => {
    if (selectedCaseStudy) {
      router.push(`/case-studies/${selectedCaseStudy.id}`);
    }
    setIsPasswordModalOpen(false);
  };

  return (
    <div className="case-studies-wrapper">
      {/*
      <SectionWrapper
        id="case-studies"
        className="bg-transparent pt-8 md:pt-12 pb-16 md:pb-24" // Reduced padding
        containerClassName="max-w-7xl" // Ensures content aligns with header
      >
        <div className="text-left mb-10 md:mb-16">
          <ScrollRevealWrapper
            delay={0}
            slideDirection="up"
            slideOffset="4"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground font-sans">
              My Case Studies
            </h2>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper
            delay={100}
            slideDirection="up"
            slideOffset="4"
          >
            <p className="mt-3 max-w-2xl text-lg text-foreground/70 font-sans">
              Explore some of the projects where I&apos;ve applied my design and
              development expertise to create impactful solutions.
            </p>
          </ScrollRevealWrapper>
        </div>
      </SectionWrapper>
      */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {caseStudiesData.map((study, index) => {
          const isTextOnLeft = index % 2 === 0;
          return (
            <section
              key={study.id}
              className="min-h-screen flex items-center justify-center py-12 md:py-20"
            >
              <div
                onClick={() => handleCaseStudyClick(study)}
                className="block w-full group cursor-pointer"
                aria-label={`View case study for ${study.title}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCaseStudyClick(study);
                  }
                }}
              >
                <ScrollRevealWrapper
                  threshold={0.25}
                  once={true}
                  delay={50}
                  slideDirection="up"
                  slideOffset="10"
                >
                  <div
                    className={cn(
                      "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch p-6 rounded-2xl shadow-2xl overflow-hidden",
                      "bg-card border border-border", 
                      "transition-all duration-300 ease-out",
                      "before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-transparent",
                      "group-hover:before:bg-[linear-gradient(135deg,hsl(var(--chart-1)/0.6)_0%,hsl(var(--chart-4)/0.6)_50%,hsl(var(--chart-2)/0.6)_100%)]",
                      "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
                      "before:[mask-composite:exclude] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
                    )}
                  >
                      <ScrollRevealWrapper
                        delay={100}
                        slideDirection={isTextOnLeft ? 'left' : 'right'}
                        slideOffset="8"
                        className={cn(
                          "flex flex-col justify-start h-full",
                          isTextOnLeft ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1',
                          'md:order-1'
                        )}
                      >
                        <div className={cn(
                          "transition-transform duration-300 ease-out py-4 md:py-0 flex flex-col",
                        )}>
                          <Badge variant="secondary" className="mb-4 text-xs px-3 py-1 bg-primary/10 border-primary/30 text-primary self-start">
                            {study.category}
                          </Badge>
                          <h3 className="mb-10 text-3xl md:text-4xl font-bold text-foreground font-sans">
                            {study.title}
                          </h3>
                          <p className="text-lg text-foreground/80 font-sans line-clamp-3 md:line-clamp-none mb-[200px]">
                            {study.description}
                          </p>
                          <div
                            role="button"
                            className="text-primary hover:text-primary/90 p-0 self-start font-semibold group-hover:underline"
                          >
                            <span className="inline-flex items-center text-base gap-2">
                              Read case study
                              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-rotate-45" />
                            </span>
                          </div>
                        </div>
                      </ScrollRevealWrapper>

                      <ScrollRevealWrapper
                        delay={150}
                        slideDirection={isTextOnLeft ? 'right' : 'left'}
                        slideOffset="8"
                        className={cn(
                          "relative w-full overflow-hidden rounded-xl shadow-lg flex flex-col justify-center h-full aspect-[4/3] md:aspect-auto",
                          isTextOnLeft ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1 md:row-start-1',
                          'md:order-2'
                        )}
                      >
                        <div className={cn(
                          "relative h-full w-full",
                          "transition-transform duration-300 ease-out",
                          "group-hover:scale-105",
                        )}>
                          <Image
                            src={study.imageUrl}
                            alt={study.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg transition-transform duration-500 ease-out"
                            data-ai-hint={study.dataAiHint}
                            priority={index < 2}
                          />
                        </div>
                      </ScrollRevealWrapper>
                    </div>
                  </ScrollRevealWrapper>
                </ScrollRevealWrapper>
              </div>
            </section>
          );
        })}
      </div>
      {selectedCaseStudy && (
        <PasswordModal
          isOpen={isPasswordModalOpen}
          onOpenChange={setIsPasswordModalOpen}
          onPasswordSuccess={handlePasswordSuccess}
          caseStudyTitle={selectedCaseStudy.title}
        />
      )}
    </div>
  );
}
