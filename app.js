/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".top-nav").style.top = "0px";
  } else {
    document.querySelector(".top-nav").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}