import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  FormText,
  Button
} from "reactstrap";

class DashboardSetting extends Component {
  state = {};

  handleChange = () => {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <h1>Setting</h1>

        <div className="setting-box">
          <h3 className="setting-title">Header Section</h3>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input type="text" name="topHeading" placeholder="Top Heading" />
            </FormGroup>
            <FormGroup>
              <Input type="text" name="heading" placeholder="Heading" />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="subtitleHeading"
                placeholder="Subtitle Heading"
              />
            </FormGroup>
            <FormGroup>
              <Input type="file" name="image" />
              <FormText color="muted">Upload Your Logo</FormText>
            </FormGroup>
            <FormGroup>
              <Input type="file" name="image" />
              <FormText color="muted">Upload Your Header Image</FormText>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default DashboardSetting;
