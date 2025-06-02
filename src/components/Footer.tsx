
import React from 'react';
import { MapPin, Phone, Mail, Instagram, ShoppingBag, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleOrderClick = () => {
    window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
  };
  
  return <footer className="bg-black pt-12 pb-6 text-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/d0bd5513-09ad-4eab-85c2-fef3ef5f59ec.png" alt="Pumba Logo" className="h-16" />
                <h3 className="text-2xl font-bold ml-2">PUMBA</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Η τέχνη του γύρου σε κάθε μπουκιά. Απολαύστε αυθεντικές ελληνικές γεύσεις, φτιαγμένες με τα καλύτερα υλικά και πολλή αγάπη.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/pumba_sindos/" target="_blank" rel="noopener noreferrer" className="hover-grow">
                  <Instagram className="text-pumba-red hover:text-white transition-colors" size={24} />
                </a>
                <a href="https://www.instagram.com/pumpa_lhth/?locale=bz-hans&hl=am-et" target="_blank" rel="noopener noreferrer" className="hover-grow">
                  <Instagram className="text-pumba-red hover:text-white transition-colors" size={24} />
                </a>
                <a href="https://www.facebook.com/p/Pumba-%CE%A3%CE%AF%CE%BD%CE%B4%CE%BF%CF%82-The-art-of-Gyros-61556393728789/" target="_blank" rel="noopener noreferrer" className="hover-grow">
                  <Facebook className="text-pumba-red hover:text-white transition-colors" size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Επικοινωνία</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="text-pumba-red mr-2 mt-1" />
                  <span>Μεγ. Αλεξάνδρου 55, Σίνδος, Θεσσαλονίκη 57400</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="text-pumba-red mr-2" />
                  <a href="tel:2310799500" className="hover:text-pumba-red transition-colors">231 079 9500</a>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-pumba-red mr-2" />
                  <a href="mailto:pumbaike@gmail.com" className="hover:text-pumba-red transition-colors">pumbaike@gmail.com</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Ώρες Λειτουργίας</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Δευτέρα - Κυριακή: </span>
                  <span>12:00 - 00:00</span>
                </li>
                <li className="flex justify-between">
                  <span>
                </span>
                  <span>
                </span>
                </li>
                <li className="flex justify-between">
                  <span>
                </span>
                  <span>
                </span>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className="btn-primary flex items-center gap-2" onClick={handleOrderClick}>
                  <ShoppingBag size={18} />
                  Παραγγείλτε Τώρα
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Pumba Gyros. Με επιφύλαξη παντός δικαιώματος.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Όροι χρήσης</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Πολιτική απορρήτου</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
