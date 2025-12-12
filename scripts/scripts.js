// Get the hamburger button
const hamburger = document.getElementById('hamburger');

// Get the navigation menu
const navMenu = document.getElementById('navMenu');

// Toggle menu visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when any link inside nav is clicked
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
