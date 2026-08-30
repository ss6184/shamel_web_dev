import { C } from "../../data";

export default function HeroContent() {
  return <>
    <p className="mb-6" style={{ color: C.navy, fontFamily: "var(--font-mono)", fontSize: ".7rem", letterSpacing: ".25em", textTransform: "uppercase", opacity: .7 }}>Available for OJT &amp; Entry-Level Opportunities</p>
    <h1 className="leading-none mb-5" style={{ color: C.navy, fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, lineHeight: 1 }}>Shamel B.<br /><strong>Ocampo</strong></h1>
    <div className="flex flex-wrap items-center gap-3 mb-7">{["IT Student", "Rizal Technological University", "Mandaluyong City"].map((item) => <span key={item} style={{ color: C.gray, fontFamily: "var(--font-mono)", fontSize: ".78rem" }}>{item}</span>)}</div>
    <p className="max-w-xl mb-10" style={{ color: C.gray, fontFamily: "var(--font-body)", lineHeight: 1.85 }}>A dedicated and highly motivated IT student seeking an on-the-job training opportunity. I aim to apply my basic knowledge and contribute to your team while gaining hands-on industry experience in technical support, networking, and software operations.</p>
  </>;
}
