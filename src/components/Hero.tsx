
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#3B0A75] to-[#FF6B6B]"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 group">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <img src="/images/profile.jpeg"
                
                alt="Kummitha Alekhya"
                className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-2xl hover:scale-110 transition-all duration-500 hover:shadow-purple-500/25 hover:border-purple-400/50"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
            Kummitha Alekhya
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-8 hover:text-purple-300 transition-colors duration-300">
             Software Development Mentor
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed hover:text-white transition-colors duration-300">
        
            Currently mentoring aspiring developers and building innovative solutions.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/kummitha-alekhya-443228237/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-6 shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Kummitha-alekhya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white p-4 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-6 shadow-lg hover:shadow-gray-500/25"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:alekhya211001@gmail.com"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-6 shadow-lg hover:shadow-red-500/25"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-pulse cursor-pointer">
        <ArrowDown className="text-white/60 hover:text-purple-400 transition-colors duration-300" size={32} />
      </div>
    </section>
  );
};

export default Hero;
