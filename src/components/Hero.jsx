import React, { useState, useEffect } from 'react';

function TypingText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        // Hide cursor after typing is complete
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  // Blinking cursor effect (only while typing)
  useEffect(() => {
    if (!isTyping) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [isTyping]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="inline-block w-0.5 h-5 bg-white ml-1 animate-pulse">|</span>}
    </span>
  );
}

function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/background.png)',
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Intro Text with Typing Animation */}
        <p className="text-lg md:text-xl text-white/90 mb-6 font-geist-mono">
          <TypingText text="Hi! My name is Samuel. I am a" speed={60} />
        </p>
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Gameplay Programmer.
        </h1>
        
        {/* Welcome Message */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-geist-mono">
          Welcome to my portfolio!
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a 
            href="#work" 
            className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white/40 hover:border-white/60 text-white text-base md:text-lg font-medium rounded transition-all font-geist-mono"
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white/40 hover:border-white/60 text-white text-base md:text-lg font-medium rounded transition-all font-geist-mono"
          >
            About Me
          </a>
          <a 
            href="/CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white/40 hover:border-white/60 text-white text-base md:text-lg font-medium rounded transition-all font-geist-mono"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;

