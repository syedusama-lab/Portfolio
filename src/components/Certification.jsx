import React from "react";

function Certifications({nightMode}) {
  let imageData = [
    {
      img: "/assets/certificates/bi.png",
      overlayImg: "/assets/transformatics.png",
      title: "Microsoft Power BI",
      source: "Transformatics",
      intro:
        "Built an impressive Power BI dashboard by using Power Query Editor to clean and shape data, creating strong data models, using DAX for calculations, and adding custom visuals for a visually appealing and informative report.",
    },
    {
      img: "/certificates/dashboard.png",
      overlayImg: "/assets/coursera.png",
      title: "DashBoard, Reports",
      source: "Google, Coursera",
      intro:
        "I gained expertise in using data to drive informed business decisions by creating interactive dashboards and detailed reports. The course focused on data visualization techniques, dashboard design principles, and generating actionable insights through reports.",
    },
    {
      img: "/certificates/sql.png",
      overlayImg: "/assets/coursera.png",
      title: "SQL for Data Science",
      source: "UCDAVIS, Coursera",
      intro:
        "I learned to use SQL to analyze and manipulate data for data-driven decision-making. The course covered essential topics such as filtering, grouping, and joining datasets, along with advanced techniques like window functions and subqueries.",
    },
    {
      img: "/certificates/query.png",
      overlayImg: "/assets/coursera.png",
      title: "SQL, Querying Databases",
      source: "IBM, Coursera",
      intro:
        "I gained hands-on experience in writing SQL queries to retrieve, manipulate, and analyze data. I learned to work with various databases, mastering key concepts like joins, aggregations, and subqueries. The course also focused on creating complex queries for handling large datasets and solving real-world problems.",
    },
  ];

  return (
    <div id="certifications" className={`w-full p-2 md:p-6 lg:p-12 ${nightMode ? "bg-gray-900  border-b-[1.5px]" : "bg-gray-100"}`}>
      <h1 className="text-3xl font-bold text-[#3E64FF] mb-8 underline">
        Certifications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="relative flex-col items-center justify-center rounded-3xl shadow-lg p-6 md:p-0 aspect-w-1 aspect-h-1 h-[170px] md:h-[320px] overflow-hidden transition-transform transform hover:cursor-pointer"
          >
            {/* Content of parent div, visible only on medium and larger screens */}
            <div className={`hidden md:flex flex-col items-center  ${nightMode ? "bg-gray-700" : "bg-blue-400"}  text-white transition-opacity duration-300 ease-in-out hover:opacity-0 relative w-full h-full p-4 rounded-3xl `}>
              {/* Logo at the top-left corner */}
              <div className="absolute top-4 left-4">
                <img
                  src={item.overlayImg}
                  alt="Logo"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg"
                />
              </div>

              {/* Title, Source, and Description */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">{item.title}</h2>
              <h3 className="text-sm font-medium mt-2 text-gray-200 mb-4">
                {item.source}
              </h3>
              <p className="mt-2 text-center px-4 text-gray-100">
                {item.intro}
              </p>
            </div>

            {/* Image, always visible */}
            <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <img
                src={item.img}
                alt="Overlay Image"
                className="object-fill w-full h-full rounded-3xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
