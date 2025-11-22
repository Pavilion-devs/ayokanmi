import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import project1Video from '../assets/project1.mp4';
import project2Video from '../assets/project2.mp4';

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const projectsData = {
    'dungeon-generator': {
      title: 'Dungeon Generator',
      category: 'Game Development',
      tags: ['Unity', 'C#', 'Procedural Generation', 'Physics', 'AI'],
      video: project1Video,
      cover: '/cover1.png',
      description: [
        "Dungeon Generator is a sophisticated gameplay project developed in Unity, focused on creating dynamic, procedurally generated dungeon environments that offer a fresh and immersive experience each time players enter. My role involved designing and programming core systems that drive the procedural generation of layouts, ensuring variety while maintaining logical and navigable dungeon structures.",
        "I developed advanced physics simulations to create interactive, believable environments where objects respond naturally to player input and environmental factors. This included implementing collision systems, destructible objects, and physics-based puzzles. My programming also extended to player movement mechanics that feel smooth and responsive, enhancing immersion and player control.",
        "I integrated AI components for dungeon enemies and environmental hazards, carefully scripting behaviors that challenge players strategically without overwhelming them. Working closely with the design and art teams, I balanced gameplay flow, ensuring procedural elements contributed to a cohesive and engaging experience.",
        "Throughout development, I emphasized writing clean, maintainable code that supports easy iteration and optimization. This project showcases my ability to combine technical proficiency with creative problem-solving to build complex gameplay systems that are both functional and enjoyable."
      ]
    },
    'maze-frenzy': {
      title: 'Maze Frenzy',
      category: 'Game Development',
      tags: ['Unreal Engine', 'C++', 'Gameplay', 'Optimization', 'First-Person'],
      video: project2Video,
      cover: '/cover2.png',
      description: [
        "Maze Frenzy is an immersive first-person maze exploration game built in Unreal Engine that combines elements of strategy, player skill, and environmental interaction to create a dynamic gameplay experience. In this project, I aimed to build a compelling and challenging world where players navigate through procedurally generated mazes filled with interactive obstacles and timed challenges that test reflexes and problem-solving.",
        "I was responsible for designing and implementing core gameplay systems using C++ and Blueprints, including the maze generation algorithms, player movement and control mechanics, and interactive objects that alter gameplay flow.",
        "The game encourages players to think strategically as they race against time to complete objectives while avoiding or overcoming environmental hazards. During development, I focused on creating smooth, responsive player controls and immersive camera systems that enhance the feeling of being inside a complex maze. I integrated audio-visual cues in collaboration with artists to reinforce the game's tense and engaging atmosphere. Optimization for performance and stability was also a key focus to ensure a seamless experience across different hardware.",
        "The Maze Frenzy project demonstrates my ability to combine creative game design with technical programming skills, delivering an engaging and polished gameplay experience that challenges both players' minds and reflexes."
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-lg text-blue-400 hover:text-blue-300 transition-all font-geist-mono"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Back Button */}
      <div className="fixed top-24 left-6 sm:left-8 z-40">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-white transition-all font-geist-mono text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
      </div>

      {/* Content */}
      <div className="px-6 sm:px-8 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-white/50 font-geist-mono uppercase tracking-widest">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 text-sm bg-blue-500/10 text-blue-400 rounded-full font-geist-mono border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="mb-12 rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
            <video 
              className="w-full aspect-video"
              controls
              poster={project.cover}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Description */}
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            {project.description.map((paragraph, index) => (
              <p key={index} className="font-geist-mono text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;

