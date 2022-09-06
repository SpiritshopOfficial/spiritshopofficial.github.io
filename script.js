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

jQuery(document).on(
  "click",
  ".consult-header .consult-primary-menu li a",
  function (event) {
    event.preventDefault();
    var thishref = jQuery(this).attr("href");
    var url = thishref.substr(thishref.indexOf("#"));
    jQuery("html, body").animate(
      {
        scrollTop: $(url).offset().top
      },
      2000
    );
  }
);
