// src/components/sections/WorkCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageHint?: string;
}

interface WorkCardProps {
  project: Project;
}

export function WorkCard({ project }: WorkCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={600}
        height={400}
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        data-ai-hint={project.imageHint || "abstract technology"}
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <h3 className="mb-2 text-2xl font-semibold text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          {project.title}
        </h3>
        <p className="mb-3 text-sm text-primary-foreground/80 opacity-0 transition-all delay-100 duration-300 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2 opacity-0 transition-all delay-100 duration-300 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
            {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary-foreground/90 border-primary/30 backdrop-blur-sm">
                    {tag}
                </Badge>
            ))}
        </div>
        <div className="flex space-x-3 opacity-0 transition-all delay-200 duration-300 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          {project.liveUrl && (
            <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="outline" size="sm" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Repository
              </Link>
            </Button>
          )}
        </div>
      </div>
       {/* Static content visible when not hovered */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-xl font-semibold text-primary-foreground">{project.title}</h3>
         <div className="mt-1 flex flex-wrap gap-1">
            {project.tags.slice(0,2).map(tag => ( // Show limited tags
                <Badge key={tag} variant="secondary" className="text-xs bg-primary/20 text-primary-foreground/90 border-primary/30 backdrop-blur-sm">
                    {tag}
                </Badge>
            ))}
        </div>
      </div>
    </div>
  );
}
