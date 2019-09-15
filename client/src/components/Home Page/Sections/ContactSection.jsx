import React from "react";

import { Form, FormGroup, Label, Input } from "reactstrap";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="heading text-center">Contact Me</h2>

      <div className="contact-div">
        <Form>
          <div className="row">
            <div className="col-md-6">
              <FormGroup>
                <Label for="name">Your Name</Label>
                <Input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  name="name"
                />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label for="name">Your Email</Label>
                <Input
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  name="email"
                />
              </FormGroup>
            </div>
            <div className="col-md-12">
              <FormGroup>
                <Label for="message">Message</Label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                />
              </FormGroup>
            </div>
            <div className="div">
              <button className="btn button">Send Message</button>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
