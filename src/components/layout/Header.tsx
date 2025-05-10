// src/components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Case Studies', href: '#case-studies' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          DeepWork
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <SmoothScrollLink
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {item.name}
            </SmoothScrollLink>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col space-y-6">
                <Link href="/" className="text-2xl font-bold text-primary self-start" onClick={handleLinkClick}>
                  DeepWork
                </Link>
                {navItems.map((item) => (
                  <SmoothScrollLink
                    key={item.name}
                    href={item.href}
                    className="text-lg text-foreground/80 hover:text-primary transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </SmoothScrollLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
