import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import MainBody from "./components/MainBody";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bodyMain">
      <Navbar />
      <MainBody />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
