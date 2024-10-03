import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Circle, Line } from "rc-progress";
import '../styles/skills.css'

function Skills() {
  let skillsDataCircle = [
    {
      name: "REACT",
      percent: "80",
      img: "/assets/react.png",
    },
    {
      name: "JAVA SCRIPT",
      percent: "75",
      img: "/assets/JSs.png",
    },
    {
      name: "HTML",
      percent: "90",
      img: "/assets/html.png",
    },
    {
      name: "CSS",
      percent: "90",
      img: "/assets/css.png",
    },
  ];

  let skillsDataLine = [
    {
      name: "Power BI",
      percnt: "75",
    },
    {
      name: "DAX",
      percnt: "65",
    },
    {
      name: "Data Analysis",
      percnt: "70",
    },
    {
      name: "SQL",
      percnt: "80",
    },
    {
      name:"ETL",
      percnt:"75"
    },
    {
      name: "TailWind",
      percnt: "65",
    },
  ];

  useGSAP(() => {
    gsap.from(".LineProgressbar", {
      y: 90,
      opacity: -0.9,
      duration: 1.4,
      scrollTrigger: {
        trigger: ".LineProgressbar",
        scroller: "body",
        markers: false,
        start: "top 95%",
        end: "top 70%",
        scrub: 3,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".progressbarr1", {
      y: 90,
      opacity: -0.9,
      duration: 1.4,
      scrollTrigger: {
        trigger: ".progressbarr1",
        scroller: "body",
        markers: false,
        start: "top 95%",
        end: "top 70%",
        scrub: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".skill1", {
      z: -90,
      opacity: -0.9,
      duration: 2,
      scrollTrigger: {
        trigger: ".skill1",
        scroller: "body",
        markers: false,
        start: "top 95%",
        end: "top 60%",
        scrub: 5,
      },
    });
  });

  return (
    <div id="skills" className="skills">
      <div className="skill1">
        <h1>Skills</h1>
      </div>
      <div className="skill2">
        <div className="skill_child1">
          {skillsDataLine.map((items, index) => (
            <div key={index} className="LineProgressbar">
              <div className="linedata">
                <h3>{items.name}</h3>
                <h3>{items.percnt}%</h3>
              </div>
              <div className="linebar">
                <Line
                  percent={items.percnt}
                  strokeWidth={1.5}
                  trailWidth={1.5}
                  trailColor="lightgray"
                  strokeColor="#3E64FF"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="skill_child2">
          {skillsDataCircle.map((items, index) => (
            <div key={index} className="progressbarr1">
              <h2 className="tablet">{items.name}</h2>
              <div className="circle">
                <h2>{items.percent}%</h2>
                <Circle
                  percent={items.percent}
                  strokeWidth={4}
                  trailWidth={4}
                  trailColor="white"
                  strokeColor="#3E64FF"
                />
              </div>
              <img src={items.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
