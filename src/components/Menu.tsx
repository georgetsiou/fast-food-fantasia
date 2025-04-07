import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingBag, Utensils, Coffee, Pizza, Salad, Beef, Sandwich } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// New menu items with Greek food
const menuItems = [
  {
    category: "Αλοιφές",
    icon: <Utensils className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Χτυπητή",
        description: "",
        price: "Από 0,50€"
      },
      {
        name: "Τζατζίκι",
        description: "Εδώ δεν χωράνε συστάσεις. Τζατζίκι, το κλασικό, το αληθινό, το αγαπημένο. Ζήτα άδεια από το��ς παρευρισκόμενους και κατανάλωσε εντελώς ανεύθυνα!",
        price: "Από 0,50€"
      },
      {
        name: "Ουγγαρέζα",
        description: "Στα σος κάθε γεύματος, οι σως που το συνοδεύουν!",
        price: "Από 0,50€"
      },
      {
        name: "Κηπουρού",
        description: "Στα σος κάθε γεύματος, οι σως που το συνοδεύουν!",
        price: "Από 0,50€"
      },
      {
        name: "Ρώσικη",
        description: "Στα σος κάθε γεύματος, οι σως που το συνοδεύουν!",
        price: "Από 0,50€"
      },
      {
        name: "Σως Pumba",
        description: "Στα σος κάθε γεύματος, οι σως που το συνοδεύουν!",
        price: "Από 0,50€"
      },
      {
        name: "Σως γιαουρτιού",
        description: "Στα σος κάθε γεύματος, οι σως που το συνοδεύουν!",
        price: "Από 0,50€"
      },
      {
        name: "Σως μουστάρδας",
        description: "Στα σος κάθε γεύματος, οι σως που το συνοδεύουν!",
        price: "Από 0,50€"
      },
      {
        name: "Αγγουρομαγιονέζα",
        description: "Στα σος κάθε γεύματος, οι σως που το συνοδεύουν!",
        price: "Από 0,50€"
      },
      {
        name: "Πάπρικα",
        description: "Στα σος κάθε γεύματος, οι σως που το συνοδεύουν!",
        price: "Από 0,50€"
      },
      {
        name: "Μαγιονέζα",
        description: "Λέγεται μαγιονέζα και θα έπρεπε να γράφεται \"μαγιονΑΙζα\" αφού από όλους, παίρνει ένα μεγάλο ΝΑΙ!",
        price: "Από 0,50€"
      }
    ]
  },
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
        description: "Φρεσκ��κομμένες πατάτες τηγανητές",
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
    category: "Τεμάχια",
    icon: <Beef className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Σουβλάκι χοιρινό",
        description: "",
        price: "Από 1,60€"
      },
      {
        name: "Πανσέτα",
        description: "",
        price: "Από 1,60€"
      },
      {
        name: "Φιλέτο κοτόπουλο μπούτι",
        description: "",
        price: "Από 2,40€"
      },
      {
        name: "Φιλέτο κοτόπουλο στήθος",
        description: "",
        price: "Από 2,10€"
      },
      {
        name: "Σουβλάκι κοτόπουλο",
        description: "",
        price: "Από 1,60€"
      },
      {
        name: "Κοτομπέικον",
        description: "",
        price: "Από 1,90€"
      },
      {
        name: "Σνίτσελ κοτόπουλο",
        description: "",
        price: "Από 2,00€"
      },
      {
        name: "Λουκάνικο ��αυαρίας",
        description: "",
        price: "Από 1,90€"
      },
      {
        name: "Σουτζουκάκι",
        description: "",
        price: "Από 1,60€"
      },
      {
        name: "Σουτζουκάκι γεμιστό με Philadelphia",
        description: "",
        price: "Από 2,00€"
      },
      {
        name: "Μπιφτέκι μοσχαρίσιο",
        description: "",
        price: "Από 2,10€"
      },
      {
        name: "Μπιφτέκι γεμιστό με gouda",
        description: "",
        price: "Από 2,00€"
      },
      {
        name: "Μπιφτέκι λαχανικών",
        description: "",
        price: "Από 1,90€"
      },
      {
        name: "Σουβλάκι μανιτάρια & ντοματίνια",
        description: "",
        price: "Από 1,50€"
      }
    ]
  },
  {
    category: "Σάντουιτς",
    icon: <Sandwich className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Γύρος χοιρινός σε σάντουιτς",
        description: "Σάντουιτς γύρος χοιρινός με τα υλικά της επιλογής σας",
        price: "Από 4,40€"
      },
      {
        name: "Σουβλάκι χοιρινό σε σάντουιτς",
        description: "Σάντουιτς σουβλάκι χοιρινό με τα υλικά της επιλογής σας",
        price: "Από 4,00€"
      },
      {
        name: "Σουβλάκι κοτόπουλο σε σάντουιτς",
        description: "Σάντουιτς σουβλάκι κοτόπουλο με τα υλικά της επιλογής σας",
        price: "Από 4,00€"
      },
      {
        name: "Πανσέτα χοιρινή σε σάντουιτς",
        description: "Σάντουιτς πανσέτα χοιρινή με τα υλικά της επιλογής σας",
        price: "Από 4,00€"
      },
      {
        name: "Φιλέτο κοτόπουλο στήθος σε σάντουιτς",
        description: "Σάντουιτς φιλέτο κοτόπουλο στήθος με τα υλικά της επιλογής σας",
        price: "Από 4,00€"
      },
      {
        name: "Φιλέτο κοτόπουλο μπούτι σε σάντουιτς",
        description: "Σάντουιτς φιλέτο κο��όπουλο μπούτ�� με τα υλικά της επιλογής σας",
        price: "Από 4,00€"
      },
      {
        name: "Σουτζουκάκι σε σάντουιτς",
        description: "Σάντουιτς σουτζουκάκι με τα υλικά της επιλογής σας",
        price: "Από 4,00€"
      },
      {
        name: "Κοτομπουκιές σε σάντουιτς",
        description: "Σάντουιτς κοτομπουκιές με τα υλικά της επιλογής σας",
        price: "Από 4,00€"
      },
      {
        name: "Κοτομπέικον σε σάντουιτς",
        description: "Σάντουιτς κοτομπέικον με τα υλικά της επιλογής σας",
        price: "Από 4,00€"
      },
      {
        name: "Σνίτσελ κοτόπουλο σε σάντουιτς",
        description: "Σάντουιτς σνίτσελ κοτόπουλο με τα υλικά της επιλογής σας",
        price: "Από 4,00€"
      },
      {
        name: "Λουκάνικο Βαυβαρίας σε σάντουιτς",
        description: "Σάντουιτς λουκάνικο Βαυβαρίας με τα υλικά της επιλογής σας",
        price: "Από 3,90€"
      },
      {
        name: "Σουτζουκάκι γεμιστό με Philadelphia σε σάντουιτς",
        description: "Σάντουιτς σουτζουκάκι γεμιστό με Philadelphia με τα υλικά της επιλογής σας",
        price: "Από 4,20€"
      },
      {
        name: "Μπιφτέκι μοσχαρίσιο σε σάντουιτς",
        description: "Σάντουιτς μπιφτέκι μοσχαρίσιο με τα υλικά της επιλογής σας",
        price: "Από 3,80€"
      },
      {
        name: "Μπιφτέκι γεμιστό με gouda σε σάντουιτς",
        description: "Σάντουιτς μπιφτέκι μοσχαρίσιο γεμιστό με Philadelphia με τα υλικά της επιλογής σας",
        price: "Από 3,80€"
      },
      {
        name: "Μπιφτέκι λαχανικών σε σάντουιτς",
        description: "Σάντουιτς μπιφτέκι λαχανικών με τα υλικά της επιλογής σας",
        price: "Από 3,80€"
      },
      {
        name: "Σουβλάκι μανιτάρια & ντοματίνια σε σάντουιτς",
        description: "Σάντουιτς σουβλάκι μανιτάρια & ντοματίνια με τα υλικά της επιλογής σας",
        price: "Από 3,70€"
      },
      {
        name: "Καλαμαράκια πανέ σε σάντουιτς",
        description: "Σάντουιτς καλαμαράκια πανέ με τα υλικά της επιλογής σας",
        price: "Από 4,10€"
      },
      {
        name: "Πατατόπιτα σε σάντουιτς",
        description: "Σάντουιτς χωρίς κρέας με τα υλικά της επιλογής σας",
        price: "Από 2,70€"
      }
    ]
  },
  {
    category: "Αθηναϊκή πίτα",
    icon: <Pizza className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Σουβλάκι χοιρινό σε Αθηναϊκή πίτα",
        description: "Αθηναϊκή πίτα 16cm σουβλάκι χοιρινό με τα υλικά της επιλογής σας",
        price: "Από 2,50€"
      },
      {
        name: "Σουβλάκι κοτόπουλο σε Αθηναϊκή πίτα",
        description: "Αθηναϊκή πίτα 16cm σουβλάκι κοτόπουλο με τα υλικά της επιλογής σας",
        price: "Από 2,50€"
      },
      {
        name: "Παν��έτα χοιρινή σε Αθηναϊκή πίτα",
        description: "Αθηναϊκή πίτα 16cm πανσέτα χοιρινή με τα υλικά της επιλογής σας",
        price: "Από 2,50€"
      },
      {
        name: "Σουτζουκάκι σε Αθηναϊκή πίτα",
        description: "Αθηναϊκή πίτα 16cm σουτζουκάκι με τα υλικά της επιλογής σας",
        price: "Από 2,50€"
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
        description: "Πίτα, καλαμάκι κοτόπουλ��, ντομάτα, κρεμμύδι, πατάτες, σως",
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
        name: "Σουβλάκι κοτόπουλο μερίδα",
        description: "4 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & σως μουστάρδας",
        price: "7,80€"
      },
      {
        name: "Πανσέτα μερίδα",
        description: "3 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "7,70€"
      },
      {
        name: "Φιλέτο κοτόπουλο στήθος μερίδα",
        description: "2 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & σως μουστάρδας",
        price: "7,70€"
      },
      {
        name: "Φιλέτο κοτόπουλο μπούτι μερίδα",
        description: "2 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & σως μουστάρδας",
        price: "7,70€"
      },
      {
        name: "Κοτομπουκιές μερίδα",
        description: "Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & σως μουστάρδας",
        price: "7,70€"
      },
      {
        name: "Κοτομπέικον μερίδα",
        description: "3 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & σως μουστάρδας",
        price: "8,10€"
      },
      {
        name: "Σνίτσελ κοτόπουλο μερίδα",
        description: "2 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & σως μουστάρδας",
        price: "7,70€"
      },
      {
        name: "Λουκάνικο Βαυαρίας μερίδα",
        description: "3 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "7,70€"
      },
      {
        name: "Σουτζουκάκι μερίδα",
        description: "4 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "7,80€"
      },
      {
        name: "Σουτζουκάκι γεμιστό με Philadelphia μερίδα",
        description: "3 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "8,10€"
      },
      {
        name: "Μπιφτέκι Μοσχαρίσιο",
        description: "3 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "8,10€"
      },
      {
        name: "Μπιφτέκι γεμιστό με gouda μερίδα",
        description: "3 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "7,70€"
      },
      {
        name: "Μπιφτέκι λαχανικών μερίδα",
        description: "3 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & τζατζίκι",
        price: "7,30€"
      },
      {
        name: "Σουβλάκι μανιτάρια & ντοματίνια μερίδα",
        description: "3 Τεμάχια. Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & σως μουστάρδας",
        price: "6,50€"
      },
      {
        name: "Καλαμαράκια πανέ μερίδα",
        description: "Συνοδεύεται από πίτα, ανάμεικτη σαλάτα, πατάτες τηγανητές & σως μουστάρδας",
        price: "8,10€"
      }
    ]
  },
  {
    category: "Club Sandwiches",
    icon: <Sandwich className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Club sandwich κλασικό",
        description: "Με ζαμπόν, μπέικον, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές",
        price: "Από 6,00€",
        featured: true
      },
      {
        name: "Club sandwich κοτόπουλο",
        description: "Με φιλέτο κοτόπουλο, ζαμπόν, μπέικον, gouda, ντομάτα, μαρούλι & μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές",
        price: "Από 6,70€"
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
        name: "Σκεπαστή γύρος κοτόπουλο",
        description: "2 Πίτες 21cm με γύρο κοτόπουλο, gouda & σως μουστάρδας. Συνοδεύεται από πατάτες τηγανητές",
        price: "Από 6,90€"
      },
      {
        name: "Alabao λαγάνα γύρος χοιρινός",
        description: "Με γύρο χοιρινό, πατάτες τηγανητές, λάχανο, σως γιαουρτιού, ketchup & μουστάρδα",
        price: "Από 5,90€"
      },
      {
        name: "Alabao λαγάνα γύρος κοτόπουλο",
        description: "Με γύρο κοτόπουλο, πατάτες τηγανητές, λάχανο, σως γιαουρτιού, ketchup & μουστάρδα",
        price: "Από 5,90€"
      },
      {
        name: "Alabao μπαγκέτα γύρος χοιρινός",
        description: "Με γύρο χοιρινό, πατάτες τηγανητές, λάχανο, ketchup, μουστάρδα & σως Pumba",
        price: "Από 5,90€"
      },
      {
        name: "Alabao μπαγκέτα γύρος κοτόπουλο",
        description: "Με γύρο κοτόπουλο, πατάτες τηγανητές, λάχανο, ketchup, μουστάρδα & σως Pumba",
        price: "Από 5,90€"
      },
      {
        name: "Μπαζούκας γύρος χοιρινός",
        description: "Τορτίγια με γύρο χοιρινό, αγγουροντομάτα, μαρούλι, ketchup, μουστάρδα, σως γιαουρτιού, πατάτες τηγανητές & κεφαλοτύρι",
        price: "Από 5,60€"
      },
      {
        name: "Μπαζούκας γύρος κοτόπουλο",
        description: "Τορτίγια με γύρο κοτόπουλο, αγγουροντομάτα, μαρούλι, ketchup, μουστάρδα, σως μουστάρδας, πατάτες τηγανητές & κεφαλοτύρι",
        price: "Από 5,60€"
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
    category: "Pumba Premium",
    icon: <Utensils className="text-pumba-red" size={24} />,
    items: [
      {
        name: "Μπριζόλα μοσχαρίσια μερίδα",
        description: "Συνοδεύεται από πατάτες τηγανητές, σαλάτα & dip της επιλογής σας",
        price: "Από 20,00€",
        featured: true
      },
      {
        name: "Chaos burger",
        description: "Ψωμάκι brioche με μπιφτέκι Black Angus 150gr, ξεροψημένο μπέικον, χειροποίητη mousse φέτας, σως Jack Daniel's, ντομάτα & πίκλες αγγουριού. Συνοδεύεται από πατάτες τηγανητές",
        price: "Από 8,30€",
        featured: true
      },
      {
        name: "Clubisio γύρος χοιρινός",
        description: "2 Ατόμων. 3 Χειροποίητες πίτες 20cm με γύρο χοιρινό, gouda, ξεροψημένο μπέικον, σως γιαουρτιού, ντομάτα & μαρούλι. Συνοδεύεται από πατάτες τηγανητές",
        price: "Από 9,80€",
        featured: true
      },
      {
        name: "Clubisio γύρος κοτόπουλο",
        description: "2 Ατόμων. 3 Χειροποίητες πίτες 20cm με γύρο κοτόπουλο, gouda, ξεροψημένο μπέικον, σως γιαουρτιού, ντομάτα & μαρούλι. Συνοδεύεται από πατάτες τηγανητές",
        price: "Από 9,80€"
      },
      {
        name: "Μπριζόλα Tomahawk",
        description: "Συνοδεύεται από πατάτες τηγανητές & σως Pumba",
        price: "12,00€",
        featured: true
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
        description: "Πιές μια γουλιά για να νιώσεις μια έκρηξ�� γεύσης ροδάκινου μαζί με φρουτώδη γεύση",
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
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-8">
            {leftColumn.map((category, idx) => (
              <div key={idx} className="reveal">
                <div className="flex items-center gap-2 mb-2">
                  {category.icon}
                  <h3 className="text-base font-bold text-pumba-red">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${item.featured ? 'border border-pumba-red' : 'border border-transparent'}`}>
                      <div className="p-2">
                        <div className="flex flex-col mb-1">
                          <h4 className="text-sm font-bold">{item.name}</h4>
                          <span className="text-pumba-gold font-bold text-sm">{item.price}</span>
                        </div>
                        <p className="text-gray-300 text-xs">{item.description}</p>
                        {item.featured && <div className="mt-1">
                          <span className="bg-pumba-red text-white px-1 py-0.5 rounded-full text-[10px] font-bold">
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
          <div className="space-y-8">
            {rightColumn.map((category, idx) => (
              <div key={idx} className="reveal">
                <div className="flex items-center gap-2 mb-2">
                  {category.icon}
                  <h3 className="text-base font-bold text-pumba-red">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={`menu-item rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 ${item.featured ? 'border border-pumba-red' : 'border border-transparent'}`}>
                      <div className="p-2">
                        <div className="flex flex-col mb-1">
                          <h4 className="text-sm font-bold">{item.name}</h4>
                          <span className="text-pumba-gold font-bold text-sm">{item.price}</span>
                        </div>
                        <p className="text-gray-300 text-xs">{item.description}</p>
                        {item.featured && <div className="mt-1">
                          <span className="bg-pumba-red text-white px-1 py-0.5 rounded-full text-[10px] font-bold">
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

  return (
    <section id="menu" className="py-20 bg-gray-950 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">Μενού</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Απολαύστε την αυθεντική ελληνική γεύση με τα φρέσκα υλικά και τις παραδοσιακές συνταγές μας
          </p>
        </div>
        
        {getMenuLayout()}
        
        <div className="text-center mt-12">
          <Button 
            onClick={handleOrderClick}
            className="bg-pumba-red hover:bg-red-700 text-white px-8 py-6 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingBag className="mr-2" />
            Παραγγείλετε Online
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
