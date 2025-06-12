'use client';

import { FaGithub, FaLinkedin, FaArrowDown, FaAws } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiDocker, SiKubernetes, SiGooglecloud } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const skills = {
  "Frontend Development": [
    { icon: <SiReact className="w-8 h-8" />, name: "React.js" },
    { icon: <TbBrandNextjs className="w-8 h-8" />, name: "Next.js" },
    { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript" },
    { icon: <SiJavascript className="w-8 h-8" />, name: "JavaScript" },
  ],
  "Backend Development": [
    { icon: <SiNodedotjs className="w-8 h-8" />, name: "Node.js" },
    { icon: <SiPython className="w-8 h-8" />, name: "Python" },
    { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB" },
    { icon: <SiPostgresql className="w-8 h-8" />, name: "PostgreSQL" },
  ],
  "DevOps & Cloud": [
    { icon: <SiDocker className="w-8 h-8" />, name: "Docker" },
    { icon: <SiKubernetes className="w-8 h-8" />, name: "Kubernetes" },
    { icon: <FaAws className="w-8 h-8" />, name: "AWS" },
    { icon: <SiGooglecloud className="w-8 h-8" />, name: "Google Cloud" },
  ]
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to right bottom, rgba(220, 53, 69, 0.1), rgba(0, 0, 0, 0.9))',
              zIndex: 1
            }}></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
              animation: 'moveBackground 20s linear infinite',
              zIndex: 0
            }}></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <div className="relative px-6 py-2 text-sm text-white bg-theme-red/20 rounded-full backdrop-blur-sm border border-theme-red/20">
                    <span className="relative z-10">Available for Freelance Work</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-red/20 to-transparent animate-pulse"></div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Crafting Digital
                  <span className="block mt-2 bg-gradient-to-r from-theme-red to-red-400 text-transparent bg-clip-text">
                    Excellence
                  </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Full-stack developer specializing in building exceptional digital experiences. 
                  Let's transform your vision into reality.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                  <a 
                    href="#contact" 
                    className="group relative px-8 py-4 bg-theme-red text-white rounded-full overflow-hidden transition-all hover:scale-105"
                  >
                    <span className="relative z-10">Start a Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-theme-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </a>
                  <a 
                    href="#services" 
                    className="group relative px-8 py-4 text-white rounded-full overflow-hidden border-2 border-white/30 hover:border-white/80 transition-all"
                  >
                    <span className="relative z-10">Explore Services</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-6 pt-12">
                  <a 
                    href="https://github.com/richardagaya" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-theme-red transition-colors"
                  >
                    <FaGithub className="w-7 h-7" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/richard-agaya-6bb286257/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-theme-red transition-colors"
                  >
                    <FaLinkedin className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
            <FaArrowDown className="w-6 h-6" />
          </div>
        </div>

        {/* Skills Section */}
        <section id="about" className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Full Stack Developer &
                <span className="text-theme-red"> Software Engineer</span>
              </h2>
              <div className="w-20 h-1 bg-theme-red mx-auto mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-16">
                Specializing in building scalable applications with modern technologies.
                From frontend to backend, and everything in between.
              </p>

              <div className="grid gap-12">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {skillList.map((skill, index) => (
                        <div 
                          key={index}
                          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transform hover:-translate-y-2 transition-all group"
                        >
                          <div className="text-gray-400 group-hover:text-theme-red transition-colors mb-3">
                            {skill.icon}
                          </div>
                          <p className="text-gray-300">{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        

        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 