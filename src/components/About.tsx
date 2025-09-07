import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Mission-Driven",
      description: "Focused on delivering innovative technology solutions that drive real change"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description: "Skilled professionals with deep expertise in technology and spatial solutions"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality First",
      description: "Committed to excellence in every project we undertake"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Impact",
      description: "Serving clients across Zanzibar and expanding internationally"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zenjitech is a tech-driven hub focused on innovation, spatial solutions, and smart systems 
            across Zanzibar and beyond. We transform ideas into reality through cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Pioneering Technology Solutions in East Africa
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Zenjitech, we believe technology should serve humanity. Our team of experts combines 
              local insight with global expertise to create solutions that address real-world challenges. 
              From GIS mapping to advanced data analytics, we're building the digital infrastructure 
              for tomorrow's world.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence and innovation has made us a trusted partner for businesses, 
              governments, and organizations looking to leverage technology for positive impact.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Learn More About Us
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-200">Solutions Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-blue-200">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-blue-200">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200">Technical Support</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;