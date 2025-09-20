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

        {/* Pillars and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Vision</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              To become Zanzibar’s leading technology hub by fostering innovation, promoting digital transformation, and empowering the region through technology.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Mission</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              We are committed to delivering high-quality, secure, and innovative solutions that enhance decision-making, support growth, and drive positive change for our clients and community.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Approach</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Unlike traditional service providers, ZenjiTecH combines local expertise with global best practices to design solutions that are tailored, impactful, and future-ready.
            </p>
          </div>
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
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-white">Message from Our CEO</h3>
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <blockquote className="text-lg leading-relaxed mb-6">
                    "As CEO,  I envision Zenjitech not just as a
service provider but as a partner that
nurtures innovation and inspires a tech-
driven generation in Zanzibar. Together,
let’s build the future of technology for
Zanzibar and beyond."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div>
                      <div className="font-semibold text-white">CEO & Founder</div>
                      <div className="text-blue-200">ZenjiTech</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <img 
                      src="/ZanziTech2/CEO.png" 
                      alt="CEO" 
                      className="w-25 h-25 rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-300 rounded-full opacity-20"></div>
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