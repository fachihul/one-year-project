import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="blog">
        <div className="container">
          <div className="header-testimonial">
            <div className="header-circle">
              <div className="outer-circle">
                <div className="inner-circle"></div>
              </div>
              <span>My Blog</span>
            </div>
            <h4>LATEST BLOG</h4>
          </div>
          <div className="blog-container">
            <div className="blog-detailes">
              <img src="./images/blog-1.png" alt="" srcset="" />
              <div className="blog-text">
                <span>20 January, 2023</span>
                <h4>Become a UX/UI Designer With Career Foundry.</h4>
                <button>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
            <div className="blog-detailes">
              <img src="./images/blog-2.png" alt="" srcset="" />
              <div className="blog-text">
                <span>20 January, 2023</span>
                <h4>Become a UX/UI Designer With Career Foundry.</h4>
                <button>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
            <div className="blog-detailes">
              <img src="./images/blog-3.jpg" alt="" srcset="" />
              <div className="blog-text">
                <span>20 January, 2023</span>
                <h4>Become a UX/UI Designer With Career Foundry.</h4>
                <button>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
