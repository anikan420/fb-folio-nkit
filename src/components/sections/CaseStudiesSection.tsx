// src/components/sections/CaseStudiesSection.tsx
"use client";

import type { KeyboardEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { caseStudiesData, type CaseStudy } from '@/lib/data/caseStudies';
import { ScrollRevealWrapper } from '@/components/animation/ScrollRevealWrapper';
import { Badge } from '@/components/ui/badge';
import { PasswordModal } from '@/components/modals/PasswordModal';
// import { SectionWrapper } from '@/components/layout/SectionWrapper';

export function CaseStudiesSection(): JSX.Element {
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

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, study: CaseStudy): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCaseStudyClick(study);
    }
  };

  return (
    <div className="case-studies-wrapper">
      {/*
      <SectionWrapper
        id="case-studies"
        className="bg-transparent pt-8 md:pt-12 pb-16 md:pb-24"
        containerClassName="max-w-7xl"
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
                onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => handleCardKeyDown(e, study)}
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
                      "bg-card/80 backdrop-blur-md border border-border/10", // Glassmorphism
                      "transition-all duration-300 ease-out"
                      // Removed gradient border for now to simplify
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
                            className="text-yellow-400 hover:text-yellow-300 p-0 self-start font-semibold group-hover:underline"
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
