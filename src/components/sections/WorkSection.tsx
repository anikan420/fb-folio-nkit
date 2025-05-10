// src/components/sections/WorkSection.tsx
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { WorkCard, type Project } from '@/components/sections/WorkCard';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A fully functional online store with features like product listings, cart management, and secure checkout.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'online shopping store'
  },
  {
    id: '2',
    title: 'Project Management Tool',
    description: 'A collaborative platform for teams to manage tasks, track progress, and streamline workflows.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'dashboard interface'
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    description: 'A sleek and modern personal website to showcase skills, projects, and contact information.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Next.js', 'TypeScript', 'Shadcn/UI'],
    liveUrl: '#',
    imageHint: 'modern website design'
  },
   {
    id: '4',
    title: 'AI Powered Chatbot',
    description: 'An intelligent chatbot application for customer service, leveraging natural language processing.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Python', 'Dialogflow', 'Flask', 'React'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'chatbot interface'
  },
  {
    id: '5',
    title: 'Mobile Fitness App UI',
    description: 'User interface design for a mobile application aimed at tracking fitness goals and workout routines.',
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
    tags: ['Figma', 'UI/UX Design', 'Mobile App'],
    imageHint: 'mobile app screen'
  },
  {
    id: '6',
    title: 'Data Visualization Dashboard',
    description: 'A web-based dashboard for visualizing complex datasets with interactive charts and graphs.',
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
    tags: ['D3.js', 'React', 'Express.js'],
    repoUrl: '#',
    imageHint: 'charts graphs'
  }
];

export function WorkSection() {
  return (
    <SectionWrapper id="work" className="bg-muted/30">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          My Recent Work
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-foreground/80">
          Here are a few projects I&apos;ve worked on recently. Want to see more? Feel free to ask.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
