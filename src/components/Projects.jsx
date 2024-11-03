import React, { useState } from "react";
import "../certificatecss.css";

const Projects = () => {
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
      className="container mx-auto bg-gray-100 py-10 border-b-[1.5px] border-b-gray-200"
    >
      <h2 className="text-3xl font-bold text-[#3E64FF] px-3 lg:px-12 mb-8 underline">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-3 lg:px-12">
        {imgData.map((items, index) => (
          <div
            key={index}
            className={`child relative rounded-lg overflow-hidden shadow-lg transform md:h-[350px] transition-transform cursor-pointer 
              ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur-sm"
                  : "opacity-100"
              } 
              ${hoveredIndex === index ? "scale-105" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(items.link)}
          >
            <img
              src={items.image}
              alt={items.heading}
              className="w-full h-full object-fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
