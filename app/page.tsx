import Contact from "./src/components/Contact";
import Education from "./src/components/Education";
import Experience from "./src/components/Experience";
import Footer from "./src/components/Footer";
import Hero from "./src/components/Hero";
import Nav from "./src/components/Nav";
import Projects from "./src/components/Projects";
import Skills from "./src/components/Skills";
import { C } from "./src/data";

const sections = [Experience, Education, Projects, Skills, Contact];

export default function Page() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Nav />
      <main>
        <Hero />
        {sections.map((Section) => (
          <div key={Section.name} style={{ borderTop: `1px solid ${C.grayLight}` }}>
            <Section />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
