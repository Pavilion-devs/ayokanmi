import React from 'react';
import { Home, Briefcase, User, Mail } from 'lucide-react';

function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Home', href: '/home' },
    { icon: Briefcase, label: 'Work', href: '/work' },
    { icon: User, label: 'About', href: '/about' },
    { icon: Mail, label: 'Contact', href: '/contact' }
  ];

  return (
    <aside className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30">
      <div className="flex flex-col gap-2 bg-white/5 border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl items-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="group grid place-items-center hover:text-white hover:bg-white/10 transition relative text-neutral-400 w-10 h-10 rounded-full cursor-pointer"
            onClick={() => window.location.href = item.href}
            role="button"
          >
            <item.icon 
              className="w-[16px] h-[16px]" 
              style={{ width: '16px', height: '16px', color: 'rgb(255, 255, 255)' }} 
            />
            <span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;

