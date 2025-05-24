// src/components/sections/CaseStudiesSection.tsx
"use client";

import type { KeyboardEvent, FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { caseStudiesData, type CaseStudy } from '@/lib/data/caseStudies';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ScrollRevealWrapper } from '@/components/animation/ScrollRevealWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PasswordModal } from '@/components/modals/PasswordModal';
import { cn } from '@/lib/utils';

export function CaseStudiesSection(): JSX.Element {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const router = useRouter();

  const handleCaseStudyClick = (study: CaseStudy): void => {
    if (study.id === 'shopsphere' || study.id === 'taskmaster' || study.id === 'inquireai' || study.id === 'fittrack') {
      setSelectedCaseStudy(study);
      setIsPasswordModalOpen(true);
    } else {
      router.push(`/case-studies/${study.id}`);
    }
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
      <SectionWrapper
        id="case-studies"
        className="bg-transparent pt-8 md:pt-12 pb-16 md:pb-24"
        containerClassName="max-w-7xl"
      >
        <div className="text-left mb-10 md:mb-16">
          <ScrollRevealWrapper delay={0} slideDirection="up" slideOffset="4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground font-sans">
              My Case Studies
            </h2>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper delay={100} slideDirection="up" slideOffset="4">
            <p className="mt-3 max-w-2xl text-lg text-foreground/70 font-sans">
              Explore projects where design and development expertise created impactful solutions.
            </p>
          </ScrollRevealWrapper>
        </div>
      </SectionWrapper>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {caseStudiesData.map((study, index) => {
          const isTextOnLeft = index % 2 === 0;
          return (
            <ScrollRevealWrapper
              key={study.id}
              delay={100 + index * 100}
              slideDirection={isTextOnLeft ? 'right' : 'left'}
              slideOffset="20"
              className="mb-16 md:mb-24 group"
              threshold={0.1}
            >
              <div
                role="button"
                tabIndex={0}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 md:gap-10 items-stretch p-6 rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 ease-out", // Added md:gap-10
                  "hover:shadow-[0_10px_25px_hsl(var(--primary)/0.15)]" 
                )}
                onClick={() => handleCaseStudyClick(study)}
                onKeyDown={(e) => handleCardKeyDown(e, study)}
              >
                <div
                  className={cn(
                    "transition-transform duration-300 ease-out flex flex-col justify-center",
                    isTextOnLeft ? "md:order-1" : "md:order-2"
                  )}
                >
                  <Badge
                    variant="secondary"
                    className="mb-3 self-start bg-primary/10 text-primary text-xs px-2 py-0.5 border border-primary/20"
                  >
                    {study.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-sans">
                    {study.title}
                  </h3>
                  <p className="text-foreground/70 mb-auto text-base leading-relaxed font-sans">
                    {study.description}
                  </p>
                  <div className="mt-[200px]">
                    <Button
                      variant="link"
                      size="lg"
                      className="p-0 self-start text-primary hover:text-primary/90 font-semibold group-hover:underline inline-flex items-center text-base gap-2"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleCaseStudyClick(study);
                      }}
                    >
                      Read case study
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-45" />
                    </Button>
                  </div>
                </div>

                <div
                  className={cn(
                    "relative w-full h-64 md:h-auto min-h-[300px] md:min-h-[500px] overflow-hidden rounded-xl",
                    isTextOnLeft ? "md:order-2" : "md:order-1" 
                  )}
                >
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-all duration-700 ease-out group-hover:scale-105"
                    data-ai-hint={study.dataAiHint}
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 group-hover:from-black/10 transition-all duration-300"></div>
                </div>
              </div>
            </ScrollRevealWrapper>
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
