export function initTheme() {
  setTheme(getTheme());
}

export function getTheme() {
  return window.localStorage.getItem("theme") || "light";
}

export function setTheme(theme) {
  document.body.className = theme;
  window.localStorage.setItem("theme", theme);
}

export function toggleTheme() {
  setTheme(getTheme() === "light" ? "dark" : "light");
}
