import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import "./style.css";

const formStyle = {
  justifyContent: "center",
  marginBottom: "2rem"
};

const formMargin = {
  justifyContent: "center",
  marginBottom: "2rem",
  marginTop: "3rem"
};

function NewUserForm(props) {
  return (
    <div className="text-center mb-4">
      <h2>
        Welcome to Traffic<span className="text-danger">Mon</span>!
      </h2>
      <h5 className="text-center">
        In order to create a report, you must create an account and log in.
      </h5>
      <Form className="text-center mt-4 mb-4" onSubmit={props.handleSubmit}>
        <Form.Group as={Row} style={formMargin}>
          <strong>User Name:</strong>
          <Col xs={true} lg={6}>
            <Form.Control
              type="text"
              name="userName"
              value={props.values.userName}
              onChange={props.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={formStyle}>
          <strong className="ml-2">Password:</strong>
          <Col xs={true} lg={6}>
            <Form.Control
              type="password"
              name="password"
              value={props.values.password}
              onChange={props.onChange}
            />
          </Col>
        </Form.Group>
        <Row>
          <Col lg={10}>
            <button
              onClick={props.onClick}
              className="btn btn-primary ml-2 float-right"
            >
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default NewUserForm;
