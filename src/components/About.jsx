import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About({ nightMode }) {
  gsap.registerPlugin(ScrollTrigger);

  const data = [
    { id: "Name:", data: "Syed Usama" },
    { id: "Date of birth:", data: "OCTOBER 14, 1997" },
    { id: "Address:", data: "Peshawar" },
    {
      id: "Email:",
      data: (
        <a href="mailto:usamasyed237@gmail.com" className=" hover:underline">
          usamasyed237@gmail.com
        </a>
      ),
    },
    {
      id: "Phone:",
      data: (
        <a href="tel:+92-334-9034893" className="hover:underline">
          +92-334-9034893
        </a>
      ),
    },
    { id: "Degree:", data: "Bachelors - Computer Science" },
    {
      id: "University:",
      data: (
        <a
          href="https://www.suit.edu.pk/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Sarhad University Peshawar
        </a>
      ),
    },
  ];

  return (
    <div
      id="about"
      className={` about_parent flex flex-col md:flex-row items-center justify-center py-10 md:py-16 lg:py-20 gap-6 md:gap-12 border-b-[1.5px] transition-colors duration-300 ease-in-out ${
        nightMode
          ? "bg-[#1F1F1F] border-b-gray-600"
          : "bg-gray-100 border-b-gray-300"
      }   `}
    >
      <div className="imagediv hidden md:block w-11/12 md:w-[50%] lg:w-[35%] lg:h-[60vh] rounded-lg overflow-hidden shadow-lg">
        <img
          src="/assets/aboutme.jpg"
          alt="About Me"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="summary text-center md:text-left w-11/12 md:w-2/3 lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-[#3E64FF] cursor-default underline">
          About Me
        </h1>
        <h5
          className={`text-lg font-normal cursor-default ${
            nightMode ? "text-white" : "text-gray-600"
          } leading-relaxed`}
        >
          I am a proficient software engineer with expertise in Microsoft Power
          BI, SQL, Oracle, and front-end development using React, JavaScript,
          HTML, and CSS.
        </h5>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-base font-medium ${
            nightMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {data.map((item, index) => (
            <div className="id_data flex items-center " key={index}>
              <div
                className={`font-bold cursor-default ${
                  nightMode ? "text-gray-400" : "text-gray-800"
                }  `}
              >
                {item.id}
              </div>
              <div className="ml-2 cursor-default">{item.data}</div>
            </div>
          ))}
        </div>
        <a href="/cv/usama syed resume.pdf" download>
          <button className="cvbtn mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
