import "../css/style.css";
import i18next from "i18next";

// Function to detect the user's preferred language
function detectUserLanguage() {
  const supportedLanguages = ["en", "uk", "fr", "de", "es"]; // List of supported languages
  const browserLanguages = navigator.languages || [navigator.language]; // Get browser languages

  // Find the first supported language that matches the user's preferences
  for (const lang of browserLanguages) {
    const languageCode = lang.split("-")[0]; // Extract the base language code (e.g., "en" from "en-US")
    if (supportedLanguages.includes(languageCode)) {
      return languageCode; // Return the first supported language
    }
  }

  return "en"; // Default to English if no supported language is found
}

i18next
  .init({
    lng: detectUserLanguage(), // Set the default language based on user's browser settings
    debug: true, // Logs info in the console (useful for development)
    resources: {
      en: {
        translation: require("../locales/en.json"),
      },
      uk: {
        translation: require("../locales/uk.json"),
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
    updateLanguageButton(); // Update the language button text
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

// Function to update the language button text
function updateLanguageButton() {
  const languageButton = document.getElementById("language-button");
  if (languageButton) {
    languageButton.textContent = i18next.language.toUpperCase(); // Update button text to current language
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("language-button");
  const languageMenu = document.getElementById("language-menu");

  // Toggle the dropdown menu
  if (languageButton) {
    languageButton.addEventListener("click", () => {
      languageMenu.classList.toggle("hidden-locale");
    });
  }

  // Handle language selection
  if (languageMenu) {
    languageMenu.addEventListener("click", (event) => {
      const selectedLanguage = event.target.dataset.lang;
      if (selectedLanguage) {
        i18next.changeLanguage(selectedLanguage).then(() => {
          updateContent(); // Update translations dynamically
          updateLanguageButton(); // Update the language button text
        });
        languageMenu.classList.add("hidden-locale"); // Hide the dropdown menu
      }
    });
  }

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

document.getElementById("top-nav-icon").addEventListener("click", displayTopNav);

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
