import React from "react";

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="container flex">
          <div className="about_left">
            <div className="about_img">
              <img src="./images/about_img.jpg" alt="About Image" />
            </div>
          </div>
          <div className="about_right">
            <div className="about_sub_heading">
              <div className="outer_circle">
                <div className="inner_circle"></div>
              </div>
              <span>about me</span>
            </div>
            <div className="about_heading_text">
              <h2>
                I Can Design <br />
                Anything You Want
              </h2>
            </div>
            <div className="about_sub_text">
              <p className="text">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et.
              </p>
            </div>
            <div className="about_rating">
              <div className="rating-left">
                <div className="rating_icon">
                  <img
                    src="./images/icons/rating_icon_01.png"
                    alt="Rating Icon Image"
                  />
                </div>
                <div className="rating_info">
                  <p>350+</p>
                  <h4>Complete Project</h4>
                </div>
              </div>
              <div className="rating-right">
                <div className="rating_icon">
                  <img
                    src="./images/icons/rating_icon_02.png"
                    alt="Rating Icon Image"
                  />
                </div>
                <div className="rating_info">
                  <p>16+</p>
                  <h4>Year of Experience</h4>
                </div>
              </div>
            </div>
            <div className="about_design">
              <div className="about_design_container">
                <div className="design_icon">
                  <img src="./images/icons/design-icon.png" alt="design-icon" />
                </div>
                <div className="design_info">
                  <p>Work simple and cline design</p>
                </div>
              </div>
              <div className="about_design_container">
                <div className="design_icon">
                  <img src="./images/icons/design-icon.png" alt="design-icon" />
                </div>
                <div className="design_info">
                  <p>New idea and user friendly design</p>
                </div>
              </div>
            </div>

            <div className="about_button">
              <button className="btn">Download My CV</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
