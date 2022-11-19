import React from "react";
import { Spinner } from "react-bootstrap";

export default function SpinnerComponent() {
  return (
    <div
      style={{ height: 600 }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="info" as="div" />
    </div>
  );
}
