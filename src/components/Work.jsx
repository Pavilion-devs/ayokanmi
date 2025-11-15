import React from 'react';
import project1 from '../assets/project1.mp4';
import project2 from '../assets/project2.mp4';

function Work() {
  const projects = [
    {
      title: 'Project One',
      description: 'An exciting game development project showcasing advanced gameplay mechanics and physics simulation. Built with Unity Engine, featuring real-time interactions and immersive gameplay elements.',
      video: project1,
      tags: ['Unity', 'C#', 'Physics', 'AI'],
      category: 'Game Development'
    },
    {
      title: 'Project Two',
      description: 'A compelling game project demonstrating creative problem-solving and technical expertise. Implements complex AI behavior systems and optimized performance for smooth gameplay experience.',
      video: project2,
      tags: ['Unreal Engine', 'C++', 'Gameplay', 'Optimization'],
      category: 'Game Development'
    }
  ];

  return (
    <section id="work" className="px-6 sm:px-8">
      <div className="mx-auto max-w-6xl py-16 md:py-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium text-white/50 uppercase tracking-widest font-geist-mono">Portfolio</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">My Projects</h2>
          <p className="text-lg text-neutral-300 max-w-2xl font-geist-mono">
            A showcase of my game development work, featuring gameplay mechanics, physics simulations, and interactive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-white/50 font-geist-mono">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 mb-4 leading-relaxed font-geist-mono text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full font-geist-mono border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
