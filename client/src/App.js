import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GuestRoute from "./components/Auth/GuestRoute";
import UserRoute from "./components/Auth/UserRoute";

import Home from "./components/Home Page/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import BlogPage from "./components/Blog page/Blog";
import Dashboard from "./components/Dashboard/Dashboard";

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Home} exact />
        <GuestRoute path="/register" component={Register} />
        <GuestRoute path="/login" component={Login} />
        <Route path="/blog" component={BlogPage} />
        <UserRoute path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
