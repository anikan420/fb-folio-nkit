// src/components/sections/AboutSection.tsx
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const skills = [
  "Full-Stack Web Development (React, Node.js, Python)",
  "UI/UX Design & Prototyping (Figma, Adobe XD)",
  "Responsive Web Design & Mobile-First Development",
  "Database Management (SQL, NoSQL)",
  "Cloud Platforms (AWS, Firebase)",
  "Agile Methodologies & Project Management"
];

export function AboutSection() {
  return (
    <SectionWrapper id="about-content" className="bg-background"> {/* Changed id to avoid conflict if there's an #about in nav */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl font-sans">
            About Ankit Bansod
          </h2>
          <p className="mb-6 text-lg text-foreground/80 font-sans">
            Hello! I&apos;m a dedicated Full-Stack Developer and UI/UX enthusiast with a knack for transforming complex ideas into intuitive and performant digital solutions. My passion lies in the sweet spot where robust functionality meets beautiful design.
          </p>
          <p className="mb-6 text-lg text-foreground/80 font-sans">
            With several years of experience in the industry, I&apos;ve had the privilege of working on diverse projects, honing my skills in both front-end and back-end technologies. I thrive in collaborative environments and am always eager to learn and adapt to new challenges.
          </p>
          <h3 className="mb-4 text-xl font-semibold font-sans">Core Competencies:</h3>
          <ul className="space-y-1"> {/* Reduced space-y for tighter list */}
            {skills.map((skill) => (
              <li 
                key={skill} 
                className="flex items-center text-foreground/80 p-2 rounded-md hover:bg-muted/70 hover:translate-x-1 transition-all duration-200 ease-out font-sans"
              >
                <CheckCircle className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl md:h-96 lg:h-[450px]">
          <Image
            src="https://picsum.photos/seed/ankitbansod/600/800?grayscale"
            alt="Portrait of Ankit Bansod"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint="professional portrait"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
