import React from 'react';

function About() {
  return (
    <section className="sm:px-8 pr-6 pl-6">
      <div className="md:py-24 max-w-6xl mr-auto ml-auto pt-16 pb-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium text-white/50 uppercase tracking-widest font-geist-mono">About</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-7">
            <div className="space-y-6 text-neutral-300 leading-relaxed mb-8">
              <p className="font-geist-mono">
                I'm Samuel Ayokanmi Adebayo. I'm passionate about game development and committed to crafting engaging gameplay experiences that prioritize user enjoyment.
              </p>
              <p className="font-geist-mono">
                As a problem solver, I eagerly embrace opportunities to expand my knowledge while continually refining my technical abilities. My work is supported by clean, maintainable, and efficient code that brings creative ideas to life through functional gameplay systems.
              </p>
              <p className="font-geist-mono">
                With a strong focus on gameplay mechanics, physics simulation, AI behavior, and user interaction, I thrive when tackling complex programming challenges. I value collaboration in multidisciplinary teams and am driven by a love for crafting games that both players and developers appreciate.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-sm font-medium text-white/90 mb-4 font-geist-mono">Programming Languages</h4>
                <ul className="text-sm text-neutral-400 space-y-2">
                  <li className="font-geist-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    C++
                  </li>
                  <li className="font-geist-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    C#
                  </li>
                  <li className="font-geist-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    Python
                  </li>
                  <li className="font-geist-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    JavaScript
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-sm font-medium text-white/90 mb-4 font-geist-mono">Game Engines & Tools</h4>
                <ul className="text-sm text-neutral-400 space-y-2">
                  <li className="font-geist-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    Unity Engine
                  </li>
                  <li className="font-geist-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Unreal Engine
                  </li>
                  <li className="font-geist-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                    Git & GitHub
                  </li>
                  <li className="font-geist-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    Visual Studio
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              {/* Education */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-6 font-geist-mono">Education</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-white font-geist-mono">Computer Games Programming</h4>
                      <p className="text-sm text-neutral-400 font-geist-mono">Anglia Ruskin University</p>
                    </div>
                    <span className="text-xs text-white/50 font-geist-mono">Present</span>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-6 font-geist-mono">Core Competencies</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">Gameplay Mechanics Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">Physics Simulation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">AI Behavior Systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">Performance Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">Debugging & Testing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">Team Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

