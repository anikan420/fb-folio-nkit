// src/components/layout/SectionWrapper.tsx
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export function SectionWrapper({ id, className, children, containerClassName, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-12 sm:py-16 md:py-24', className)}
      {...props}
    >
      <div className={cn('container mx-auto px-4 max-w-6xl', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
