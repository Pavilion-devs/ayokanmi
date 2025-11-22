import React from 'react';

function About() {
  return (
    <section id="about" className="sm:px-8 pr-6 pl-6">
      <div className="md:py-24 max-w-6xl mr-auto ml-auto pt-16 pb-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium text-white/50 uppercase tracking-widest font-geist-mono">About</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-neutral-900 border-4 border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
              <img 
                src="" 
                alt="Samuel Adebayo" 
                className="w-full h-full object-contain scale-95"
              />
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="space-y-6 text-neutral-300 leading-relaxed mb-8">
              <p className="font-geist-mono text-base md:text-lg">
                My name is <span className="text-white font-semibold">Samuel Ayokanmi Adebayo</span> and I'm a narrative gameplay programmer from the United Kingdom. I'm currently residing in Cambridge where I'm studying computer games programming at Anglia Ruskin University. Ever since I can remember, I've been fascinated by video games. Open world games especially caught my imagination because they feel like living stories, full of challenges, triumphs, and moments that reflect the real struggles and purposes we all face. Growing up, I wanted to create games that could inspire players just like those games inspired me.
              </p>
              <p className="font-geist-mono">
                As I got older, I started to dive into the tools of the trade. I began experimenting with Unreal Engine and Unity, teaching myself how to turn creative ideas into worlds you can explore and stories you can live through. That hands-on experience made me realize how powerful and beautiful gameplay programming could be when it's done right. I'm committed to shaping gameplay experiences that prioritize fun and engagement but also carry meaning and intention.
              </p>
              <p className="font-geist-mono">
                I'm a problem solver at heart. There's something thrilling about facing a complex challenge and breaking it down bit by bit until the solution emerges. Every bug fixed and every feature polished feels like a small victory. I love pushing myself to learn new techniques or programming languages and keeping my skills sharp so I can always deliver the best work possible.
              </p>
              <p className="font-geist-mono">
                Clean, maintainable, and efficient code is something I take seriously because I believe that great gameplay systems rely on solid foundations. Whether it's gameplay mechanics, physics simulations, or AI behavior, my goal is to craft systems that are not only functional but also elegant and intuitive. User interaction is key to making a game feel alive, and I focus on creating experiences that feel natural and enjoyable for the player.
              </p>
              <p className="font-geist-mono">
                Collaboration and teamwork are big parts of what I do. I enjoy working with artists, designers, writers, and other programmers to build something greater than what any of us could do alone. I believe professionalism doesn't mean losing your personality—in fact, bringing who you are into your work makes it richer and more unique.
              </p>
              <p className="font-geist-mono">
                Outside of programming, I'm always exploring new ideas, researching gaming trends, and thinking about ways to improve my craft. I'm passionate about storytelling through games and looking forward to creating worlds that players not only play but remember. My journey as a gameplay programmer is about more than just code—it's about connecting with people through play and creativity.
              </p>
            </div>

            {/* Education & Core Competencies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Education */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-4 font-geist-mono">Education</h3>
                <div>
                  <h4 className="font-medium text-white font-geist-mono">Computer Games Programming</h4>
                  <p className="text-sm text-neutral-400 font-geist-mono">Anglia Ruskin University</p>
                  <span className="text-xs text-white/50 font-geist-mono mt-2 block">Present</span>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-4 font-geist-mono">Core Focus</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">Gameplay Mechanics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">Physics Simulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">AI Behavior Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <span className="text-sm text-neutral-300 font-geist-mono">User Interaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
}

export default About;

