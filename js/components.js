
// Main components JavaScript file
document.addEventListener("DOMContentLoaded", function() {
    // Navbar functionality
    initNavbar();
    
    // ScrollToTop button functionality
    initScrollToTop();
    
    // Animation reveal on scroll
    initRevealOnScroll();
    
    // Handle Call to Action buttons
    initCallToAction();
});

// Navbar functionality
function initNavbar() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = ''; // Allow scrolling
            }
        });
        
        // Close mobile menu links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = ''; // Allow scrolling
            });
        });
    }
    
    // Handle navbar background change on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black-90', 'shadow-md', 'py-2');
            navbar.classList.remove('bg-transparent', 'py-4');
        } else {
            navbar.classList.add('bg-transparent', 'py-4');
            navbar.classList.remove('bg-black-90', 'shadow-md', 'py-2');
        }
    });
}

// ScrollToTop button functionality
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Animation reveal on scroll functionality
function initRevealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = function() {
        const windowHeight = window.innerHeight;
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on page load
}

// Call to Action functionality
function initCallToAction() {
    const orderButtons = document.querySelectorAll('.order-button');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.open('https://www.e-food.gr/delivery/thessaloniki/pumba-7484246', '_blank');
        });
    });
}
