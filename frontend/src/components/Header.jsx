import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="container flex">
          <div className="logo">
            <img src="./images/Logo.png" alt="Logo Image" />
          </div>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <div className="contact">
            <button className="btn">Contact Us</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
