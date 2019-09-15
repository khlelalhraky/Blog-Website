import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { logoutUser } from "../../Actions/AuthActions";

import DashboardNav from "./DashboardNav";
import DashboardHome from "./DashboardHome";
import DashboardAddPost from "./DashboardAddPost";
import DashboardAddServices from "./DashboardAddServices";
import DashboardSetting from "./DashboardSetting";

class Dashboard extends Component {
  state = {};

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="dashboard" id="dashboard">
        <BrowserRouter>
          <DashboardNav />
          <div className="dashboard-body">
            <Route path="/dashboard/" component={DashboardHome} exact />
            <Route path="/dashboard/addPost" component={DashboardAddPost} />
            <Route
              path="/dashboard/addServices"
              component={DashboardAddServices}
            />
            <Route path="/dashboard/settings" component={DashboardSetting} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(Dashboard);
