import React, { Component } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { connect } from "react-redux";
import { loginUser } from "../../Actions/AuthActions";

import { Button, Form, Input, Container } from "reactstrap";

import Errors from "../Messages/Errors";
import Success from "../Messages/Success";

class Login extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  handleSubmit = async e => {
    e.preventDefault();

    const validate = await this.validateData(this.state.data);
    if (validate) {
      this.props
        .loginUser(this.state.data)
        .then(() => {
          this.props.history.push("/");
        })
        .catch(err => {
          this.setState({ errors: { error: err.response.data.errors } });
        });
    }
  };

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  validateData = async data => {
    const errors = {};
    if (validator.isEmpty(data.email)) {
      errors.email = "Email can't be empty";
    } else if (validator.isEmpty(data.password)) {
      errors.password = "Password can't be empty";
    } else if (!validator.isEmail(data.email)) {
      errors.email = "this not valid email";
    } else if (!validator.isLength(data.password, { min: 5 })) {
      errors.password = "Password can't be less then 5";
    } else {
      return true;
    }
    this.setState({ errors: errors });
    return false;
  };
  render() {
    const { errors } = this.state;

    return (
      <div className="auth text-center">
        <div className="auth-header">
          <h3>Login</h3>
        </div>
        <Container>
          {this.props.message && <Success message={this.props.message} />}
          {errors.error && <Errors message={errors.error} />}
          {errors.email && <Errors message={errors.email} />}
          {errors.password && <Errors message={errors.password} />}
        </Container>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />

          <Button color="primary" block>
            Login
          </Button>
          <div className="div">
            <Link to="/register">Register</Link>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.users.success
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
