import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { C } from "@/data";
import { getPortfolioData } from "@/lib/actions/portfolio";

export default async function App() {
  const userEmail = "shamelbenaldo12@gmail.com";
  const userPortfolio = await getPortfolioData(userEmail);

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Nav />
      <Hero users={userPortfolio} />
      {/* <Divider /> */}
      <Education educations={userPortfolio?.educations} />
      <Experience experiences={userPortfolio?.experiences} />
      <Projects projects={userPortfolio?.projects} />
      <Skills skills={userPortfolio?.skills} />
      <Contact />
      <Footer />
    </div>
  );
  
}
