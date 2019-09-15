import React from "react";

import img from "../../../header.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="heading text-center">Some of my Blog</h2>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="/">
              <Card>
                <CardImg top width="100%" src={img} alt="blog card" />
                <CardBody>
                  <CardTitle>whe programming in important</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, nihil vitae quod fugit fuga repellat assumenda
                    nesciunt eos molestias! Quas totam asperiores
                  </CardText>
                </CardBody>
              </Card>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/">
              <Card>
                <CardImg top width="100%" src={img} alt="blog card" />
                <CardBody>
                  <CardTitle>whe programming in important</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, nihil vitae quod fugit fuga repellat assumenda
                    nesciunt eos molestias! Quas totam asperiores
                  </CardText>
                </CardBody>
              </Card>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/">
              <Card>
                <CardImg top width="100%" src={img} alt="blog card" />
                <CardBody>
                  <CardTitle>whe programming in important</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, nihil vitae quod fugit fuga repellat assumenda
                    nesciunt eos molestias! Quas totam asperiores
                  </CardText>
                </CardBody>
              </Card>
            </a>
          </div>
        </div>
        <div className="div">
          <a href="/" className="btn button">
            See All
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
