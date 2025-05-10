// src/components/sections/ContactSection.tsx
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialContacts = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:hello@deepwork.com',
    text: 'hello@deepwork.com',
    cta: 'Send an Email',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourprofile',
    text: 'Connect on LinkedIn',
    cta: 'View Profile',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername',
    text: 'Explore My Repositories',
    cta: 'View GitHub',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/yourusername',
    text: 'Follow Me on Twitter',
    cta: 'Follow Me',
  },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Get In Touch
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-foreground/80">
          I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to reach out!
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {socialContacts.map((contact) => (
          <div
            key={contact.name}
            className="flex flex-col items-center rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
              <contact.icon className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{contact.name}</h3>
            <p className="mb-4 text-center text-muted-foreground">{contact.text}</p>
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5 hover:text-primary">
              <Link href={contact.href} target="_blank" rel="noopener noreferrer">
                {contact.cta}
              </Link>
            </Button>
          </div>
        ))}
      </div>
       <p className="mt-16 text-center text-muted-foreground">
        Looking for a more traditional approach? You can also <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">download my CV</Link>.
      </p>
    </SectionWrapper>
  );
}
