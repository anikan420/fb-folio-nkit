// src/components/sections/HeroSection.tsx
"use client";

import Link from 'next/link'; // Import Next.js Link
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


export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullTextLines = [
    "Making sense of",
    "messy problems,",
    "one pixel at a time."
  ];
  const typingSpeed = 50; 
  const lineBreakDelay = 500; 

  useEffect(() => {
    let currentText = '';
    let charIndex = 0;
    let lineIndex = 0;
    let isMounted = true; 
    let timeoutId: NodeJS.Timeout;
  
    const type = () => {
      if (!isMounted) return;

      if (lineIndex < fullTextLines.length) {
        const currentLine = fullTextLines[lineIndex];
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          setDisplayText(currentText);
          charIndex++;
          timeoutId = setTimeout(type, typingSpeed);
        } else { 
          lineIndex++;
          charIndex = 0;
          if (lineIndex < fullTextLines.length) { 
            currentText += ' '; 
            setDisplayText(currentText); 
            timeoutId = setTimeout(type, lineBreakDelay);
          }
        }
      }
    };
  
    timeoutId = setTimeout(type, typingSpeed);
  
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run only once on mount


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
        {/* Removed the "UX Designer" badge and "Made with Framer" / "Hi, I'm Ankit" cards */}
        
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground min-h-[200px] md:min-h-[280px] lg:min-h-[320px]">
          {displayText.split(" ").map((word, wordIndex, wordsArray) => {
             // Determine if a line break is needed based on the original fullTextLines structure
            let needsBreakAfter = false;
            if (lineIndex < fullTextLines.length -1) { // Check if not the last line
                const currentDisplayLine = displayText.substring(0, displayText.lastIndexOf(fullTextLines[lineIndex].slice(-1)) +1);
                if (fullTextLines[lineIndex] === currentDisplayLine.trim().split(" ").slice(-fullTextLines[lineIndex].split(" ").length).join(" ") && word === fullTextLines[lineIndex].split(" ").pop()) {
                     needsBreakAfter = true;
                }
            }
            
            let lineIndex = 0;
            let tempLength = 0;
            for(let i=0; i < fullTextLines.length; i++){
                tempLength += fullTextLines[i].length + (i > 0 ? 1 : 0); // +1 for space between lines
                if(displayText.length <= tempLength) {
                    lineIndex = i;
                    break;
                }
            }

            const isEndOfLineWord = word === fullTextLines[lineIndex]?.split(" ").pop() && displayText.endsWith(word);
            const isNotLastLine = lineIndex < fullTextLines.length - 1;


            return (
              <span key={wordIndex}>
                {word}
                {wordIndex < displayText.split(" ").length - 1 && ' '}
                {isEndOfLineWord && isNotLastLine && <br />}
              </span>
            );
          })}
           {displayText.length < fullTextLines.join(" ").length && <span className="animate-ping">_</span>}
        </h1>
      </div>

      {/* Decorative Sparkles */}
      <SparkleIcon className="absolute top-[15%] left-[10%] w-10 h-10 md:w-16 md:h-16 text-primary/80 opacity-80 transform -rotate-12" />
      <SparkleIcon className="absolute bottom-[20%] right-[12%] w-10 h-10 md:w-14 md:h-14 text-primary/80 opacity-80 transform rotate-6" />
      <SparkleIcon className="absolute top-[25%] right-[20%] w-6 h-6 text-primary/70 opacity-60 transform rotate-45 hidden md:block" />
      <SparkleIcon className="absolute bottom-[30%] left-[18%] w-8 h-8 text-primary/70 opacity-70 transform -rotate-45 hidden md:block" />

      <Link
        href="/about" // Changed to Next.js Link and points to /about page
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 text-primary hover:opacity-70 z-20 animate-bounce"
        aria-label="Go to about page"
      >
        <FlowerScrollIcon className="h-10 w-10 text-primary" />
      </Link>
      
    </section>
  );
}

    