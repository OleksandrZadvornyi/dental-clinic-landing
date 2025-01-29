import "../css/style.css";
import i18next from "i18next";

i18next
  .init({
    lng: "en", // Default language
    debug: true, // Logs info in the console (useful for development)
    resources: {
      en: {
        translation: require("../locales/en.json"),
      },
      ukr: {
        translation: require("../locales/ukr.json"),
      },
      fr: {
        translation: require("../locales/fr.json"),
      },
      de: {
        translation: require("../locales/de.json"),
      },
      es: {
        translation: require("../locales/es.json"),
      },
    },
  })
  .then(() => {
    updateContent(); // Load the default language
  });

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translatedText = i18next.t(key);
    if (translatedText) {
      el.innerHTML = translatedText;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("language-button");
  const languageMenu = document.getElementById("language-menu");

  // Toggle the dropdown menu
  languageButton.addEventListener("click", () => {
    languageMenu.classList.toggle("hidden-locale");
  });

  // Handle language selection
  languageMenu.addEventListener("click", (event) => {
    const selectedLanguage = event.target.dataset.lang;
    if (selectedLanguage) {
      i18next.changeLanguage(selectedLanguage).then(() => {
        updateContent(); // Update translations dynamically
      });
      languageButton.textContent = selectedLanguage.toUpperCase(); // Update button text
      languageMenu.classList.add("hidden-locale"); // Hide the dropdown menu
    }
  });

  // Close the dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-switcher")) {
      languageMenu.classList.add("hidden-locale");
    }
  });
});

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
