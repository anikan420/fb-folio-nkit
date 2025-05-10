// src/components/sections/CaseStudiesSection.tsx
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  dataAiHint: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: '1',
    category: 'E-COMMERCE - WEB PLATFORM',
    title: 'ShopSphere: Seamless Online Retail',
    description: 'A fully functional online store with robust features for a seamless shopping experience, including dynamic product listings and secure payments.',
    longDescription: 'ShopSphere is a modern e-commerce platform built from the ground up, featuring dynamic product listings, an intuitive cart management system, and secure payment processing through Stripe integration. It offers a responsive design for optimal viewing on all devices and an admin panel for easy product and order management.',
    imageUrl: 'https://picsum.photos/seed/shopsphere-main/1200/800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'E-commerce'],
    liveLink: '#', 
    repoLink: '#',
    dataAiHint: 'online store interface',
  },
  {
    id: '2',
    category: 'PRODUCTIVITY - SAAS TOOL',
    title: 'TaskMaster: Collaborative Project Hub',
    description: 'A collaborative platform designed to streamline team workflows and task tracking with Kanban boards and real-time updates.',
    longDescription: 'TaskMaster empowers teams to manage projects efficiently with features like task assignment, progress tracking with Kanban boards, real-time collaboration, and file sharing. Built with Vue.js and Firebase, it offers a reactive and real-time experience. The UI is styled with Tailwind CSS for a clean and modern look.',
    imageUrl: 'https://picsum.photos/seed/taskmaster-main/1200/800',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Productivity'],
    liveLink: '#',
    repoLink: '#',
    dataAiHint: 'project dashboard',
  },
  {
    id: '3',
    category: 'ARTIFICIAL INTELLIGENCE - CUSTOMER SERVICE',
    title: 'InquireAI: Intelligent Chat Assistance',
    description: 'An intelligent chatbot leveraging NLP for enhanced customer service and engagement, improving response times and user satisfaction.',
    longDescription: 'InquireAI is a sophisticated chatbot application developed using Python and Dialogflow for natural language processing. It integrates with existing customer service platforms via a Flask backend and provides a React-based chat interface. The bot is trained to handle a wide range of customer queries, improving response times and user satisfaction.',
    imageUrl: 'https://picsum.photos/seed/inquireai-main/1200/800',
    tags: ['Python', 'Dialogflow', 'Flask', 'React', 'AI'],
    liveLink: '#',
    repoLink: '#',
    dataAiHint: 'chatbot conversation',
  },
  {
    id: '4',
    category: 'UI/UX DESIGN - MOBILE APPLICATION',
    title: 'FitTrack: Intuitive Fitness Tracking UI',
    description: 'A sleek and intuitive UI/UX design for a mobile fitness tracking application, focusing on clarity and ease of navigation.',
    longDescription: 'FitTrack\'s UI was meticulously designed in Figma, focusing on user experience for tracking fitness goals, workout routines, and progress. The design emphasizes clarity, ease of navigation, and motivational elements. It includes features like personalized dashboards, progress charts, and social sharing capabilities, all wrapped in a visually appealing interface.',
    imageUrl: 'https://picsum.photos/seed/fittrack-main/1200/800',
    tags: ['Figma', 'UI/UX Design', 'Mobile App', 'Fitness'],
    liveLink: '#',
    dataAiHint: 'fitness app dashboard',
  },
];

export function CaseStudiesSection() {
  return (
    <SectionWrapper id="case-studies" className="bg-background">
      <div className="text-left mb-12 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
          My Case Studies
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">
          Explore some of the projects where I&apos;ve applied my design and development expertise to create impactful solutions.
        </p>
      </div>

      <div className="space-y-20 md:space-y-24">
        {caseStudiesData.map((study, index) => (
          <div
            key={study.id}
            className={cn(
              "group relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-8 bg-card rounded-2xl shadow-xl transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2",
              index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''
            )}
          >
            {/* Gradient Border on Hover */}
            <div
              className="absolute -inset-px -z-10 rounded-2xl
                         bg-gradient-to-r from-red-500 via-orange-500 to-green-500
                         opacity-0 transition-opacity duration-300 ease-out
                         group-hover:opacity-100"
            />

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
                href={study.liveLink || '#'}
                target={study.liveLink && study.liveLink !== '#' ? '_blank' : '_self'}
                rel={study.liveLink && study.liveLink !== '#' ? 'noopener noreferrer' : ''}
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
        ))}
      </div>
    </SectionWrapper>
  );
}
