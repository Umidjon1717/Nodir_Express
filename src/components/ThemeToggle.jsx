import { useTheme } from "../lib/useTheme.js";

const ICON = { system: "◐", light: "☀", dark: "☾" };
const NEXT = { system: "light", light: "dark", dark: "system" };

export default function ThemeToggle() {
  const { mode, cycle } = useTheme();
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycle}
      aria-label={`Theme: ${mode}. Switch to ${NEXT[mode]}.`}
      title={`Theme: ${mode}`}
    >
      <span aria-hidden="true">{ICON[mode]}</span>
    </button>
  );
}
