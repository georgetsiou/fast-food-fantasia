
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleOrderClick = () => {
    window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-2xl font-bold text-white">
          <span className="text-pumba-red">P</span>umba
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#menu" className="text-white hover:text-pumba-red transition-colors">Μενού</a>
          <a href="#about" className="text-white hover:text-pumba-red transition-colors">Σχετικά</a>
          <a href="#location" className="text-white hover:text-pumba-red transition-colors">Τοποθεσία</a>
          <a href="#contact" className="text-white hover:text-pumba-red transition-colors">Επικοινωνία</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:2310799500" className="flex items-center text-white hover:text-pumba-red">
            <Phone size={18} className="mr-1" />
            <span>231 079 9500</span>
          </a>
          <Button
            className="btn-primary flex items-center"
            onClick={handleOrderClick}
          >
            <ShoppingBag size={18} className="mr-2" />
            Παραγγελία
          </Button>
        </div>
        
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
            <X size={24} />
          </button>
          
          <a href="#menu" className="text-2xl text-white hover:text-pumba-red transition-colors" onClick={toggleMenu}>Μενού</a>
          <a href="#about" className="text-2xl text-white hover:text-pumba-red transition-colors" onClick={toggleMenu}>Σχετικά</a>
          <a href="#location" className="text-2xl text-white hover:text-pumba-red transition-colors" onClick={toggleMenu}>Τοποθεσία</a>
          <a href="#contact" className="text-2xl text-white hover:text-pumba-red transition-colors" onClick={toggleMenu}>Επικοινωνία</a>
          
          <a href="tel:2310799500" className="flex items-center text-white hover:text-pumba-red">
            <Phone size={18} className="mr-2" />
            <span>231 079 9500</span>
          </a>
          
          <Button
            className="btn-primary flex items-center mt-4"
            onClick={handleOrderClick}
          >
            <ShoppingBag size={18} className="mr-2" />
            Παραγγελία
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
