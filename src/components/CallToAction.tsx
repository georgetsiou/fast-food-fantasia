
import React from 'react';
import { Phone, ArrowRight, ShoppingBag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const handleOrderClick = () => {
    window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
  };

  return (
    <div className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80" 
          alt="Delicious burger" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
            Πεινάσατε; Είμαστε μόνο ένα τηλεφώνημα μακριά!
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
            <a 
              href="tel:2310799500" 
              className="btn-primary flex items-center justify-center"
            >
              <Phone size={18} className="mr-2" />
              231 079 9500
            </a>
            
            <Button 
              className="btn-secondary flex items-center justify-center gap-2"
              onClick={handleOrderClick}
            >
              <ShoppingBag size={18} />
              Παραγγείλτε Online
              <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
