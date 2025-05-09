
// Menu Data
const menuData = {
  gyros: [
    {
      id: 'g1',
      name: 'Κλασικός Γύρος Χοιρινός',
      price: '4.50€',
      description: 'Ζουμερός χοιρινός γύρος με ντομάτα, κρεμμύδι, πατάτες και σως τζατζίκι',
      image: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&q=80'
    },
    {
      id: 'g2',
      name: 'Κλασικός Γύρος Κοτόπουλο',
      price: '4.50€',
      description: 'Τρυφερό κοτόπουλο γύρος με ντομάτα, μαρούλι, πατάτες και σως',
      image: 'https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?auto=format&q=80'
    },
    {
      id: 'g3',
      name: 'Special Γύρος',
      price: '5.50€',
      description: 'Γύρος κατ\'επιλογή με έξτρα τυρί, μπέικον και σως μουστάρδας-μελιού',
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&q=80'
    },
    {
      id: 'g4',
      name: 'Γύρος Πίτα με Χαλούμι',
      price: '5.80€',
      description: 'Γύρος με ψητό χαλούμι, ντομάτα, αγγούρι και σως γιαουρτιού',
      image: 'https://images.unsplash.com/photo-1664201071993-27a9c9671e34?auto=format&q=80'
    },
    {
      id: 'g5',
      name: 'Γύρος Πίτα XXL',
      price: '6.50€',
      description: 'Διπλή ποσότητα γύρου με όλα τα συνοδευτικά',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&q=80'
    },
    {
      id: 'g6',
      name: 'Γύρος σε Κυπριακή Πίτα',
      price: '5.00€',
      description: 'Γύρος σε αφράτη κυπριακή πίτα με λαχανικά και σως',
      image: 'https://images.unsplash.com/photo-1599719361214-71f8d226e7e8?auto=format&q=80'
    }
  ],
  
  souvlakia: [
    {
      id: 's1',
      name: 'Καλαμάκι Χοιρινό',
      price: '2.00€',
      description: 'Ζουμερό χοιρινό καλαμάκι με μπαχαρικά',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&q=80'
    },
    {
      id: 's2',
      name: 'Καλαμάκι Κοτόπουλο',
      price: '2.00€',
      description: 'Τρυφερό καλαμάκι κοτόπουλο μαριναρισμένο',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&q=80'
    },
    {
      id: 's3',
      name: 'Καλαμάκι Μοσχάρι',
      price: '2.80€',
      description: 'Μοσχαρίσιο καλαμάκι για τους απαιτητικούς',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&q=80'
    },
    {
      id: 's4',
      name: 'Πίτα με Καλαμάκι',
      price: '3.80€',
      description: 'Καλαμάκι σε πίτα με λαχανικά και σως',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&q=80'
    },
    {
      id: 's5',
      name: 'Μερίδα Καλαμάκια',
      price: '8.50€',
      description: 'Μερίδα με 3 καλαμάκια, πίτες, πατάτες και σως',
      image: 'https://images.unsplash.com/photo-1578161467910-25cdb84e204e?auto=format&q=80'
    },
    {
      id: 's6',
      name: 'Κοντοσούβλι',
      price: '9.50€',
      description: 'Παραδοσιακό κοντοσούβλι χοιρινό με συνοδευτικά',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&q=80'
    }
  ],
  
  burgers: [
    {
      id: 'b1',
      name: 'Classic Burger',
      price: '4.00€',
      description: 'Ζουμερό μπιφτέκι με cheddar, μαρούλι, ντομάτα και σως',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&q=80'
    },
    {
      id: 'b2',
      name: 'Cheese Bacon Burger',
      price: '5.00€',
      description: 'Με τυρί gouda, μπέικον, BBQ σως και λαχανικά',
      image: 'https://images.unsplash.com/photo-1596662951482-0c4ba27a4c21?auto=format&q=80'
    },
    {
      id: 'b3',
      name: 'Special Pumba Burger',
      price: '6.50€',
      description: 'Διπλό μπιφτέκι, διπλό τυρί, μπέικον, αυγό και BBQ σως',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&q=80'
    },
    {
      id: 'b4',
      name: 'Chicken Burger',
      price: '4.50€',
      description: 'Με φιλέτο κοτόπουλο πανέ, μαρούλι και σως μουστάρδας',
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&q=80'
    },
    {
      id: 'b5',
      name: 'Vegetarian Burger',
      price: '4.00€',
      description: 'Με μπιφτέκι λαχανικών, τυρί και σως λαχανικών',
      image: 'https://images.unsplash.com/photo-1585238341710-4d3ff485c676?auto=format&q=80'
    },
    {
      id: 'b6',
      name: 'Mini Burgers',
      price: '7.00€',
      description: 'Πιάτο με 3 mini burgers διαφορετικές γεύσεις',
      image: 'https://images.unsplash.com/photo-1536510344784-92d33e1bc44b?auto=format&q=80'
    }
  ],
  
  sides: [
    {
      id: 'si1',
      name: 'Πατάτες Τηγανητές',
      price: '2.50€',
      description: 'Τραγανές πατάτες με αρωματικά',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&q=80'
    },
    {
      id: 'si2',
      name: 'Πατάτες με Σως',
      price: '3.00€',
      description: 'Με σως τυριού και μπέικον',
      image: 'https://images.unsplash.com/photo-1593545086735-f9b3db99860c?auto=format&q=80'
    },
    {
      id: 'si3',
      name: 'Φέτα Σχάρας',
      price: '3.50€',
      description: 'Με ελαιόλαδο και μπαχαρικά',
      image: 'https://images.unsplash.com/photo-1588250674913-fd0a0c3c1642?auto=format&q=80'
    },
    {
      id: 'si4',
      name: 'Τζατζίκι',
      price: '2.50€',
      description: 'Παραδοσιακό τζατζίκι με άρωμα σκόρδου',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&q=80'
    },
    {
      id: 'si5',
      name: 'Σαλάτα Ελληνική',
      price: '4.50€',
      description: 'Με ντομάτα, αγγούρι, κρεμμύδι, ελιές και φέτα',
      image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?auto=format&q=80'
    },
    {
      id: 'si6',
      name: 'Σαλάτα Σεφ',
      price: '5.50€',
      description: 'Με μαρούλι, λάχανο, καρότο, ντομάτα και σως',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&q=80'
    }
  ]
};

// Testimonials Data
const testimonialsData = [
  {
    id: 1,
    name: 'Γιώργος Παπαδόπουλος',
    role: 'Τακτικός Πελάτης',
    content: 'Ο καλύτερος γύρος στην περιοχή! Πάντα φρέσκος και γευστικός. Η εξυπηρέτηση είναι άψογη και γρήγορη. Το συστήνω ανεπιφύλακτα!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Ελένη Καραγιάννη',
    role: 'Food Blogger',
    content: 'Επισκέφτηκα το Pumba μετά από πρόταση φίλων και έμεινα πραγματικά ικανοποιημένη. Τα πιάτα είναι άφθονα και πολύ νόστιμα. Θα ξαναπάω σίγουρα!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Νίκος Αντωνίου',
    role: 'Φοιτητής',
    content: 'Ως φοιτητής στη Σίνδο, το Pumba έχει γίνει το στέκι μας. Καλές τιμές, μεγάλες μερίδες και πολύ καλή ποιότητα. Τα burgers τους είναι απίθανα!',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
];
