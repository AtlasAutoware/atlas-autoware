import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import atlasLogo from "@/assets/atlas-logo.png";

const navLinks: Array<[string, string]> = [
  ["Home", "/home"],
  ["The Car", "/the-car"],
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur-xl bg-background/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-lg bg-white grid place-items-center overflow-hidden">
              <img src={atlasLogo} alt="Atlas Autoware logo" className="w-7 h-7 object-contain" />
            </div>
            <span className="font-semibold tracking-tight text-foreground">Atlas Autoware</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map(([label, href]) => (
              <Link key={href} to={href} className="hover:text-foreground transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="hidden md:inline-flex btn-donate text-sm !py-2 !px-4 inline-flex items-center gap-2"
            >
              Donate 🤍
            </Link>
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface text-foreground shadow-sm shadow-black/10 transition hover:bg-surface-2"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="md:hidden fixed inset-0 z-40 bg-black/10 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute left-1/2 top-20 w-[min(92vw,20rem)] -translate-x-1/2 rounded-3xl border border-white/10 bg-background p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-lg bg-white grid place-items-center overflow-hidden">
                  <img src={atlasLogo} alt="Atlas Autoware logo" className="w-7 h-7 object-contain" />
                </div>
                <span className="font-semibold tracking-tight text-foreground">Atlas Autoware</span>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface text-foreground transition hover:bg-surface-2"
                onClick={() => setMenuOpen(false)}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {navLinks.map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="block rounded-2xl border border-white/10 bg-surface px-4 py-3 text-base font-semibold text-foreground transition hover:border-white/20"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/donate"
                className="block rounded-2xl btn-donate px-4 py-3 text-base font-semibold text-white text-center"
                onClick={() => setMenuOpen(false)}
              >
                Donate 🤍
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
