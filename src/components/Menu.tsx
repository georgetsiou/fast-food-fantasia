
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import menuItems from '@/data/menuItems';
import MobileMenuLayout from './menu/MobileMenuLayout';
import DesktopMenuLayout from './menu/DesktopMenuLayout';
import OrderButton from './menu/OrderButton';

const Menu = () => {
  const isMobile = useIsMobile();
  
  return (
    <div id="menu" className="section bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center reveal">
            <span className="text-pumba-red">Μ</span>ενού
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto reveal">
            Απολαύστε αυθεντικές ελληνικές γεύσεις, φτιαγμένες με τα καλύτερα υλικά και πολλή αγάπη
          </p>
          
          {isMobile ? (
            <MobileMenuLayout menuItems={menuItems} />
          ) : (
            <DesktopMenuLayout menuItems={menuItems} />
          )}
          
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default Menu;
