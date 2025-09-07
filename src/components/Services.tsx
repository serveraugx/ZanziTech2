import React from 'react';
import { Map, Code, BarChart3, HelpCircle, GraduationCap, Compass } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Map className="w-12 h-12 text-blue-600" />,
      title: "GIS & Mapping",
      description: "Advanced geospatial solutions, mapping services, and location-based analytics for informed decision making.",
      features: ["Spatial Data Analysis", "Custom Maps", "GPS Integration"]
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Web & System Development",
      description: "Full-stack development services creating robust, scalable web applications and enterprise systems.",
      features: ["Custom Web Apps", "Mobile Solutions", "API Development"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our comprehensive analytics and visualization services.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics"]
    },
    {
      icon: <HelpCircle className="w-12 h-12 text-blue-600" />,
      title: "IT Support",
      description: "Comprehensive technical support and maintenance services to keep your systems running smoothly.",
      features: ["24/7 Support", "System Maintenance", "Security Updates"]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Training & Capacity Building",
      description: "Professional training programs and workshops to enhance your team's technical capabilities.",
      features: ["Skills Development", "Certification Programs", "Custom Training"]
    },
    {
      icon: <Compass className="w-12 h-12 text-blue-600" />,
      title: "Geospatial Consultancy",
      description: "Expert consultancy services for spatial planning, analysis, and geospatial project management.",
      features: ["Project Planning", "Spatial Analysis", "Technical Consulting"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to meet your unique business needs 
            and drive digital transformation across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-200">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform group-hover:scale-105 font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;