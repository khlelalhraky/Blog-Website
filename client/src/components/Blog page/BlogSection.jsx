import React from "react";

import img from "../../header.jpg";

const BlogSection = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="post">
          <div className="row">
            <div className="col-md-5">
              <img src={img} alt="" />
            </div>
            <div className="col-md-7">
              <h2>
                <a href="/"> Whe Programming in important</a>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium sequi earum nesciunt facere sapiente fugiat!
                Similique esse praesentium labore ut, assumenda accusantium
                beatae reprehenderit et itaque tempora ducimus magnam
                necessitatibus?
              </p>
              <div className="more">
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="row">
            <div className="col-md-5">
              <img src={img} alt="" />
            </div>
            <div className="col-md-7">
              <h2>
                <a href="/"> Whe Programming in important</a>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium sequi earum nesciunt facere sapiente fugiat!
                Similique esse praesentium labore ut, assumenda accusantium
                beatae reprehenderit et itaque tempora ducimus magnam
                necessitatibus?
              </p>
              <div className="more">
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="row">
            <div className="col-md-5">
              <img src={img} alt="" />
            </div>
            <div className="col-md-7">
              <h2>
                <a href="/"> Whe Programming in important</a>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium sequi earum nesciunt facere sapiente fugiat!
                Similique esse praesentium labore ut, assumenda accusantium
                beatae reprehenderit et itaque tempora ducimus magnam
                necessitatibus?
              </p>
              <div className="more">
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
