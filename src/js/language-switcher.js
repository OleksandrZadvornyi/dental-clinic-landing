document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("language-button");
  const languageMenu = document.getElementById("language-menu");

  // Toggle the dropdown menu
  languageButton.addEventListener("click", () => {
    languageMenu.classList.toggle("hidden");
  });

  // Handle language selection
  languageMenu.addEventListener("click", (event) => {
    const selectedLanguage = event.target.dataset.lang;
    if (selectedLanguage) {
      languageButton.textContent = selectedLanguage; // Update button text
      languageMenu.classList.add("hidden"); // Hide the dropdown menu
    }
  });

  // Close the dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-switcher")) {
      languageMenu.classList.add("hidden");
    }
  });
});
