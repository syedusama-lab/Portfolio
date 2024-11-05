// src/Navbar.jsx
import React, { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const aboutData = [
    { name: "About", link: "#about", img: <FaUser /> },
    { name: "Experience", link: "#experience", img: <FaBriefcase /> },
    { name: "Skills", link: "#skills", img: <FaTools /> },
    { name: "Projects", link: "#projects", img: <FaProjectDiagram /> },
    { name: "Certifications", link: "#certifications", img: <FaCertificate /> },
    { name: "Contact", link: "#contact", img: <FaEnvelope /> },
  ];

  const scrollToSection = (id) => {
    gsap.to(window, { duration: 1.3, scrollTo: id });
    setMenuOpen(false);
  };

  return (
    <nav className="nav fixed top-0 w-full bg-white text-black p-2 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center md:pr-10 font-bold">
        <div
          onClick={() => scrollToSection("#main")}
          className="flex gap-x-1 md:pl-10 cursor-pointer hover:underline hover:text-[#3E64FF]"
        >
          <div className="mr-0 md:h-12 md:w-12 h-10 w-10">
            <img src="/assets/portfolio.png" alt="" className="w-full" />
          </div>
          <div className="text-2xl font-bold   md:pt-1 pt-0">
            <span className="text-xl font-semibold">Syed Usama</span>
          </div>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12">
          {aboutData.map((item, index) => (
            <a
              key={index}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.link);
              }}
              className="flex items-center space-x-1 cursor-pointer hover:text-[#3E64FF] hover:underline hover:scale-125 transition-transform duration-200 ease-in-out"
            >
              {item.img}
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-200 text-gray-800 font-medium p-4 space-y-2 absolute top-full left-0 w-full shadow-lg rounded-b-2xl ">
          {aboutData.map((item, index) => (
            <a
              key={index}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.link);
              }}
              className="flex items-center pl-2 space-x-3 hover:text-gray-600 cursor-pointer"
            >
              {item.img}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
