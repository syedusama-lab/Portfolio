import About from "./components/About";
import Experience from "./components/Experience";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certification";
import ContactUs from "./components/ContactUs";

function App() {
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
      {/* Other sections go here */}
    </div>
  );
}

export default App;
