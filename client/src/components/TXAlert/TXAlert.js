import React from "react";
import { Alert } from "react-bootstrap";
import Proptypes from 'prop-types';

const TXAlert = ({ message, errors }) => {
  const alertStyle = errors === undefined ? "success" : "danger";
  const alertText = errors === undefined ? "Response From Server:" : "Error: ";
  const alertDescription = errors === undefined ? message : errors;
  return (
    <Alert bsStyle={alertStyle} style={{ width: "25rem", marginTop: "2rem" }}>
      <strong>{alertText}</strong>
      <p>{alertDescription}</p>
    </Alert>
  );
};

TXAlert.propTypes = {
  message: Proptypes.string,
  errors: Proptypes.string
}

export default TXAlert;
