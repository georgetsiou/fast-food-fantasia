
import React, { useEffect } from 'react';
import { ArrowDown, ShoppingBag, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderClick = () => {
    window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
  };

  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10"></div>
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-cooking-meat-on-a-barbecue-grill-close-up-of-kebab-and-43388-large.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img src="/lovable-uploads/df6e1457-5e78-429b-ae89-5d6fb167fc9b.png" alt="Pumba Logo" className="w-64 md:w-80 animate-float" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white reveal">
            <span className="text-pumba-red">PUMBA</span> GYROS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 reveal">Ανακαλύψτε την τέχνη του γύρου στην καρδιά της Σίνδου Θεσσαλονίκης</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 reveal">
            <Button className="btn-primary flex items-center gap-2" onClick={handleOrderClick}>
              <ShoppingBag size={18} />
              Παραγγελία Online
            </Button>
            <a href="tel:2310799500" className="btn-secondary flex items-center justify-center gap-2">
              <Phone size={18} />
              Καλέστε Τώρα
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#menu" className="text-white">
          <ArrowDown size={32} />
        </a>
      </div>
    </div>;
};

export default Hero;
