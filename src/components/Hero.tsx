
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
              <img src="/lovable-uploads/58cf3ce1-5edd-4cab-9c05-be775f273bad.png" alt="Pumba Logo" className="w-64 md:w-80 animate-float" />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="text-pumba-red animate-flame">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C10.35 4.79 8.59 7.67 9.11 10.14C9.23 10.8 9.58 11.5 10.16 12.14C10.57 12.53 11.11 12.82 11.27 13.37C11.34 13.62 11.36 13.89 11.3 14.14C11.9 13.74 12.07 12.9 11.78 12.21C13.19 12.82 14.14 14.19 13.94 15.86C13.8 16.93 13.09 17.95 12.04 18.4C11.26 18.73 10.34 18.74 9.6 18.35C8.73 17.89 8.18 16.92 8.27 15.93C8.27 15.93 8.54 15.57 8.77 15.75C8.86 15.06 8.7 14.35 8.3 13.82C7.99 13.42 7.52 13.12 7.33 12.63C7.09 12 7.06 11.3 7.21 10.65C6.67 11.08 6.53 11.82 6.67 12.5C6.77 13 7.07 13.41 7.24 13.89C7.4 14.33 7.41 14.83 7.26 15.29C7.12 15.72 6.83 16.1 6.46 16.35C5.75 16.81 4.8 16.89 3.97 16.74C4.73 17.03 5.56 17.2 6.39 17.07C7.34 16.93 8.22 16.33 8.71 15.47C8.98 15.14 9.17 14.75 9.25 14.33C10.02 14.96 11.08 15.22 12.04 14.96C12.47 14.85 12.87 14.63 13.19 14.32C12.59 15.89 10.84 16.86 9.15 16.38C9.87 17.22 11.04 17.68 12.21 17.54C13.13 17.44 14.02 16.95 14.56 16.13C15.3 15.01 15.45 13.43 14.97 12.14C14.41 10.65 13.1 9.53 11.63 9.21C11.61 9.21 11.89 9.14 11.9 9.13C12.91 8.9 13.96 8.93 14.92 9.31C15.18 9.4 15.37 9.59 15.59 9.75C16.04 10.07 16.52 10.32 17.05 10.49C17.34 10.58 17.65 10.63 17.96 10.63C17.35 9.89 16.74 9.15 16.01 8.49C15.77 8.31 15.53 8.14 15.29 7.99C15.75 7.91 16.23 7.96 16.64 8.18C16.27 7.4 15.64 6.74 14.92 6.26C14.55 6.03 14.16 5.84 13.74 5.72C14.75 5.62 15.76 5.85 16.62 6.41C16.58 5.7 16.28 5.02 15.82 4.52C15.36 4.01 14.73 3.69 14.07 3.6C14.91 3.4 15.85 3.6 16.53 4.13C16.93 4.44 17.24 4.85 17.41 5.32C17.14 4.26 16.37 3.37 15.36 2.85C14.35 2.34 13.11 2.26 12.02 2.62C12.02 2.41 12 2.21 12 2Z" />
                  </svg>
                </div>
              </div>
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
