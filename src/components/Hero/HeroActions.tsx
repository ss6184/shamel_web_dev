import { C } from "../../data";

export default function HeroActions() {
  return <div className="flex flex-wrap gap-4">
    <a href="#projects" className="px-6 py-3 text-sm" style={{ background: C.navy, color: C.bg, textDecoration: "none" }}>View Projects →</a>
    <a href="#contact" className="px-6 py-3 text-sm" style={{ border: `1px solid ${C.grayLight}`, color: C.gray, textDecoration: "none" }}>Get in touch</a>
  </div>;
}
