import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const HeaderSection = () => {
  return (
    <header className="header">
      <div className="overlay" />
      <div className="content">
        <span>Welcome</span>
        <h1>I'm Khlel alHraky</h1>
        <p>I'm Front-end And Back-end Developer</p>
        <span className="arrow">
          <a href="#about">
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </span>
      </div>
    </header>
  );
};

export default HeaderSection;
