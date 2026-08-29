import { NAV_LINKS, C } from "../../data";

type LinkProps = { onSelect?: () => void };

export function DesktopNav() {
  return <ul className="hidden md:flex items-center gap-8">{NAV_LINKS.map((link) => <li key={link}><a href={`#${link.toLowerCase()}`} style={{ color: C.gray, fontSize: ".875rem", textDecoration: "none" }}>{link}</a></li>)}</ul>;
}

export function MobileNav({ onSelect }: LinkProps) {
  return <div className="md:hidden px-6 pb-6 pt-2" style={{ background: C.bg, borderTop: `1px solid ${C.grayLight}` }}>{NAV_LINKS.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={onSelect} className="block py-3 border-b" style={{ color: C.gray, borderColor: C.grayLight, fontSize: ".875rem", textDecoration: "none" }}>{link}</a>)}</div>;
}
