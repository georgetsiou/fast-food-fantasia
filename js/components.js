
// Function to create the navigation bar
function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <div class="container navbar-container">
      <a href="#" class="navbar-logo">
        <span>P</span>umba
      </a>
      
      <div class="navbar-menu">
        <a href="#menu">Μενού</a>
        <a href="#about">Σχετικά</a>
        <a href="#location">Τοποθεσία</a>
      </div>
      
      <div class="navbar-actions">
        <a href="tel:2310799500">
          <i class="icon phone"></i>
          <span>231 079 9500</span>
        </a>
        <button class="btn-primary" onclick="handleOrderClick()">
          <i class="icon shopping-bag"></i>
          Παραγγελία
        </button>
      </div>
      
      <button class="mobile-menu-button" aria-label="Menu" onclick="toggleMobileMenu()">
        <i class="icon menu"></i>
      </button>
    </div>
    
    <div class="mobile-menu" id="mobile-menu">
      <button class="mobile-menu-button" aria-label="Close menu" onclick="toggleMobileMenu()">
        <i class="icon x"></i>
      </button>
      
      <a href="#menu" onclick="toggleMobileMenu()">Μενού</a>
      <a href="#about" onclick="toggleMobileMenu()">Σχετικά</a>
      <a href="#location" onclick="toggleMobileMenu()">Τοποθεσία</a>
      
      <a href="tel:2310799500">
        <i class="icon phone"></i>
        <span>231 079 9500</span>
      </a>
      
      <button class="btn-primary" onclick="handleOrderClick()">
        <i class="icon shopping-bag"></i>
        Παραγγελία
      </button>
    </div>
  `;
  return navbar;
}

// Function to create the hero section
function createHero() {
  const hero = document.createElement('div');
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="hero-video">
      <video autoplay loop muted playsinline>
        <source src="https://assets.mixkit.co/videos/preview/mixkit-cooking-meat-on-a-barbecue-grill-close-up-of-kebab-and-43388-large.mp4" type="video/mp4">
      </video>
    </div>
    
    <div class="hero-content">
      <div class="relative">
        <img src="images/pumba-logo.png" alt="Pumba Logo" class="hero-logo">
        <div class="hero-logo-flame">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C10.35 4.79 8.59 7.67 9.11 10.14C9.23 10.8 9.58 11.5 10.16 12.14C10.57 12.53 11.11 12.82 11.27 13.37C11.34 13.62 11.36 13.89 11.3 14.14C11.9 13.74 12.07 12.9 11.78 12.21C13.19 12.82 14.14 14.19 13.94 15.86C13.8 16.93 13.09 17.95 12.04 18.4C11.26 18.73 10.34 18.74 9.6 18.35C8.73 17.89 8.18 16.92 8.27 15.93C8.27 15.93 8.54 15.57 8.77 15.75C8.86 15.06 8.7 14.35 8.3 13.82C7.99 13.42 7.52 13.12 7.33 12.63C7.09 12 7.06 11.3 7.21 10.65C6.67 11.08 6.53 11.82 6.67 12.5C6.77 13 7.07 13.41 7.24 13.89C7.4 14.33 7.41 14.83 7.26 15.29C7.12 15.72 6.83 16.1 6.46 16.35C5.75 16.81 4.8 16.89 3.97 16.74C4.73 17.03 5.56 17.2 6.39 17.07C7.34 16.93 8.22 16.33 8.71 15.47C8.98 15.14 9.17 14.75 9.25 14.33C10.02 14.96 11.08 15.22 12.04 14.96C12.47 14.85 12.87 14.63 13.19 14.32C12.59 15.89 10.84 16.86 9.15 16.38C9.87 17.22 11.04 17.68 12.21 17.54C13.13 17.44 14.02 16.95 14.56 16.13C15.3 15.01 15.45 13.43 14.97 12.14C14.41 10.65 13.1 9.53 11.63 9.21C11.61 9.21 11.89 9.14 11.9 9.13C12.91 8.9 13.96 8.93 14.92 9.31C15.18 9.4 15.37 9.59 15.59 9.75C16.04 10.07 16.52 10.32 17.05 10.49C17.34 10.58 17.65 10.63 17.96 10.63C17.35 9.89 16.74 9.15 16.01 8.49C15.77 8.31 15.53 8.14 15.29 7.99C15.75 7.91 16.23 7.96 16.64 8.18C16.27 7.4 15.64 6.74 14.92 6.26C14.55 6.03 14.16 5.84 13.74 5.72C14.75 5.62 15.76 5.85 16.62 6.41C16.58 5.7 16.28 5.02 15.82 4.52C15.36 4.01 14.73 3.69 14.07 3.6C14.91 3.4 15.85 3.6 16.53 4.13C16.93 4.44 17.24 4.85 17.41 5.32C17.14 4.26 16.37 3.37 15.36 2.85C14.35 2.34 13.11 2.26 12.02 2.62C12.02 2.41 12 2.21 12 2Z" />
          </svg>
        </div>
      </div>
      
      <h1 class="hero-title">
        <span class="text-pumba-red">PUMBA</span> GYROS
      </h1>
      
      <p class="hero-subtitle">Ανακαλύψτε την τέχνη του γύρου στην καρδιά της Σίνδου Θεσσαλονίκης</p>
      
      <div class="hero-actions">
        <button class="btn-primary" onclick="handleOrderClick()">
          <i class="icon shopping-bag"></i>
          Παραγγελία Online
        </button>
        
        <a href="tel:2310799500" class="btn-secondary">
          <i class="icon phone"></i>
          Καλέστε Τώρα
        </a>
      </div>
    </div>
    
    <a href="#menu" class="hero-scroll">
      <i class="icon arrow-down"></i>
    </a>
  `;
  return hero;
}

// Function to create the menu section
function createMenu() {
  const menu = document.createElement('section');
  menu.id = 'menu';
  menu.className = 'menu-section';
  
  const menuContainer = document.createElement('div');
  menuContainer.className = 'container menu-container';
  
  const menuHeader = document.createElement('div');
  menuHeader.className = 'menu-header reveal';
  menuHeader.innerHTML = `
    <h2 class="section-title">
      <span class="text-pumba-red">Μ</span>ενού
    </h2>
    <p class="text-center">Απολαύστε τις αυθεντικές γεύσεις μας</p>
  `;
  
  const menuTabs = document.createElement('div');
  menuTabs.className = 'menu-tabs reveal';
  menuTabs.innerHTML = `
    <button class="menu-tab active" data-category="gyros">Γύρος</button>
    <button class="menu-tab" data-category="souvlakia">Σουβλάκια</button>
    <button class="menu-tab" data-category="burgers">Burgers</button>
    <button class="menu-tab" data-category="sides">Συνοδευτικά</button>
  `;
  
  const menuContent = document.createElement('div');
  menuContent.className = 'menu-content reveal';
  
  // Initially fill with gyros items
  const menuGrid = document.createElement('div');
  menuGrid.className = 'menu-grid';
  menuGrid.id = 'menu-grid';
  
  // Add the grid items for gyros initially
  menuGrid.innerHTML = createMenuItems('gyros');
  
  menuContent.appendChild(menuGrid);
  menuContainer.appendChild(menuHeader);
  menuContainer.appendChild(menuTabs);
  menuContainer.appendChild(menuContent);
  menu.appendChild(menuContainer);
  
  return menu;
}

// Helper function to create menu items
function createMenuItems(category) {
  let html = '';
  const items = menuData[category];
  
  items.forEach(item => {
    html += `
      <div class="menu-item">
        <div class="menu-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="menu-item-content">
          <h3 class="menu-item-title">
            ${item.name}
            <span class="menu-item-price">${item.price}</span>
          </h3>
          <p class="menu-item-description">${item.description}</p>
        </div>
      </div>
    `;
  });
  
  return html;
}

// Function to create the about section
function createAbout() {
  const about = document.createElement('section');
  about.id = 'about';
  about.className = 'about-section';
  
  about.innerHTML = `
    <div class="container about-container">
      <div class="about-header reveal">
        <h2 class="section-title">
          <span class="text-pumba-red">Σ</span>χετικά με εμάς
        </h2>
      </div>
      
      <div class="about-story reveal">
        <h3>Η ιστορία του <span class="text-pumba-red">PUMBA</span></h3>
        <p>Από το 2023, το Pumba έφερε μια φρέσκια προσέγγιση στον παραδοσιακό ελληνικό γύρο στην καρδιά της Σίνδου Θεσσαλονίκης. Με πάθος για την ποιότητα και την αυθεντικότητα, δημιουργήσαμε ένα μέρος όπου η παράδοση συναντά την καινοτομία.</p>
        <p>Κάθε πιάτο μας παρασκευάζεται με αγάπη, χρησιμοποιώντας τα πιο φρέσκα υλικά και παραδοσιακές συνταγές, προσφέροντας μια αξέχαστη γευστική εμπειρία σε κάθε επισκέπτη.</p>
      </div>
      
      <div class="about-features reveal">
        <div class="about-feature">
          <div class="about-feature-icon">
            <i class="icon users"></i>
          </div>
          <h4>Έμπειρο Προσωπικό</h4>
          <p>Η ομάδα μας αποτελείται από επαγγελματίες με πάθος για την ελληνική κουζίνα</p>
        </div>
        
        <div class="about-feature">
          <div class="about-feature-icon">
            <i class="icon award"></i>
          </div>
          <h4>Άριστη Ποιότητα</h4>
          <p>Επιλέγουμε μόνο τα καλύτερα υλικά για τα πιάτα μας, εξασφαλίζοντας κορυφαία γεύση</p>
        </div>
        
        <div class="about-feature">
          <div class="about-feature-icon">
            <i class="icon clock"></i>
          </div>
          <h4>Γρήγορη Εξυπηρέτηση</h4>
          <p>Το φαγητό σας, γρήγορα και φρεσκομαγειρεμένο, χωρίς συμβιβασμούς στην ποιότητα</p>
        </div>
      </div>
    </div>
  `;
  
  return about;
}

// Function to create the call to action section
function createCallToAction() {
  const cta = document.createElement('div');
  cta.className = 'cta-section';
  
  cta.innerHTML = `
    <div class="cta-background">
      <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80" alt="Delicious burger">
    </div>
    
    <div class="container cta-container">
      <h2 class="cta-title reveal">
        Πεινάσατε; Είμαστε μόνο ένα τηλεφώνημα μακριά!
      </h2>
      
      <div class="cta-actions reveal">
        <a href="tel:2310799500" class="btn-primary">
          <i class="icon phone"></i>
          231 079 9500
        </a>
        
        <button class="btn-secondary" onclick="handleOrderClick()">
          <i class="icon shopping-bag"></i>
          Παραγγείλτε Online
          <i class="icon external-link"></i>
        </button>
      </div>
    </div>
  `;
  
  return cta;
}

// Function to create the testimonials section
function createTestimonials() {
  const testimonials = document.createElement('section');
  testimonials.className = 'testimonials-section';
  
  const testimonialsContainer = document.createElement('div');
  testimonialsContainer.className = 'container testimonials-container';
  
  const testimonialsHeader = document.createElement('div');
  testimonialsHeader.className = 'testimonials-header reveal';
  testimonialsHeader.innerHTML = `
    <h2 class="section-title">
      <span class="text-pumba-red">Κ</span>ριτικές
    </h2>
    <p class="text-center">Τι λένε οι πελάτες μας</p>
  `;
  
  const testimonialsGrid = document.createElement('div');
  testimonialsGrid.className = 'testimonials-grid reveal';
  
  testimonialsData.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial';
    
    testimonialCard.innerHTML = `
      <div class="testimonial-content">
        "${testimonial.content}"
      </div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">
          <img src="${testimonial.avatar}" alt="${testimonial.name}">
        </div>
        <div class="testimonial-info">
          <h5>${testimonial.name}</h5>
          <p>${testimonial.role}</p>
        </div>
      </div>
    `;
    
    testimonialsGrid.appendChild(testimonialCard);
  });
  
  testimonialsContainer.appendChild(testimonialsHeader);
  testimonialsContainer.appendChild(testimonialsGrid);
  testimonials.appendChild(testimonialsContainer);
  
  return testimonials;
}

// Function to create the location section
function createLocation() {
  const location = document.createElement('section');
  location.id = 'location';
  location.className = 'location-section';
  
  location.innerHTML = `
    <div class="container location-container">
      <div class="location-header reveal">
        <h2 class="section-title">
          <span class="text-pumba-red">Τ</span>οποθεσία
        </h2>
        <p class="text-center">Επισκεφθείτε μας στο κατάστημά μας ή παραγγείλτε online</p>
      </div>
      
      <div class="location-grid reveal">
        <div class="location-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7622419054073!2d22.803346876019193!3d40.67032987137419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a82500788b86bf%3A0x9f8fda01c49c284b!2sPUMBA!5e0!3m2!1sen!2sgr!4v1716826847159!5m2!1sen!2sgr" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        <div class="location-info">
          <div class="location-detail">
            <div class="location-icon">
              <i class="icon map-pin"></i>
            </div>
            <div class="location-text">
              <h3>Διεύθυνση</h3>
              <p>Μεγ. Αλεξάνδρου 55, Σίνδος, Θεσσαλονίκη 57400</p>
            </div>
          </div>
          
          <div class="location-detail">
            <div class="location-icon">
              <i class="icon clock"></i>
            </div>
            <div class="location-text">
              <h3>Ώρες Λειτουργίας</h3>
              <p>Δευτέρα-Κυριακή: 12:00 - 00:00</p>
            </div>
          </div>
          
          <div class="location-detail">
            <div class="location-icon">
              <i class="icon phone"></i>
            </div>
            <div class="location-text">
              <h3>Τηλέφωνο</h3>
              <p>
                <a href="tel:2310799500">231 079 9500</a>
              </p>
            </div>
          </div>
          
          <div class="location-detail">
            <div class="location-icon">
              <i class="icon mail"></i>
            </div>
            <div class="location-text">
              <h3>Email</h3>
              <p>
                <a href="mailto:pumbaike@gmail.com">pumbaike@gmail.com</a>
              </p>
            </div>
          </div>
          
          <div class="location-detail">
            <div class="location-icon">
              <i class="icon instagram"></i>
            </div>
            <div class="location-text">
              <h3>Instagram</h3>
              <p>
                <a href="https://www.instagram.com/pumba_sindos/" target="_blank" rel="noopener noreferrer">@pumba_sindos</a>
                <a href="https://www.instagram.com/pumba_lhth/" target="_blank" rel="noopener noreferrer">@pumba_lhth</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return location;
}

// Function to create the footer
function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  
  footer.innerHTML = `
    <div class="container footer-container">
      <div class="footer-content">
        <div class="footer-brand-section">
          <div class="footer-brand">
            <img src="images/pumba-logo.png" alt="Pumba Logo" class="footer-logo">
            <h3>PUMBA</h3>
          </div>
          <p class="footer-description">
            Η τέχνη του γύρου σε κάθε μπουκιά. Απολαύστε αυθεντικές ελληνικές γεύσεις, φτιαγμένες με τα καλύτερα υλικά και πολλή αγάπη.
          </p>
          <div class="footer-social">
            <a href="https://www.instagram.com/pumba_sindos/" target="_blank" rel="noopener noreferrer">
              <i class="icon instagram"></i>
            </a>
            <a href="https://www.instagram.com/pumba_lhth/" target="_blank" rel="noopener noreferrer">
              <i class="icon instagram"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>Σύνδεσμοι</h4>
          <ul>
            <li><a href="#menu">Μενού</a></li>
            <li><a href="#about">Σχετικά με εμάς</a></li>
            <li><a href="#location">Τοποθεσία</a></li>
            <li><a href="https://www.e-food.gr/delivery/thessaloniki/pumba-7484246" target="_blank" rel="noopener noreferrer">Online Παραγγελία</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>Επικοινωνία</h4>
          <div class="footer-contact-item">
            <i class="icon map-pin footer-contact-icon"></i>
            <span>Μεγ. Αλεξάνδρου 55, Σίνδος, Θεσσαλονίκη 57400</span>
          </div>
          <div class="footer-contact-item">
            <i class="icon phone footer-contact-icon"></i>
            <span><a href="tel:2310799500">231 079 9500</a></span>
          </div>
          <div class="footer-contact-item">
            <i class="icon mail footer-contact-icon"></i>
            <span><a href="mailto:pumbaike@gmail.com">pumbaike@gmail.com</a></span>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Pumba Gyros. Με επιφύλαξη παντός δικαιώματος.</p>
      </div>
    </div>
  `;
  
  return footer;
}

// Function to create the scroll to top button
function createScrollToTop() {
  const scrollToTop = document.createElement('button');
  scrollToTop.className = 'scroll-to-top';
  scrollToTop.setAttribute('aria-label', 'Scroll to top');
  scrollToTop.innerHTML = `<i class="icon arrow-up"></i>`;
  
  return scrollToTop;
}
