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

  const [nightMode, setNightMode] = useState(false);
  const preventSelection = (e) => e.preventDefault();
  const handleKeyDown = (e) => {
    if (
      (e.ctrlKey && e.key === "c") ||
      (e.ctrlKey && e.key === "x") ||
      (e.ctrlKey && e.key === "v") ||
      (e.ctrlKey && e.key === "a")
    ) {
      e.preventDefault();
    }
  };
  const noSelectStyle = {
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
  };

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onMouseDown={preventSelection}
      onMouseUp={preventSelection}
      onKeyDown={handleKeyDown}
      style={noSelectStyle}
      className="App"
    >
      <Navbar nightMode={nightMode} setNightMode={setNightMode} />
      <Main nightMode={nightMode}/>
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
