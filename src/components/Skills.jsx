import React, { useEffect, useRef, useState } from "react";
import { Circle, Line } from "rc-progress";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills({ nightMode }) {
  const skillsRef = useRef(null); // Reference to the skills section

  let skillsDataCircle = [
    { name: "REACT", percent: 80, img: "/assets/react.png" },
    { name: "JAVA SCRIPT", percent: 75, img: "/assets/JSs.png" },
    { name: "HTML", percent: 90, img: "/assets/html.png" },
    { name: "CSS", percent: 90, img: "/assets/css.png" },
  ];

  let skillsDataLine = [
    { name: "Power BI", percent: 75 },
    { name: "DAX", percent: 65 },
    { name: "Data Analysis", percent: 70 },
    { name: "SQL", percent: 80 },
    { name: "ETL", percent: 75 },
    { name: "TailWind", percent: 65 },
  ];

  // State to store animated percent values for each skill
  const [animatedPercents, setAnimatedPercents] = useState({
    linePercents: Array(skillsDataLine.length).fill(0),
    circlePercents: Array(skillsDataCircle.length).fill(0),
  });

  useEffect(() => {
    // Animate line progress bars
    skillsDataLine.forEach((item, i) => {
      gsap.to(animatedPercents.linePercents, {
        [i]: item.percent,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          setAnimatedPercents((prev) => {
            const updated = [...prev.linePercents];
            updated[i] = animatedPercents.linePercents[i];
            return { ...prev, linePercents: updated };
          });
        },
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 55%",
        },
      });
    });

    // Animate circle progress bars
    skillsDataCircle.forEach((item, i) => {
      gsap.to(animatedPercents.circlePercents, {
        [i]: item.percent,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          setAnimatedPercents((prev) => {
            const updated = [...prev.circlePercents];
            updated[i] = animatedPercents.circlePercents[i];
            return { ...prev, circlePercents: updated };
          });
        },
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 55%",
        },
      });
    });
  }, []);

  return (
    <div
      ref={skillsRef}
      id="skills"
      className={`skills bg-gradient-to-b transition-colors duration-300 ease-in-out ${
        nightMode
          ? "bg-gray-900 border-b-gray-600"
          : "bg-gray-100 border-b-gray-300"
      }  py-10 border-b-[1.5px] `}
    >
      <div className="pl-[5px] md:pl-[10px] mb-8">
        <h1 className="text-3xl font-bold text-[#3E64FF] ml-2 md:ml-10 underline">
          Skills
        </h1>
      </div>

      <div className="skill2 flex flex-col lg:flex-row gap-8 justify-center items-start px-2 lg:px-12">
        <div
          className={`skill_child1 w-full lg:w-1/2 space-y-6 ${
            nightMode ? "bg-gray-800" : "bg-white"
          }  p-3 rounded-xl`}
        >
          {skillsDataLine.map((item, index) => (
            <div key={index} className="LineProgressbar">
              <div
                className={`linedata flex justify-between ${
                  nightMode ? "text-gray-200" : "text-gray-700"
                }  mb-1`}
              >
                <h3 className="font-medium">{item.name}</h3>
                <h3>{animatedPercents.linePercents[index].toFixed(0)}%</h3>
              </div>
              <div className="linebar">
                <Line
                  percent={animatedPercents.linePercents[index]}
                  strokeWidth={1.5}
                  trailWidth={2}
                  trailColor="lightgray"
                  strokeColor="#3E64FF"
                  className="w-full rounded-full overflow-hidden"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="skill_child2 w-full lg:w-1/2 grid gap-y-2 grid-cols-2 md:grid-cols-4 md:mt-[45px] place-items-center">
          {skillsDataCircle.map((item, index) => (
            <div
              key={index}
              className={`progressbarr1 flex justify-evenly flex-col items-center text-center ${
                nightMode ? "bg-gray-800" : "bg-white"
              }  rounded-lg shadow-lg px-2 md:h-[270px] md:w-[135px] h-[250px] w-[120px]`}
            >
              <h2
                className={`font-semibold ${
                  nightMode ? "text-gray-200" : "text-gray-700"
                } `}
              >
                {item.name}
              </h2>
              <div className="circle relative">
                <Circle
                  percent={animatedPercents.circlePercents[index]}
                  strokeWidth={6}
                  trailWidth={6}
                  trailColor="#e0e0e0"
                  strokeColor="#3E64FF"
                  className="w-20 h-20 md:w-24 md:h-24"
                />
                <span
                  className={`absolute inset-0 flex items-center justify-center text-lg font-semibold ${nightMode ? "text-gray-200" : "text-gray-800"} `}
                >
                  {animatedPercents.circlePercents[index].toFixed(0)}%
                </span>
              </div>
              <img
                src={item.img}
                alt={`${item.name} icon`}
                className="w-10 h-10 md:w-[60px] md:h-[60px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
