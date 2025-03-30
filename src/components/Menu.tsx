
import React from 'react';

const menuItems = [
  {
    category: "Γύροι",
    items: [
      { name: "Γύρος Χοιρινός", description: "Ζουμερός χοιρινός γύρος, με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", price: "4.20€" },
      { name: "Γύρος Κοτόπουλο", description: "Τρυφερό φιλέτο κοτόπουλο, με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", price: "4.20€" },
      { name: "Special Γύρος", description: "Ο αγαπημένος σας γύρος με έξτρα τυρί, μπέικον και σως BBQ", price: "5.40€" },
    ]
  },
  {
    category: "Σουβλάκια",
    items: [
      { name: "Καλαμάκι Χοιρινό", description: "Ζουμερό χοιρινό καλαμάκι με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", price: "3.80€" },
      { name: "Καλαμάκι Κοτόπουλο", description: "Τρυφερό φιλέτο κοτόπουλο καλαμάκι με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", price: "3.80€" },
      { name: "Καλαμάκι Κεμπάπ", description: "Παραδοσιακό κεμπάπ με φρέσκιες πατάτες, ντομάτα, κρεμμύδι & σάλτσα", price: "3.80€" },
    ]
  },
  {
    category: "Μερίδες",
    items: [
      { name: "Μερίδα Γύρος Χοιρινός", description: "Μερίδα ζουμερό χοιρινό γύρο με φρέσκιες πατάτες, σαλάτα & σάλτσα", price: "8.50€", featured: true },
      { name: "Μερίδα Γύρος Κοτόπουλο", description: "Μερίδα τρυφερό φιλέτο κοτόπουλο με φρέσκιες πατάτες, σαλάτα & σάλτσα", price: "8.50€" },
      { name: "Μερίδα Καλαμάκια", description: "Μερίδα με 3 καλαμάκια της επιλογής σας, φρέσκιες πατάτες, σαλάτα & σάλτσα", price: "9.50€" },
    ]
  },
  {
    category: "Ορεκτικά & Συνοδευτικά",
    items: [
      { name: "Πατάτες Pumba", description: "Τηγανιτές πατάτες με σάλτσα, τυρί & μπέικον", price: "3.50€" },
      { name: "Τζατζίκι", description: "Σπιτικό τζατζίκι με αγγούρι, σκόρδο & γιαούρτι", price: "2.50€" },
      { name: "Φέτα", description: "Παραδοσιακή ελληνική φέτα με ελαιόλαδο & ρίγανη", price: "3.00€" },
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
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className={`menu-item ${item.featured ? 'border-pumba-red' : ''}`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-xl font-bold">{item.name}</h4>
                        <span className="text-pumba-gold font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-300 mt-2">{item.description}</p>
                      {item.featured && (
                        <div className="mt-3">
                          <span className="bg-pumba-red text-white px-2 py-1 rounded-full text-xs font-bold">
                            ΠΡΟΤΕΙΝΟΜΕΝΟ
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 reveal">
            <p className="text-lg mb-6">Θέλετε να δείτε το πλήρες μενού μας;</p>
            <button className="btn-primary">Πλήρες Μενού</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
