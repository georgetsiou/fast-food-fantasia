
// Main JavaScript file

document.addEventListener("DOMContentLoaded", function() {
    console.log('PUMBA GYROS - Website Initialized');
    
    // Current year for footer
    updateCurrentYear();
    
    // Mobile menu functionality
    setupMobileMenu();
});

// Update current year in the footer copyright text
function updateCurrentYear() {
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
}

// Setup mobile menu toggle functionality
function setupMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = ''; // Allow scrolling
        });
    }
}
