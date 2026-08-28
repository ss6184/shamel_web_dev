import { useState, useEffect } from "react";
export const NAV_LINKS = ["About", "Experience", "Education", "Projects","Skills", "Contact"];
import { C } from "@/data";

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

export default function Nav() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const elevated = scrollY > 40;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: elevated ? C.navBg : "transparent",
        backdropFilter: elevated ? "blur(12px)" : "none",
        borderBottom: elevated
          ? `1px solid ${C.grayLight}`
          : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          style={{
            fontFamily: "var(--font-mono)",
            color: C.navy,
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          SBO
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-body)",
                  color: C.gray,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.navy)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.gray)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:benaldoshamel@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 transition-all duration-200"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            border: `1px solid ${C.navy}`,
            color: C.navy,
            borderRadius: "2px",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = C.navy;
            e.currentTarget.style.color = C.bg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = C.navy;
          }}
        >
          Hire Me ↗
        </a>

        <button
          className="md:hidden p-1"
          style={{
            color: C.navy,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className="block h-px bg-current transition-all duration-200"
              style={{
                transform: menuOpen
                  ? "translateY(6px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block h-px bg-current transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px bg-current transition-all duration-200"
              style={{
                transform: menuOpen
                  ? "translateY(-6px) rotate(-45deg)"
                  : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: C.bg,
          borderTop: menuOpen ? `1px solid ${C.grayLight}` : "none",
        }}
      >
        <div className="px-6 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 border-b"
              style={{
                fontFamily: "var(--font-body)",
                color: C.gray,
                borderColor: C.grayLight,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
