// src/components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import { Button } from '@/components/ui/button';
import { Menu, ExternalLinkIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Work', href: '/#case-studies', isHomePageAnchor: true },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact', isHomePageAnchor: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const renderNavLink = (item: typeof navItems[0], isMobile: boolean = false) => {
    const baseClasses = "px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors";
    const mobileClasses = "block px-3 py-2 text-base text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted/50";
    const commonClasses = isMobile ? mobileClasses : `${baseClasses} group relative`;


    if (item.isHomePageAnchor) {
      if (pathname === '/') {
        return (
          <SmoothScrollLink
            key={item.name}
            href={item.href.substring(1)} // Assumes href like "/#section"
            className={commonClasses}
            onClick={isMobile ? handleLinkClick : undefined}
          >
            {item.name}
            {!isMobile && <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>}
          </SmoothScrollLink>
        );
      } else {
        // If on a different page, navigate to home page then scroll
        return (
          <Link
            key={item.name}
            href={item.href} // Full path like "/#section"
            className={commonClasses}
            onClick={isMobile ? handleLinkClick : undefined}
          >
            {item.name}
            {!isMobile && <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>}
          </Link>
        );
      }
    }

    // For non-anchor links (like /about)
    return (
      <Link
        key={item.name}
        href={item.href}
        className={commonClasses}
        onClick={isMobile ? handleLinkClick : undefined}
      >
        {item.name}
        {!isMobile && <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>}
      </Link>
    );
  };


  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/30 backdrop-blur-lg shadow-lg border-b border-border' : 'bg-transparent' // Changed border-border/20 to border-border
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:opacity-80 transition-opacity" onClick={handleLinkClick}>
          <Image
            src="/logo.svg" 
            alt="DeepWork Logo" 
            width={32} 
            height={32} 
            className="rounded-md" 
            data-ai-hint="geometric logo"
            priority 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-4">
          {navItems.map((item) => renderNavLink(item))}
          <Button asChild variant="default" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-shadow bg-foreground text-background hover:bg-foreground/90">
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
            <SheetContent side="right" className="w-[280px] p-6 flex flex-col bg-background/80 backdrop-blur-xl border-border"> {/* Changed border-border/30 to border-border */}
              <div className="mb-6">
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary" onClick={handleLinkClick}>
                   <Image
                    src="/logo.svg" 
                    alt="DeepWork Logo"
                    width={32} 
                    height={32} 
                    className="rounded-md"
                    data-ai-hint="geometric logo"
                    priority 
                  />
                </Link>
              </div>
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => renderNavLink(item, true))}
              </nav>
              <div className="mt-auto pt-6">
                <Button asChild variant="default" size="lg" className="w-full rounded-full shadow-sm hover:shadow-md transition-shadow bg-foreground text-background hover:bg-foreground/90">
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
