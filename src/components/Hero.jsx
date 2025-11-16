import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

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
      {showCursor && <span className="inline-block w-0.5 h-4 bg-white/70 ml-1 animate-pulse">|</span>}
    </span>
  );
}

function Hero() {
  return (
    <header className="sm:px-8 pr-6 pl-6">
      <div className="sm:pt-28 md:pt-36 max-w-6xl mr-auto ml-auto pt-20">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left: Intro Text */}
            <div className="lg:max-w-2xl">
              <p className="text-base font-medium text-white/70 font-geist-mono mb-4">
                <TypingText text="Hi, I'm Samuel Adebayo (Kommy)" speed={80} />
              </p>
              <h1 
                className="text-[52px] sm:text-[88px] md:text-[112px] lg:text-[120px] font-extrabold tracking-tight leading-[0.9] uppercase text-neutral-200"
                style={{ fontFamily: "'Clash Display', system-ui, -apple-system, sans-serif" }}
              >
                <span className="block">Game</span>
                <span className="block">Developer</span>
              </h1>
            </div>
            
            {/* Right: Status Badge */}
            <div className="lg:mt-8">
              <div className="inline-flex items-center gap-3 text-[11px] uppercase font-semibold text-white/70 font-geist-mono px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                <span className="font-geist-mono">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Portrait Section */}
          <div className="lg:col-span-5 border-[#ffffff]/10 border rounded-none">
            <div className="relative overflow-hidden bg-white/5 border-0 rounded-none">
              <img 
                src="/image.png" 
                alt="Portrait of Samuel Ayokanmi" 
                className="lg:h-[520px] w-full h-[420px] object-cover object-center scale-110 rounded-none" 
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7">
            <div className="h-full flex flex-col justify-between">
              {/* Description */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white/40">
                      <path d="M12 6v12" />
                      <path d="M17.196 9 6.804 15" />
                      <path d="m6.804 9 10.392 6" />
                    </svg>
                    <div className="h-px flex-1 bg-white/10"></div> */}
                  </div>
                  
                  <p className="lg:text-lg leading-relaxed text-base text-neutral-300 mb-8 font-geist-mono">
                    I'm a dedicated computer games programming student at Anglia Ruskin University, passionate about crafting engaging gameplay experiences. I focus on gameplay mechanics, physics simulation, AI behavior, and user interaction, always prioritizing clean, maintainable, and efficient code.
                  </p>
                  
                  {/* Skills/Services */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-white/90 font-geist-mono">Specialties</h3>
                      <ul className="text-sm text-white/70 space-y-1">
                        <li className="font-geist-mono">• Gameplay Mechanics</li>
                        <li className="font-geist-mono">• Physics Simulation</li>
                        <li className="font-geist-mono">• AI Behavior</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-white/90 font-geist-mono">Tech Stack</h3>
                      <ul className="text-sm text-white/70 space-y-1">
                        <li className="font-geist-mono">• C++ & C#</li>
                        <li className="font-geist-mono">• Unity Engine</li>
                        <li className="font-geist-mono">• Unreal Engine</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a 
                    href="#work" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-lg text-blue-400 hover:text-blue-300 transition-all font-geist-mono text-sm"
                  >
                    View My Projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </a>
                  <a 
                    href="#about" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-white transition-all font-geist-mono text-sm"
                  >
                    Learn More
                  </a>
                </div>
                
                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-[14px] h-[14px]" style={{ width: '14px', height: '14px', color: 'rgb(255, 255, 255)' }} />
                      <span className="font-geist-mono">Open to collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;

