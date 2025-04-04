
import { Utensils, Coffee, Pizza, Salad } from 'lucide-react';
import React from 'react';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  featured?: boolean;
}

export interface MenuCategory {
  category: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

// New menu items with Greek food
const menuItems: MenuCategory[] = [
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
      },
      {
        name: "Φέτα",
        description: "Πιάτο δίχως φέτα δεν έχει νοστιμάδα! Πρόσθεσε φέτα στην παραγγελία σου και συνδύασέ την με σαλάτα για ένα ολοκληρωμένο γεύμα.",
        price: "3,50€"
      },
      {
        name: "Καυτερή πιπεριά",
        description: "",
        price: "1,50€"
      },
      {
        name: "Πίτα παραδοσιακή",
        description: "Σκέτη",
        price: "0,50€"
      },
      {
        name: "Ψωμί",
        description: "Μερίδα",
        price: "0,50€"
      }
    ]
  },
  {
    category: "Σαλάτες",
    icon: <Salad className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Caesar's",
        description: "Σαλάτα με iceberg, ντοματίνια, κρουτόν, μπέικον, κοτόπουλο, καλαμπόκι, παρμεζάνα",
        price: "7,40€"
      },
      {
        name: "Healthy",
        description: "Σαλάτα με ανάμεικτα baby λαχανικά, φιλέτο πράσινου μήλου, πούδρα παρμεζάνας, μαύρο σουσάμι, ντοματίνια, ξηροί καρποί & dressing βαλσάμικο",
        price: "6,20€"
      },
      {
        name: "Pumba",
        description: "Σαλάτα με ανάμεικτα baby λαχανικά, ντοματίνια, παρμεζάνα, απάκι & dressing βαλσάμικου",
        price: "6,70€"
      },
      {
        name: "Χωριάτικη",
        description: "Ντομάτα, αγγούρι, κρεμμύδι, πιπεριά, ελιές & φέτα ΠΟП",
        price: "7,40€"
      },
      {
        name: "Ντάκος",
        description: "Καρέ ντομάτας, κρεμμύδι, ελιές, κάππαρη, φέτα ΠΟП & κρητικό ντάκο",
        price: "6,00€"
      },
      {
        name: "Αγγουροντομάτα",
        description: "Σαλάτα με ντομάτα, αγγούρι, φρέσκο κρεμμύδι, ξηρό κρεμμύδι, πιπεριά πράσινη & πιπεριά κόκκινη",
        price: "5,00€"
      },
      {
        name: "Πικάντικη",
        description: "Σαλάτα με λάχανο λευκό, λάχανο κόκκινο, καρότο, πιπεριά πράσινη & σέλινο",
        price: "4,50€"
      },
      {
        name: "Μαρούλι",
        description: "Σαλάτα με μαρούλι, αγγούρι & φρέσκο κρεμμύδι",
        price: "4,50€"
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
        name: "Ham burger",
        description: "Ψωμάκι brioche με σουσάμι με μπιφτέκι μοσχαρίσιο, ντομάτα, αγγουρομαγιονέζα, ketchup & μουστάρδα",
        price: "4,80€"
      },
      {
        name: "Crispy Schnitzel Burger",
        description: "Ψωμάκι brioche με σνίτσελ κοτόπουλο, μπέικον, ντομάτα & iceberg",
        price: "5,00€"
      },
      {
        name: "Soki's burger",
        description: "Ψωμάκι brioche με μπιφτέκι μοσχαρίσιο, λιωμένο cheddar, ντομάτα, sweet chili & μαγιονέζα μαύρης τρούφας",
        price: "6,40€"
      },
      {
        name: "Nala's burger",
        description: "Ψωμάκι brioche με mesclun, chutney ντομάτας, κεφαλοτύρι σαγανάκι, πίκλες αγγουριού & ντομάτα",
        price: "4,90€"
      },
      {
        name: "Vegetarian burger",
        description: "Ψωμάκι brioche με μπιφτέκι λαχανικών, iceberg, ντομάτα, σως ταχίνι, ketchup & μουστάρδα",
        price: "4,30€"
      },
      {
        name: "Kid's burger",
        description: "Ψωμάκι brioche με μπιφτέκι μοσχαρίσιο, ketchup & μουστάρδα",
        price: "3,70€"
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
        description: "Η Coca-Cola Zero είναι η ιδανική επιλογή για όσους θέλουν την υπέροχη αυθεντική γεύση της Coca‑Cola, χωρίς ζάχαρη και θερμίδες",
        price: "1,80€"
      },
      {
        name: "Coca-Cola Stevia 330ml",
        description: "Με τη Coca-Cola Stevia απολαμβάνετε τη μοναδική, δροσιστική γεύση της Coca-Cola χωρίς θερμίδες και ζάχαρη, με γλυκαντικό από το φυτό Στέβια",
        price: "1,80€"
      },
      {
        name: "Coca-Cola Zero Lemon 330ml",
        description: "Με τη νέα Coca-Cola Zero Λεμόνι, μπορείτε να απολαμβάνετε την υπέροχη γεύση της Coca-Cola Zero, χωρίς ζάχαρη και θερμίδες και με μοναδική γεύση λεμόνι",
        price: "1,80€"
      },
      {
        name: "Fanta Κόκκινη 330ml",
        description: "Η Πορτοκαλάδα Fanta είναι η αγαπημένη πορτοκαλάδα των εφήβων στην Ελλάδα. Περιέχει 20% χυμό πορτοκαλιού",
        price: "1,80€"
      },
      {
        name: "Fanta Λεμόνι 330ml",
        description: "Η Fanta Λεμονάδα περιέχει 7% χυμό λεμονιού, φυσικά αρώματα λεμονιού και αμέτρητες φυσαλίδες",
        price: "1,80€"
      },
      {
        name: "Sprite 330ml",
        description: "Το πρώτο κουτάκι Sprite άνοιξε το 1961 και από τότε κρατάει δροσερή την κορυφή της κατηγορίας αναψυκτικών lemon-lime",
        price: "1,80€"
      },
      {
        name: "Schweppes Soda Water 330ml",
        description: "Το πρώτο ανθρακούχο αναψυκτικό στον κόσμο, διατηρεί μέχρι και σήμερα την αυθεντική συνταγή του Jacob Schweppe από το 1783",
        price: "1,80€"
      },
      {
        name: "Coca-Cola 500ml",
        description: "Κλασική Coca-Cola σε μεγαλύτερη συσκευασία",
        price: "2,20€"
      },
      {
        name: "Coca-Cola Zero 500ml",
        description: "Coca-Cola Zero χωρίς ζάχαρη και θερμίδες σε μεγαλύτερη συσκευασία",
        price: "2,20€"
      },
      {
        name: "Fanta Κόκκινη 500ml",
        description: "Η Πορτοκαλάδα Fanta με 20% χυμό πορτοκαλιού σε μεγαλύτερη συσκευασία",
        price: "2,20€"
      },
      {
        name: "Fanta Λεμόνι 500ml",
        description: "Η Fanta Λεμονάδα περιέχει 7% χυμό λεμονιού σε μεγαλύτερη συσκευασία",
        price: "2,20€"
      },
      {
        name: "Amita Πορτοκάλι, Μήλο & Καρότο 330ml",
        description: "100% Φυσικός χυμός φρούτων χωρίς προσθήκη ζάχαρης με γεύση μήλο-πορτοκάλι-καρότο",
        price: "1,50€"
      },
      {
        name: "Amita Motion 330ml",
        description: "Ο πρώτος πολυβιταμινούχος 100% φυσικός χυμός με 9 φρούτα και 7 βιταμίνες",
        price: "1,80€"
      },
      {
        name: "Lipton Ice Tea Λεμόνι 330ml",
        description: "Με την ηλιόλουστη, αναζωογονητική του γεύση και το νόστιμο μείγμα από φύλλα τσαγιού και λεμόνι",
        price: "1,80€"
      },
      {
        name: "Lipton Ice Tea Ροδάκινο 330ml",
        description: "Πιές μια γουλιά για να νιώσεις μια έκρηξη γεύσης ροδάκινου μαζί με φρουτώδη γεύση",
        price: "1,80€"
      },
      {
        name: "Νερό 500ml",
        description: "Εμφιαλωμένο νερό",
        price: "0,50€"
      },
      {
        name: "Νερό 1.5lt",
        description: "Το νερό είναι ιδανικό για να σας ξεδιψάσει και να σας αναζωογονήσει κάθε στιγμή της ημέρας",
        price: "1,00€"
      }
    ]
  }
];

export default menuItems;
