import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const inputGroup = () => {
  return (
    <>
      <InputGroup>
        <Form.Control
          className="p-3 rounded-pill"
          placeholder="Enter Medicine Name"
          aria-label="Enter Medicine Name with two button addons"
        />

        <Button variant="outline-secondary" className="p-3 rounded-pill">
          Search
        </Button>
      </InputGroup>
    </>
  );
};

export default inputGroup;
