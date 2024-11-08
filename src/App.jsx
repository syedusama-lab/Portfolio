import About from "./components/About";
import Experience from "./components/Experience";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certification";
import ContactUs from "./components/ContactUs";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";

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

  const [nightMode,setNightMode] = useState(false);

  return (

    <div className="App mt-14">
      <Navbar nightMode={nightMode} setNightMode={setNightMode}/>
      <Main />
      <About nightMode={nightMode} />
      <Experience nightMode={nightMode} />
      <Skills nightMode={nightMode} />
      <Projects nightMode={nightMode} />
      <Certifications nightMode={nightMode} />
      <ContactUs nightMode={nightMode} />
    </div>
  );
}

export default App;
