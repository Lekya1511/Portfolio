import { Header } from "./components/portfolio/Header";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Education } from "./components/portfolio/Education";
import { Skills } from "./components/portfolio/Skills";
import { Services } from "./components/portfolio/Services";
import { Projects } from "./components/portfolio/Projects";
import { Certifications } from "./components/portfolio/Certifications";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}