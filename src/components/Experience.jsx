import React from "react";
import '../styles/experience.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Experience() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  let expData = [
    {
      date: "OCT 2023 – FEB 2024",
      designation: "Data Warehouse & Power BI (Course)",
      company: "TRANSFORMATICS",
      location: "Lahore",
      working: {
        work1:
          "Built an impressive Power BI dashboard by using Power Query Editor to clean and shape data",
        work2:
          "Creating strong data models, using DAX for calculations, and adding custom visuals for a visually appealing and informative report",
      },
    },
    {
      date: "FEB 2023 – SEP 2023",
      designation: "FRONT END DEVELOPER",
      company: "Lone Star Technologies",
      location: "Lahore",
      working: {
        work1:
          "Working on different front-end Web Developing tasks in SalesStrat product using React, JavaScript & Css.",
      },
    },
    {
      date: "JUL 2022 – JAN 2023",
      designation: "INTERNSHIP",
      company: "Systems Limited",
      location: "islamabad",
      working: {
        work1:
          "Worked on Html, CSS, SASS, Bootstrap to develop and update features for 'www.dobbies.com'",
        work2: "Worked on Dynamics 365 Solutions",
      },
    },
  ];

  useGSAP(()=>{
    gsap.from(".exp",{
      y:-50,
      opacity:-0.9,
      duration:1.5,
      scrollTrigger:{
        trigger:".exp",
        scroller:"body",
        markers:false,
        start:"top 90%",
        end:"top 60%",
        scrub:true
      }
    })
  })
  useGSAP(()=>{
    gsap.from(".heading",{
      y:-90,
      opacity:-1,
      duration:2,
      scrollTrigger:{
        trigger:".heading",
        scroller:"body",
        markers:false,
        start:"top 80%",
        end:"top 50%",
        scrub:true
      }
    })
  })
  useGSAP(()=>{
    gsap.from(".details",{
      y:-90,
      opacity:-1,
      duration:2,
      scrollTrigger:{
        trigger:".details",
        scroller:"body",
        markers:false,
        start:"top 80%",
        end:"top 50%",
        scrub:true
      }
    })
  })

  return (
    <div id="experience" className="exp_main">
      <h1 className="exp">Experience</h1>
      {expData.map((data, index) => (
        <div key={index} className="systems">
          <div className="heading">
            <h2>{data.company}</h2>
            <h3>{data.location}</h3>
          </div>
          <div className="details">
            <div className="details_child1">
              <img src="/assets/exp.png" alt="" />
            </div>
            <div className="details_child2">
              <h2>{data.date}</h2>
              <h1>{data.designation}</h1>
              {Object.values(data.working).map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
