export function initializeDoctorsSlider() {
  const carousel = document.querySelector(".slides-wrapper");
  const slides = carousel.children;
  let isAnimating = false;

  function moveSlide(direction) {
    if (isAnimating) return;
    isAnimating = true;

    const slideWidth =
      slides[0].offsetWidth +
      parseFloat(getComputedStyle(slides[0]).marginRight);
    const currentPosition = carousel.style.transform
      ? parseFloat(
          carousel.style.transform.replace("translateX(", "").replace("px)", "")
        )
      : 0;

    if (direction === "left") {
      // Fade out first slide
      slides[0].style.opacity = "0";

      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(${
        currentPosition - slideWidth
      }px)`;

      setTimeout(() => {
        carousel.style.transition = "none";
        const movedSlide = slides[0];
        carousel.appendChild(movedSlide);
        carousel.style.transform = `translateX(${currentPosition}px)`;
        // Fade in the moved slide
        setTimeout(() => {
          movedSlide.style.opacity = "1";
        }, 50);
        isAnimating = false;
      }, 500);
    } else {
      const lastSlide = slides[slides.length - 1];
      // Start with opacity 0
      lastSlide.style.opacity = "0";

      carousel.style.transition = "none";
      carousel.insertBefore(lastSlide, slides[0]);
      carousel.style.transform = `translateX(${
        currentPosition - slideWidth
      }px)`;

      setTimeout(() => {
        // Fade in the new first slide
        lastSlide.style.opacity = "1";

        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = `translateX(${currentPosition}px)`;
        setTimeout(() => {
          isAnimating = false;
        }, 500);
      }, 20);
    }
  }

  const leftArrow = document.querySelector(
    ".doctors-wrapper > span:first-of-type"
  );
  const rightArrow = document.querySelector(
    ".doctors-wrapper > span:last-of-type"
  );

  leftArrow.addEventListener("click", () => moveSlide("left"));
  rightArrow.addEventListener("click", () => moveSlide("right"));

  // Auto-play functionality
  let autoPlayInterval;

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      moveSlide("right");
    }, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Start autoplay and handle hover pause
  startAutoPlay();
  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);
}