import React from 'react';
import { Github, Linkedin, Instagram, FileText } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Name/Logo */}
          <div className="flex items-center">
            <a href="/" className="group">
              <h1 className="text-xl font-semibold text-white font-geist-mono tracking-tight group-hover:text-blue-400 transition-colors">
                Samuel <span className="text-blue-400">Adebayo</span>
              </h1>
              <p className="text-xs text-white/50 font-geist-mono">Game Developer</p>
            </a>
          </div>

          {/* Right: Socials + Resume Button */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-4">
              <a 
                href="https://github.com/Kommyayo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/samuelayokanmi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/kommyayo?igsh=d2dtZ2w4YzhpOXY4&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Resume Button */}
            <a 
              href="/CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-lg text-blue-400 hover:text-blue-300 transition-all font-geist-mono text-sm"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

