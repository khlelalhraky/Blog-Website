import React, { Component } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { connect } from "react-redux";
import { Button, Form, Input, Container } from "reactstrap";
import { registerUser } from "../../Actions/AuthActions";

import Errors from "../Messages/Errors";

class Register extends Component {
  state = {
    data: {
      username: "",
      email: "",
      password: ""
    },
    errors: {},
    loading: false
  };

  handleSubmit = async e => {
    e.preventDefault();

    const validate = await this.validateData(this.state.data);
    if (validate) {
      this.props
        .registerUser(this.state.data)
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(err =>
          this.setState({ errors: { error: err.response.data.errors } })
        );
    } else {
      console.log(this.state.errors);
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
    } else if (validator.isEmpty(data.username)) {
      errors.username = "Username can't be empty";
    } else if (validator.isEmpty(data.password)) {
      errors.password = "Password can't be empty";
    } else if (!validator.isEmail(data.email)) {
      errors.email = "this not valid email";
    } else if (!validator.isLength(data.username, { min: 5 })) {
      errors.username = "Username can't be less then 5";
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
          <h3>Register</h3>
        </div>
        <Container>
          {errors.username && <Errors message={errors.username} />}
          {errors.email && <Errors message={errors.email} />}
          {errors.password && <Errors message={errors.password} />}
          {errors.error && <Errors message={errors.error} />}
        </Container>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.data.username}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.data.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.data.password}
          />

          <Button color="primary" block>
            Register
          </Button>
          <div className="div">
            <Link to="/login">Login</Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(Register);
