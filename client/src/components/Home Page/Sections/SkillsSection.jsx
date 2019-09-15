import React from "react";

import { Progress } from "reactstrap";

const SkillsSection = () => {
  return (
    <section className="my-skills" id="skills">
      <div className="container">
        <h2 className="heading text-center">My Skills</h2>

        <div className="row justify-content-around">
          <div className="col-md-5">
            <div className="skill mb-4">
              <h6>HTML &amp; CSS</h6>

              <Progress color="info" value="65">
                65%
              </Progress>
            </div>
          </div>
          <div className="col-md-5">
            <div className="skill mb-4">
              <h6>HTML &amp; CSS</h6>
              <Progress color="info" value="70">
                70%
              </Progress>
            </div>
          </div>
          <div className="col-md-5">
            <div className="skill mb-4">
              <h6>HTML &amp; CSS</h6>
              <Progress color="info" value="40">
                40%
              </Progress>
            </div>
          </div>
          <div className="col-md-5">
            <div className="skill mb-4">
              <h6>HTML &amp; CSS</h6>
              <Progress color="info" value="80">
                80%
              </Progress>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
