
import React from 'react';
import MenuCategory from './MenuCategory';
import { MenuCategory as MenuCategoryType } from '@/data/menuItems';

interface MobileMenuLayoutProps {
  menuItems: MenuCategoryType[];
}

const MobileMenuLayout: React.FC<MobileMenuLayoutProps> = ({ menuItems }) => {
  // Split categories into two columns for mobile
  const leftColumn = menuItems.filter((_, idx) => idx % 2 === 0);
  const rightColumn = menuItems.filter((_, idx) => idx % 2 === 1);
  
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Left Column */}
      <div className="space-y-5">
        {leftColumn.map((category, idx) => (
          <MenuCategory key={idx} category={category} isMobile={true} />
        ))}
      </div>
      
      {/* Right Column */}
      <div className="space-y-5">
        {rightColumn.map((category, idx) => (
          <MenuCategory key={idx} category={category} isMobile={true} />
        ))}
      </div>
    </div>
  );
};

export default MobileMenuLayout;
