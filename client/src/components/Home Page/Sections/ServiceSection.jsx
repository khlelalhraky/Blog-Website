import React from "react";

import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ServiceSection = () => {
  return (
    <section className="service-section text-center" id="services">
      <h2 className="heading">Services</h2>

      <div className="container">
        <div className="row">
          <div className="col">
            <a href="/">
              <Card>
                <div className="card-head">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <CardBody>
                  <CardTitle>Front-End</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto
                  </CardText>
                </CardBody>
              </Card>
            </a>
          </div>
          <div className="col">
            <a href="/">
              <Card>
                <div className="card-head">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <CardBody>
                  <CardTitle>Front-End</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto
                  </CardText>
                </CardBody>
              </Card>
            </a>
          </div>
          <div className="col">
            <a href="/">
              <Card>
                <div className="card-head">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <CardBody>
                  <CardTitle>Front-End</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto
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

export default ServiceSection;
