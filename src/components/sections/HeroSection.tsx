// src/components/sections/HeroSection.tsx
"use client";

import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M24 0L28.8995 19.1005L48 24L28.8995 28.8995L24 48L19.1005 28.8995L0 24L19.1005 19.1005L24 0Z"
      fill="currentColor"
    />
  </svg>
);

const FlowerScrollIcon = ({ className }: { className?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M20 21.6667L17.9167 23.3333L12.0833 19.1667C10.6528 18.0556 10 16.6111 10 15C10 13.3889 10.6528 11.9444 12.0833 10.8333L14.1667 9.16667L16.25 11.6667L14.5833 13.0833C14.0833 13.5 13.8333 14.0139 13.8333 14.625C13.8333 15.2361 14.0833 15.75 14.5833 16.1667L17.5 18.6667L20 20.8333L22.5 18.6667L25.4167 16.1667C25.9167 15.75 26.1667 15.2361 26.1667 14.625C26.1667 14.0139 25.9167 13.5 25.4167 13.0833L23.75 11.6667L25.8333 9.16667L27.9167 10.8333C29.3472 11.9444 30 13.3889 30 15C30 16.6111 29.3472 18.0556 27.9167 19.1667L22.0833 23.3333L20 21.6667Z" fill="currentColor"/>
    <path d="M20 26.6667L17.9167 28.3333L12.0833 24.1667C10.6528 23.0556 10 21.6111 10 20C10 18.3889 10.6528 16.9444 12.0833 15.8333L14.1667 14.1667L16.25 16.6667L14.5833 18.0833C14.0833 18.5 13.8333 19.0139 13.8333 19.625C13.8333 20.2361 14.0833 20.75 14.5833 21.1667L17.5 23.6667L20 25.8333L22.5 23.6667L25.4167 21.1667C25.9167 20.75 26.1667 20.2361 26.1667 19.625C26.1667 19.0139 25.9167 18.5 25.4167 18.0833L23.75 16.6667L25.8333 14.1667L27.9167 15.8333C29.3472 16.9444 30 18.3889 30 20C30 21.6111 29.3472 23.0556 27.9167 24.1667L22.0833 28.3333L20 26.6667Z" fill="currentColor"/>
    <path d="M20 16.6667L17.9167 18.3333L12.0833 14.1667C10.6528 13.0556 10 11.6111 10 10C10 8.38889 10.6528 6.94444 12.0833 5.83333L14.1667 4.16667L16.25 6.66667L14.5833 8.08333C14.0833 8.5 13.8333 9.01389 13.8333 9.625C13.8333 10.2361 14.0833 10.75 14.5833 11.1667L17.5 13.6667L20 15.8333L22.5 13.6667L25.4167 11.1667C25.9167 10.75 26.1667 10.2361 26.1667 9.625C26.1667 9.01389 25.9167 8.5 25.4167 8.08333L23.75 6.66667L25.8333 4.16667L27.9167 5.83333C29.3472 6.94444 30 8.38889 30 10C30 11.6111 29.3472 13.0556 27.9167 14.1667L22.0833 18.3333L20 16.6667Z" fill="currentColor"/>
  </svg>
);

const CurvedArrowIcon = ({ className }: { className?: string }) => (
  <svg 
    width="80" 
    height="80" 
    viewBox="0 0 80 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M70 10C70 30 55 45 35 45C15 45 5 60 5 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 70L5 70L5 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullTextLines = [
    "Making sense of",
    "messy problems,",
    "one pixel at a time."
  ];
  const fullText = fullTextLines.join(" "); // For char-by-char animation
  const typingSpeed = 50; // Milliseconds per character
  const lineBreakDelay = 500; // Milliseconds to pause after a line

  useEffect(() => {
    let currentText = '';
    let charIndex = 0;
    let lineIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (lineIndex < fullTextLines.length) {
        const currentLine = fullTextLines[lineIndex];
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          setDisplayText(currentText);
          charIndex++;
          timeoutId = setTimeout(type, typingSpeed);
        } else { // End of current line
          lineIndex++;
          charIndex = 0;
          if (lineIndex < fullTextLines.length) { // If there are more lines
            currentText += ' '; // Add space for md:hidden break, or prepare for next line
            setDisplayText(currentText); 
            timeoutId = setTimeout(() => {
              // Add the line break for small screens before starting next line
              // For larger screens, the <br /> tags handle the break.
              // We manage 'currentText' to include line breaks for the effect.
              if (lineIndex === 1 && typeof window !== 'undefined' && window.innerWidth < 768) {
                 // currentText += '\n'; // This won't render as a line break in HTML directly
              } else if (lineIndex === 2 && typeof window !== 'undefined' && window.innerWidth >=768) {
                 // currentText += '\n';
              }
              type();
            }, lineBreakDelay);
          }
        }
      }
    };

    timeoutId = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, hsla(var(--foreground) / 0.03) 1px, transparent 1px), linear-gradient(to bottom, hsla(var(--foreground) / 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-20 z-10">
        <div className="mb-6 inline-block -rotate-3 transform">
          <div className="bg-primary/10 text-primary px-6 py-2 rounded-lg shadow-md border border-primary/20">
            <span className="text-lg font-semibold">A UX Designer</span>
          </div>
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground min-h-[200px] md:min-h-[280px] lg:min-h-[320px]">
          {displayText.split(" ").map((word, wordIndex, wordsArray) => {
            const isMessyProblems = word === "messy" && wordsArray[wordIndex+1] === "problems,";
            const isOnePixel = word === "one" && wordsArray[wordIndex+1] === "pixel";
            
            return (
              <span key={wordIndex}>
                {word}
                {wordIndex < wordsArray.length - 1 && ' '}
                {isMessyProblems && <br className="md:hidden"/>}
                {isOnePixel && <br className="md:hidden"/>}
                {word === "problems," && <br className="hidden md:block"/>}
              </span>
            );
          })}
          <span className="animate-ping">_</span>

        </h1>
        
        {/* Profile Card and Arrow */}
        <div className="mt-16 relative flex flex-col items-center md:flex-row md:items-end md:justify-end w-full max-w-md md:self-end md:mr-[-5%]">
          <CurvedArrowIcon className="absolute text-foreground/70 w-20 h-20 md:w-28 md:h-28 transform md:translate-x-[-80px] md:translate-y-[-70px] translate-x-[-60px] translate-y-[-50px] scale-y-[-1] rotate-[20deg] md:rotate-0" />
          <div className="bg-card p-4 rounded-xl shadow-2xl w-64 text-left relative border border-border">
            <Image
              src="https://picsum.photos/seed/ankit-profile/200/200"
              alt="Ankit Bansod"
              width={60}
              height={60}
              className="rounded-full mb-3 border-2 border-primary"
              data-ai-hint="cartoon avatar"
            />
            <p className="text-sm text-foreground/80">
              Hi, I&apos;m Ankit Bansod and I design intuitive, user-centered experiences.
            </p>
          </div>
        </div>

      </div>

      {/* Decorative Sparkles */}
      <SparkleIcon className="absolute top-[15%] left-[10%] w-10 h-10 md:w-16 md:h-16 text-primary/80 opacity-80 transform -rotate-12" />
      <SparkleIcon className="absolute bottom-[20%] right-[12%] w-10 h-10 md:w-14 md:h-14 text-primary/80 opacity-80 transform rotate-6" />
       <SparkleIcon className="absolute top-[25%] right-[20%] w-6 h-6 text-primary/70 opacity-60 transform rotate-45 hidden md:block" />
       <SparkleIcon className="absolute bottom-[30%] left-[18%] w-8 h-8 text-primary/70 opacity-70 transform -rotate-45 hidden md:block" />


      <SmoothScrollLink
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 text-primary hover:opacity-70 z-20 animate-bounce"
        aria-label="Scroll to about section"
      >
        <FlowerScrollIcon className="h-10 w-10 text-primary" />
      </SmoothScrollLink>
      
      <div className="absolute bottom-4 right-4 z-20">
        <a 
          href="https://framer.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs bg-background/70 text-muted-foreground px-2 py-1 rounded-md shadow hover:shadow-lg transition-shadow border border-border"
        >
          ⚡️ Made in Framer
        </a>
      </div>
    </section>
  );
}
