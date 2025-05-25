// Get the hamburger icon and navigation links container
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle the "show" class on nav-links when hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Optional: Close menu when a nav link is clicked (on mobile)
const links = navLinks.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
