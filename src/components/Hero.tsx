import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const backgroundImages = [
    '/ZanziTech2/assets/BackGround/BackGround1.jpeg',
    '/ZanziTech2/assets/BackGround/BackGround2.jpeg',
    '/ZanziTech2/assets/BackGround/BackGround3.jpeg',
    '/ZanziTech2/assets/BackGround/BackGround4.jpeg',
    '/ZanziTech2/assets/BackGround/BackGround5.jpeg'
  ];

  useEffect(() => {
    // Preload images with high quality
    const imagePromises = backgroundImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
        // Ensure high quality rendering
        img.style.imageRendering = 'high-quality';
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        console.log('All background images loaded successfully');
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error('Error loading background images:', error);
        setImagesLoaded(false);
      });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    console.log('Starting enhanced background animation...');
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % backgroundImages.length;
        setNextImageIndex((nextIndex + 1) % backgroundImages.length);
        console.log(`Transitioning to image ${nextIndex}`);
        return nextIndex;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length, imagesLoaded]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background Images with Spectacular Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 parallax-bg">
        {imagesLoaded && backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 depth-layer transition-all duration-[4000ms] ease-out transform ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100 rotate-0 bg-fade-scale' 
                : index === nextImageIndex
                ? 'opacity-0 scale-110 rotate-2 blur-sm'
                : 'opacity-0 scale-90 -rotate-1 blur-md'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              filter: `${index === currentImageIndex ? 'blur(0px) brightness(1.1) contrast(1.1)' : 'blur(3px) brightness(0.8)'}`,
              transition: 'all 4s cubic-bezier(0.25, 0.8, 0.25, 1), filter 2s ease-in-out'
            }}
            onError={(e) => {
              console.error(`Failed to load background image: ${image}`);
              e.currentTarget.style.display = 'none';
            }}
          />
        ))}
        
        {/* Dynamic Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full animate-ping opacity-${20 + i * 5}`}
              style={{
                top: `${10 + i * 12}%`,
                left: `${5 + i * 11}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.3}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-200/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/5 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-lg animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Loading indicator with enhanced animation */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xl animate-pulse">
              <span className="inline-block animate-bounce">L</span>
              <span className="inline-block animate-bounce animation-delay-1000">o</span>
              <span className="inline-block animate-bounce animation-delay-2000">a</span>
              <span className="inline-block animate-bounce animation-delay-3000">d</span>
              <span className="inline-block animate-bounce animation-delay-4000">i</span>
              <span className="inline-block animate-bounce animation-delay-1000">n</span>
              <span className="inline-block animate-bounce animation-delay-2000">g</span>
              <span className="ml-2 text-blue-200">stunning visuals...</span>
            </div>
          </div>
        )}
        
        {/* Multi-layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-purple-900/30 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-transparent animate-pulse animation-delay-2000" style={{ animationDuration: '10s' }}></div>
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovation for 
            <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Sustainable Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
           Empowering Zanzibar and beyond with cutting-edge technology solutions, spatial innovation, and smart systems for tomorrow's challenges.
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