import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-top container">
          <div className="top-wrapper">
            <div className="footer-icon">
              <img src="./images/footer-logo.png" alt="" />
            </div>
            <p>
              At vero eos et accusamus et iusto odio dign ducimus qui blanditiis
              praesentium volup deleniti atque corrupti quos dolores et
              molestias excepturi sint occaecati
            </p>
            <h5>credesign@gmail.com</h5>
          </div>
          <div className="footer-link">
            <h3>Explore Link</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-service">
            <h3>My Services</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Mobile App</li>
              <li>Mobile App</li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow</h3>
            <div className="footer-social-wrapper">
              <div className="social-icon">
                <img src="./images/icons/footer-icon01.png" alt="" srcset="" />
              </div>
              <div className="social-icon">
                <img src="./images/icons/footer-icon-02.png" alt="" srcset="" />
              </div>
              <div className="social-icon">
                <img src="./images/icons/footer-icon-03.png" alt="" srcset="" />
              </div>
              <div className="social-icon">
                <img src="./images/icons/footer-icon-04.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm container"></div>
      </footer>
    </div>
  );
};

export default Footer;
