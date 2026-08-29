import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { C } from "@/data";

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
