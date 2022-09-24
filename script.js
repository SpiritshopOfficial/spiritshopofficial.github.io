var isInstagram = navigator.userAgent.match(/instagram/i);
if (isInstagram) {
  document.querySelector('html').classList.add("html-insta");
}
