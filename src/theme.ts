const STORAGE_KEY = "phya-theme";

function getStoredTheme(): "light" | "dark" | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* localStorage indisponível (ex.: file:// em alguns navegadores) */
  }
  return null;
}

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function currentTheme(): "light" | "dark" {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: "light" | "dark"): void {
  document.body.classList.toggle("dark", theme === "dark");
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute(
      "aria-label",
      theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"
    );
  }
}

export function setupThemeToggle(): void {
  applyTheme(currentTheme());

  const btn = document.getElementById("theme-toggle");
  btn?.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignora: segue apenas em memória */
    }
    applyTheme(next);
  });

  // Se o usuário nunca escolheu manualmente, acompanha o sistema.
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (!getStoredTheme()) applyTheme(getSystemTheme());
    });
}
