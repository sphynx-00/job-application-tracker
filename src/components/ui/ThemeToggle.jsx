import { Moon, Sun } from "lucide-react";

// A sliding switch. The knob sits on the left in light mode and slides right in dark mode.
// role="switch" and aria-checked tell screen readers it is an on/off control.
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={onToggle}
      className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full bg-gray-500 transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 motion-reduce:transition-none dark:bg-blue-600"
    >
      {/* The knob. translate-x-1 = 4px from the left, translate-x-6 = slid across to the right. */}
      <span
        className={`grid size-5 place-items-center rounded-full bg-white shadow transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
          isDark ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {isDark ? (
          <Moon className="size-3 text-blue-600" aria-hidden="true" />
        ) : (
          <Sun className="size-3 text-amber-600" aria-hidden="true" />
        )}
      </span>
    </button>
  );
}