import React from "react";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio">
        <div className="portfolio-header">
          <div className="portfolio-sub-header">
            <div className="outer_circle">
              <div className="inner_circle"></div>
            </div>
            <span>My Portfolio</span>
          </div>
          <h2>VISIT MY PORTFOLIO</h2>
        </div>
        <div className="resume-skills-container container">
          <div className="single-skill-container">
            <div className="skill-grid-container">
              <img src="./images/Placeholder.png" alt="" srcset="" />
              <img src="./images/Placeholder (1).png" alt="" srcset="" />
              <img src="./images/Placeholder (2).png" alt="" srcset="" />
              <img src="./images/Placeholder (3).png" alt="" srcset="" />
              <img src="./images/Placeholder (4).png" alt="" srcset="" />
              <img src="./images/Placeholder (5).png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
