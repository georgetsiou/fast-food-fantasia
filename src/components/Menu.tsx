import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const menuItems = [
  // ... keep existing code (menuItems array with categories and items)
];

const Menu = () => {
  const handleOrderClick = () => {
    window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
  };

  const isMobile = useIsMobile();
  
  // Split the menu items into two columns for desktop
  const firstColumnItems = menuItems.slice(0, Math.ceil(menuItems.length / 2));
  const secondColumnItems = menuItems.slice(Math.ceil(menuItems.length / 2));

  return <div id="menu" className="section bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center reveal">
            <span className="text-pumba-red">Μ</span>ενού
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto reveal">
            Απολαύστε αυθεντικές ελληνικές γεύσεις, φτιαγμένες με τα καλύτερα υλικά και πολλή αγάπη
          </p>
          
          {isMobile ? (
            // Mobile: All categories in a single column
            <div className="grid grid-cols-1 gap-8">
              {menuItems.map((category, idx) => (
                <div key={idx} className="reveal">
                  <h3 className="text-2xl font-bold mb-4 text-pumba-red">{category.category}</h3>
                  <div className="space-y-6">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${item.featured ? 'border border-pumba-red' : 'border border-transparent'}`}>
                        <div className="flex flex-col">
                          <div className="w-full overflow-hidden">
                            <AspectRatio ratio={1 / 1} className="bg-slate-800">
                              <img src={item.image} alt={item.name} className="object-cover w-full h-full transition-all duration-500 hover:scale-110" />
                            </AspectRatio>
                          </div>
                          <div className="w-full flex flex-col justify-between p-4">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xl font-bold">{item.name}</h4>
                                <span className="text-pumba-gold font-bold">{item.price}</span>
                              </div>
                              <p className="text-gray-300">{item.description}</p>
                            </div>
                            {item.featured && (
                              <div className="mt-3">
                                <span className="bg-pumba-red text-white px-2 py-1 rounded-full text-xs font-bold">
                                  ΠΡΟΤΕΙΝΟΜΕΝΟ
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop: Split categories into two columns
            <div className="grid md:grid-cols-2 gap-8">
              {/* First column */}
              <div className="space-y-8">
                {firstColumnItems.map((category, idx) => (
                  <div key={idx} className="reveal">
                    <h3 className="text-2xl font-bold mb-4 text-pumba-red">{category.category}</h3>
                    <div className="space-y-6">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${item.featured ? 'border border-pumba-red' : 'border border-transparent'}`}>
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 w-full overflow-hidden">
                              <AspectRatio ratio={1 / 1} className="bg-slate-800">
                                <img src={item.image} alt={item.name} className="object-cover w-full h-full transition-all duration-500 hover:scale-110" />
                              </AspectRatio>
                            </div>
                            <div className="md:w-2/3 w-full flex flex-col justify-between p-4">
                              <div>
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="text-xl font-bold">{item.name}</h4>
                                  <span className="text-pumba-gold font-bold">{item.price}</span>
                                </div>
                                <p className="text-gray-300">{item.description}</p>
                              </div>
                              {item.featured && (
                                <div className="mt-3">
                                  <span className="bg-pumba-red text-white px-2 py-1 rounded-full text-xs font-bold">
                                    ΠΡΟΤΕΙΝΟΜΕΝΟ
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Second column */}
              <div className="space-y-8">
                {secondColumnItems.map((category, idx) => (
                  <div key={idx} className="reveal">
                    <h3 className="text-2xl font-bold mb-4 text-pumba-red">{category.category}</h3>
                    <div className="space-y-6">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${item.featured ? 'border border-pumba-red' : 'border border-transparent'}`}>
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 w-full overflow-hidden">
                              <AspectRatio ratio={1 / 1} className="bg-slate-800">
                                <img src={item.image} alt={item.name} className="object-cover w-full h-full transition-all duration-500 hover:scale-110" />
                              </AspectRatio>
                            </div>
                            <div className="md:w-2/3 w-full flex flex-col justify-between p-4">
                              <div>
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="text-xl font-bold">{item.name}</h4>
                                  <span className="text-pumba-gold font-bold">{item.price}</span>
                                </div>
                                <p className="text-gray-300">{item.description}</p>
                              </div>
                              {item.featured && (
                                <div className="mt-3">
                                  <span className="bg-pumba-red text-white px-2 py-1 rounded-full text-xs font-bold">
                                    ΠΡΟΤΕΙΝΟΜΕΝΟ
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
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
        </div>
      </div>
    </div>;
};

export default Menu;
