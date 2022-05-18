let slideIndexPrev = 1;
let slideIndexCurr = 0;

showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  if (slideIndexPrev >= slides.length) {slideIndexPrev = 0}
  if (slideIndexCurr >= slides.length) {slideIndexCurr = 0}
  
  slides[slideIndexCurr].classList.add("fade-out");
  slides[slideIndexCurr].classList.remove("fade-in");
  slides[slideIndexPrev].classList.add("fade-in");
  slides[slideIndexPrev].classList.remove("fade-out");
  
  slideIndexPrev++;
  slideIndexCurr++;

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}