"use client";

import { C } from "@/data";
import Nav from "./src/components/Nav";
import Hero from "./src/components/Hero";
import Experience from "./src/components/Experience";
import Education from "./src/components/Education";
import Projects from "./src/components/Projects";
import Skills from "./src/components/Skills";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

export default function App() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Nav />
      <main>
        <Hero />
        <div style={{ borderTop: `1px solid ${C.grayLight}` }}>
          <Experience />
        </div>
        <div style={{ borderTop: `1px solid ${C.grayLight}` }}>
          <Education />
        </div>
        <div style={{ borderTop: `1px solid ${C.grayLight}` }}>
          <Projects />
        </div>
        <div style={{ borderTop: `1px solid ${C.grayLight}` }}>
          <Skills />
        </div>
        <div style={{ borderTop: `1px solid ${C.grayLight}` }}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
