
import React from 'react';
import MenuCategory from './MenuCategory';
import { MenuCategory as MenuCategoryType } from '@/data/menuItems';

interface DesktopMenuLayoutProps {
  menuItems: MenuCategoryType[];
}

const DesktopMenuLayout: React.FC<DesktopMenuLayoutProps> = ({ menuItems }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {menuItems.map((category, idx) => (
        <MenuCategory key={idx} category={category} isMobile={false} />
      ))}
    </div>
  );
};

export default DesktopMenuLayout;
