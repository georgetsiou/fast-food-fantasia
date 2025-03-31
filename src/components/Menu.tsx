
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingBag } from 'lucide-react';

const menuItems = [
  {
    category: "Γύροι",
    items: [
      { 
        name: "Γύρος Χοιρινός", 
        description: "Πίτα, γύρος χοιρινός, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "4.70€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041559?v=202307312146"
      },
      { 
        name: "Γύρος Κοτόπουλο", 
        description: "Πίτα, γύρος κοτόπουλο, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "4.70€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041560?v=202307312146"
      },
      { 
        name: "Γύρος Χοιρινός Special", 
        description: "Πίτα, γύρος χοιρινός, ντομάτα, κρεμμύδι, πατάτες, τυρί, μπέικον, σως BBQ", 
        price: "5.90€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041564?v=202307312146"
      },
      { 
        name: "Γύρος Κοτόπουλο Special", 
        description: "Πίτα, γύρος κοτόπουλο, ντομάτα, κρεμμύδι, πατάτες, τυρί, μπέικον, σως BBQ", 
        price: "5.90€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041565?v=202307312146"
      },
      { 
        name: "King Γύρος", 
        description: "Μεγαλύτερη πίτα, διπλός γύρος χοιρινός, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "7.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041568?v=202307312146"
      },
      { 
        name: "King Κοτόπουλο", 
        description: "Μεγαλύτερη πίτα, διπλός γύρος κοτόπουλο, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "7.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041570?v=202307312146"
      },
    ]
  },
  {
    category: "Σουβλάκια",
    items: [
      { 
        name: "Καλαμάκι Χοιρινό", 
        description: "Πίτα, καλαμάκι χοιρινό, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "3.80€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041553?v=202307312146"
      },
      { 
        name: "Καλαμάκι Κοτόπουλο", 
        description: "Πίτα, καλαμάκι κοτόπουλο, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "3.80€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041555?v=202307312146"
      },
      { 
        name: "Κεμπάπ", 
        description: "Πίτα, κεμπάπ, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "3.80€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041562?v=202307312146"
      },
      { 
        name: "Μπιφτέκι", 
        description: "Πίτα, μπιφτέκι μοσχαρίσιο, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "3.80€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041554?v=202307312146"
      },
      { 
        name: "Λουκάνικο", 
        description: "Πίτα, λουκάνικο χωριάτικο, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "3.80€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041558?v=202307312146"
      },
      { 
        name: "Μπιφτέκι Κοτόπουλο", 
        description: "Πίτα, μπιφτέκι κοτόπουλο, ντομάτα, κρεμμύδι, πατάτες, σως", 
        price: "3.80€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041557?v=202307312146"
      },
    ]
  },
  {
    category: "Μερίδες",
    items: [
      { 
        name: "Μερίδα Γύρος Χοιρινός", 
        description: "Γύρος χοιρινός, πατάτες, 2 πίτες, ντομάτα, κρεμμύδι, σως", 
        price: "10.00€", 
        featured: true,
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041580?v=202307312146"
      },
      { 
        name: "Μερίδα Γύρος Κοτόπουλο", 
        description: "Γύρος κοτόπουλο, πατάτες, 2 πίτες, ντομάτα, κρεμμύδι, σως", 
        price: "10.00€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041581?v=202307312146"
      },
      { 
        name: "Μερίδα Καλαμάκια Χοιρινά", 
        description: "3 καλαμάκια χοιρινά, πατάτες, 2 πίτες, ντομάτα, κρεμμύδι, σως", 
        price: "10.00€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041576?v=202307312146"
      },
      { 
        name: "Μερίδα Καλαμάκια Κοτόπουλο", 
        description: "3 καλαμάκια κοτόπουλο, πατάτες, 2 πίτες, ντομάτα, κρεμμύδι, σως", 
        price: "10.00€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041577?v=202307312146"
      },
      { 
        name: "Μερίδα Κεμπάπ", 
        description: "4 τεμάχια κεμπάπ, πατάτες, 2 πίτες, ντομάτα, κρεμμύδι, σως", 
        price: "10.00€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041582?v=202307312146"
      },
      { 
        name: "Μερίδα Μπιφτέκια", 
        description: "2 μπιφτέκια μοσχαρίσια, πατάτες, 2 πίτες, ντομάτα, κρεμμύδι, σως", 
        price: "10.00€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041578?v=202307312146"
      },
    ]
  },
  {
    category: "Σαλάτες & Ορεκτικά",
    items: [
      { 
        name: "Πατάτες", 
        description: "Φρέσκιες τηγανιτές πατάτες", 
        price: "3.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041597?v=202307312146"
      },
      { 
        name: "Τζατζίκι", 
        description: "Κλασικό τζατζίκι", 
        price: "3.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041598?v=202307312146"
      },
      { 
        name: "Φέτα", 
        description: "Φέτα με ελαιόλαδο και ρίγανη", 
        price: "3.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041599?v=202307312146"
      },
      { 
        name: "Χωριάτικη", 
        description: "Ντομάτα, αγγούρι, πιπεριά, κρεμμύδι, ελιές, φέτα", 
        price: "6.00€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041600?v=202307312146"
      },
      { 
        name: "Πιπεριές καυτερές", 
        description: "Πράσινες πιπεριές καυτερές", 
        price: "2.00€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041594?v=202307312146"
      },
    ]
  },
  {
    category: "Μπέργκερ",
    items: [
      { 
        name: "Classic Burger", 
        description: "Μπιφτέκι μοσχαρίσιο, ντομάτα, μαρούλι, κρεμμύδι, μαγιονέζα, κέτσαπ", 
        price: "5.00€",
        featured: true,
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041601?v=202307312146"
      },
      { 
        name: "Cheese Burger", 
        description: "Μπιφτέκι μοσχαρίσιο, τυρί, ντομάτα, μαρούλι, κρεμμύδι, μαγιονέζα, κέτσαπ", 
        price: "5.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041603?v=202307312146"
      },
      { 
        name: "Double Burger", 
        description: "Διπλό μπιφτέκι μοσχαρίσιο, διπλό τυρί, ντομάτα, μαρούλι, κρεμμύδι, μαγιονέζα, κέτσαπ", 
        price: "7.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041604?v=202307312146"
      },
    ]
  },
  {
    category: "Αναψυκτικά",
    items: [
      { 
        name: "Coca Cola 330ml", 
        description: "Κλασική Coca Cola", 
        price: "1.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041618?v=202307312146"
      },
      { 
        name: "Sprite 330ml", 
        description: "Κλασικό Sprite", 
        price: "1.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041621?v=202307312146"
      },
      { 
        name: "Νερό 500ml", 
        description: "Εμφιαλωμένο νερό", 
        price: "0.50€",
        image: "https://cdn.e-food.gr/cdn-cgi/image/f=auto/shop/527484246/items/000000000000041624?v=202307312146"
      },
    ]
  }
];

const Menu = () => {
  const handleOrderClick = () => {
    window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
  };

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
          
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((category, idx) => (
              <div key={idx} className="reveal">
                <h3 className="text-2xl font-bold mb-4 text-pumba-red">{category.category}</h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${item.featured ? 'border border-pumba-red' : 'border border-transparent'}`}
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 w-full overflow-hidden">
                          <AspectRatio ratio={1 / 1} className="bg-slate-800">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="object-cover w-full h-full transition-all duration-500 hover:scale-110"
                            />
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
          
          <div className="text-center mt-16 reveal">
            <p className="text-lg mb-6">Θέλετε να δείτε το πλήρες μενού μας;</p>
            <Button 
              className="btn-primary flex items-center gap-2"
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

export default Menu;
