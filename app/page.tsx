"use server"

import { Divider } from "@mui/material";
import Contact from "./src/components/Contact";
import Education from "./src/components/Education";
import Experience from "./src/components/Experience";
import Footer from "./src/components/Footer";
import Hero from "./src/components/Hero";
import Nav from "./src/components/Nav";
import Projects from "./src/components/Projects";
import Skills from "./src/components/Skills";
import { C } from "./src/data";
import { getPortfolioData } from "@/lib/actions/portfolio";

export default async function App() {
  const userEmail = "shamelbenaldo12@gmail.com ";
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
