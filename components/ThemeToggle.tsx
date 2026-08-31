type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const el = document.documentElement;
  el.classList.remove("light", "dark");
  el.classList.add(theme);
}

/**
 * The active theme is a class on <html>, stamped before paint by the script in
 * _document. Both icons are rendered and CSS picks the right one, so there is
 * no React state to sync, no hydration mismatch, and no placeholder flash.
 */
export function ThemeToggle() {
  function toggle() {
    const next: Theme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable; the theme still applies for this page.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="-m-2 shrink-0 rounded-md p-2 text-subtle transition-colors hover:text-foreground"
    >
      {/* Sun: shown in dark mode, where the button switches to light. */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden h-[18px] w-[18px] dark:block"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>

      {/* Moon: shown in light mode. */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block h-[18px] w-[18px] dark:hidden"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
      </svg>
    </button>
  );
}
