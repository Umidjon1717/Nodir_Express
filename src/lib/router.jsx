import { useSyncExternalStore, useCallback } from "react";

// Tiny hash-based router. Hash routing keeps every deep link working on any
// static host (GitHub Pages, Netlify drop, S3) with zero server config, and it
// runs unchanged inside a single-file build.

function readPath() {
  const raw = window.location.hash.replace(/^#/, "");
  return raw.startsWith("/") ? raw : "/" + raw.replace(/^\/*/, "");
}

function subscribe(callback) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

export function useRoute() {
  return useSyncExternalStore(subscribe, readPath, () => "/");
}

export function navigate(to) {
  if (readPath() === to) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = to;
}

export function Link({ to, className, activeClassName, children, onNavigate, ...rest }) {
  const route = useRoute().split("#")[0];
  const target = to.split("#")[0];
  const isActive =
    target === "/" ? route === "/" : route === target || route.startsWith(target + "/");
  const cls = [className, isActive && activeClassName].filter(Boolean).join(" ");

  const handleClick = useCallback(
    (e) => {
      // Let modified clicks (new tab) behave normally.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      navigate(to);
      if (onNavigate) onNavigate();
    },
    [to, onNavigate]
  );

  return (
    <a
      href={"#" + to}
      className={cls || undefined}
      aria-current={isActive ? "page" : undefined}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
