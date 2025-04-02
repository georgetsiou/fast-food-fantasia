import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, ShoppingBag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Footer = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  
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
                <a href="https://www.instagram.com/pumba_lhth/" target="_blank" rel="noopener noreferrer" className="hover-grow">
                  <Instagram className="text-pumba-red hover:text-white transition-colors" size={24} />
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
                  <span>Δευτέρα - Κυριακή:</span>
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
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setTermsOpen(true);
                  }} className="text-gray-400 hover:text-white transition-colors">Όροι χρήσης</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Πολιτική απορρήτου</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Όροι Χρήσης</DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-bold">1. Όροι Χρήσης</h3>
              <div className="mt-2 space-y-2">
                <div>
                  <h4 className="font-semibold">1.1. Αποδοχή των Όρων</h4>
                  <p className="text-gray-300">Με την πρόσβαση και τη χρήση αυτού του ιστότοπου, αποδέχεστε τους παρόντες Όρους Χρήσης και τη Πολιτική Απορρήτου.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">1.2. Χρήση του Ιστότοπου</h4>
                  <p className="text-gray-300">Ο ιστότοπος προορίζεται για την πλατφόρμα online παραγγελιών fast food.</p>
                  <p className="text-gray-300">Απαγορεύεται η χρήση για παράνομες ή αθέμιτες δραστηριότητες.</p>
                  <p className="text-gray-300">Ο χρήστης είναι υπεύθυνος για την ακρίβεια των δεδομένων που εισάγει (π.χ. διεύθυνση, πληρωμή).</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">1.3. Δικαιώματα Ιδιοκτησίας</h4>
                  <p className="text-gray-300">Όλο το περιεχόμενο (κείμενο, γραφικά, λογότυπα) είναι ιδιοκτησία του ιστότοπου ή των συνεργατών του και προστατεύεται από πνευματικά δικαιώματα.</p>
                  <p className="text-gray-300">Απαγορεύεται η αναπαραγωγή, διανομή ή τροποποίηση χωρίς άδεια.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">1.4. Αλλαγές & Διακοπή Λειτουργίας</h4>
                  <p className="text-gray-300">Ο ιστότοπος διατηρεί το δικαίωμα να τροποποιεί τους Όρους χωρίς προειδοποίηση.</p>
                  <p className="text-gray-300">Μπορεί να σταματήσει η λειτουργία για συντήρηση ή τεχνικούς λόγους.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">1.5. Περιορισμός Ευθύνης</h4>
                  <p className="text-gray-300">Δεν ευθύνεται για ζημιές από τη χρήση ή την αδυναμία πρόσβασης στον ιστότοπο.</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>;
};
export default Footer;
