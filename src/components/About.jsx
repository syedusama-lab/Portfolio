import React from "react";
import { useEffect } from "react";
import '../styles/about.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  let data = [
    {
      id: "Name:",
      data: "Syed Usama",
    },
    {
      id: "Date of birth:",
      data: "OCTOBER 14, 1997",
    },
    {
      id: "Address:",
      data: "peshawar",
    },
    {
      id: "Email:",
      data: "usamasyed237@gmail.com",
    },
    {
      id: "Phone:",
      data: "+92-334-9034893",
    },
    {
      id: "Degree:",
      data: "Bachelors - Computer Science",
    },
    {
      id: "University:",
      data: "Sarhad University Peshawar",
    },
  ];
  useGSAP(() => {
    gsap.from(".summary h1", {
      y: -50,
      opacity: -0.9,
      duration: 1,
      scrollTrigger: {
        trigger: ".summary h1",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".summary h5", {
      y: -50,
      opacity: -0.9,
      duration: 1,
      scrollTrigger: {
        trigger: ".summary h5",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".id_data div:nth-child(1)", {
      y: 30,
      opacity: -1,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".id_data div:nth-child(1)",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 70%",
        scrub: 3,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".id_data div:nth-child(2)", {
      y: 30,
      opacity: -0.5,
      duration: 1,
      scrollTrigger: {
        trigger: ".id_data div:nth-child(2)",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 70%",
        scrub: 3,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".cvbtn", {
      y: 50,
      opacity: -0.5,
      duration: 1,
      scrollTrigger: {
        trigger: ".cvbtn",
        scroller: "body",
        markers: false,
        start: "top 100%",
        end: "top 90%",
        scrub: 3,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".imagediv", {
      z: -90,
      opacity: -0.9,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".imagediv",
        scroller: "body",
        markers: false,
        start: "top 85%",
        end: "top 50%",
        scrub: 3,
      },
    });
  });

  return (
    <div id="about" className="about_parent">
      <div className="imagediv">
        <img src="/assets/aboutme.jpg" alt="" />
      </div>
      <div className="summary">
        <h1>About Me</h1>
        <h5>
          I am a proficient software engineer with expertise in Microsoft Power
          BI, SQL, Oracle, and front-end development using React, JavaScript,
          HTML, and CSS.
        </h5>
        {data.map((items, index) => {
          return (
            <div className="id_data" key={index}>
              <div>{items.id}</div>
              <div>{items.data}</div>
            </div>
          );
        })}

        <a href="/cv/usama syed resume.pdf" download><button className="cvbtn" >Download CV</button></a>
      </div>
    </div>
  );
}

export default About;
