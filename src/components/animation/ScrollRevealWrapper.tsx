// src/components/animation/ScrollRevealWrapper.tsx
'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type SlideOffsetValue = '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96';


interface ScrollRevealWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  slideDirection?: 'left' | 'right' | 'up' | 'down';
  slideOffset?: SlideOffsetValue; 
}

export function ScrollRevealWrapper({
  children,
  delay = 0,
  className,
  threshold = 0.1,
  once = true,
  slideDirection = 'down',
  slideOffset = '10', // Corresponds to 2.5rem by default with Tailwind's scale
  ...props
}: ScrollRevealWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            if (ref.current) {
              setIsVisible(true);
              if (once && ref.current) {
                observer.unobserve(ref.current);
              }
            }
          }, delay);
          return () => clearTimeout(timer);
        } else {
          if (!once) {
            // setIsVisible(false); // Optionally reset
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
  }, [delay, threshold, once]);

  let initialTransformClass = '';
  let finalTransformClass = 'opacity-100 translate-x-0 translate-y-0'; // Common final state

  switch (slideDirection) {
    case 'left':
      initialTransformClass = `opacity-0 -translate-x-${slideOffset}`;
      break;
    case 'right':
      initialTransformClass = `opacity-0 translate-x-${slideOffset}`;
      break;
    case 'up':
      initialTransformClass = `opacity-0 -translate-y-${slideOffset}`;
      break;
    case 'down':
    default:
      initialTransformClass = `opacity-0 translate-y-${slideOffset}`;
      break;
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? finalTransformClass : initialTransformClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
