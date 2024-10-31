import React from "react";
import { Circle, Line } from "rc-progress";

function Skills() {
  let skillsDataCircle = [
    { name: "REACT", percent: "80", img: "/assets/react.png" },
    { name: "JAVA SCRIPT", percent: "75", img: "/assets/JSs.png" },
    { name: "HTML", percent: "90", img: "/assets/html.png" },
    { name: "CSS", percent: "90", img: "/assets/css.png" },
  ];

  let skillsDataLine = [
    { name: "Power BI", percnt: "75" },
    { name: "DAX", percnt: "65" },
    { name: "Data Analysis", percnt: "70" },
    { name: "SQL", percnt: "80" },
    { name: "ETL", percnt: "75" },
    { name: "TailWind", percnt: "65" },
  ];

  return (
    <div id="skills" className="skills bg-gradient-to-b bg-gray-100 py-10 border-b-[1.5px] border-b-gray-200">
      <div className="pl-[5px] md:pl-[10px] mb-8">
        <h1 className="text-3xl font-bold text-[#3E64FF] ml-2 md:ml-10">
          Skills
        </h1>
      </div>

      <div className="skill2 flex flex-col lg:flex-row gap-8 justify-center items-start px-2 lg:px-12">
        {/* Skill Child 1: Line Progress Bars */}
        <div className="skill_child1 w-full lg:w-1/2 space-y-6 bg-white p-3 rounded-xl">
          {skillsDataLine.map((items, index) => (
            <div key={index} className="LineProgressbar">
              <div className="linedata flex justify-between text-gray-700 mb-1">
                <h3 className="font-medium">{items.name}</h3>
                <h3>{items.percnt}%</h3>
              </div>
              <div className="linebar">
                <Line
                  percent={items.percnt}
                  strokeWidth={2}
                  trailWidth={2}
                  trailColor="lightgray"
                  strokeColor="#3E64FF"
                  className="w-full rounded-full overflow-hidden"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill Child 2: Circular Progress Bars */}
        <div className="skill_child2 w-full lg:w-1/2 grid gap-y-2 grid-cols-2 md:grid-cols-4 md:mt-[45px] place-items-center">
          {skillsDataCircle.map((items, index) => (
            <div
              key={index}
              className="progressbarr1 flex justify-evenly flex-col items-center  text-center bg-white rounded-lg shadow-lg px-2 md:h-[270px] md:w-[135px] h-[250px] w-[120px]"
            >
              <h2 className="font-semibold text-gray-700">{items.name}</h2>
              <div className="circle relative">
                <Circle
                  percent={items.percent}
                  strokeWidth={6}
                  trailWidth={6}
                  trailColor="#e0e0e0"
                  strokeColor="#3E64FF"
                  className="w-20 h-20 md:w-24 md:h-24"
                />
                <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-800">
                  {items.percent}%
                </span>
              </div>
              <img
                src={items.img}
                alt={`${items.name} icon`}
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
