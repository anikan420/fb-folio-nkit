// src/components/sections/HeroSection.tsx
"use client";

import Link from 'next/link'; 
import { useState, useEffect } from 'react';
import { SmoothScrollLink } from '../SmoothScrollLink';

const SparkleIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
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
    let lineIndexInEffect = 0; 
    let isMounted = true; 
    let timeoutId: NodeJS.Timeout;
  
    const type = () => {
      if (!isMounted) return;

      if (lineIndexInEffect < fullTextLines.length) {
        const currentLine = fullTextLines[lineIndexInEffect];
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          setDisplayText(currentText);
          charIndex++;
          timeoutId = setTimeout(type, typingSpeed);
        } else { 
          lineIndexInEffect++;
          charIndex = 0;
          if (lineIndexInEffect < fullTextLines.length) { 
            currentText += ' '; 
            setDisplayText(currentText); 
            timeoutId = setTimeout(type, lineBreakDelay);
          } else {
            setDisplayText(currentText); 
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
  }, []); 


  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center text-center overflow-hidden"
    >
      <div className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-20 z-10">
        
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl text-foreground min-h-[160px] sm:min-h-[200px] md:min-h-[280px] lg:min-h-[320px] font-sans">
          {displayText.split(" ").map((word, wordIndex) => {
            let currentLineIndex = 0;
            let accumulatedLength = 0;
            let currentWordStartPosInDisplayText = 0;
            
            if (wordIndex === 0) {
                currentWordStartPosInDisplayText = 0;
            } else {
                let tempPos = 0;
                for(let i=0; i < wordIndex; i++) {
                    tempPos += displayText.split(" ")[i].length + 1; 
                }
                currentWordStartPosInDisplayText = tempPos;
            }

            let tempLength = 0;
            for(let i = 0; i < fullTextLines.length; i++) {
                const line = fullTextLines[i];
                const lineLengthWithSpace = line.length + (i < fullTextLines.length - 1 ? 1 : 0); 
                
                if (currentWordStartPosInDisplayText >= tempLength && currentWordStartPosInDisplayText < tempLength + lineLengthWithSpace) {
                    currentLineIndex = i;
                    break;
                }
                tempLength += lineLengthWithSpace;
                if (i === fullTextLines.length - 1) { 
                    currentLineIndex = i;
                }
            }
             

            const originalLine = fullTextLines[currentLineIndex] || "";
            const wordsInOriginalLine = originalLine.split(" ");
            const isLastWordOfOriginalLine = word === wordsInOriginalLine[wordsInOriginalLine.length - 1];
            
            const endOfWordInDisplayText = currentWordStartPosInDisplayText + word.length;
            const isEndOfThisWordInDisplayText = displayText.length >= endOfWordInDisplayText;


            const needsBreakAfter = isLastWordOfOriginalLine && isEndOfThisWordInDisplayText && currentLineIndex < fullTextLines.length - 1;

            return (
              <span key={wordIndex}>
                {word}
                {wordIndex < displayText.split(" ").length - 1 && ' '} 
                {needsBreakAfter && <br />}
              </span>
            );
          })}
           {displayText.length < fullTextLines.join(" ").length && <span className="animate-ping">_</span>}
        </h1>
      </div>

      {/* Decorative Sparkles */}
      <SparkleIcon className="absolute top-[15%] left-[10%] w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-primary/80 transform -rotate-12 animate-subtle-float" style={{animationDelay: '0s'}} />
      <SparkleIcon className="absolute bottom-[20%] right-[12%] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-primary/80 transform rotate-6 animate-subtle-float" style={{animationDelay: '0.5s'}} />
      <SparkleIcon className="absolute top-[25%] right-[20%] w-6 h-6 text-primary/70 transform rotate-45 hidden md:block animate-subtle-pulse" style={{animationDelay: '0.2s'}}/>
      <SparkleIcon className="absolute bottom-[30%] left-[18%] w-8 h-8 text-primary/70 transform -rotate-45 hidden md:block animate-subtle-pulse" style={{animationDelay: '0.7s'}}/>


      <SmoothScrollLink
        href="#case-studies" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 text-primary hover:opacity-70 z-20 animate-bounce"
        aria-label="Scroll to case studies"
      >
        <FlowerScrollIcon className="h-10 w-10 text-primary" />
      </SmoothScrollLink>
      
    </section>
  );
}

