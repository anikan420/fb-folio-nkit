// src/components/case-studies/CaseStudyDetail.tsx
import type { CaseStudy } from '@/lib/data/caseStudies';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ScrollRevealWrapper } from '@/components/animation/ScrollRevealWrapper';

interface CaseStudyDetailProps {
  study: CaseStudy;
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <article className="py-12 md:py-16">
      <ScrollRevealWrapper className="container mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            {study.category}
          </p>
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {study.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {study.description}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8 md:mb-12 relative h-64 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src={study.imageUrl}
            alt={study.title}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 ease-out group-hover:scale-105"
            data-ai-hint={study.dataAiHint || "project image"}
            priority // Prioritize loading for LCP
          />
        </div>
      </ScrollRevealWrapper>

      <div className="container mx-auto px-4 max-w-3xl">
        {/* Project Overview / Long Description */}
        <ScrollRevealWrapper delay={100} className="mb-8 md:mb-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Project Overview</h2>
          <p className="text-foreground/80 leading-relaxed">{study.longDescription}</p>
        </ScrollRevealWrapper>

        {/* Key Information Grid */}
        {(study.services || study.client || study.duration) && (
            <ScrollRevealWrapper delay={150} className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">Key Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-muted rounded-lg shadow border border-border">
                    {study.client && (
                        <div>
                            <h3 className="text-sm font-semibold uppercase text-primary mb-1">Client</h3>
                            <p className="text-foreground/90">{study.client}</p>
                        </div>
                    )}
                    {study.services && study.services.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold uppercase text-primary mb-1">Services</h3>
                            <ul className="list-disc list-inside text-foreground/90">
                                {study.services.map(service => <li key={service}>{service}</li>)}
                            </ul>
                        </div>
                    )}
                    {study.duration && (
                         <div>
                            <h3 className="text-sm font-semibold uppercase text-primary mb-1">Duration</h3>
                            <p className="text-foreground/90">{study.duration}</p>
                        </div>
                    )}
                </div>
            </ScrollRevealWrapper>
        )}

        {/* Challenge & Solution */}
        {study.challenge && study.solution && (
            <ScrollRevealWrapper delay={200} className="mb-8 md:mb-12 prose prose-lg dark:prose-invert max-w-none">
                 <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">The Challenge</h2>
                 <p className="text-foreground/80 leading-relaxed">{study.challenge}</p>
                 <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-foreground">The Solution</h2>
                 <p className="text-foreground/80 leading-relaxed">{study.solution}</p>
            </ScrollRevealWrapper>
        )}
        
        {/* Results */}
        {study.results && study.results.length > 0 && (
            <ScrollRevealWrapper delay={250} className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">Impact & Results</h2>
                <ul className="space-y-3">
                    {study.results.map((result, index) => (
                        <li key={index} className="flex items-start p-4 bg-card rounded-lg shadow-sm border border-border">
                            <svg className="flex-shrink-0 w-6 h-6 text-primary mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-foreground/80">{result}</span>
                        </li>
                    ))}
                </ul>
            </ScrollRevealWrapper>
        )}
        
        {/* Testimonial */}
        {study.testimonial && (
             <ScrollRevealWrapper delay={300} className="mb-8 md:mb-12 p-6 bg-muted rounded-lg shadow border border-border">
                <blockquote className="relative">
                    <svg className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.333 7C6.94 7 5 8.94 5 11.333V18h4.667v-4.667h2.333V11.333C12 8.94 10.06 7 7.667 7zM23.333 7C20.94 7 19 8.94 19 11.333V18h4.667v-4.667h2.333V11.333C26 8.94 24.06 7 21.667 7z"/>
                    </svg>
                    <p className="text-xl italic text-foreground/90 mb-4">"{study.testimonial.quote}"</p>
                    <footer className="text-right">
                        <p className="font-semibold text-foreground">{study.testimonial.author}</p>
                        <p className="text-sm text-primary">{study.testimonial.role}</p>
                    </footer>
                </blockquote>
            </ScrollRevealWrapper>
        )}

        {/* Technologies Used */}
        <ScrollRevealWrapper delay={350} className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2.5 py-0.5 bg-secondary text-secondary-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </ScrollRevealWrapper>

        {/* Gallery */}
        {study.gallery && study.gallery.length > 0 && (
            <ScrollRevealWrapper delay={400} className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {study.gallery.map((image, index) => (
                        <div key={index} className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg">
                            <Image src={image.url} alt={image.alt} layout="fill" objectFit="cover" data-ai-hint={image.dataAiHint} />
                        </div>
                    ))}
                </div>
            </ScrollRevealWrapper>
        )}

        {/* Live Links & Repo */}
        {(study.liveLink || study.repoLink) && (
          <ScrollRevealWrapper delay={450} className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Project Links</h2>
            <div className="flex flex-wrap gap-4">
              {study.liveLink && study.liveLink !== '#' && (
                <Button asChild>
                  <Link href={study.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {study.repoLink && study.repoLink !== '#' && (
                <Button variant="outline" asChild>
                  <Link href={study.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Repository
                  </Link>
                </Button>
              )}
            </div>
          </ScrollRevealWrapper>
        )}

        <ScrollRevealWrapper delay={500} className="mt-12 md:mt-16 text-center">
            <Button variant="link" asChild className="text-lg">
                <Link href="/#case-studies">
                    &larr; Back to all case studies
                </Link>
            </Button>
        </ScrollRevealWrapper>
      </div>
    </article>
  );
}
