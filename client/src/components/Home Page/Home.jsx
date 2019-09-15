import React, { Component } from "react";

import Navbar from "./Navbar";
import HeaderSection from "./Sections/HeaderSection";
import AboutSection from "./Sections/AboutSection";
import SkillsSection from "./Sections/SkillsSection";
import BlogSection from "./Sections/BlogSection";
import ServiceSection from "./Sections/ServiceSection";
import ContactSection from "./Sections/ContactSection";
import Footer from "./Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <HeaderSection />
        <AboutSection />
        <SkillsSection />
        <BlogSection />
        <ServiceSection />
        <ContactSection />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
