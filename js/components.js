
// This file contains additional JavaScript for specific UI components

// Function to format star ratings
function formatStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  let starsHtml = '';
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i data-lucide="star" class="text-pumba-gold fill-pumba-gold"></i>';
  }
  
  // Half star
  if (halfStar) {
    starsHtml += '<i data-lucide="star-half" class="text-pumba-gold"></i>';
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i data-lucide="star" class="text-gray-500"></i>';
  }
  
  return starsHtml;
}

// Menu data and rendering functions
document.addEventListener('DOMContentLoaded', () => {
  // Menu data
  const menuData = [
    {
      category: "Γύρος",
      icon: "utensils",
      items: [
        { name: "Γύρος Χοιρινός", price: "5,50€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Γύρος Κοτόπουλο", price: "5,50€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Γύρος Μερίδα Χοιρινό", price: "8,50€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Γύρος Μερίδα Κοτόπουλο", price: "8,50€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Γύρος Πίτα Χοιρινό", price: "4,00€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Γύρος Πίτα Κοτόπουλο", price: "4,00€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" }
      ]
    },
    {
      category: "Σουβλάκια",
      icon: "beef",
      items: [
        { name: "Σουβλάκι Χοιρινό", price: "5,00€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Σουβλάκι Κοτόπουλο", price: "5,00€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Σουβλάκι Μερίδα", price: "8,00€", description: "4 τεμάχια με πίτα, σαλάτα & πατάτες" },
        { name: "Καλαμάκι Χοιρινό", price: "2,20€", description: "Τρυφερό χοιρινό στα κάρβουνα" },
        { name: "Καλαμάκι Κοτόπουλο", price: "2,20€", description: "Ζουμερό φιλέτο κοτόπουλο" }
      ]
    },
    {
      category: "Μπιφτέκια",
      icon: "drumstick-bite",
      items: [
        { name: "Μπιφτέκι Μοσχαρίσιο", price: "5,50€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Μπιφτέκι Κοτόπουλο", price: "5,50€", description: "Με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Μπιφτέκι Γεμιστό", price: "6,50€", description: "Γεμιστό με τυρί, με ντομάτα, κρεμμύδι, πατάτες & σως" },
        { name: "Μπιφτέκι Μερίδα", price: "8,50€", description: "3 τεμάχια με πίτα, σαλάτα & πατάτες" }
      ]
    },
    {
      category: "Σαλάτες",
      icon: "salad",
      items: [
        { name: "Χωριάτικη", price: "5,50€", description: "Ντομάτα, αγγούρι, κρεμμύδι, πιπεριά, ελιές, φέτα & ελαιόλαδο" },
        { name: "Ceasar's", price: "6,50€", description: "Μαρούλι, κοτόπουλο, παρμεζάνα, κρουτόν & ceasar's sauce" },
        { name: "Ρόκα Παρμεζάνα", price: "6,00€", description: "Ρόκα, παρμεζάνα, ντοματίνια & βαλσάμικο" },
        { name: "Μαρούλι", price: "4,50€", description: "Μαρούλι, κρεμμύδι, άνηθος & ελαιόλαδο" }
      ]
    },
    {
      category: "Ορεκτικά",
      icon: "cheese",
      items: [
        { name: "Πατάτες", price: "3,50€", description: "Φρέσκιες τηγανητές πατάτες με αλάτι & ρίγανη" },
        { name: "Πατάτες με Σως", price: "4,00€", description: "Φρέσκιες τηγανητές πατάτες με σως & μπαχαρικά" },
        { name: "Φέτα", price: "3,50€", description: "Φέτα με ελαιόλαδο & ρίγανη" },
        { name: "Φέτα Ψητή", price: "4,50€", description: "Ψητή φέτα με ντομάτα, πιπεριά & μπαχαρικά" },
        { name: "Τζατζίκι", price: "3,50€", description: "Γιαούρτι με αγγούρι, σκόρδο & ελαιόλαδο" }
      ]
    },
    {
      category: "Αποστάγματα",
      icon: "wine-bottle",
      items: [
        { name: "Ούζο Πλωμαρίου 200ml", price: "6,00€", description: "Κλασικό ούζο Πλωμαρίου" },
        { name: "Ρετσίνα Μαλαματίνα 500ml", price: "3,80€", description: "Παραδοσιακή ρετσίνα" },
        { name: "Ρετσίνα Γεωργιάδη 500ml", price: "3,30€", description: "Παραδοσιακή ρετσίνα" },
        { name: "Ρετσίνα Κεχριμπάρι 500ml", price: "4,50€", description: "Παραδοσιακή ρετσίνα premium" },
        { name: "Ρετσίνα Βασιλική 500ml", price: "4,00€", description: "Παραδοσιακή ρετσίνα" }
      ]
    }
  ];
  
  // Render menu
  function renderMenu() {
    const menuContainer = document.querySelector('.menu-categories');
    if (!menuContainer) return;
    
    let menuHtml = '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">';
    
    menuData.forEach(category => {
      menuHtml += `
        <div class="menu-category bg-gray-900/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div class="flex items-center mb-4">
            <i data-lucide="${category.icon}" class="mr-2 text-pumba-red"></i>
            <h3 class="text-2xl font-bold text-pumba-red">${category.category}</h3>
          </div>
          <div class="space-y-4">
      `;
      
      category.items.forEach(item => {
        menuHtml += `
          <div class="menu-item bg-black/50 p-4 rounded-lg border border-gray-800 hover:border-pumba-red transition-all">
            <div class="flex justify-between items-start">
              <h4 class="font-bold text-white">${item.name}</h4>
              <span class="text-pumba-gold font-bold">${item.price}</span>
            </div>
            <p class="text-gray-400 text-sm mt-1">${item.description}</p>
          </div>
        `;
      });
      
      menuHtml += `
          </div>
        </div>
      `;
    });
    
    menuHtml += '</div>';
    
    menuContainer.innerHTML = menuHtml;
    lucide.createIcons();
  }
  
  // Initialize menu
  renderMenu();
});

// Custom image lazy loader
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
          imageObserver.unobserve(image);
        }
      });
    });
    
    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    lazyImages.forEach(image => {
      image.src = image.dataset.src;
      image.removeAttribute('data-src');
    });
  }
});

// Add smooth scrolling to all links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = document.querySelector('#navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without page reload
        history.pushState(null, null, targetId);
      }
    });
  });
});

// Add image zoom effect on hover (for menu items with images)
document.addEventListener('DOMContentLoaded', () => {
  const menuImages = document.querySelectorAll('.menu-item-image');
  
  menuImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
});

// Initialize mobile menu touch swipe
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu) return;
  
  let touchStartX = 0;
  let touchEndX = 0;
  
  mobileMenu.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  mobileMenu.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);
  
  function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
      // Swipe left, close menu
      mobileMenu.style.display = 'none';
    }
  }
});
