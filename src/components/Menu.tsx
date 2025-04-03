
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingBag, Utensils, Coffee, Pizza } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// New menu items with Greek food
const menuItems = [
  {
    category: "Ορεκτικά",
    icon: <Utensils className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Hakuna Patata",
        description: "Πατάτες τηγανητές με λιωμένο cheddar & crispy μπέικον",
        price: "5,80€"
      },
      {
        name: "Μπουγιουρντί",
        description: "Παραδοσιακό μπουγιουρντί σε πήλινο με φέτα",
        price: "5,80€"
      },
      {
        name: "Κροκέτες 4 τυριών",
        description: "4 Τεμάχια. Συνοδεύονται από μαρμελάδα ντομάτας",
        price: "5,60€"
      },
      {
        name: "Κεφαλοτύρι σαγανάκι",
        description: "Συνοδεύεται από chutney ντομάτας",
        price: "6,00€"
      },
      {
        name: "Πατάτες τηγανητές",
        description: "Φρεσκοκομμένες πατάτες τηγανητές",
        price: "3,50€"
      }
    ]
  },
  {
    category: "Σαλάτες",
    icon: <Pizza className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Caesar's",
        description: "Σαλάτα με iceberg, ντοματίνια, κρουτόν, μπέικον, κοτόπουλο, καλαμπόκι, παρμεζάνα",
        price: "7,40€"
      },
      {
        name: "Pumba",
        description: "Σαλάτα με ανάμεικτα baby λαχανικά, ντοματίνια, παρμεζάνα, απάκι & dressing βαλσάμικου",
        price: "6,70€"
      },
      {
        name: "Χωριάτικη",
        description: "Ντομάτα, αγγούρι, κρεμμύδι, πιπεριά, ελιές & φέτα ΠΟΠ",
        price: "7,40€"
      },
      {
        name: "Ντάκος",
        description: "Καρέ ντομάτας, κρεμμύδι, ελιές, κάππαρη, φέτα ΠΟΠ & κρητικό ντάκο",
        price: "6,00€"
      }
    ]
  },
  {
    category: "Τυλιχτά Πίτες",
    icon: <Pizza className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Γύρος Χοιρινός",
        description: "Πίτα, γύρος χοιρινός, ντομάτα, κρεμμύδι, πατάτες, σως",
        price: "4,70€",
        featured: true
      },
      {
        name: "Γύρος Κοτόπουλο",
        description: "Πίτα, γύρος κοτόπουλο, ντομάτα, κρεμμύδι, πατάτες, σως",
        price: "4,70€"
      },
      {
        name: "Καλαμάκι Χοιρινό",
        description: "Πίτα, καλαμάκι χοιρινό, ντομάτα, κρεμμύδι, πατάτες, σως",
        price: "3,80€"
      },
      {
        name: "Καλαμάκι Κοτόπουλο",
        description: "Πίτα, καλαμάκι κοτόπουλο, ντομάτα, κρεμμύδι, πατάτες, σως",
        price: "3,80€"
      }
    ]
  },
  {
    category: "Μερίδες",
    icon: <Utensils className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Γύρος Χοιρινός",
        description: "Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "8,60€",
        featured: true
      },
      {
        name: "Γύρος Κοτόπουλο",
        description: "Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & σως μουστάρδας",
        price: "8,60€"
      },
      {
        name: "Σουβλάκι Χοιρινό",
        description: "4 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "7,80€"
      },
      {
        name: "Μπιφτέκι Μοσχαρίσιο",
        description: "3 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "8,10€"
      }
    ]
  },
  {
    category: "Pumba Special",
    icon: <Utensils className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Σκεπαστή Γύρος Χοιρινός",
        description: "2 Πίτες 21cm με γύρο χοιρινό, gouda & σως μουστάρδας. Με πατάτες τηγανητές",
        price: "6,90€",
        featured: true
      },
      {
        name: "Alabao Λαγάνα Γύρος",
        description: "Με γύρο χοιρινό, πατάτες, λάχανο, σως γιαουρτιού, ketchup & μουστάρδα",
        price: "5,90€"
      },
      {
        name: "Μπαζούκας Γύρος",
        description: "Τορτίγια με γύρο χοιρινό, αγγουροντομάτα, μαρούλι & κεφαλοτύρι",
        price: "5,60€"
      },
      {
        name: "Clubisio Γύρος",
        description: "2 Ατόμων. 3 Χειροποίητες πίτες 20cm με γύρο χοιρινό, gouda & μπέικον",
        price: "9,80€"
      }
    ]
  },
  {
    category: "Burgers",
    icon: <Pizza className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Pumba Double Burger",
        description: "Ψωμάκι brioche με 2 μπιφτέκια μοσχαρίσια, διπλό cheddar & μπέικον",
        price: "7,60€",
        featured: true
      },
      {
        name: "Cheeseburger",
        description: "Ψωμάκι brioche με μπιφτέκι μοσχαρίσιο, cheddar, ντομάτα & μαρούλι",
        price: "5,00€"
      },
      {
        name: "Crispy Schnitzel Burger",
        description: "Ψωμάκι brioche με σνίτσελ κοτόπουλο, μπέικον, ντομάτα & iceberg",
        price: "5,00€"
      },
      {
        name: "Chaos Burger",
        description: "Ψωμάκι brioche με μπιφτέκι Black Angus 150gr, μπέικον & σως Jack Daniel's",
        price: "8,30€"
      }
    ]
  },
  {
    category: "Αναψυκτικά",
    icon: <Coffee className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Coca-Cola 330ml",
        description: "Κλασική Coca-Cola",
        price: "1,80€"
      },
      {
        name: "Coca-Cola Zero 330ml",
        description: "Χωρίς ζάχαρη και θερμίδες",
        price: "1,80€"
      },
      {
        name: "Sprite 330ml",
        description: "Αναζωογονητική λεμονάδα",
        price: "1,80€"
      },
      {
        name: "Νερό 500ml",
        description: "Εμφιαλωμένο νερό",
        price: "0,50€"
      }
    ]
  }
];

const Menu = () => {
  const isMobile = useIsMobile();
  
  const handleOrderClick = () => {
    window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
  };

  // Split categories for mobile view
  const getMenuLayout = () => {
    if (!isMobile) {
      // Desktop: 2 columns as original
      return (
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((category, idx) => (
            <div key={idx} className="reveal">
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-2xl font-bold text-pumba-red">{category.category}</h3>
              </div>
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${item.featured ? 'border border-pumba-red' : 'border border-transparent'}`}>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">{item.name}</h4>
                        <span className="text-pumba-gold font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                      {item.featured && <div className="mt-3">
                        <span className="bg-pumba-red text-white px-2 py-1 rounded-full text-xs font-bold">
                          ΠΡΟΤΕΙΝΟΜΕΝΟ
                        </span>
                      </div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      // Mobile: 2 columns layout
      // Create left and right column arrays
      const leftColumn = menuItems.filter((_, idx) => idx % 2 === 0);
      const rightColumn = menuItems.filter((_, idx) => idx % 2 === 1);
      
      return (
        <div className="grid grid-cols-2 gap-3">
          {/* Left Column */}
          <div className="space-y-5">
            {leftColumn.map((category, idx) => (
              <div key={idx} className="reveal">
                <div className="flex items-center gap-1 mb-3">
                  {category.icon}
                  <h3 className="text-lg font-bold text-pumba-red">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${item.featured ? 'border border-pumba-red' : 'border border-transparent'}`}>
                      <div className="p-3">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-bold">{item.name}</h4>
                          <span className="text-pumba-gold text-sm font-bold">{item.price}</span>
                        </div>
                        <p className="text-gray-300 text-xs">{item.description}</p>
                        {item.featured && <div className="mt-2">
                          <span className="bg-pumba-red text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                            ΠΡΟΤΕΙΝΟΜΕΝΟ
                          </span>
                        </div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-5">
            {rightColumn.map((category, idx) => (
              <div key={idx} className="reveal">
                <div className="flex items-center gap-1 mb-3">
                  {category.icon}
                  <h3 className="text-lg font-bold text-pumba-red">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${item.featured ? 'border border-pumba-red' : 'border border-transparent'}`}>
                      <div className="p-3">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-bold">{item.name}</h4>
                          <span className="text-pumba-gold text-sm font-bold">{item.price}</span>
                        </div>
                        <p className="text-gray-300 text-xs">{item.description}</p>
                        {item.featured && <div className="mt-2">
                          <span className="bg-pumba-red text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                            ΠΡΟΤΕΙΝΟΜΕΝΟ
                          </span>
                        </div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return <div id="menu" className="section bg-black text-white">
    <div className="container mx-auto">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center reveal">
          <span className="text-pumba-red">Μ</span>ενού
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto reveal">
          Απολαύστε αυθεντικές ελληνικές γεύσεις, φτιαγμένες με τα καλύτερα υλικά και πολλή αγάπη
        </p>
        
        {getMenuLayout()}
        
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
