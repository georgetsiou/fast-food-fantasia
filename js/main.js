
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });
  
  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
  
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
  
  // E-food ordering buttons
  const orderButtons = document.querySelectorAll('.order-btn, .hero-order-btn, .order-menu-btn, .order-online-btn, .footer-order-btn');
  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
    });
  });
  
  // Scroll to Top button
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Reveal animations on scroll
  function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealElements);
  revealElements(); // Initial check on load
  
  // Generate menu sections
  function generateMenu() {
    const menuContainer = document.querySelector('.menu-container');
    if (!menuContainer) return;

    // Create column layout for menu categories
    const columnCount = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const columns = [];
    
    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('div');
      column.className = 'menu-column';
      columns.push(column);
      menuContainer.appendChild(column);
    }
    
    // Distribute categories across columns
    menuItems.forEach((category, index) => {
      const columnIndex = index % columnCount;
      const categoryEl = createCategoryElement(category);
      columns[columnIndex].appendChild(categoryEl);
    });
  }
  
  function createCategoryElement(category) {
    const categoryEl = document.createElement('div');
    categoryEl.className = 'menu-category reveal';
    
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    
    const iconEl = document.createElement('i');
    iconEl.setAttribute('data-lucide', category.icon);
    iconEl.className = 'icon-medium';
    
    const titleEl = document.createElement('h3');
    titleEl.className = 'category-title';
    titleEl.textContent = category.category;
    
    categoryHeader.appendChild(iconEl);
    categoryHeader.appendChild(titleEl);
    categoryEl.appendChild(categoryHeader);
    
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'menu-items';
    
    category.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = `menu-item ${item.featured ? 'featured' : ''}`;
      
      const itemHeader = document.createElement('div');
      itemHeader.className = 'item-header';
      
      const nameEl = document.createElement('h4');
      nameEl.className = 'item-name';
      nameEl.textContent = item.name;
      
      const priceEl = document.createElement('span');
      priceEl.className = 'item-price';
      priceEl.textContent = item.price;
      
      itemHeader.appendChild(nameEl);
      itemHeader.appendChild(priceEl);
      itemEl.appendChild(itemHeader);
      
      if (item.description) {
        const descEl = document.createElement('p');
        descEl.className = 'item-description';
        descEl.textContent = item.description;
        itemEl.appendChild(descEl);
      }
      
      if (item.featured) {
        const tagEl = document.createElement('span');
        tagEl.className = 'featured-tag';
        tagEl.textContent = 'ΠΡΟΤΕΙΝΟΜΕΝΟ';
        itemEl.appendChild(tagEl);
      }
      
      itemsContainer.appendChild(itemEl);
    });
    
    categoryEl.appendChild(itemsContainer);
    return categoryEl;
  }
  
  // Generate testimonials
  function generateTestimonials() {
    // Desktop testimonials
    const desktopTestimonials = document.querySelector('.desktop-testimonials');
    if (desktopTestimonials) {
      testimonials.forEach(testimonial => {
        desktopTestimonials.appendChild(createTestimonialCard(testimonial));
      });
    }
    
    // Mobile testimonials carousel
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
      testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.appendChild(createTestimonialCard(testimonial));
        carouselTrack.appendChild(slide);
      });
      
      // Initialize carousel
      initCarousel();
    }
  }
  
  function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    const starsContainer = document.createElement('div');
    starsContainer.className = 'testimonial-stars';
    
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('i');
      star.setAttribute('data-lucide', 'star');
      star.className = i < testimonial.rating ? 'star-icon filled' : 'star-icon';
      starsContainer.appendChild(star);
    }
    
    const text = document.createElement('p');
    text.className = 'testimonial-text';
    text.textContent = `"${testimonial.text}"`;
    
    const footer = document.createElement('div');
    footer.className = 'testimonial-footer';
    
    const name = document.createElement('p');
    name.className = 'testimonial-name';
    name.textContent = testimonial.name;
    
    const date = document.createElement('p');
    date.className = 'testimonial-date';
    date.textContent = testimonial.date;
    
    footer.appendChild(name);
    footer.appendChild(date);
    
    card.appendChild(starsContainer);
    card.appendChild(text);
    card.appendChild(footer);
    
    return card;
  }
  
  // Testimonials carousel functionality
  function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    if (!track || !slides.length || !prevBtn || !nextBtn) return;
    
    // Set initial width
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.width = `${slideWidth * slides.length}px`;
    
    // Update slide positions
    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    
    // Next slide
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
    });
    
    // Previous slide
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
      const newSlideWidth = slides[0].getBoundingClientRect().width;
      track.style.width = `${newSlideWidth * slides.length}px`;
      updateSlidePosition();
    });
  }
  
  // Initialize menu and testimonials
  generateMenu();
  generateTestimonials();
  
  // Reinitialize Lucide icons after dynamic content generation
  lucide.createIcons();
  
  // Handle window resize
  window.addEventListener('resize', debounce(() => {
    const menuContainer = document.querySelector('.menu-container');
    if (menuContainer) {
      // Clear and regenerate menu on significant width changes
      const oldColumnCount = menuContainer.childElementCount;
      const newColumnCount = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      
      if (oldColumnCount !== newColumnCount) {
        menuContainer.innerHTML = '';
        generateMenu();
        lucide.createIcons();
      }
    }
  }, 250));
});

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
