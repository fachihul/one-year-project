import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container flex">
          <div className="hero_left">
            <div className="hero_sub_heading">
              <div className="outer_circle">
                <div className="inner_circle"></div>
              </div>
              <span>I AM DESIGNER</span>
            </div>
            <div className="hero_heading_text">
              <h1>Creative Design and Web Solutions</h1>
            </div>
            <div className="hero_sub_text">
              <p className="text">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et.
              </p>
            </div>
            <div className="hero_button">
              <button className="btn">Download My CV</button>
            </div>
          </div>
          <div className="hero_right">
            <div className="hero_img">
              <img src="./images/hero_img.jpg" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
