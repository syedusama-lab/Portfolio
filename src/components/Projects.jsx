import React from "react";
import "../styles/projects.css";

const ResponsiveDiv = () => {
  const imgData = [
    {
      image: "/assets/ecommerce.png",
      heading: "E-Shop",
      description: "",
      link:"https://syedusamacart.vercel.app/"
    },
    {
      image: "/assets/shop.png",
      heading: "TastyRush",
      description: "",
      link:"https://syedecommerceshop.vercel.app/"
    },
  ];
  const handleClick = (link) => {
    if (link) {
      window.open(link, "_blank"); // Open link in new tab
    }
  };
  return (
    <div id="projects" className="container">
      <h2 className="main-heading">Projects</h2>
      {imgData.map((items, index) => {
        return (
          <div key={index} className="parent-div">
            <img src={items.image} alt="" width="100%" />
            <div className="child-div" onClick={() => handleClick(items.link)}>
              <img src="/assets/open.png" alt="" width="75%"/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResponsiveDiv;
