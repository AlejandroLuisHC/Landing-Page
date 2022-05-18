let slideIndexPrev = 1;
let slideIndexCurr = 0;

showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  
  if (slideIndexPrev >= slides.length) {slideIndexPrev = 0}
  if (slideIndexCurr >= slides.length) {slideIndexCurr = 0}
  
  slides[slideIndexCurr].classList.add("fade-in");
  slides[slideIndexCurr].classList.remove("fade-out");
  slides[slideIndexPrev].classList.add("fade-out");
  slides[slideIndexPrev].classList.remove("fade-in");
  
  slideIndexPrev++;
  slideIndexCurr++;

  setTimeout(showSlides, 3000); // Change image every X seconds
}