import React from "react";

import Navbar from "../Home Page/Navbar";
import Header from "../Home Page/Sections/HeaderSection";
import BlogSection from "./BlogSection";

const BlogPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <BlogSection />
    </React.Fragment>
  );
};

export default BlogPage;
