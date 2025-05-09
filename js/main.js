
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-black/90', 'shadow-md', 'py-2');
      navbar.classList.remove('bg-transparent', 'py-4');
    } else {
      navbar.classList.remove('bg-black/90', 'shadow-md', 'py-2');
      navbar.classList.add('bg-transparent', 'py-4');
    }
  });
  
  // Mobile menu functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });
  
  closeMenuButton.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  });
  
  // Scroll to top functionality
  const scrollToTopButton = document.getElementById('scroll-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.style.display = 'flex';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Reveal animation functionality
  const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealElements);
  revealElements(); // Initial check on page load
  
  // Global function for order button
  window.handleOrderClick = () => {
    window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
  };
  
  // Load hero content
  const heroSection = document.getElementById('hero');
  heroSection.innerHTML = `
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <img src="https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" 
           alt="Tasty gyros" 
           class="w-full h-full object-cover"
      />
    </div>
    <div class="container mx-auto px-4 relative z-20">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-bounce-in">
          <span class="text-pumba-red">Pumba</span> Gyros
        </h1>
        <p class="text-xl mb-8 animate-slide-up">
          Ανακαλύψτε τον αυθεντικό ελληνικό γύρο στη Σίνδο Θεσσαλονίκης
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a href="#menu" class="btn-primary">
            Δείτε το Μενού
          </a>
          <button onclick="handleOrderClick()" class="btn-secondary">
            Παραγγείλτε Online
          </button>
        </div>
      </div>
    </div>
  `;
  
  // Load location content
  const locationSection = document.getElementById('location');
  locationSection.innerHTML = `
    <div class="container mx-auto">
      <div class="max-w-5xl mx-auto">
        <h2 class="section-title text-center reveal">
          <span class="text-pumba-red">Π</span>ού θα μας βρείτε
        </h2>

        <div class="grid md:grid-cols-2 gap-8 reveal">
          <div class="text-center md:text-left">
            <h3 class="text-3xl font-bold mb-4">Επισκεφθείτε μας</h3>
            <div class="mb-6">
              <p class="flex items-center justify-center md:justify-start mb-2">
                <i data-lucide="map-pin" class="text-pumba-red mr-2"></i>
                Πολυτεχνείου 82, Σίνδος 57400
              </p>
              <p class="flex items-center justify-center md:justify-start">
                <i data-lucide="phone" class="text-pumba-red mr-2"></i>
                231 079 9500
              </p>
            </div>
            
            <div class="mb-8">
              <h4 class="font-bold text-xl mb-3">Ώρες λειτουργίας:</h4>
              <div class="max-w-xs mx-auto md:mx-0">
                <div class="flex justify-between">
                  <span>Δευτέρα - Παρασκευή:</span>
                  <span>12:00 - 24:00</span>
                </div>
                <div class="flex justify-between">
                  <span>Σάββατο - Κυριακή:</span>
                  <span>12:00 - 01:00</span>
                </div>
              </div>
            </div>
            
            <div class="flex justify-center md:justify-start">
              <a 
                href="https://goo.gl/maps/nm5ZSvGTHJ8EPDo37" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-primary flex items-center"
              >
                <i data-lucide="navigation" class="mr-2"></i>
                Οδηγίες
              </a>
            </div>
          </div>
          
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.198380528055!2d22.9741335!3d40.6610731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839bf8069fe03%3A0xf4abcd4552b8a1df!2sPumba!5e0!3m2!1sen!2sgr!4v1682345875989!5m2!1sen!2sgr"
              width="100%"
              height="400"
              style="border: 0; border-radius: 8px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Load footer content
  const footer = document.querySelector('footer');
  footer.innerHTML = `
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold">
            <span class="text-pumba-red">P</span>umba
          </h3>
          <p class="text-gray-400 mt-2">Η τέχνη του γύρου</p>
          <div class="flex justify-center mt-4 space-x-4">
            <a href="#" class="text-white hover:text-pumba-red transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="text-white hover:text-pumba-red transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="text-center">
          <h3 class="text-xl font-bold mb-4 text-pumba-red">Menu</h3>
          <ul>
            <li class="mb-2">
              <a href="#" class="text-gray-300 hover:text-white transition-colors">Αρχική</a>
            </li>
            <li class="mb-2">
              <a href="#menu" class="text-gray-300 hover:text-white transition-colors">Μενού</a>
            </li>
            <li class="mb-2">
              <a href="#about" class="text-gray-300 hover:text-white transition-colors">Σχετικά</a>
            </li>
            <li>
              <a href="#location" class="text-gray-300 hover:text-white transition-colors">Τοποθεσία</a>
            </li>
          </ul>
        </div>
        
        <div class="text-center">
          <h3 class="text-xl font-bold mb-4 text-pumba-red">Επικοινωνία</h3>
          <p class="flex items-center justify-center mb-2">
            <i data-lucide="map-pin" class="text-pumba-red mr-2"></i>
            Πολυτεχνείου 82, Σίνδος 57400
          </p>
          <p class="flex items-center justify-center mb-2">
            <i data-lucide="phone" class="text-pumba-red mr-2"></i>
            231 079 9500
          </p>
          <p class="flex items-center justify-center">
            <i data-lucide="mail" class="text-pumba-red mr-2"></i>
            info@pumbagyros.gr
          </p>
        </div>
      </div>
      
      <div class="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-800">
        © ${new Date().getFullYear()} Pumba Gyros. Όλα τα δικαιώματα διατηρούνται.
      </div>
    </div>
  `;
  
  // Load testimonials
  loadTestimonials();
  
  // Load menu
  loadMenu();
});

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Stella Zoumpoulidi",
    text: "Μακράν ότι καλύτερο...τεράστια μερίδα...πολύ γευστικό...και έφερα και σπίτι! Αξίζει τα λεφτά του!!!",
    rating: 5,
    date: "33 ημέρες πριν"
  },
  {
    id: 2,
    name: "Νίκος Παγκωνιάτης",
    text: "Μεγάλες μερίδες, πολύ νόστιμες. Καθαρός χώρος. Εξαιρετική εξυπηρέτηση.",
    rating: 5,
    date: "1 χρόνο πριν"
  },
  {
    id: 3,
    name: "Κυπριανός Σταύρου",
    text: "Γεμάτο πιτόγυρο με κρέας πολύ καλό ψήσιμο. Οι πατάτες είναι κάπως μικρές, αλλά είναι πολύ μεγάλη η μερίδα, οπότε δεν μειώνεται σε τίποτα.",
    rating: 5,
    date: "1 μήνα πριν"
  },
  {
    id: 4,
    name: "Γιάννης Εξάρχου",
    text: "Το καλύτερο γύρο που έχω φάει σε ολόκληρη την Ελλάδα! Απίστευτες πατάτες, λαχταριστά όλα, στα 5 το κρέας είναι σε μεγάλη ποσότητα και λαχταριστό! Συστήνεται ανεπιφύλακτα!",
    rating: 5,
    date: "8 μήνες πριν"
  },
  {
    id: 5,
    name: "Μίλτος Ρόζιας",
    text: "Πολύ καλό κοτόπουλο, μεγάλες μερίδες, και σε πολύ καλή τιμή.",
    rating: 5,
    date: "3 μήνες πριν"
  },
  {
    id: 6,
    name: "Γιώργος Γκιουλές",
    text: "Εξαιρετικό φαγητό, μεγάλες μερίδες, ευγενικό προσωπικό, πολύ ωραία ατμόσφαιρα!! Μια χαρά όλα!",
    rating: 5,
    date: "1 χρόνο πριν"
  },
  {
    id: 7,
    name: "Christos Galanis",
    text: "ΤΕΛΕΙΟ...πολύ γευστικά όλα...υπέροχη γεύση...μεγάλες μερίδες. ΤΟ ΣΥΝΙΣΤΏ ΑΝΕΠΙΦΎΛΑΚΤΑ.",
    rating: 5,
    date: "10 μήνες πριν"
  },
  {
    id: 8,
    name: "Έλενα Ιωαννίδου",
    text: "Πολύ νόστιμο φαγητό, μεγάλες μερίδες και πολύ γρήγορη εξυπηρέτηση.",
    rating: 5,
    date: "11 μήνες πριν"
  },
  {
    id: 9,
    name: "Αναστάσιος Αναγνωστίδης",
    text: "Ότι καλύτερο έχω φάει στην περιοχή! Το κοτόπουλο ήταν τέλειο, η σος απίστευτη και μπόλικες πατάτες! Ανυπομονώ να ξανάρθω!",
    rating: 5,
    date: "3 μήνες πριν"
  }
];

// Function to load testimonials
function loadTestimonials() {
  const desktopTestimonials = document.getElementById('desktop-testimonials');
  const mobileCarousel = document.getElementById('mobile-testimonials-carousel');
  const carouselContent = mobileCarousel.querySelector('.carousel-content');
  
  // Load desktop testimonials (first 6 only)
  if (desktopTestimonials) {
    testimonials.slice(0, 6).forEach(testimonial => {
      const testimonialCard = document.createElement('div');
      testimonialCard.className = 'bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-pumba-red transition-all duration-300 reveal';
      
      const starsHtml = Array(5).fill().map((_, i) => 
        `<i data-lucide="star" size="18" class="${i < testimonial.rating ? 'text-pumba-gold fill-pumba-gold' : 'text-gray-500'}"></i>`
      ).join('');
      
      testimonialCard.innerHTML = `
        <div class="flex mb-3">${starsHtml}</div>
        <p class="text-gray-300 mb-4">"${testimonial.text}"</p>
        <div class="flex justify-between items-center">
          <p class="font-bold">${testimonial.name}</p>
          <p class="text-sm text-gray-500">${testimonial.date}</p>
        </div>
      `;
      
      desktopTestimonials.appendChild(testimonialCard);
    });
  }
  
  // Load mobile carousel
  if (carouselContent) {
    testimonials.forEach(testimonial => {
      const testimonialCard = document.createElement('div');
      testimonialCard.className = 'carousel-item';
      
      const starsHtml = Array(5).fill().map((_, i) => 
        `<i data-lucide="star" size="18" class="${i < testimonial.rating ? 'text-pumba-gold fill-pumba-gold' : 'text-gray-500'}"></i>`
      ).join('');
      
      testimonialCard.innerHTML = `
        <div class="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 h-full">
          <div class="flex mb-3">${starsHtml}</div>
          <p class="text-gray-300 mb-4">"${testimonial.text}"</p>
          <div class="flex justify-between items-center">
            <p class="font-bold">${testimonial.name}</p>
            <p class="text-sm text-gray-500">${testimonial.date}</p>
          </div>
        </div>
      `;
      
      carouselContent.appendChild(testimonialCard);
    });
    
    // Initialize the carousel
    initializeCarousel();
  }
  
  // Update the Lucide icons after dynamically adding content
  lucide.createIcons();
}

// Function to initialize the carousel
function initializeCarousel() {
  const carouselContent = document.querySelector('.carousel-content');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  
  if (!carouselContent || !items.length || !prevBtn || !nextBtn) return;
  
  let current = 0;
  const maxItems = items.length;
  
  // Set initial width for items
  items.forEach(item => {
    item.style.width = '100%';
  });
  
  // Position all items
  const positionItems = () => {
    items.forEach((item, index) => {
      item.style.transform = `translateX(${100 * (index - current)}%)`;
    });
  };
  
  positionItems();
  
  // Event listeners for buttons
  prevBtn.addEventListener('click', () => {
    current = (current > 0) ? current - 1 : maxItems - 1;
    positionItems();
  });
  
  nextBtn.addEventListener('click', () => {
    current = (current < maxItems - 1) ? current + 1 : 0;
    positionItems();
  });
}

// Menu data
const menuItems = [
  {
    category: "Αλοιφές",
    icon: "utensils",
    items: [
      {
        name: "Χτυπητή",
        description: "",
        price: "Από 0,50€"
      },
      {
        name: "Τζατζίκι",
        description: "Εδώ δεν χωράνε συστάσεις. Τζατζίκι, το κλασικό, το αληθινό, το αγαπημένο. Ζήτα άδεια από τους παρευρισκόμενους και κατανάλωσε εντελώς ανεύθυνα!",
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
  // Add the rest of the menu categories here
  {
    category: "Ορεκτικά",
    icon: "utensils",
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
    icon: "salad",
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
    category: "Μπύρες/Ποτά",
    icon: "beer",
    items: [
      {
        name: "Amstel 330ml",
        description: "",
        price: "2,60€"
      },
      {
        name: "Heineken 330ml",
        description: "",
        price: "2,60€"
      },
      {
        name: "Άλφα 330ml",
        description: "",
        price: "2,60€"
      },
      {
        name: "Fischer φιάλη 500ml",
        description: "",
        price: "3,60€"
      },
      {
        name: "Άλφα φιάλη 500ml",
        description: "",
        price: "3,30€"
      },
      {
        name: "Amstel φιάλη 500ml",
        description: "",
        price: "3,30€"
      },
      {
        name: "Amstel free φιάλη 500ml",
        description: "",
        price: "3,00€"
      },
      {
        name: "Amstel Radler φιάλη 500ml",
        description: "",
        price: "3,30€"
      },
      {
        name: "Μάμος φιάλη 500ml",
        description: "",
        price: "3,30€"
      },
      {
        name: "Mythos φιάλη 500ml",
        description: "",
        price: "3,30€"
      },
      {
        name: "Kaiser φιάλη 500ml",
        description: "",
        price: "3,60€"
      }
    ]
  },
  {
    category: "Αποστάγματα",
    icon: "wine",
    items: [
      {
        name: "Ούζο Πλωμαρίου 200ml",
        description: "",
        price: "6,00€"
      },
      {
        name: "Ρετσίνα Μαλαματίνα 500ml",
        description: "",
        price: "3,80€"
      },
      {
        name: "Ρετσίνα Γεωργιάδη 500ml",
        description: "",
        price: "3,30€"
      },
      {
        name: "Ρετσίνα Κεχριμπάρι 500ml",
        description: "",
        price: "4,50€"
      },
      {
        name: "Ρετσίνα Βασιλική 500ml",
        description: "",
        price: "4,00€"
      }
    ]
  },
  {
    category: "Τυλιχτά Πίτες",
    icon: "pizza",
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
    icon: "utensils",
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
      }
    ]
  },
  {
    category: "Burgers",
    icon: "pizza",
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
      }
    ]
  }
];

// Function to load menu
function loadMenu() {
  const menuContainer = document.querySelector('.menu-container');
  
  if (!menuContainer) return;
  
  menuItems.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'menu-category reveal';
    
    categoryElement.innerHTML = `
      <div class="menu-category-header">
        <i data-lucide="${category.icon}" class="text-pumba-red" size="24"></i>
        <h3 class="menu-category-title">${category.category}</h3>
      </div>
      <div class="menu-item-list">
        ${category.items.map(item => `
          <div class="menu-item-card ${item.featured ? 'featured' : ''}">
            <div class="menu-item-header">
              <h4 class="menu-item-title">${item.name}</h4>
              <span class="menu-item-price">${item.price}</span>
            </div>
            ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ''}
            ${item.featured ? `
              <div class="mt-3">
                <span class="menu-item-badge">
                  ΠΡΟΤΕΙΝΟΜΕΝΟ
                </span>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
    
    menuContainer.appendChild(categoryElement);
  });
  
  // Update Lucide icons after dynamically adding content
  lucide.createIcons();
}
