import { useCallback, useEffect, useState } from "react";

const KEY = "nodir-theme";
const ORDER = ["system", "light", "dark"];

function read() {
  try {
    const v = localStorage.getItem(KEY);
    return ORDER.includes(v) ? v : "system";
  } catch {
    return "system";
  }
}

function apply(mode) {
  const root = document.documentElement;
  if (mode === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", mode);
}

// Cycles system → light → dark → system, persists the choice, and mirrors it
// onto <html data-theme>. Wrapped in try/catch so it degrades gracefully where
// storage is blocked.
export function useTheme() {
  const [mode, setMode] = useState(read);

  useEffect(() => {
    apply(mode);
    try {
      localStorage.setItem(KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  const cycle = useCallback(() => {
    setMode((m) => ORDER[(ORDER.indexOf(m) + 1) % ORDER.length]);
  }, []);

  return { mode, cycle };
}
