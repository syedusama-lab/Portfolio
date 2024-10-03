import React from "react";
import '../styles/certifications.css'

function Certifications() {
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
    <div id="certifications" className="certiMain">
      <div className="certheading">
        <h1>Certifications</h1>
      </div>
      <div className="certificateSec">
        {imageData.map((item, index) => (
          <div
            className="certificateData"
            key={index}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="cerOverlay">
              <div className="iconOverlay">
                <img src={item.overlayImg} alt="" />
              </div>
              <div className="dataOverlay">
                <h1>{item.title}</h1>
                <h3>{item.source}</h3>
                <p>{item.intro}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
