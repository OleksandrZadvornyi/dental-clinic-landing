import "../css/style.css";
import i18next from "i18next";
import { initializeI18n } from "./i18n/i18nConfig";
import { updateContent, updateLanguageButton } from "./i18n/contentUpdater";
import { initializeTopNav } from "./navigation/topNav";
import { alignLines } from "./layout/lineAlignment";
import { initializeDoctorsSlider } from "./carousel/doctorsSlider";
import { initializeReviewsSlider } from "./carousel/reviewsSlider";
import { initializeAnimations } from "./animations/intersectionObserver";

// Initialize i18n
initializeI18n().then(() => {
  updateContent();
  updateLanguageButton();
});

// Initialize language switcher
document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("language-button");
  const languageMenu = document.getElementById("language-menu");

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      languageMenu.classList.toggle("hidden-locale");
    });
  }

  if (languageMenu) {
    languageMenu.addEventListener("click", (event) => {
      const selectedLanguage = event.target.dataset.lang;
      if (selectedLanguage) {
        i18next.changeLanguage(selectedLanguage).then(() => {
          updateContent();
          updateLanguageButton();
        });
        languageMenu.classList.add("hidden-locale");
      }
    });
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-switcher")) {
      languageMenu.classList.add("hidden-locale");
    }
  });
});

// Initialize other features
initializeTopNav();
initializeDoctorsSlider();
initializeReviewsSlider();
initializeAnimations();

// Set up event listeners
window.addEventListener("load", alignLines);
window.addEventListener("resize", alignLines);

if (screen.width < 991) {
  let review_image = document.getElementById("review-image");
  let review_title = document.getElementById("review-title");
  review_title.after(review_image);
}