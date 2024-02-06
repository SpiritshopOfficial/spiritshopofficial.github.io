/* Loading */

window.addEventListener('load', function() {
  const loadingOverlay = document.querySelector('.loading-overlay');
  loadingOverlay.classList.add('loaded');
});

/* Main */

let menu;
let body;

/* Instagram Browser */

var isInstagram = navigator.userAgent.match(/instagram/i);
if (isInstagram) {
  document.querySelector('html').classList.add("html-insta");
}


/* Copyright Date */

const y = new Date();
let year = y.getFullYear();
document.getElementById("year").innerHTML = year;

/* Menu */

menu = document.querySelector(".menu");
body = document.body;

window.addEventListener('scroll', function() {
    if (window.scrollY > 120) {
        menu.classList.add("visible");
    } else {
        menu.classList.remove("visible");
    }
});


function toggleMenu() {
  const menubutton = document.querySelector(".menu-button");

  // Toggle the 'open' class on the menu
  menu.classList.toggle("open");

  // Toggle the 'clicked' class on the menu button
  menubutton.classList.toggle("clicked");

  // Check if the menu is open
  if (menu.classList.contains("open")) {
    // Disable scrolling
    body.style.overflow = "hidden";
  } else {
    // Enable scrolling
    body.style.overflow = "scroll";
    /* setTimeout(() => {
      body.style.overflow = "scroll";
    }, 600); */
  }
}

/* Scroll to Top */

function scrollToTop() {
  if (document.documentElement) {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
