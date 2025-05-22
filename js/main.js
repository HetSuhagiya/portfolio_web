// Helper function to get the current section
function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            return section.id;
        }
    }
    return 'home'; // Default to home if no section is found
}

// Update active link
function updateActiveLink() {
    const currentSection = getCurrentSection();
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active-nav');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update active state immediately
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active-nav');
        });
        this.classList.add('active-nav');
    });
});

// Navigation highlight on scroll
window.addEventListener('scroll', updateActiveLink);

// Set home as active by default when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateActiveLink();
});

// Enhanced Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    
    // Add animation to menu items
    const menuItems = navLinks.querySelectorAll('li');
    menuItems.forEach((item, index) => {
        if (isMenuOpen) {
            item.style.transitionDelay = `${index * 0.1}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        } else {
            item.style.transitionDelay = '0s';
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
        }
    });
}

// Initialize menu items
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = navLinks.querySelectorAll('li');
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
    });
});

mobileMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (isMenuOpen && !e.target.closest('nav')) {
        toggleMenu();
    }
});

// Handle touch events for better mobile experience
let touchStartX = 0;
let touchEndX = 0;

navLinks.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

navLinks.addEventListener('touchmove', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    
    // If swiping left and menu is open, start closing
    if (diff > 0 && isMenuOpen) {
        navLinks.style.transform = `translateX(${-diff}px)`;
    }
});

navLinks.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    
    // Reset transform
    navLinks.style.transform = '';
    
    // If swiped more than threshold, close menu
    if (diff > 50 && isMenuOpen) {
        toggleMenu();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        toggleMenu();
    }
}); 