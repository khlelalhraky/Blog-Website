import React from "react";

import { UncontrolledAlert } from "reactstrap";

const Success = props => {
  return <UncontrolledAlert color="success">{props.message}</UncontrolledAlert>;
};

export default Success;
