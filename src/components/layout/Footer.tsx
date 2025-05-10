// src/components/layout/Footer.tsx
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background/30 backdrop-blur-lg border-t border-border/20 shadow-lg"> {/* Glassmorphism style */}
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} DeepWork. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
