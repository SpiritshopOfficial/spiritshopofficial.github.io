var toggled = 0;

function toggleMenu() {
  var menu = document.getElementById("menu");
  var tglr = document.getElementById("toggler");
  if (toggled == 1) {
    menu.style.top = null;
    tglr.innerHTML = "Menu";
    document.body.style.overflow = null;
    toggled = 0;
  } else {
    menu.style.top = "0";
    tglr.innerHTML = "Close";
    document.body.style.overflow = "hidden";
    toggled = 1
  }
}

var logoSwitch = 0;

function toogleLogo() {
  var spiritshop = document.getElementById("spiritshop");
  var house = document.getElementById("house");
  if (logoSwitch == 1) {
    spiritshop.style.display = null;
    house.style.display = null;
    logoSwitch = 0;
  } else {
    spiritshop.style.display = "none";
    house.style.display = "block";
    logoSwitch = 1;
  }
}

window.onscroll = function() {
  if (window.innerHeight * 3 <= window.scrollY) {
   document.getElementById("site-name").innerHTML = "Go to top";  
  } else {
document.getElementById("site-name").innerHTML = "Spiritshop Official"; 
  }
}