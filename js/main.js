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

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
}); 