import React, { useState } from "react";

const Projects = ({ nightMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imgData = [
    {
      image: "/assets/ecommerce.png",
      heading: "E-Shop",
      description: "",
      link: "https://syedusamacart.vercel.app/",
    },
    {
      image: "/assets/shop.png",
      heading: "TastyRush",
      description: "",
      link: "https://syedecommerceshop.vercel.app/",
    },
  ];

  const handleClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      id="projects"
      className={`transition-colors duration-300 ease-in-out ${
        nightMode
          ? "bg-[#1F1F1F] border-b-gray-600"
          : "bg-gray-100 border-b-gray-300"
      } py-10 border-b-[1.5px]  w-full`}
    >
      <h2 className="text-3xl font-bold text-[#3E64FF] px-3 lg:px-12 mb-8 underline">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-3 md:px-10 lg:px-12">
        {imgData.map((items, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-lg transform md:h-[350px] transition-transform duration-500 cursor-pointer 
              ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "md:blur-sm duration-300"
                  : "md:opacity-100"
              } 
              ${hoveredIndex === index ? "md:scale-105" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(items.link)}
          >
            <img
              src={items.image}
              alt={items.heading}
              className="w-full h-full object-fill"
            />
            <div className="md:hidden h-12 w-12 rounded-lg bg-gray-200 absolute z-99 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="/assets/open.png"
                alt="link"
                className="w-full h-full p-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
