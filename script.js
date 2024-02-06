/* Loading */

window.addEventListener('load', function() {
  const loadingOverlay = document.querySelector('.loading-overlay');
  loadingOverlay.classList.add('loaded');
});

/* Main */

let menu;
let wrapper;

/* Instagram Browser */

var isInstagram = navigator.userAgent.match(/instagram/i);
if (isInstagram) {
  document.querySelector('html').classList.add("html-insta");
}

/* Scroll to Top */

function scrollToTop() {
  const wrapper = document.querySelector('.wrapper');

  if (wrapper) {
    wrapper.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}


/* Copyright Date */

const y = new Date();
let year = y.getFullYear();
document.getElementById("year").innerHTML = year;

/* Menu */

menu = document.querySelector(".menu");
wrapper = document.querySelector(".wrapper");

wrapper.onscroll = function () {
  var currentScroll = wrapper.scrollTop; // Use wrapper's scrollTop
  // Check the scroll position
  if (currentScroll > 120) {
    // If scrolled down, remove the 'hidden' class from the menu
    menu.classList.add("visible");
  } else {
    // If at the top, add the 'hidden' class
    menu.classList.remove("visible");
  }
};

function toggleMenu() {
  const body = document.body;
  const menubutton = document.querySelector(".menu-button");

  // Toggle the 'open' class on the menu
  menu.classList.toggle("open");

  // Toggle the 'clicked' class on the menu button
  menubutton.classList.toggle("clicked");

  // Check if the menu is open
  if (menu.classList.contains("open")) {
    // Disable scrolling
    wrapper.style.overflow = "hidden";
  } else {
    // Enable scrolling
    setTimeout(() => {
      wrapper.style.overflow = "";
    }, 600);
  }
}
