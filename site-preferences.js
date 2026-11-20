/* Site-wide appearance preference: light and dark themes only. */
(() => {
  "use strict";

  const THEME_KEY = "connect-consulting-theme";
  let theme = "light";

  function readTheme() {
    try {
      return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
    } catch (error) {
      return "light";
    }
  }

  function saveTheme(value) {
    try {
      localStorage.setItem(THEME_KEY, value);
    } catch (error) {
      // The theme still works for the current page when storage is unavailable.
    }
  }

  function applyTheme() {
    document.documentElement.dataset.theme = theme;

    const button = document.getElementById("theme-toggle");
    if (button) {
      button.textContent = theme === "light" ? "☾" : "☀";
      button.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      );
      button.title = theme === "light" ? "Dark theme" : "Light theme";
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b1725" : "#102b4e");
  }

  theme = readTheme();
  applyTheme();

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    saveTheme(theme);
    applyTheme();
  });

  window.ConnectConsultingPreferences = {
    get theme() {
      return theme;
    },
    setTheme(value) {
      if (value !== "light" && value !== "dark") return;
      theme = value;
      saveTheme(theme);
      applyTheme();
    }
  };
})();
