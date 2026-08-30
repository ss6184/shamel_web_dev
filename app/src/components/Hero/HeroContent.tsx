import { C } from "../../data";

export default function HeroContent() {
  return <>
    <p className="mb-6" style={{ color: C.navy, fontFamily: "var(--font-mono)", fontSize: ".7rem", letterSpacing: ".25em", textTransform: "uppercase", opacity: .7 }}></p>
    <h1 className="leading-none mb-5" style={{ color: C.navy, fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, lineHeight: 1 }}>Shamel B.<br /><strong>Ocampo</strong></h1>
    <div className="flex flex-wrap items-center gap-3 mb-7">{[].map((item) => <span key={item} style={{ color: C.gray, fontFamily: "var(--font-mono)", fontSize: ".78rem" }}>{item}</span>)}</div>
    <p className="max-w-xl mb-10" style={{ color: C.gray, fontFamily: "var(--font-body)", lineHeight: 1.85}}></p>
  </>;
}
