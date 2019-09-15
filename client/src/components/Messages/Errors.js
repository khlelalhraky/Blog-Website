import React from "react";

import { UncontrolledAlert } from "reactstrap";

const Errors = props => {
  return <UncontrolledAlert color="danger">{props.message}</UncontrolledAlert>;
};

export default Errors;
