import React, { Component } from "react";
import { NavLink as LinkNav } from "react-router-dom";

import logo from "../../logo3.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Menu extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    window.onscroll = function(e) {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 20) {
        navbar.classList.add("navbar-fixed");
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
        navbar.classList.add("bg-light");
      } else {
        navbar.classList.remove("navbar-fixed");
        navbar.classList.remove("navbar-light");
        navbar.classList.remove("bg-light");
        navbar.classList.add("navbar-dark");
      }
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Navbar id="navbar" dark expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <LinkNav className="nav-link" to="/">
                Home
              </LinkNav>
            </NavItem>
            <NavItem>
              <NavLink href="/#about">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <LinkNav className="nav-link" to="/blog">
                Blog
              </LinkNav>
            </NavItem>
            <NavItem>
              <NavLink href="/#contact">Contact Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Menu;
