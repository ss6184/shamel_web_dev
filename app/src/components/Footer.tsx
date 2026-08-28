import { C } from "@/data";

export default function Footer() {
  return (
    <footer
      className="px-6 py-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderTop: `1px solid ${C.grayLight}` }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          color: C.gray,
          letterSpacing: "0.1em",
        }}
      >
        © 2026 Shamel B. Ocampo
      </p>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          color: C.gray,
          letterSpacing: "0.1em",
        }}
      >
        BS Information Technology · RTU Mandaluyong
      </p>
    </footer>
  );
}
