// src/components/sections/CaseStudiesSection.tsx
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string;
  imageUrl: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  dataAiHint: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: '1',
    title: 'E-commerce Platform "ShopSphere"',
    description: 'A fully functional online store with robust features for a seamless shopping experience.',
    longDescription: 'ShopSphere is a modern e-commerce platform built from the ground up, featuring dynamic product listings, an intuitive cart management system, and secure payment processing through Stripe integration. It offers a responsive design for optimal viewing on all devices and an admin panel for easy product and order management.',
    thumbnailUrl: 'https://picsum.photos/seed/shopsphere-thumb/600/400',
    imageUrl: 'https://picsum.photos/seed/shopsphere-main/1200/800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'E-commerce'],
    liveLink: '#',
    repoLink: '#',
    dataAiHint: 'online store',
  },
  {
    id: '2',
    title: 'Project Management Tool "TaskMaster"',
    description: 'A collaborative platform designed to streamline team workflows and task tracking.',
    longDescription: 'TaskMaster empowers teams to manage projects efficiently with features like task assignment, progress tracking with Kanban boards, real-time collaboration, and file sharing. Built with Vue.js and Firebase, it offers a reactive and real-time experience. The UI is styled with Tailwind CSS for a clean and modern look.',
    thumbnailUrl: 'https://picsum.photos/seed/taskmaster-thumb/600/400',
    imageUrl: 'https://picsum.photos/seed/taskmaster-main/1200/800',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Productivity'],
    liveLink: '#',
    repoLink: '#',
    dataAiHint: 'dashboard interface',
  },
  {
    id: '3',
    title: 'AI-Powered Chatbot "InquireAI"',
    description: 'An intelligent chatbot leveraging NLP for enhanced customer service and engagement.',
    longDescription: 'InquireAI is a sophisticated chatbot application developed using Python and Dialogflow for natural language processing. It integrates with existing customer service platforms via a Flask backend and provides a React-based chat interface. The bot is trained to handle a wide range of customer queries, improving response times and user satisfaction.',
    thumbnailUrl: 'https://picsum.photos/seed/inquireai-thumb/600/400',
    imageUrl: 'https://picsum.photos/seed/inquireai-main/1200/800',
    tags: ['Python', 'Dialogflow', 'Flask', 'React', 'AI'],
    repoLink: '#',
    dataAiHint: 'chatbot interface',
  },
  {
    id: '4',
    title: 'Mobile Fitness App UI "FitTrack"',
    description: 'A sleek and intuitive UI/UX design for a mobile fitness tracking application.',
    longDescription: 'FitTrack\'s UI was meticulously designed in Figma, focusing on user experience for tracking fitness goals, workout routines, and progress. The design emphasizes clarity, ease of navigation, and motivational elements. It includes features like personalized dashboards, progress charts, and social sharing capabilities, all wrapped in a visually appealing interface.',
    thumbnailUrl: 'https://picsum.photos/seed/fittrack-thumb/600/400',
    imageUrl: 'https://picsum.photos/seed/fittrack-main/1200/800',
    tags: ['Figma', 'UI/UX Design', 'Mobile App', 'Fitness'],
    dataAiHint: 'mobile app',
  },
];

export function CaseStudiesSection() {
  return (
    <SectionWrapper id="case-studies" className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          My Case Studies
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Dive into some of the projects I&apos;ve passionately built, showcasing my skills in development and design.
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        {caseStudiesData.map((study) => (
          <Card key={study.id} className="w-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={study.dataAiHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-primary-foreground drop-shadow-md">{study.title}</CardTitle>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <CardDescription className="text-base md:text-lg text-foreground/90 mb-4">
                {study.longDescription}
              </CardDescription>
              <div className="mb-6">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="mr-2 mb-2 text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {study.liveLink && (
                  <Button asChild size="lg">
                    <Link href={study.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                    </Link>
                  </Button>
                )}
                {study.repoLink && (
                  <Button asChild variant="outline" size="lg">
                    <Link href={study.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" /> View Repository
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
