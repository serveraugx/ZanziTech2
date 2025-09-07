import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Zanzibar Tourism Mapping Platform",
      description: "Interactive GIS platform for tourism management with real-time data visualization and booking integration.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "GIS & Mapping",
      date: "2024",
      technologies: ["React", "PostGIS", "Mapbox GL"]
    },
    {
      id: 2,
      title: "Smart City Data Dashboard",
      description: "Comprehensive analytics dashboard for urban planning and infrastructure management in Stone Town.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Data Analytics",
      date: "2024",
      technologies: ["Python", "D3.js", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Educational Management System",
      description: "Complete school management solution with student tracking, grade management, and parent communication.",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web Development",
      date: "2023",
      technologies: ["Vue.js", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Agricultural Monitoring App",
      description: "Mobile application for crop monitoring and yield prediction using satellite imagery and IoT sensors.",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Mobile App",
      date: "2023",
      technologies: ["React Native", "TensorFlow", "AWS"]
    },
    {
      id: 5,
      title: "Healthcare Data Integration",
      description: "Unified healthcare data platform connecting multiple hospitals and clinics across the archipelago.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "System Integration",
      date: "2023",
      technologies: ["Laravel", "MySQL", "Docker"]
    },
    {
      id: 6,
      title: "Marine Conservation Portal",
      description: "Environmental monitoring system for marine protected areas with real-time data collection and reporting.",
      image: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Environmental Tech",
      date: "2022",
      technologies: ["Django", "PostgreSQL", "Leaflet"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of successful projects that showcase our expertise 
            in delivering innovative technology solutions across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/90 text-blue-600 p-3 rounded-full hover:bg-white transition-colors duration-200">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Tag size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform group-hover:scale-105 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;