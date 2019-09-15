import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faBars,
  faUserPlus,
  faUserTimes,
  faCog,
  faHome
} from "@fortawesome/free-solid-svg-icons";

class DashboardNav extends Component {
  state = {};

  handleMenu = e => {
    const dashboard = document.getElementById("dashboard");
    dashboard.classList.toggle("open");
  };

  render() {
    return (
      <nav className="dashboard-nav">
        <ul>
          <li onClick={this.handleMenu}>
            <NavLink to="/dashboard">
              Dashboard
              <span className="icon">
                <FontAwesomeIcon icon={faBars} fixedWidth />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addPost">
              Add Post
              <span className="icon">
                <FontAwesomeIcon icon={faUserPlus} fixedWidth />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addServices/">
              Add Servises
              <span className="icon">
                <FontAwesomeIcon icon={faUserPlus} fixedWidth />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings/">
              Settings
              <span className="icon">
                <FontAwesomeIcon icon={faCog} fixedWidth />
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default DashboardNav;
