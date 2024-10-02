import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import logo from "../assets/icons/portfolio.png";

function Navbar() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  useGSAP(() => {
    gsap.from(".nav_child1", {
      y: -50,
      opacity: -1,
      duration: 1,
    });
  });
  useGSAP(() => {
    gsap.from(".nav_child2 a", {
      y: -50,
      opacity: -1,
      duration: 1,
    });
  });
  useGSAP(() => {
    gsap.to(".nav", {
      backgroundColor: "white",
      height: "65px",
      scrollTrigger: {
        trigger: ".nav",
        scroll: "body",
        start: "top -8%",
        end: "top -11%",
        scrub: 1,
        markers: false,
      },
    });
  });

  const aboutData = [
    { name: "about", link: "#about", img: "src/assets/icons/about.png" },
    {
      name: "experience",
      link: "#experience",
      img: "src/assets/icons/experience.png",
    },
    { name: "skills", link: "#skills", img: "src/assets/icons/skills.png" },
    {
      name: "certifications",
      link: "#certifications",
      img: "src/assets/icons/certificate.png",
    },
    { name: "contact", link: "#contact", img: "src/assets/icons/contact.png" },
  ];

  const [isMobile, setIsMobile] = useState(false); // State for mobile view
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenuOpen(false); // Close the menu when screen is resized to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    gsap.to(window, { duration: 1.3, scrollTo: id });
  };

  return (
    <div className="nav">
      <a className="nav_child1" href="">
        <img src="./src/assets/icons/portfolio.png" alt="Logo" />
        <h2>Syed Portfolio</h2>
      </a>

      {isMobile && (
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
      )}
      <div className={`nav_child2 ${menuOpen ? "active" : ""}`}>
        {aboutData.map((item, index) => (
          <a
            key={index}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.link);
            }}
          >
            <img src={item.img} alt="" />
            <li>{item.name}</li>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
