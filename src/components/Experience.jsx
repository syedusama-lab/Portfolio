import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Experience() {
  gsap.registerPlugin(ScrollTrigger);

  const expData = [
    {
      date: "FEB 2024 – MAY 2024",
      designation: "Data Warehouse & Power BI (Course)",
      company: (
        <a
          href="https://transformatics.pk/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Transformatics
        </a>
      ),
      location: "Lahore",
      working: {
        work1:
          "Built an impressive Power BI dashboard by using Power Query Editor to clean and shape data",
        work2:
          "Creating strong data models, using DAX for calculations, and adding custom visuals for a visually appealing and informative report",
      },
    },
    {
      date: "JUN 2023 – JAN 2024",
      designation: "FRONT END DEVELOPER",
      company: (
        <a
          href="https://www.linkedin.com/company/lone-star-technologies/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Lone Star Technologies
        </a>
      ),
      location: "Lahore",
      working: {
        work1:
          "Working on different front-end Web Developing tasks in SalesStrat product using React, JavaScript & CSS.",
      },
    },
    {
      date: "JUL 2022 – MAY 2023",
      designation: "INTERNSHIP",
      company: (
        <a
          href="https://systemsltd.com/PK"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Systems Limited
        </a>
      ),
      location: "Islamabad",
      working: {
        work1:
          'Worked on React-JS, CSS, Tailwind, to develop and update features for <a href="https://www.dobbies.com" target="_blank">www.dobbies.com</a>',
        work2: "Worked on Dynamics 365 Solutions",
      },
    },
  ];

  return (
    <div
      id="experience"
      className="exp_main flex flex-col px-[5%] md:px-[10%] py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b bg-gray-100 border-b-[1.5px] border-b-gray-200"
    >
      <h1 className="exp text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-[#3E64FF]">
        Experience
      </h1>
      <div className="relative w-full">
        <div className="absolute left-3 sm:left-5 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
        {expData.map((data, index) => (
          <div
            key={index}
            className=" relative flex flex-col sm:flex-row items-start gap-4 mb-8 sm:mb-12 pl-8 sm:pl-12"
          >
            {/* Timeline circle */}
            <div className="absolute left-0 top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-400"></div>

            {/* Icon with gradient border */}
            <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-blue-300 to-purple-400 p-1 w-10 h-10 sm:w-12 sm:h-12">
              <div className="flex items-center justify-center bg-white rounded-full w-full h-full">
                <img
                  src="public/assets/exp.png"
                  alt="Experience Icon"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Experience details */}
            <div className="bg-white rounded-lg shadow-lg w-full p-4 sm:p-6 border border-transparent bg-clip-padding bg-opacity-80">
              <div className="heading flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
                  {data.company}
                </h2>
                <h3 className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-0">
                  {data.location}
                </h3>
              </div>
              <div className="details text-gray-600">
                <h2 className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">
                  {data.date}
                </h2>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {data.designation}
                </h1>
                <ul className="list-disc ml-4 sm:ml-5 space-y-1 text-gray-600 text-sm sm:text-base">
                  {Object.values(data.working).map((work, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: work }}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
