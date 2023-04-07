var scroll_position = 0;
var section_position1 = 100;

function startAnimation1() {
   document.querySelector(".about-me-head").classList.add("textAbout");
}

document.addEventListener('scroll', function(e) {
  scroll_position = window.scrollY;
  if (scroll_position > section_position1) {
    startAnimation1();
}})


