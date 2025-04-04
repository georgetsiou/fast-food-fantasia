
import React from 'react';
import MenuItem from './MenuItem';
import { MenuCategory as MenuCategoryType } from '@/data/menuItems';

interface MenuCategoryProps {
  category: MenuCategoryType;
  isMobile: boolean;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, isMobile }) => {
  return (
    <div className="reveal">
      <div className={`flex items-center gap-${isMobile ? '1' : '2'} mb-${isMobile ? '3' : '4'}`}>
        {category.icon}
        <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-pumba-red`}>
          {category.category}
        </h3>
      </div>
      <div className={`space-y-${isMobile ? '4' : '6'}`}>
        {category.items.map((item, itemIdx) => (
          <MenuItem key={itemIdx} item={item} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
