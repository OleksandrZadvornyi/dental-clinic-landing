function displayTopNav() {
  const topNav = document.getElementById("top-nav-list");
  if (topNav.className === "top-nav") {
    topNav.className += " responsive-nav";
  } else {
    topNav.className = "top-nav";
  }
}

function alignLines() {
  const h2 = document.getElementById("h");
  const p = document.getElementById("p");

  const h2Lines = Math.floor(h2.clientHeight / 64);
  const pLines = Math.floor(p.clientHeight / 34);

  p.style.marginBottom =
    "calc(6.65rem + " +
    (h2Lines - 2) * 64 +
    "px - " +
    (pLines - 3) * 34 +
    "px)";
}

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

window.addEventListener("load", alignLines);
window.addEventListener("resize", alignLines);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const leftArrow = document.querySelector(
  ".doctors-wrapper > span:first-of-type"
);
const rightArrow = document.querySelector(
  ".doctors-wrapper > span:last-of-type"
);
leftArrow.addEventListener("click", moveSlidesLeft);
rightArrow.addEventListener("click", moveSlidesRight);
