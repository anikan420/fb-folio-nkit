// src/components/SmoothScrollLink.tsx
"use client";

import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link'; // Import NextLink for potential external links or different behavior

interface SmoothScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string; // Expects format like "#section-id"
}

export function SmoothScrollLink({ href, children, className, onClick, ...props }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calculate offset if there's a fixed header
        const headerOffset = 80; // Assuming header height is 80px
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  // If it's an internal anchor, use <a> with custom click handler.
  // Otherwise, use NextLink for standard navigation.
  if (href.startsWith('#')) {
    return (
      <a href={href} onClick={handleClick} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
