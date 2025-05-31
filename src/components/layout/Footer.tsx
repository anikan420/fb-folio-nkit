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
    <footer id="contact" className="bg-background/30 backdrop-blur-lg border-t border-border shadow-lg"> {/* Changed border-border/20 to border-border */}
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:py-8 sm:px-6 lg:px-8"> {/* Align with header, adjusted padding */}
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} All rights reserved by Ankit.
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
