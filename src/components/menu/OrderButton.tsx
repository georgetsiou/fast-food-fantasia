
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ExternalLink } from 'lucide-react';

const OrderButton: React.FC = () => {
  const handleOrderClick = () => {
    window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
  };

  return (
    <div className="text-center mt-16 reveal">
      <p className="text-lg mb-6">Θέλετε να δείτε το πλήρες μενού μας;</p>
      <div className="flex justify-center">
        <Button onClick={handleOrderClick} className="btn-primary flex items-center gap-2 text-base">
          <ShoppingBag size={18} />
          Παραγγείλτε Online
          <ExternalLink size={16} />
        </Button>
      </div>
    </div>
  );
};

export default OrderButton;
