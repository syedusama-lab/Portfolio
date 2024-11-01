import About from "./components/About";
import Experience from "./components/Experience";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certification";
import ContactUs from "./components/ContactUs";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App mt-14">
      <Navbar />
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <ContactUs />
    </div>
  );
}

export default App;
