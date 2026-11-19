import { useEffect, useState } from "react";

// Use the saved choice if there is one, otherwise follow the device setting.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // localStorage can be blocked (private windows). Fall through to the device setting.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Add or remove the "dark" class on <html> whenever the theme changes.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    // Turn on the page-wide colour fade for a moment (see index.css), then turn it off again.
    const root = document.documentElement;
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);

    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next); // remember the choice for next visit
    } catch {
      // Not saving is fine. The toggle still works for this visit.
    }
  }

  return { theme, toggleTheme };
}
