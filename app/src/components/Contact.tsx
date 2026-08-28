
import { useState } from "react";
import { C, CONTACT_ITEMS } from "@/data";
import SectionDivider from "./SectionDivider";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "10px 12px",
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    color: C.navy,
    background: C.bg,
    border: `1px solid ${focused === name ? C.navy : C.grayLight}`,
    borderRadius: "2px",
    outline: "none",
    transition: "border-color 0.2s",
    resize: "none",
  });

  return (
    <section id="contact" className="px-6 py-24 max-w-6xl mx-auto">
      <SectionDivider label="06 — Contact" />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — heading + contact rows */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: C.navy,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            {"Let's grow"}
            <br />
            <span style={{ fontWeight: 600 }}>together.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: C.gray,
              lineHeight: 1.85,
              maxWidth: "360px",
              marginBottom: "2rem",
            }}
          >
            Open to OJT placements, entry-level IT roles, and technical support
            positions. Based in Mandaluyong City — available in Metro Manila and
            remotely.
          </p>

          <div style={{ borderTop: `1px solid ${C.grayLight}` }}>
            {CONTACT_ITEMS.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-between py-4 transition-colors duration-150"
                style={{
                  borderBottom: `1px solid ${C.grayLight}`,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.grayXLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: C.gray,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: C.navy,
                  }}
                >
                  {value}
                  {href !== "#" && (
                    <span style={{ opacity: 0.4 }}> ↗</span>
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — contact form */}
        <div>
          {sent ? (
            <div
              className="flex flex-col items-center justify-center text-center"
              style={{
                padding: "3rem 2rem",
                border: `1px solid ${C.grayLight}`,
                borderRadius: "2px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  color: C.navy,
                  marginBottom: "0.5rem",
                }}
              >
                Message sent!
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: C.gray,
                }}
              >
                Thanks, {form.name.split(" ")[0]}. I&apos;ll get back to you
                soon.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-6 px-4 py-2 text-xs transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-mono)",
                  border: `1px solid ${C.grayLight}`,
                  color: C.gray,
                  background: "none",
                  borderRadius: "2px",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.navy;
                  e.currentTarget.style.color = C.navy;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.grayLight;
                  e.currentTarget.style.color = C.gray;
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: C.gray,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="Your name"
                  style={fieldStyle("name")}
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: C.gray,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="your@email.com"
                  style={fieldStyle("email")}
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: C.gray,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="What's on your mind?"
                  style={fieldStyle("message")}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  background: C.navy,
                  color: C.bg,
                  border: "none",
                  borderRadius: "2px",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.88";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-1px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 16px rgba(28,47,74,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
