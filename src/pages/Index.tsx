
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Initialize reveal animation for elements with "reveal" class
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial check on load
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <CallToAction />
      <Testimonials />
      <Location />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
