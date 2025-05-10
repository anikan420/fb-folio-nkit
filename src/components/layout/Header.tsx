// src/components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import { Button } from '@/components/ui/button';
import { Menu, ExternalLinkIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { name: 'Work', href: '#case-studies' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }, // Points to footer
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Reduced scroll threshold for earlier effect
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:opacity-80 transition-opacity" onClick={handleLinkClick}>
          <Image
            src="https://picsum.photos/seed/avatarlogo/40/40" 
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
            data-ai-hint="abstract logo"
          />
          {/* Optional: Add text next to logo if needed */}
          {/* <span className="text-primary">DeepWork</span> */}
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-4">
          {navItems.map((item) => (
            <SmoothScrollLink
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.name}
            </SmoothScrollLink>
          ))}
          <Button asChild variant="default" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-shadow">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume <ExternalLinkIcon className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6 flex flex-col">
              <div className="mb-6">
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary" onClick={handleLinkClick}>
                   <Image
                    src="https://picsum.photos/seed/avatarlogo-mobile/40/40"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                    data-ai-hint="abstract logo"
                  />
                  {/* DeepWork */}
                </Link>
              </div>
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <SmoothScrollLink
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-base text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </SmoothScrollLink>
                ))}
              </nav>
              <div className="mt-auto pt-6">
                <Button asChild variant="default" size="lg" className="w-full rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                    Resume <ExternalLinkIcon className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
