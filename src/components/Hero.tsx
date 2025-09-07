import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-200"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-400"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovating the Future
            <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Through Tech
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Empowering Zanzibar and beyond with cutting-edge technology solutions, 
            spatial innovation, and smart systems for tomorrow's challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center">
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            
            <button className="group flex items-center text-white hover:text-blue-200 transition-colors duration-200">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-3 group-hover:bg-white/30 transition-colors duration-200">
                <Play className="text-white" size={16} />
              </div>
              Watch Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;