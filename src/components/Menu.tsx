import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const menuItems = [
  {
    category: "Γύροι",
    items: [
      { 
        name: "Γύρος Χοιρινός", 
        description: "Ζουμερός χοιρινός γύρος, με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", 
        price: "4.20€",
        image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?q=80&w=1000&auto=format&fit=crop"
      },
      { 
        name: "Γύρος Κοτόπουλο", 
        description: "Τρυφερό φιλέτο κοτόπουλο, με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", 
        price: "4.20€",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1000&auto=format&fit=crop"
      },
      { 
        name: "Special Γύρος", 
        description: "Ο αγαπημένος σας γύρος με έξτρα τυρί, μπέικον και σως BBQ", 
        price: "5.40€",
        image: "https://images.unsplash.com/photo-1632825953570-57a47e3bd732?q=80&w=1000&auto=format&fit=crop"
      },
    ]
  },
  {
    category: "Σουβλάκια",
    items: [
      { 
        name: "Καλαμάκι Χοιρινό", 
        description: "Ζουμερό χοιρινό καλαμάκι με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", 
        price: "3.80€",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
      },
      { 
        name: "Καλαμάκι Κοτόπουλο", 
        description: "Τρυφερό φιλέτο κοτόπουλο καλαμάκι με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", 
        price: "3.80€",
        image: "https://images.unsplash.com/photo-1602418237125-baec591f0a8b?q=80&w=1000&auto=format&fit=crop"
      },
      { 
        name: "Καλαμάκι Κεμπάπ", 
        description: "Παραδοσιακό κεμπάπ με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", 
        price: "3.80€",
        image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?q=80&w=1000&auto=format&fit=crop"
      },
    ]
  },
  {
    category: "Μερίδες",
    items: [
      { 
        name: "Μερίδα Γύρος Χοιρινός", 
        description: "Μερίδα ζουμερό χοιρινό γύρο με φρέσκιες πατάτες, σαλάτα & σάλτσα", 
        price: "8.50€", 
        featured: true,
        image: "https://images.unsplash.com/photo-1654921553810-897658b0fb29?q=80&w=1000&auto=format&fit=crop"
      },
      { 
        name: "Μερίδα Γύρος Κοτόπουλο", 
        description: "Μερίδα τρυφερό φιλέτο κοτόπουλο με φρέσκιες πατάτες, σαλάτα & σάλτσα", 
        price: "8.50€",
        image: "https://images.unsplash.com/photo-1617476422576-76d7d263438c?q=80&w=1000&auto=format&fit=crop"
      },
      { 
        name: "Μερίδα Καλαμάκια", 
        description: "Μερίδα με 3 καλαμάκια της επιλογής σας, φρέσκιες πατάτες, σαλάτα & σάλτσα", 
        price: "9.50€",
        image: "https://images.unsplash.com/photo-1620807773206-49c1f2d16d63?q=80&w=1000&auto=format&fit=crop"
      },
    ]
  },
  {
    category: "Ορεκτικά & Συνοδευτικά",
    items: [
      { 
        name: "Πατάτες Pumba", 
        description: "Τηγανιτές πατάτες με σάλτσα, ��υρί & μπέικον", 
        price: "3.50€",
        image: "https://images.unsplash.com/photo-1623238913327-8e4ade5de5c8?q=80&w=1000&auto=format&fit=crop"
      },
      { 
        name: "Τζατζίκι", 
        description: "Σπιτικό τζατζίκι με αγγούρι, σκόρδο & γιαούρτι", 
        price: "2.50€",
        image: "https://images.unsplash.com/photo-1615935844198-ab8fbc9f4d1f?q=80&w=1000&auto=format&fit=crop"
      },
      { 
        name: "Φέτα", 
        description: "Παραδοσιακή ελληνική φέτα με ελαιόλαδο & ρίγανη", 
        price: "3.00€",
        image: "https://images.unsplash.com/photo-1624494489813-d7eba38186a8?q=80&w=1000&auto=format&fit=crop"
      },
    ]
  }
];

const Menu = () => {
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
                      className={`menu-item ${item.featured ? 'border-pumba-red' : ''}`}
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/3 w-full overflow-hidden rounded-lg">
                          <AspectRatio ratio={1 / 1} className="bg-slate-800">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="object-cover w-full h-full transition-all duration-500 hover:scale-110"
                            />
                          </AspectRatio>
                        </div>
                        <div className="md:w-2/3 w-full flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="text-xl font-bold">{item.name}</h4>
                              <span className="text-pumba-gold font-bold">{item.price}</span>
                            </div>
                            <p className="text-gray-300 mt-2">{item.description}</p>
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
              onClick={() => window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank')}
            >
              Πλήρες Μενού
              <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
