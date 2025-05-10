// src/components/animation/ScrollRevealWrapper.tsx
'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number; // Optional delay in ms
  className?: string;
  threshold?: number; // IntersectionObserver threshold
  once?: boolean; // Trigger animation only once
}

export function ScrollRevealWrapper({
  children,
  delay = 0,
  className,
  threshold = 0.1, // Default to 10% visibility
  once = true,     // Default to animating once
  ...props
}: ScrollRevealWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ensure we only set isVisible if the component is still mounted and entry is intersecting
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            // Check ref.current again inside timeout in case component unmounted
            if (ref.current) {
              setIsVisible(true);
              if (once && ref.current) { // Check currentRef again
                observer.unobserve(ref.current);
              }
            }
          }, delay);
          // Cleanup function for the timeout
          return () => clearTimeout(timer);
        } else {
          // Optionally reset visibility if `once` is false
          if (!once) {
             // setIsVisible(false); // Uncomment to make elements hide when they scroll out of view
          }
        }
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, once]); // Dependencies for useEffect

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', // Initial state: invisible and slightly down
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

    