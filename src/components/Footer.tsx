import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'GIS & Mapping', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Data Analytics', href: '#services' },
    { name: 'IT Support', href: '#services' },
    { name: 'Training', href: '#services' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', name: 'GitHub' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mb-4">
              Zenjitech
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Innovating the future through technology. We deliver cutting-edge solutions 
              for businesses across Zanzibar and beyond.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-3 text-blue-400" />
                <span className="text-sm">Stone Town, Zanzibar</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-3 text-blue-400" />
                <span className="text-sm">+255 XXX XXX XXX</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3 text-blue-400" />
                <span className="text-sm">info@zenjitech.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-200">
                  <Mail size={16} />
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-3">Follow us:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-all duration-200 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zenjitech. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;