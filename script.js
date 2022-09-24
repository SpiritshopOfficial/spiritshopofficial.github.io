var isInstagram = navigator.userAgent.match(/instagram/i);
if (isInstagram) {
  document.querySelector('html').classList.add("html-insta");
}

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
