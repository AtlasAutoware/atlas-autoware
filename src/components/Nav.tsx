import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import atlasLogo from "@/assets/atlas-logo.png";

const navLinks: Array<[string, string]> = [
  ["Home", "/home"],
  ["The Car", "/the-car"],
];

/** Brand mark + wordmark. The disc mark is inverted in the dark theme (see .aa-brand in styles.css). */
export function Brand() {
  return (
    <Link to="/home" className="aa-brand">
      <img src={atlasLogo} alt="" width={32} height={32} />
      <span>Atlas Autoware</span>
    </Link>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("aa-theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: the choice lasts for this page view only */
    }
    setIsDark(next);
  };

  return (
    <button
      type="button"
      className="aa-icon-btn"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`aa-nav ${scrolled || menuOpen ? "aa-nav--scrolled" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        <Brand />

        <nav className="hidden md:flex items-center gap-7" aria-label="Main">
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className="aa-nav__link"
              activeProps={{ className: "active", "aria-current": "page" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/donate" className="hidden md:inline-flex aa-btn aa-btn--primary aa-btn--sm">
            Donate
          </Link>
          <button
            type="button"
            className="md:hidden aa-icon-btn"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="md:hidden border-t border-line px-6 pb-6 pt-3" aria-label="Mobile">
          <div className="grid gap-1">
            {navLinks.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="aa-mobile-link"
                activeProps={{ className: "active", "aria-current": "page" }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            to="/donate"
            className="mt-4 aa-btn aa-btn--primary aa-btn--block"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
