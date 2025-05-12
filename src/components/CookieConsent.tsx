
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    
    // Show cookie banner if not accepted previously
    if (!hasAcceptedCookies) {
      // Short delay to prevent immediate popup when page loads
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };
  
  const declineCookies = () => {
    localStorage.setItem('cookiesDeclined', 'true');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 bg-black/90 text-white p-4 md:p-6",
      "transform transition-transform duration-300",
      "border-t border-pumba-red shadow-lg"
    )}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Το website μας χρησιμοποιεί cookies</h3>
            <p className="text-sm text-gray-300">
              Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στην ιστοσελίδα μας και να 
              σας παρέχουμε προσαρμοσμένες υπηρεσίες. Με την αποδοχή, συμφωνείτε με την χρήση cookies 
              σύμφωνα με την πολιτική μας.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              onClick={declineCookies}
              variant="outline"
              className="text-white hover:text-pumba-red border-white hover:border-pumba-red"
            >
              Απόρριψη
            </Button>
            <Button 
              onClick={acceptCookies}
              className="bg-pumba-red hover:bg-red-700 text-white"
            >
              Αποδοχή
            </Button>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Close cookie consent"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
