import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <div className="container">
          <div className="header-testimonial">
            <div className="header-circle">
              <div className="outer-circle">
                <div className="inner-circle"></div>
              </div>
              <span>My Contact</span>
            </div>
            <h4>I WANT TO HEAR FROM YOU</h4>
          </div>
          <div className="contact-container">
            <form action="">
              <div className="input-group">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Name" />
              </div>
              <div className="input-group">
                <input type="number" placeholder="Your Name" />
                <input type="text" placeholder="Your Name" />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
            </form>
            <div className="contact-address">
              <div className="address-container">
                <div className="icon">
                  <img src="./images/icons/address-01.png" alt="" />
                </div>
                <div className="address-text">
                  <p>Address</p>
                  <span>202 Dog Hill Lane Beloit, KS 67420</span>
                </div>
              </div>
              <div className="address-container">
                <div className="icon">
                  <img src="./images/icons/address-02.png" alt="" />
                </div>
                <div className="address-text">
                  <p>Address</p>
                  <span>202 Dog Hill Lane Beloit, KS 67420</span>
                </div>
              </div>
              <div className="address-container">
                <div className="icon">
                  <img src="./images/icons/address-03.png" alt="" />
                </div>
                <div className="address-text">
                  <p>Address</p>
                  <span>202 Dog Hill Lane Beloit, KS 67420</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
