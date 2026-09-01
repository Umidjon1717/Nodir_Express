import { useEffect, useState } from "react";
import { Link, useRoute } from "../lib/router.jsx";
import { company, navLinks } from "../data.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const route = useRoute();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [route]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link to="/" className="brand" aria-label={`${company.name} — home`}>
          <b>
            Nodir <span>Express</span> Inc
          </b>
          <small>
            USDOT {company.usdot} &nbsp;·&nbsp; MC {company.mc}
          </small>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" activeClassName="is-active">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <ThemeToggle />
          <a className="btn btn-solid header-cta" href={company.phoneHref}>
            {company.phone}
          </a>
          <button
            type="button"
            className={"hamburger" + (open ? " is-open" : "")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={"nav-drawer" + (open ? " is-open" : "")}>
        <nav aria-label="Mobile">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="drawer-link"
              activeClassName="is-active"
              onNavigate={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-cta">
          <a className="btn btn-solid" href={company.phoneHref}>
            Call {company.phone}
          </a>
          <a className="btn btn-ghost" href={company.smsHref}>
            Text us
          </a>
        </div>
      </div>
      {open && <div className="scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
}
