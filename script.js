// Check for saved theme preference, otherwise use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('checkbox').checked = false;
} else if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('checkbox').checked = true;
} else if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('checkbox').checked = false;
}

// Theme switch handler
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
