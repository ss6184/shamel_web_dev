"use client";

import { useState } from "react";
import { C } from "../../data";
import { DesktopNav, MobileNav } from "./NavLinks";
import useScrollY from "./useScrollY";
import styles from "./Nav.module.css";

export default function Nav() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const elevated = scrollY > 40;

  return (
    <header className={`${styles.header} fixed top-0 left-0 right-0 z-50`} style={{ background: elevated ? C.navBg : "transparent", borderBottom: elevated ? `1px solid ${C.grayLight}` : "1px solid transparent" }}>
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" style={{ color: C.navy, fontFamily: "var(--font-mono)", fontSize: ".75rem", fontWeight: 600 }}>SBO</a>
        <DesktopNav />
        <a className="hidden md:inline-flex px-4 py-2" href="mailto:benaldoshamel@gmail.com" style={{ border: `1px solid ${C.navy}`, color: C.navy, fontFamily: "var(--font-mono)", fontSize: ".7rem" }}>Hire Me ↗</a>
        <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={{ color: C.navy, background: "none", border: 0 }}><span className="text-xl">{menuOpen ? "×" : "☰"}</span></button>
      </nav>
      {menuOpen && <MobileNav onSelect={() => setMenuOpen(false)} />}
    </header>
  );
}
