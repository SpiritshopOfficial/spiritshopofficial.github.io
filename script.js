var logoSwitch = 0;

function toogleLogo() {
  var spiritshop = document.getElementById('spiritshop');
  var house = document.getElementById('house');
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