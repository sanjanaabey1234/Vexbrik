"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const STORAGE_KEY = "vexbrik-theme";

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "light") {
      document.documentElement.dataset.theme = "light";
    }
  }, []);

  function toggleTheme() {
    const isLight = document.documentElement.dataset.theme === "light";
    if (isLight) {
      delete document.documentElement.dataset.theme;
      localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      document.documentElement.dataset.theme = "light";
      localStorage.setItem(STORAGE_KEY, "light");
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-line px-3 text-sm font-medium text-muted transition hover:border-brand hover:text-foreground"
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <Sun className="h-4 w-4 dark-icon" />
      <Moon className="h-4 w-4 light-icon" />
      {!compact && <span>Theme</span>}
    </button>
  );
}
