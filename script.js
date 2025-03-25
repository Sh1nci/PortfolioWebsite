// Theme Management
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Initialize theme
function initializeTheme() {
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = false;
    } else if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = true;
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = false;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Mobile Menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    mobileMenuToggle.setAttribute('aria-expanded', 
        mobileMenuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
}

// Update copyright year
function updateCopyright() {
    const yearSpan = document.getElementById('current-year');
    yearSpan.textContent = new Date().getFullYear();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    updateCopyright();
    
    // Event Listeners
    toggleSwitch.addEventListener('change', switchTheme, false);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-menu-toggle')) {
            toggleMobileMenu();
        }
    });
});
