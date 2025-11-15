import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 sm:px-8">
      <div className="mx-auto max-w-6xl py-10 md:py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2">
            <span className="font-geist-mono text-sm text-neutral-400">
              © {currentYear} Samuel Ayokanmi. All rights reserved.
            </span>
            <span className="text-xs text-neutral-500 font-geist-mono">
              Open to collaboration and new opportunities
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <a 
              href="https://github.com/samuelayokanmi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/samuelayokanmi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/samuelayokanmi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:samuel@example.com"
              className="text-neutral-400 hover:text-white transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

