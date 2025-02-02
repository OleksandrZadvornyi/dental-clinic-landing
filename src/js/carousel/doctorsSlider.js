export function initializeDoctorsSlider() {
  function moveSlidesLeft() {
    const slides = document.querySelector(".doctors-wrapper");
    const elements = slides.getElementsByTagName("div");
    const leftSlide = elements[0];
    const rightArrow = document.querySelector(
      ".doctors-wrapper > span:last-of-type"
    );
    slides.removeChild(leftSlide);
    slides.insertBefore(leftSlide, rightArrow);
  }

  function moveSlidesRight() {
    const slides = document.querySelector(".doctors-wrapper");
    const elements = slides.getElementsByTagName("div");
    const rightSlide = elements[elements.length - 1];
    slides.removeChild(rightSlide);
    slides.insertBefore(rightSlide, elements[0]);
  }

  const leftArrow = document.querySelector(
    ".doctors-wrapper > span:first-of-type"
  );
  const rightArrow = document.querySelector(
    ".doctors-wrapper > span:last-of-type"
  );

  leftArrow.addEventListener("click", moveSlidesLeft);
  rightArrow.addEventListener("click", moveSlidesRight);
}
