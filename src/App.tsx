import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Education from "./components/Education";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <hr className="w-[80%] max-w-[1200px] mx-auto mb-[3em] text-[var(--color-border)] max-[550px]:w-[90%]" />
        <section className="skills w-[80%] max-w-[1200px] mx-auto mb-[3em] max-[550px]:w-[90%]">
          <h1 className="mb-[1em]">Skills</h1>
          <Skills />
        </section>
        <hr className="w-[80%] max-w-[1200px] mx-auto mb-[3em] text-[var(--color-border)] max-[550px]:w-[90%]" />
        <section className="experience mb-[3em]">
          <Experience />
        </section>
        <hr className="w-[80%] max-w-[1200px] mx-auto mb-[3em] text-[var(--color-border)] max-[550px]:w-[90%]" />
        <section className="projects">
          <Projects />
        </section>
        <hr className="w-[80%] max-w-[1200px] mx-auto mb-[3em] text-[var(--color-border)] max-[550px]:w-[90%]" />
        <section>
          <Education />
        </section>
        <hr className="w-[80%] max-w-[1200px] mx-auto mb-[3em] text-[var(--color-border)] max-[550px]:w-[90%]" />
        <section className="contact mb-[3em]">
          <Contact />
        </section>
      </main>
    </>
  );
}
