// Get the hamburger button
const hamburger = document.getElementById('hamburger');

// Get the navigation menu
const navMenu = document.getElementById('navMenu');

// Toggle menu visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
