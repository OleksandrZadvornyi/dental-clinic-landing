import i18next from "i18next";

export function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translatedText = i18next.t(key);
    if (translatedText) {
      el.innerHTML = translatedText;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const translatedText = i18next.t(key);
    if (translatedText) {
      el.setAttribute("placeholder", translatedText);
    }
  });

  document.querySelectorAll("[data-i18n-value]").forEach((el) => {
    const key = el.getAttribute("data-i18n-value");
    const translatedText = i18next.t(key);
    if (translatedText) {
      el.setAttribute("value", translatedText);
    }
  });
}

export function updateLanguageButton() {
  const languageButton = document.getElementById("language-button");
  if (languageButton) {
    languageButton.textContent = i18next.language.toUpperCase();
  }
}
