import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const GuertRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.users.user.token
  };
};

export default connect(mapStateToProps)(GuertRoute);
