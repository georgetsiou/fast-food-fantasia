
import React from 'react';
import { MenuItem as MenuItemType } from '@/data/menuItems';

interface MenuItemProps {
  item: MenuItemType;
  isMobile: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isMobile }) => {
  return (
    <div 
      className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${
        item.featured ? 'border border-pumba-red' : 'border border-transparent'
      }`}
    >
      <div className={isMobile ? "p-3" : "p-4"}>
        <div className="flex justify-between items-start mb-1">
          <h4 className={isMobile ? "text-sm font-bold" : "text-xl font-bold"}>
            {item.name}
          </h4>
          <span className={`text-pumba-gold ${isMobile ? "text-sm" : ""} font-bold`}>
            {item.price}
          </span>
        </div>
        <p className={`text-gray-300 ${isMobile ? "text-xs" : ""}`}>
          {item.description}
        </p>
        {item.featured && (
          <div className={isMobile ? "mt-2" : "mt-3"}>
            <span className={`bg-pumba-red text-white ${isMobile ? "px-2 py-0.5 text-[10px]" : "px-2 py-1 text-xs"} rounded-full font-bold`}>
              ΠΡΟΤΕΙΝΟΜΕΝΟ
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
